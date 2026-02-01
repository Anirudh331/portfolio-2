import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BlogInteractions from '@/components/BlogInteractions';
import { ArrowLeft, Calendar, ExternalLink, Zap, Mail, Users, Search, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogOrganicHero from '@/assets/blog-organic-hero.png';

const StrategyCard = ({ 
  number, 
  title, 
  icon: Icon,
  children 
}: { 
  number: string; 
  title: string; 
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="my-8 p-6 bg-card rounded-xl border border-border">
    <div className="flex items-center gap-3 mb-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
        {number}
      </div>
      <Icon className="w-5 h-5 text-primary" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="space-y-4 text-muted-foreground">
      {children}
    </div>
  </div>
);

const BulletPoint = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <span className="text-primary mt-1">•</span>
    <span>{children}</span>
  </li>
);

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
              src={blogOrganicHero} 
              alt="Organic growth marketing strategies" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Growth</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Strategy</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            5 high-leverage organic growth marketing strategies for 2026
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Systems that compound over time. Nothing flashy. Nothing theoretical.
          </p>

          {/* Date & Interactions Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-8 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>January 2026</span>
            </div>
            <BlogInteractions slug="blog3" />
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p>
              Organic growth is still one of the most underrated ways to attract attention, trust, and customers without burning money on ads. In 2026, it matters even more. Platforms are crowded, ad costs keep rising, and audiences are far more skeptical than they were a few years ago.
            </p>

            <p>
              This piece breaks down five organic growth strategies that actually compound over time. Nothing flashy. Nothing theoretical. Just systems that work if you commit to them.
            </p>

            <p>Before jumping in, let's ground the basics.</p>

            {/* What is organic growth */}
            <h2 className="text-2xl font-semibold mt-12 mb-4">What does "organic growth" mean in marketing?</h2>
            
            <p>
              Organic growth marketing focuses on acquiring users without directly paying for distribution. That includes SEO, content, product-driven sharing, newsletters, community, and word of mouth.
            </p>

            <p>At its core, organic growth relies on:</p>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <ul className="space-y-3">
                <BulletPoint><strong>Owned media:</strong> your website, product, email list, content</BulletPoint>
                <BulletPoint><strong>Earned media:</strong> mentions, shares, referrals, trust</BulletPoint>
              </ul>
            </div>

            <p>
              Instead of renting attention from ad platforms, you build assets that keep working even when you stop actively pushing them.
            </p>

            {/* Why it matters */}
            <h2 className="text-2xl font-semibold mt-12 mb-4">Why organic growth matters in 2026</h2>
            
            <p>Organic growth isn't just a "nice-to-have." It's a structural advantage.</p>

            <div className="bg-card rounded-xl border border-border p-6 my-6">
              <h3 className="font-semibold mb-4">Key benefits</h3>
              <ul className="space-y-3">
                <BulletPoint><strong>Lower CAC over time:</strong> Paid channels inflate acquisition costs. Organic channels amortize.</BulletPoint>
                <BulletPoint><strong>Brand trust:</strong> People trust what they discover, not what interrupts them.</BulletPoint>
                <BulletPoint><strong>Sustainability:</strong> Organic systems behave like flywheels. Slow to start, hard to stop.</BulletPoint>
                <BulletPoint><strong>Resilience:</strong> When ad platforms change rules or pricing, organic assets still stand.</BulletPoint>
              </ul>
            </div>

            <p>Now, let's get into the strategies.</p>

            {/* Main heading for strategies */}
            <h2 className="text-2xl font-semibold mt-12 mb-6">5 proven organic growth marketing strategies for 2026</h2>

            {/* Strategy 1 */}
            <StrategyCard number="1" title="Editorial SEO (beyond Google)" icon={Search}>
              <p>SEO is no longer just "ranking blog posts on Google."</p>
              
              <p>Search behavior has fragmented:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Google is still dominant</BulletPoint>
                <BulletPoint>YouTube is the second-largest search engine</BulletPoint>
                <BulletPoint>AI tools and chat interfaces increasingly influence discovery</BulletPoint>
              </ul>

              <p className="mt-4">
                <strong>Editorial SEO</strong> means creating content designed to be found, not just published.
              </p>

              <p>That includes:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Blog content mapped to real search intent</BulletPoint>
                <BulletPoint>Video content optimized for YouTube discovery</BulletPoint>
                <BulletPoint>Content written clearly enough to be surfaced by AI tools and assistants</BulletPoint>
              </ul>

              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <p className="font-medium text-foreground mb-2">The strategy is simple:</p>
                <ol className="space-y-2 list-decimal list-inside">
                  <li>Identify what your audience searches for at different stages of awareness</li>
                  <li>Create content that genuinely answers those questions</li>
                  <li>Structure it cleanly so machines and humans both understand it</li>
                </ol>
              </div>

              <p className="mt-4 text-foreground italic">
                When done correctly, white-hat SEO tends to show up everywhere search exists, not just on Google.
              </p>
            </StrategyCard>

            {/* Strategy 2 */}
            <StrategyCard number="2" title="Product-driven growth loops" icon={Repeat}>
              <p className="text-foreground font-medium">Funnels are fragile. Loops compound.</p>
              
              <p>
                A growth loop is when user output feeds back into user acquisition. The product itself becomes the distribution channel.
              </p>

              <p>Common loop patterns:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Sharing invites usage (social products)</BulletPoint>
                <BulletPoint>User output becomes public content (portfolios, profiles, pages)</BulletPoint>
                <BulletPoint>Branding travels with the product (footers, embeds, exports)</BulletPoint>
              </ul>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                <p className="font-medium text-foreground">The critical idea:</p>
                <p>Your best marketers are often your existing users.</p>
              </div>

              <p className="mt-4">
                If the product creates something visible, shareable, or useful to others, growth can self-reinforce. But this only works if the product is genuinely valuable. Loops don't fix bad products. They amplify good ones.
              </p>
            </StrategyCard>

            {/* Strategy 3 */}
            <StrategyCard number="3" title="Programmatic SEO (with or without UGC)" icon={Zap}>
              <p>Programmatic SEO is about scaling pages through structure, not manual writing.</p>
              
              <p>There are two common models:</p>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">UGC-driven</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Users generate content</li>
                    <li>• Company provides optimized "containers"</li>
                    <li>• Pages grow automatically</li>
                  </ul>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">Dataset-driven</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Large, structured dataset exists</li>
                    <li>• Pages generated programmatically</li>
                    <li>• Combinations: tools, integrations, locations</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4">The core requirement is the same:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Clean taxonomy</BulletPoint>
                <BulletPoint>Strong internal linking</BulletPoint>
                <BulletPoint>Each page solves a clear, specific search intent</BulletPoint>
              </ul>

              <p className="mt-4 text-foreground italic">
                When done right, programmatic SEO quietly becomes one of the highest-ROI organic channels available.
              </p>
            </StrategyCard>

            {/* Strategy 4 */}
            <StrategyCard number="4" title="Email newsletters as growth infrastructure" icon={Mail}>
              <p>Newsletters are often underestimated because they feel "old."</p>
              <p className="text-foreground font-medium">They aren't.</p>
              
              <p>A strong newsletter:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Builds a direct relationship with your audience</BulletPoint>
                <BulletPoint>Encourages forwarding and word of mouth</BulletPoint>
                <BulletPoint>Reinforces brand familiarity across other channels</BulletPoint>
                <BulletPoint>Creates secondary lift in SEO and social mentions</BulletPoint>
              </ul>

              <p className="mt-4">Newsletters work best when:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>They're consistent</BulletPoint>
                <BulletPoint>They're opinionated or useful</BulletPoint>
                <BulletPoint>They're written for humans, not algorithms</BulletPoint>
              </ul>

              <p className="mt-4 text-foreground italic">
                An engaged email list is an owned distribution channel. That alone makes it one of the most powerful organic assets a company can build.
              </p>
            </StrategyCard>

            {/* Strategy 5 */}
            <StrategyCard number="5" title="Customer service as a growth channel" icon={Users}>
              <p>This one is overlooked, but it's foundational.</p>
              <p>People talk about experiences. Especially bad ones. Sometimes great ones.</p>
              
              <p>Strong customer support:</p>
              <ul className="space-y-2 ml-4">
                <BulletPoint>Improves retention</BulletPoint>
                <BulletPoint>Reduces negative word of mouth</BulletPoint>
                <BulletPoint>Creates advocates instead of churned users</BulletPoint>
              </ul>

              <p className="mt-4">
                When support resolves problems quickly and generously, it turns potential brand damage into trust. Retention strengthens every other organic effort. Without it, growth leaks.
              </p>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                <p className="font-medium text-foreground mb-2">In simple terms:</p>
                <ul className="space-y-1">
                  <li><strong>Content</strong> is fuel</li>
                  <li><strong>Distribution</strong> is leverage</li>
                  <li><strong>Retention</strong> is the engine</li>
                </ul>
                <p className="mt-2 text-foreground">No engine, no flywheel.</p>
              </div>
            </StrategyCard>

            {/* Final thoughts */}
            <h2 className="text-2xl font-semibold mt-12 mb-4">Final thoughts</h2>
            
            <p>Organic growth isn't about hacks. It's about systems that reward patience.</p>

            <p>In 2026, the companies that win organically will:</p>

            <div className="bg-card rounded-xl border border-border p-6 my-6">
              <ul className="space-y-3">
                <BulletPoint>Create content people actually want to find</BulletPoint>
                <BulletPoint>Build products that market themselves</BulletPoint>
                <BulletPoint>Structure data so it scales</BulletPoint>
                <BulletPoint>Own their audience through email</BulletPoint>
                <BulletPoint>Treat customers well enough that they talk</BulletPoint>
              </ul>
            </div>

            <p>
              Paid ads can accelerate growth later. Organic growth builds the ground you accelerate on.
            </p>

            <p className="text-foreground font-medium text-lg">
              If you get this right, everything else becomes easier.
            </p>
          </div>

          {/* Bottom Appreciation */}
          <BlogInteractions slug="blog3" variant="bottom" />

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

export default Blog3;
