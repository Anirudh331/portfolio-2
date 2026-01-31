import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogTasteImage from '@/assets/blog-taste.png';

const Blog5 = () => {
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
              alt="Learning marketing by doing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Growth</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Learning marketing by doing
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Real experiments over theoretical frameworks.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>September 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              I didn't learn marketing from courses or books. I learned it by spending real money, making real mistakes, and getting real feedback from the market.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The theory trap</h2>
            <p>
              Marketing frameworks are useful, but they're not marketing. Knowing about positioning doesn't mean you can position. Understanding funnels doesn't mean you can convert. The gap between knowledge and skill is bridged by doing.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Running experiments</h2>
            <p>
              Every week, I run small experiments. Different headlines, different audiences, different offers. Most fail. Some surprise me. All teach me something that no course could.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">What I've learned so far</h2>
            <p>
              Clear beats clever. Specific beats general. Showing beats telling. Simple beats complex. These aren't revolutionary insights — but I only believe them because I've seen them work.
            </p>

            <p>
              Marketing isn't about knowing more. It's about testing more.
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

export default Blog5;
