import { useState, useEffect } from 'react';
import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';

const ContactCTA = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="container mx-auto px-4 py-8">
      <div className="bg-muted rounded-xl p-6 text-center">
        <p className="text-lg mb-4">Hey, you scrolled this far, let's talk.</p>
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={isDark ? profileAvatarDark : profileAvatar} alt="Ram" className="w-10 h-10 rounded-lg" />
          <span className="font-medium">You</span>
        </div>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
        >
          Book a Free Call
        </a>
      </div>
    </section>
  );
};

export default ContactCTA;
