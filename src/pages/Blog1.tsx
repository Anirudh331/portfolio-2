import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogTasteImage from '@/assets/blog-taste.png';

const Blog1 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/#blogs" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-muted">
            <img 
              src={blogTasteImage} 
              alt="What storytelling teaches marketing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Storytelling</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What storytelling teaches marketing
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            How directing films shaped the way I think about positioning and audience.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>January 2026</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              Before I ever thought about marketing, I was directing short films. The goal was always the same: make people feel something, remember something, care about something.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The core lesson</h2>
            <p>
              Great stories don't explain — they show. They don't convince — they resonate. Marketing works the same way. You're not selling features, you're selling a feeling, a future, a version of your audience that they want to become.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">What film taught me about positioning</h2>
            <p>
              In film, every frame has intent. Every cut serves the story. Marketing should be the same — every word, every visual, every interaction should move your audience closer to understanding why you exist.
            </p>

            <p>
              The best marketing doesn't feel like marketing. It feels like recognition. Like someone finally understood what you've been looking for.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Applying it to product</h2>
            <p>
              When I started building products, I brought this lens with me. Who is the protagonist? What's their conflict? What transformation are we offering? These aren't just storytelling questions — they're product questions.
            </p>
          </div>

          {/* Read Full CTA */}
          <div className="mt-12 pt-8 border-t border-border">
            <a 
              href="https://thewhylayer.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              To read the full article, check out The Why Layer
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Blog1;
