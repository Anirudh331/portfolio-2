import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SpotifyCard from '@/components/SpotifyCard';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import AboutSection from '@/components/AboutSection';
import GitHubActivity from '@/components/GitHubActivity';
import Blogs from '@/components/Blogs';
import ContactCTA from '@/components/ContactCTA';
import SetupLinks from '@/components/SetupLinks';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SpotifyCard />
        <Experience />
        <Projects />
        <AboutSection />
        <GitHubActivity />
        <Blogs />
        <ContactCTA />
        <SetupLinks />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
