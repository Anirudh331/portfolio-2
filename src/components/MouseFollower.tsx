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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
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
        const shouldMove = distance > 50;
        setIsMoving(shouldMove);

        // Flip character based on direction
        if (Math.abs(dx) > 10) {
          setIsFlipped(dx < 0);
        }

        // Stop when close enough
        if (distance < 50) {
          return prev;
        }

        // MUCH SLOWER easing - reduced speed significantly
        const speed = Math.min(distance * 0.02, 3);
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
      className="fixed pointer-events-none z-40"
      style={{
        left: position.x - 16,
        top: position.y - 32,
        transform: `scaleX(${isFlipped ? -1 : 1})`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      <img
        src={runnerCharacter}
        alt=""
        className={`w-8 h-8 object-contain ${isMoving ? 'animate-run' : ''}`}
        style={{
          imageRendering: 'pixelated',
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
        }}
      />
    </div>
  );
};

export default MouseFollower;
