import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogGoImage from '@/assets/blog-go.png';

const Blog2 = () => {
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
              src={blogGoImage} 
              alt="Why most student platforms fail" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Product</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Education</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Why most student platforms fail
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Observations from building in the education space.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>December 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              I've been building products for students for a while now. Along the way, I've seen countless platforms launch with promise and fade into irrelevance. Here's what I've learned.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The problem with most edtech</h2>
            <p>
              Most student platforms are built by people who haven't been students in years. They assume what students need rather than observing what students actually do. There's a massive gap between "should work" and "actually works."
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Building for behavior, not intention</h2>
            <p>
              Students say they want comprehensive study tools. But they actually use whatever requires the least friction at 2 AM before an exam. The platforms that win are the ones that meet students where they are — stressed, distracted, and short on time.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">What we're doing differently</h2>
            <p>
              With BacklogBuddy, we started by watching. Not asking, watching. How do students actually prepare? When do they start? What do they give up on? The answers shaped everything.
            </p>

            <p>
              The best products don't change behavior — they channel it.
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

export default Blog2;
