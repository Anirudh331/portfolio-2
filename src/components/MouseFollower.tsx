import { useEffect, useRef, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

// AniBot sprites
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
type CharacterType = 'anibot' | 'loki';

interface CharacterSprites {
  idle: string;
  running: string;
  shocked: string;
  climb: string;
  float: string;
  fall: string;
  runDown: string;
  happy: string;
}

// Character sprite configurations
const CHARACTER_SPRITES: Record<CharacterType, CharacterSprites> = {
  anibot: {
    idle: characterIdle,
    running: characterRunning,
    shocked: characterShocked,
    climb: characterClimb,
    float: characterFloat,
    fall: characterFall,
    runDown: characterRunDown,
    happy: characterHappy,
  },
  loki: {
    // For now, Loki uses same sprites - user can add custom sprites later
    idle: characterIdle,
    running: characterRunning,
    shocked: characterShocked,
    climb: characterClimb,
    float: characterFloat,
    fall: characterFall,
    runDown: characterRunDown,
    happy: characterHappy,
  },
};

const MouseFollower = () => {
  // Start character lower on the page (visible below hero section)
  const [position, setPosition] = useState<Position>({ x: 100, y: 400 });
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 100, y: 400 });
  const [isFlipped, setIsFlipped] = useState(false);
  const [characterState, setCharacterState] = useState<CharacterState>('idle');
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterType>('anibot');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const animationRef = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const wasIdleRef = useRef(true);
  const characterRef = useRef<HTMLDivElement>(null);

  const sprites = CHARACTER_SPRITES[selectedCharacter];

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle right-click on character
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      if (characterRef.current) {
        const rect = characterRef.current.getBoundingClientRect();
        const isInsideCharacter =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;

        if (isInsideCharacter) {
          e.preventDefault();
          setIsDialogOpen(true);
        }
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

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

        // If target is in header zone, don't move towards it
        const headerHeight = 120;
        if (targetPosition.y < headerHeight && prev.y <= headerHeight + 10) {
          return prev;
        }

        // Slower speed for smoother following
        const speed = Math.min(distance * 0.01, 1.5);
        const angle = Math.atan2(dy, dx);

        // Header boundary - prevent character from going behind header
        const calculatedY = prev.y + Math.sin(angle) * speed;
        const newY = Math.max(calculatedY, headerHeight);

        return {
          x: prev.x + Math.cos(angle) * speed,
          y: newY,
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

  const handleCharacterSelect = (character: CharacterType) => {
    setSelectedCharacter(character);
    setIsDialogOpen(false);
  };

  // Hide on mobile - mouse following doesn't work on touch devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Character Selection Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Choose</DialogTitle>
          </DialogHeader>
          <div className="flex gap-4 justify-center py-4">
            <Button
              variant={selectedCharacter === 'anibot' ? 'default' : 'outline'}
              onClick={() => handleCharacterSelect('anibot')}
              className="flex-1 h-16 text-lg font-semibold"
            >
              AniBot
            </Button>
            <Button
              variant={selectedCharacter === 'loki' ? 'default' : 'outline'}
              onClick={() => handleCharacterSelect('loki')}
              className="flex-1 h-16 text-lg font-semibold"
            >
              Loki
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Character */}
      <div
        ref={characterRef}
        className="fixed pointer-events-auto z-40 cursor-pointer"
        style={{
          left: position.x - 24,
          top: position.y - 48,
          transform: `scaleX(${isFlipped ? -1 : 1})`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {/* Idle character */}
        <img
          src={sprites.idle}
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
          src={sprites.shocked}
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
          src={sprites.happy}
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
          src={sprites.float}
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
          src={sprites.climb}
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
          src={sprites.fall}
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
          src={sprites.runDown}
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
          src={sprites.running}
          alt=""
          className={`w-12 h-12 object-contain ${characterState === 'running' ? 'animate-walk' : ''}`}
          style={{
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
            opacity: characterState === 'running' ? 1 : 0,
            transition: 'opacity 0.15s ease-out',
          }}
        />
      </div>
    </>
  );
};

export default MouseFollower;
