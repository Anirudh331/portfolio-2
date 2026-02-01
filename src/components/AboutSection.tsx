import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import { Reveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">About</p>
        <h2 className="section-title">Me</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex gap-4 items-start">
          <div className="relative w-16 h-16 flex-shrink-0">
            <img
              src={profileAvatar}
              alt="Anirudh N Raiker"
              className="absolute inset-0 w-16 h-16 rounded-lg border dark:opacity-0 transition-opacity duration-0"
            />
            <img
              src={profileAvatarDark}
              alt="Anirudh N Raiker"
              className="absolute inset-0 w-16 h-16 rounded-lg border opacity-0 dark:opacity-100 transition-opacity duration-0"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Anirudh N Raiker</h3>
            <p className="text-muted-foreground">
              BCom graduate with a background in media and storytelling. National award recognition for short films. 
              Currently building education-focused startups and learning marketing through real execution — 
              shipping products, running experiments, and improving through outcomes rather than theory.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutSection;
