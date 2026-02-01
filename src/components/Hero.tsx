import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import cursorIcon from '@/assets/cursor.webp';
import { Send } from 'lucide-react';

const SkillBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="tech-badge">
    {children}
  </span>
);

const Hero = () => {

  return (
    <section className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="relative inline-block mb-6">
        <div className="relative w-24 h-24">
          <img
            src={profileAvatar}
            alt="Anirudh"
            className="absolute inset-0 w-24 h-24 rounded-xl border-2 border-border dark:opacity-0 transition-opacity duration-0"
          />
          <img
            src={profileAvatarDark}
            alt="Anirudh"
            className="absolute inset-0 w-24 h-24 rounded-xl border-2 border-border opacity-0 dark:opacity-100 transition-opacity duration-0"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5 text-xs bg-muted rounded-full border">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-muted-foreground">Building</span>
          <img src={cursorIcon} alt="Work" className="w-4 h-4" />
          <span className="font-medium">MVPs</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-2">
        Currently shipping <span className="font-semibold text-foreground">education products</span>
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Hi, I'm Anirudh — <span className="text-muted-foreground">Media, marketing, and product building.</span>
      </h1>

      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        BCom graduate. National award–winning filmmaker. Founder building education startups.
        I work at the intersection of{' '}
        <SkillBadge>Storytelling</SkillBadge>,{' '}
        <SkillBadge>Marketing</SkillBadge>,{' '}
        <SkillBadge>Product</SkillBadge>
        {' '}and{' '}
        <SkillBadge>Media</SkillBadge>.
        {' '}Learning marketing through real execution, not theory.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
          Get in touch
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/anirudhnraikar/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <span className="text-sm font-medium">in</span>
        </a>
        <a
          href="mailto:anirudh@anirudhworks.site"
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <span className="text-sm font-medium">✉</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
