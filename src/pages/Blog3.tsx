import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogTasteImage from '@/assets/blog-taste.png';

const Blog3 = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />
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
              alt="Building before being ready" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Mindset</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Startups</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Building before being ready
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Why waiting for the perfect moment is the biggest trap.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>November 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              I started building products before I knew what I was doing. No technical background, no business degree, no network. Just an idea and the willingness to figure it out.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The readiness trap</h2>
            <p>
              "I'll start when I learn more." "I'll launch when it's perfect." "I'll reach out when I have more to show." These aren't preparation — they're procrastination wearing a responsible mask.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Learning by shipping</h2>
            <p>
              Everything I know about product, marketing, and building — I learned by doing it badly first. There's no course that teaches you how your specific audience behaves. No book that tells you what copy will resonate with your users. You have to test, fail, and adjust.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The cost of waiting</h2>
            <p>
              Every month you spend "preparing" is a month of feedback you didn't get. The market doesn't care about your timeline. Someone else is shipping while you're perfecting.
            </p>

            <p>
              Start ugly. Ship scared. Learn fast.
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

export default Blog3;
