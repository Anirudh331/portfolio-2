import React, { useEffect, useRef, useState, useMemo } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -80px 0px', triggerOnce = true } = options;
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

// Parallax hook for scroll-based motion
interface UseParallaxOptions {
  speed?: number; // 0.1 = subtle, 0.5 = intense
  direction?: 'up' | 'down';
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.1, direction = 'up' } = options;
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      const multiplier = direction === 'up' ? -1 : 1;
      
      setOffset(distanceFromCenter * speed * multiplier);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, direction]);

  return { ref, offset };
};

// Component wrapper for scroll reveal with variants
type RevealVariant = 'default' | 'heading' | 'text' | 'image' | 'card';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

const variantClasses: Record<RevealVariant, string> = {
  default: 'reveal-element',
  heading: 'reveal-heading',
  text: 'reveal-text',
  image: 'reveal-image',
  card: 'reveal-card',
};

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'default'
}) => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${variantClasses[variant]} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Parallax wrapper component
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className = '',
  speed = 0.05,
  direction = 'up'
}) => {
  const { ref, offset } = useParallax({ speed, direction });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`will-change-transform ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      {children}
    </div>
  );
};

// Staggered children wrapper with enhanced timing
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  variant?: RevealVariant;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 100,
  variant = 'default'
}) => {
  const { ref, isVisible } = useScrollReveal();

  const staggeredChildren = useMemo(() => {
    return React.Children.map(children, (child, index) => (
      <div 
        className={`${variantClasses[variant]} ${isVisible ? 'revealed' : ''}`}
        style={{ transitionDelay: `${index * staggerDelay}ms` }}
      >
        {child}
      </div>
    ));
  }, [children, isVisible, staggerDelay, variant]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {staggeredChildren}
    </div>
  );
};

// Text reveal with character/word stagger
interface TextRevealProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerDelay?: number;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  as: Component = 'span',
  staggerDelay = 30
}) => {
  const { ref, isVisible } = useScrollReveal();
  const words = text.split(' ');

  return (
    <Component ref={ref as any} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block reveal-word ${isVisible ? 'revealed' : ''}`}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  );
};
