import { useEffect, useRef, useState } from 'react';
import characterIdle from '@/assets/character-idle.png';
import characterRunning from '@/assets/character-running.png';

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

        // Even slower speed for smoother following
        const speed = Math.min(distance * 0.015, 2);
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
        left: position.x - 24,
        top: position.y - 48,
        transform: `scaleX(${isFlipped ? -1 : 1})`,
        transition: 'transform 0.2s ease-out',
      }}
    >
      {/* Idle character - shown when not moving */}
      <img
        src={characterIdle}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: isMoving ? 0 : 1,
          transition: 'opacity 0.15s ease-out',
        }}
      />
      {/* Running character - shown when moving */}
      <img
        src={characterRunning}
        alt=""
        className="w-12 h-12 object-contain"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: isMoving ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
    </div>
  );
};

export default MouseFollower;
