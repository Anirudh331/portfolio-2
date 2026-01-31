import { useState, useEffect } from 'react';
import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';

const AboutSection = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="section-label">About</p>
      <h2 className="section-title">Me</h2>

      <div className="flex gap-4 items-start">
        <img
          src={isDark ? profileAvatarDark : profileAvatar}
          alt="Ramkrishna Swarnkar"
          className="w-16 h-16 rounded-lg border"
        />
        <div>
          <h3 className="font-semibold text-lg mb-2">Ramkrishna Swarnkar</h3>
          <p className="text-muted-foreground">
            I'm a Full Stack web developer and Open Source Contributor, I love building
            products to solve real-world problems. I'm specialized in building MVP's.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
