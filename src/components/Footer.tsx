const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-8 text-center">
      <blockquote className="mb-6 text-muted-foreground italic max-w-lg mx-auto">
        "You have a right to perform your prescribed duty, but you are not
        entitled to the fruits of actions."
        <cite className="block mt-2 not-italic font-medium text-foreground">
          — Bhagavad Gita
        </cite>
      </blockquote>

      <p className="text-sm text-muted-foreground mb-2">
        You are the <span className="font-semibold text-foreground">30,521st</span> visitor
      </p>

      <p className="text-sm text-muted-foreground mb-1">
        Design & Developed by <span className="font-semibold text-foreground">Ramxcodes</span>
      </p>

      <p className="text-xs text-muted-foreground">
        © 2026. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
