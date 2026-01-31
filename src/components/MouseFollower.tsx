import { useEffect, useRef, useState } from 'react';
import runnerCharacter from '@/assets/runner-character.png';

interface Position {
  x: number;
  y: number;
}

const MouseFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 100 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const animationRef = useRef<number>();
  const lastMoveRef = useRef<number>(Date.now());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      lastMoveRef.current = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Check if character should be moving
        const shouldMove = distance > 30;
        setIsMoving(shouldMove);

        // Flip character based on direction
        if (Math.abs(dx) > 5) {
          setIsFlipped(dx < 0);
        }

        if (distance < 30) {
          return prev;
        }

        // Easing - move faster when further away
        const speed = Math.min(distance * 0.08, 12);
        const angle = Math.atan2(dy, dx);

        return {
          x: prev.x + Math.cos(angle) * speed,
          y: prev.y + Math.sin(angle) * speed,
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition]);

  return (
    <div
      className="fixed pointer-events-none z-40 transition-transform duration-75"
      style={{
        left: position.x - 24,
        top: position.y - 48,
        transform: `scaleX(${isFlipped ? -1 : 1})`,
      }}
    >
      <img
        src={runnerCharacter}
        alt=""
        className={`w-12 h-12 object-contain pixelated ${isMoving ? 'animate-bounce-run' : ''}`}
        style={{
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};

export default MouseFollower;
