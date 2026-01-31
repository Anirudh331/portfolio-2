import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogGoImage from '@/assets/blog-go.png';

const Blog4 = () => {
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
              alt="From filmmaker to founder" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Journey</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Media</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            From filmmaker to founder
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            How directing short films prepared me for building products.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>October 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              People think filmmaking and startups are different worlds. They're not. Both are about telling a story that moves people to action — whether that's buying a ticket or signing up for your product.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">The director's mindset</h2>
            <p>
              Directing taught me to see the whole picture while obsessing over details. To work with constraints — limited budget, tight timelines, small teams. To make decisions quickly because indecision costs time and money.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Storytelling as strategy</h2>
            <p>
              Every startup has a story. Not the founder's journey story — the customer's transformation story. What's their life like before your product? What's the conflict? What does resolution look like? Film taught me to think this way instinctively.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Creating with constraints</h2>
            <p>
              My films were made with almost no budget. You learn to be resourceful, to prioritize ruthlessly, to focus on what matters. Building a startup with limited resources? Same skill, different medium.
            </p>

            <p>
              The camera changed, but the craft stayed the same.
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

export default Blog4;
