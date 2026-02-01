import { useEffect, useRef, useState } from 'react';
import characterIdle from '@/assets/character-idle.png';
import characterRunning from '@/assets/character-running.gif';
import characterShocked from '@/assets/character-shocked.png';
import characterClimb from '@/assets/character-climb.gif';
import characterFloat from '@/assets/character-float.gif';
import characterFall from '@/assets/character-fall.gif';
import characterRunDown from '@/assets/character-run-down.png';
import characterHappy from '@/assets/character-happy.png';

interface Position {
  x: number;
  y: number;
}

type CharacterState = 'idle' | 'shocked' | 'running' | 'climbing' | 'floating' | 'falling' | 'descending' | 'happy';

const MouseFollower = () => {
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 100 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterState>('idle');
  const animationRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();
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
        
        // Check vertical direction (negative dy = cursor above, positive dy = cursor below)
        const cursorIsStraightUp = dy < -30 && Math.abs(dx) < 30; // Cursor is directly above (90 degrees)
        const cursorIsAbove = dy < -30 && Math.abs(dx) >= 30; // Cursor is above but at an angle
        const cursorIsStraightDown = dy > 30 && Math.abs(dx) < 30; // Cursor is directly below (90 degrees)
        const cursorIsBelow = dy > 30 && Math.abs(dx) >= 30; // Cursor is below but at an angle

        // Handle state transitions
        if (shouldMove && wasIdleRef.current && characterState === 'idle') {
          // Transition from idle to shocked - character freezes in place
          setCharacterState('shocked');
          wasIdleRef.current = false;
          
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // After 0.5 seconds, switch to appropriate movement state
          timeoutRef.current = setTimeout(() => {
            if (cursorIsStraightUp) {
              setCharacterState('floating');
            } else if (cursorIsAbove) {
              setCharacterState('climbing');
            } else if (cursorIsStraightDown) {
              setCharacterState('falling');
            } else if (cursorIsBelow) {
              setCharacterState('descending');
            } else {
              setCharacterState('running');
            }
          }, 500);
        } else if (!shouldMove && (characterState === 'running' || characterState === 'climbing' || characterState === 'floating' || characterState === 'falling' || characterState === 'descending')) {
          // Reached destination - show happy before idle
          setCharacterState('happy');
          
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // After 0.5 seconds, go to idle
          timeoutRef.current = setTimeout(() => {
            wasIdleRef.current = true;
            setCharacterState('idle');
          }, 500);
        } else if (!shouldMove && characterState === 'shocked') {
          // If stopped during shocked state, go to happy then idle
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          setCharacterState('happy');
          timeoutRef.current = setTimeout(() => {
            wasIdleRef.current = true;
            setCharacterState('idle');
          }, 500);
        } else if (shouldMove && characterState === 'happy') {
          // If mouse moves during happy state, go back to shocked
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          setCharacterState('shocked');
          timeoutRef.current = setTimeout(() => {
            if (cursorIsStraightUp) {
              setCharacterState('floating');
            } else if (cursorIsAbove) {
              setCharacterState('climbing');
            } else if (cursorIsStraightDown) {
              setCharacterState('falling');
            } else if (cursorIsBelow) {
              setCharacterState('descending');
            } else {
              setCharacterState('running');
            }
          }, 500);
        } else if (characterState === 'climbing' || characterState === 'floating' || characterState === 'falling' || characterState === 'running' || characterState === 'descending') {
          // Switch between states based on cursor position
          if (cursorIsStraightUp && characterState !== 'floating') {
            setCharacterState('floating');
          } else if (cursorIsAbove && characterState !== 'climbing') {
            setCharacterState('climbing');
          } else if (cursorIsStraightDown && characterState !== 'falling') {
            setCharacterState('falling');
          } else if (cursorIsBelow && characterState !== 'descending') {
            setCharacterState('descending');
          } else if (!cursorIsAbove && !cursorIsBelow && !cursorIsStraightUp && !cursorIsStraightDown && characterState !== 'running') {
            setCharacterState('running');
          }
        }

        // Flip character based on direction
        if (Math.abs(dx) > 10) {
          setIsFlipped(dx < 0);
        }

        // Don't move if in shocked or happy state - character freezes
        if (characterState === 'shocked' || characterState === 'happy') {
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
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
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
        className="w-8 h-8 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'shocked' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
          marginTop: '8px',
          marginLeft: '8px',
          transform: 'scaleX(-1)',
        }}
      />
      {/* Happy character - shows for 0.5s when reaching destination */}
      <img
        src={characterHappy}
        alt=""
        className="w-8 h-8 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'happy' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
          marginTop: '8px',
          marginLeft: '8px',
        }}
      />
      {/* Floating character - when cursor is straight up (90 degrees) */}
      <img
        src={characterFloat}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'floating' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
      {/* Climbing character - when cursor is above at an angle */}
      <img
        src={characterClimb}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'climbing' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
          transform: 'scaleX(-1)',
        }}
      />
      {/* Falling character - when cursor is straight down (90 degrees) */}
      <img
        src={characterFall}
        alt=""
        className="w-12 h-12 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'falling' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
        }}
      />
      {/* Descending character - when cursor is below at an angle */}
      <img
        src={characterRunDown}
        alt=""
        className="w-8 h-8 object-contain absolute inset-0"
        style={{
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          opacity: characterState === 'descending' ? 1 : 0,
          transition: 'opacity 0.15s ease-out',
          marginTop: '8px',
          marginLeft: '8px',
          transform: 'scaleX(-1)',
        }}
      />
      {/* Running character - horizontal movement */}
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
