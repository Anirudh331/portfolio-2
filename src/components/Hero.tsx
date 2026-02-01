import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import cursorIcon from '@/assets/cursor.webp';
import { Send } from 'lucide-react';
import { Reveal, Parallax } from '@/hooks/useScrollReveal';

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="tech-badge badge-animate">
    {children}
  </span>
);

const Hero = () => {

  return (
    <section className="container mx-auto px-4 py-8">
      <Reveal delay={0} variant="image">
        <div className="relative inline-block mb-6">
          <div className="relative w-24 h-24">
            <img
              src={profileAvatar}
              alt="Anirudh"
              className="absolute inset-0 w-24 h-24 rounded-full border-2 border-border dark:opacity-0 transition-opacity duration-0"
            />
            <img
              src={profileAvatarDark}
              alt="Anirudh"
              className="absolute inset-0 w-24 h-24 rounded-full border-2 border-border opacity-0 dark:opacity-100 transition-opacity duration-0"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5 text-xs bg-muted rounded-full border">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-muted-foreground">Building</span>
            <img src={cursorIcon} alt="Work" className="w-4 h-4" />
            <span className="font-medium">MVPs</span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100} variant="text">
        <p className="text-sm text-muted-foreground mb-2">
          Currently shipping <span className="font-semibold text-foreground">education products</span>
        </p>
      </Reveal>

      <Parallax speed={0.03}>
        <Reveal delay={180} variant="heading">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, I'm Anirudh — <span className="text-muted-foreground">Media, marketing, and product building.</span>
          </h1>
        </Reveal>
      </Parallax>

      <Reveal delay={280} variant="text">
        <p className="text-base text-muted-foreground mb-6 leading-relaxed">
          Currently building education startups and experimenting with marketing through real projects.
          <br /><br />
          Interested in{' '}
          <SkillBadge>Storytelling</SkillBadge>,{' '}
          <SkillBadge>Graphic Design</SkillBadge>,{' '}
          <SkillBadge>Product Thinking</SkillBadge>
          {' '}and how attention actually works — with a background in filmmaking.
        </p>
      </Reveal>

      <Reveal delay={380}>
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md btn-animate"
          >
            <Send className="w-4 h-4" />
            Get in touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={480}>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/anirudhnraikar/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground icon-hover"
            aria-label="LinkedIn"
          >
            <span className="text-sm font-medium">in</span>
          </a>
          <a
            href="mailto:anirudh@anirudhworks.site"
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground icon-hover"
            aria-label="Email"
          >
            <span className="text-sm font-medium">✉</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
