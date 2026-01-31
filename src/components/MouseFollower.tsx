import { useEffect, useRef, useState } from 'react';
import characterIdle from '@/assets/character-idle.png';
import characterRunning from '@/assets/character-running.png';
import characterShocked from '@/assets/character-shocked.png';

interface Position {
  x: number;
  y: number;
}

type CharacterState = 'idle' | 'shocked' | 'running';

const MouseFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 100 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterState>('idle');
  const animationRef = useRef<number>();
  const shockedTimeoutRef = useRef<NodeJS.Timeout>();
  const wasIdleRef = useRef(true);

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

        // Handle state transitions
        if (shouldMove && wasIdleRef.current && characterState === 'idle') {
          // Transition from idle to shocked - character freezes in place
          setCharacterState('shocked');
          wasIdleRef.current = false;
          
          // Clear any existing timeout
          if (shockedTimeoutRef.current) {
            clearTimeout(shockedTimeoutRef.current);
          }
          
          // After 0.5 seconds, switch to running
          shockedTimeoutRef.current = setTimeout(() => {
            setCharacterState('running');
          }, 500);
        } else if (!shouldMove && characterState !== 'idle') {
          // Back to idle when stopped
          wasIdleRef.current = true;
          setCharacterState('idle');
          
          // Clear shocked timeout if we stop before it completes
          if (shockedTimeoutRef.current) {
            clearTimeout(shockedTimeoutRef.current);
          }
        }

        // Flip character based on direction
        if (Math.abs(dx) > 10) {
          setIsFlipped(dx < 0);
        }

        // Don't move if in shocked state - character freezes
        if (characterState === 'shocked') {
          return prev;
        }

        // Stop when close enough
        if (distance < 50) {
          return prev;
        }

        // Slower speed for smoother following
        const speed = Math.min(distance * 0.01, 1.5);
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
  }, [targetPosition, characterState]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (shockedTimeoutRef.current) {
        clearTimeout(shockedTimeoutRef.current);
      }
    };
  }, []);

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
      {/* Idle character */}
      <img
        src={characterIdle}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'idle' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
      {/* Shocked character - freezes for 0.5s when mouse first moves */}
      <img
        src={characterShocked}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'shocked' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
      {/* Running character */}
      <img
        src={characterRunning}
        alt=""
        className={`w-12 h-12 object-contain ${characterState === 'running' ? 'animate-walk' : ''}`}
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'running' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
    </div>
  );
};

export default MouseFollower;
