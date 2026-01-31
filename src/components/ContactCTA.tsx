import { useState } from 'react';
import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

const ContactCTA = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvzrjayv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-8">
      <div className="bg-muted rounded-xl p-6 text-center">
        <p className="text-lg mb-4">Hey, you scrolled this far, let's talk.</p>
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="relative w-10 h-10">
            <img src={profileAvatar} alt="Ram" className="absolute inset-0 w-10 h-10 rounded-lg dark:opacity-0 transition-opacity duration-0" />
            <img src={profileAvatarDark} alt="Ram" className="absolute inset-0 w-10 h-10 rounded-lg opacity-0 dark:opacity-100 transition-opacity duration-0" />
          </div>
          <span className="font-medium">You</span>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className="max-w-md mx-auto space-y-4 animate-fade-in"
        >
          <div className="space-y-2 text-left animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="bg-background/50 backdrop-blur-sm transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2 text-left animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-background/50 backdrop-blur-sm transition-all duration-200 focus:scale-[1.02]"
            />
          </div>
          
          <div className="space-y-2 text-left animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              rows={4}
              className="bg-background/50 backdrop-blur-sm transition-all duration-200 focus:scale-[1.02] resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full animate-fade-in transition-all duration-200 hover:scale-[1.02]"
            style={{ animationDelay: '0.4s' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
