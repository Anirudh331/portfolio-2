import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';

const ContactCTA = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-8">
      <div className="bg-muted rounded-xl p-6 text-center">
        <p className="text-lg mb-4">Hey, you scrolled this far, let's talk.</p>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="relative w-10 h-10">
            <img src={profileAvatar} alt="Ram" className="absolute inset-0 w-10 h-10 rounded-lg dark:opacity-0 transition-opacity duration-0" />
            <img src={profileAvatarDark} alt="Ram" className="absolute inset-0 w-10 h-10 rounded-lg opacity-0 dark:opacity-100 transition-opacity duration-0" />
          </div>
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
