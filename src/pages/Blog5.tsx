import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BlogInteractions from '@/components/BlogInteractions';
import { Reveal } from '@/hooks/useScrollReveal';
import { ArrowLeft, Calendar, ExternalLink, MessageSquare, BarChart3, Brain, AlertTriangle, Eye, RefreshCw, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogHeroImage from '@/assets/blog-storytelling-vs-performance.png';

interface SectionCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'warning' | 'success';
}

const SectionCard = ({ icon, title, children, variant = 'default' }: SectionCardProps) => {
  const variantStyles = {
    default: 'bg-muted/30 border-border',
    warning: 'bg-orange-500/5 border-orange-500/20',
    success: 'bg-emerald-500/5 border-emerald-500/20',
  };

  return (
    <Reveal>
      <div className={`border rounded-xl p-6 my-6 ${variantStyles[variant]}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-muted-foreground space-y-3">
          {children}
        </div>
      </div>
    </Reveal>
  );
};

const ComparisonBlock = ({ left, right }: { left: string; right: string }) => (
  <Reveal>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <MessageSquare className="w-5 h-5 text-purple-400" />
          <span className="font-semibold text-purple-400">Storytelling</span>
        </div>
        <p className="text-muted-foreground text-sm">{left}</p>
      </div>
      <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <span className="font-semibold text-cyan-400">Performance</span>
        </div>
        <p className="text-muted-foreground text-sm">{right}</p>
      </div>
    </div>
  </Reveal>
);

const Blog5 = () => {
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
              src={blogHeroImage} 
              alt="Storytelling vs performance marketing" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Strategy</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Growth</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Storytelling vs performance marketing: a false fight
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            The debate keeps coming back. But the tension only exists when you look at each in isolation.
          </p>

          {/* Date Row */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>October 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              This debate keeps coming back like it's unresolved.
            </p>

            <p className="text-xl font-medium text-center py-4">
              Storytelling vs performance marketing.<br />
              Brand vs growth.<br />
              Long-term vs short-term.
            </p>

            <p>
              It sounds dramatic. It's also mostly wrong.
            </p>

            <p>
              The fight exists because people talk about these ideas in isolation, not as parts of the same system. When you zoom out, the tension disappears.
            </p>

            <SectionCard icon={<Brain className="w-5 h-5" />} title="Why this debate exists in the first place">
              <p>
                Performance marketing is measurable. Storytelling often isn't — at least not immediately.
              </p>
              <p>
                That alone creates bias.
              </p>
              <p>
                Teams under pressure gravitate toward what can be tracked in dashboards. CTRs, CAC, ROAS. Numbers feel safe. Stories feel soft.
              </p>
              <p>
                On the other side, storytelling gets positioned as something "pure" or "creative", detached from outcomes. That framing doesn't help either.
              </p>
              <p className="text-foreground font-medium">
                So we end up with two camps, both defending incomplete truths.
              </p>
            </SectionCard>

            <h2 className="text-xl font-semibold mt-8 mb-4">Performance answers how, storytelling answers why</h2>
            
            <ComparisonBlock 
              left="Shapes perception. Defines why something matters before someone is ready to click anything."
              right="Excellent at capturing existing demand. Built to optimize clicks, conversions, funnels, marginal gains."
            />

            <p>
              But performance marketing rarely creates demand on its own.
            </p>

            <p>
              People don't convert because an ad is efficient. They convert because the message already makes sense to them.
            </p>

            <p className="text-foreground font-medium border-l-2 border-primary pl-4">
              Performance marketing closes the deal. Storytelling makes the deal possible.
            </p>

            <SectionCard icon={<Eye className="w-5 h-5" />} title="Metrics don't measure belief">
              <p>
                One of the biggest mistakes is expecting storytelling to behave like an ad.
              </p>
              <p>
                Stories don't always trigger immediate action. They change how people frame a product or brand. That change shows up later:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Higher conversion rates</li>
                <li>Lower price sensitivity</li>
                <li>Shorter sales cycles</li>
                <li>Better retention</li>
              </ul>
              <p className="mt-3">
                By the time performance metrics move, the story already did its job.
              </p>
              <p className="text-foreground font-medium">
                If you only look for instant attribution, you'll underinvest in the work that makes performance marketing cheaper over time.
              </p>
            </SectionCard>

            <SectionCard icon={<AlertTriangle className="w-5 h-5" />} title="Performance without story becomes fragile" variant="warning">
              <p>
                When performance marketing operates without a narrative underneath it, it becomes brittle.
              </p>
              <p>
                The system works until:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>CPMs rise</li>
                <li>Algorithms change</li>
                <li>Competitors copy creatives</li>
                <li>Audiences get fatigued</li>
              </ul>
              <p className="mt-3">
                Without a story, every campaign has to work harder than the last. There's no memory, no trust, no momentum.
              </p>
              <p className="text-foreground font-medium">
                That's when teams say "performance stopped working" — when in reality the foundation was never built.
              </p>
            </SectionCard>

            <SectionCard icon={<Eye className="w-5 h-5" />} title="Story without performance becomes invisible" variant="warning">
              <p>
                The opposite problem exists too.
              </p>
              <p>
                Beautiful storytelling with no distribution, no iteration, no feedback loop doesn't scale. It becomes an internal artifact instead of a growth lever.
              </p>
              <p>
                Performance marketing provides the testing ground:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>What messages resonate</li>
                <li>What framing converts</li>
                <li>What language people respond to</li>
              </ul>
              <p className="mt-3 text-foreground font-medium">
                Data doesn't kill storytelling. It sharpens it.
              </p>
            </SectionCard>

            <SectionCard icon={<RefreshCw className="w-5 h-5" />} title="The real model: storytelling feeds performance" variant="success">
              <p>
                High-performing teams don't choose sides. They sequence correctly.
              </p>
              <div className="bg-background/50 rounded-lg p-4 mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">1</span>
                  <span>Storytelling defines the narrative</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">2</span>
                  <span>Performance marketing tests and distributes it</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">3</span>
                  <span>Data refines the story</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">4</span>
                  <span>The improved story lowers acquisition costs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold">5</span>
                  <span>Performance gets stronger</span>
                </div>
              </div>
              <p className="mt-4 text-foreground font-medium">
                That's the loop. Storytelling isn't the opposite of performance marketing. It's the upstream input.
              </p>
            </SectionCard>

            <SectionCard icon={<XCircle className="w-5 h-5" />} title="Why the 'vs' framing is harmful">
              <p>
                When teams argue story versus performance, they:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Build disconnected strategies</li>
                <li>Optimize locally instead of systemically</li>
                <li>Chase short-term wins at long-term cost</li>
              </ul>
              <p className="mt-3">
                The smartest teams don't ask "which one matters more?"
              </p>
              <p className="text-foreground font-medium">
                They ask: "What story makes our performance marketing work better?"
              </p>
            </SectionCard>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 my-8">
              <h2 className="text-xl font-bold mb-4">Final thought</h2>
              <p className="text-muted-foreground mb-4">
                Storytelling and performance marketing aren't rivals. They're collaborators.
              </p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <MessageSquare className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <p className="text-sm font-medium">Creates meaning</p>
                </div>
                <div className="text-center p-4 bg-background/30 rounded-lg">
                  <BarChart3 className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                  <p className="text-sm font-medium">Captures action</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Remove either, and growth slows. Use both, and the system compounds.
              </p>
              <p className="text-primary font-semibold mt-4">
                The fight isn't real. The coordination problem is.
              </p>
            </div>
          </div>

          {/* Bottom Appreciation */}
          <BlogInteractions slug="blog5" variant="bottom" />

          {/* Read Full CTA */}
          <div className="mt-8 pt-8 border-t border-border">
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
