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
import characterGrab from '@/assets/character-grab.gif';

interface Position {
  x: number;
  y: number;
}

type CharacterState = 'idle' | 'shocked' | 'running' | 'climbing' | 'floating' | 'falling' | 'descending' | 'happy' | 'grabbing';
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
  grab: string;
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
    grab: characterGrab,
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
    grab: characterGrab,
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
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

  // Handle drag functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        // While dragging, follow cursor directly
        setPosition({ x: e.clientX, y: e.clientY });
        setTargetPosition({ x: e.clientX, y: e.clientY });
      } else {
        setTargetPosition({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        wasIdleRef.current = true;
        setCharacterState('idle');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button === 0) { // Left click only
      e.preventDefault();
      setIsDragging(true);
      setCharacterState('grabbing');
    }
  };

  // Handle state transitions based on cursor position
  useEffect(() => {
    if (isDragging) return;

    const dx = targetPosition.x - position.x;
    const dy = targetPosition.y - position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const shouldMove = distance > 50;

    // Determine cursor direction relative to character
    const cursorIsStraightUp = dy < -30 && Math.abs(dx) < 30;
    const cursorIsAbove = dy < -30 && Math.abs(dx) >= 30;
    const cursorIsStraightDown = dy > 30 && Math.abs(dx) < 30;
    const cursorIsBelow = dy > 30 && Math.abs(dx) >= 30;

    const getMovementState = (): CharacterState => {
      if (cursorIsStraightUp) return 'floating';
      if (cursorIsAbove) return 'climbing';
      if (cursorIsStraightDown) return 'falling';
      if (cursorIsBelow) return 'descending';
      return 'running';
    };

    if (shouldMove && wasIdleRef.current && characterState === 'idle') {
      setCharacterState('shocked');
      wasIdleRef.current = false;
      
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCharacterState(getMovementState());
      }, 500);
    } else if (!shouldMove && ['running', 'climbing', 'floating', 'falling', 'descending'].includes(characterState)) {
      setCharacterState('happy');
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        wasIdleRef.current = true;
        setCharacterState('idle');
      }, 500);
    } else if (!shouldMove && characterState === 'shocked') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCharacterState('happy');
      timeoutRef.current = setTimeout(() => {
        wasIdleRef.current = true;
        setCharacterState('idle');
      }, 500);
    } else if (shouldMove && characterState === 'happy') {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setCharacterState('shocked');
      timeoutRef.current = setTimeout(() => {
        setCharacterState(getMovementState());
      }, 500);
    } else if (['climbing', 'floating', 'falling', 'running', 'descending'].includes(characterState)) {
      // Switch between movement states based on cursor position
      const newState = getMovementState();
      if (newState !== characterState) {
        setCharacterState(newState);
      }
    }
  }, [targetPosition, position, characterState, isDragging]);

  // Animation loop for position updates only
  useEffect(() => {
    if (isDragging) return;

    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Flip character based on direction
        if (Math.abs(dx) > 10) {
          setIsFlipped(dx < 0);
        }

        // Don't move if in shocked, happy, or idle state
        if (characterState === 'shocked' || characterState === 'happy' || characterState === 'idle') {
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

        // Speed based on distance for smoother following
        const speed = Math.min(distance * 0.03, 4);
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
  }, [targetPosition, characterState, isDragging]);

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
        className="fixed pointer-events-auto z-40"
        style={{
          left: position.x - 24,
          top: isDragging ? position.y + 10 : position.y - 48,
          transform: `scaleX(${isFlipped ? -1 : 1}) scale(${isDragging ? 1.15 : 1})`,
          transition: isDragging ? 'transform 0.15s ease-out' : 'transform 0.2s ease-out, top 0.15s ease-out',
          cursor: isDragging ? 'grabbing' : isHovering ? 'grab' : 'pointer',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => !isDragging && setIsHovering(false)}
        onMouseDown={(e) => handleMouseDown(e.nativeEvent)}
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
        {/* Grabbing character - when being dragged */}
        <img
          src={sprites.grab}
          alt=""
          className="w-12 h-12 object-contain absolute inset-0"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
            opacity: characterState === 'grabbing' ? 1 : 0,
            transition: 'opacity 0.15s ease-out',
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
