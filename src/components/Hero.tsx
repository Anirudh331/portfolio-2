import { useState, useEffect } from 'react';
import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import cursorIcon from '@/assets/cursor.webp';
import { FileText, Send } from 'lucide-react';

const TechBadge = ({ children, icon }: { children: React.ReactNode; icon?: string }) => (
  <span className="tech-badge">
    {icon && <img src={icon} alt="" className="w-4 h-4" />}
    {children}
  </span>
);

const Hero = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="relative inline-block mb-6">
        <img
          src={isDark ? profileAvatarDark : profileAvatar}
          alt="Ram"
          className="w-24 h-24 rounded-xl border-2 border-border"
        />
        <div className="absolute -bottom-1 -right-1 flex items-center gap-1 px-2 py-0.5 text-xs bg-muted rounded-full border">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span className="text-muted-foreground">Offline in</span>
          <img src={cursorIcon} alt="Cursor" className="w-4 h-4" />
          <span className="font-medium">Cursor</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-2">
        Yesterday worked <span className="font-semibold text-foreground">2h 52m</span>
      </p>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Hi, I'm Ram — <span className="text-muted-foreground">A Full Stack web developer.</span>
      </h1>

      <p className="text-base text-muted-foreground mb-6 leading-relaxed">
        I build interactive web apps using{' '}
        <TechBadge icon="https://www.typescriptlang.org/favicon-32x32.png">Typescript</TechBadge>,{' '}
        <TechBadge icon="https://react.dev/favicon-32x32.png">React</TechBadge>,{' '}
        <TechBadge icon="https://nextjs.org/favicon.ico">Next.js</TechBadge>,{' '}
        <TechBadge icon="https://bun.sh/logo.svg">Bun</TechBadge>
        {' '}and{' '}
        <TechBadge icon="https://www.postgresql.org/favicon.ico">PostgreSQL</TechBadge>.
        {' '}With a focus on <span className="font-semibold text-foreground">UI</span> design. Enthusiastic about{' '}
        <span className="font-semibold text-foreground">Three.js</span>, driven by a keen eye for design.
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 border rounded-md hover:bg-muted transition-colors"
        >
          <FileText className="w-4 h-4" />
          Resume / CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          <Send className="w-4 h-4" />
          Get in touch
        </a>
      </div>

      <SocialLinks />
    </section>
  );
};

const SocialLinks = () => {
  const socials = [
    { name: 'X', href: '#', icon: 'X' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: 'GH' },
    { name: 'YouTube', href: '#', icon: 'YT' },
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Pinterest', href: '#', icon: 'P' },
    { name: 'Threads', href: '#', icon: '01' },
    { name: 'Email', href: '#', icon: '✉' },
  ];

  return (
    <div className="flex gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
          aria-label={social.name}
        >
          <span className="text-sm font-medium">{social.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default Hero;
