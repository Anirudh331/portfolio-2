import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import ReadingProgress from '@/components/ReadingProgress';
import BlogInteractions from '@/components/BlogInteractions';
import { Reveal } from '@/hooks/useScrollReveal';
import { ArrowLeft, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogSeoHero from '@/assets/blog-seo-hero.png';
import blogSeoEngine from '@/assets/blog-seo-engine.png';
import blogSeoContent from '@/assets/blog-seo-content.png';
import blogSeoLinks from '@/assets/blog-seo-links.png';

const ChecklistItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 py-1">
    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
    <span>{children}</span>
  </li>
);

const RevealSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <Reveal delay={delay}>
    {children}
  </Reveal>
);

const Blog2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="B2B SaaS SEO Playbook 2026 — Anirudh N Raiker" description="A compact, actionable SEO guide for SaaS companies. By Anirudh N Raiker." canonical="https://anirudhworks.site/blog2" />
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
              src={blogSeoHero} 
              alt="B2B SaaS SEO Playbook" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">SEO</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">B2B</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">SaaS</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            B2B SaaS SEO: A Compact (But Complete) Playbook for 2026
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            A straight-to-the-point guide — conceptual first, tactical second — so you can build a repeatable SEO approach for a SaaS product.
          </p>

          {/* Date Row */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>January 2026</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <RevealSection>
              <p className="text-lg">
                I'm new to writing about this, but I collected practical, battle-ready ideas on SaaS SEO that anyone can follow. This is a straight-to-the-point guide — conceptual first, tactical second — so you can build a repeatable SEO approach for a SaaS product.
              </p>
            </RevealSection>

            {/* What is SaaS SEO */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">What is SaaS SEO?</h2>
              <p>
                SaaS SEO = the set of tactics a software-as-a-service company uses on its marketing site to attract organic search visitors, bring the right buyers, and push them toward key actions (trial signups, demos, paid plans). In short: <strong>SEO for SaaS is about driving sustainable, organic growth</strong> instead of depending only on ads or social virality.
              </p>
            </RevealSection>

            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">Is SaaS SEO different from "regular" SEO?</h2>
              <p>
                Fundamentally it's the same discipline. The main difference is <em>strategy</em>: content and conversion work must be aligned with subscription/business models. B2B SaaS usually benefits more from content that addresses business pain points and long consideration cycles; consumer apps or mobile-first products may need a different mix.
              </p>
            </RevealSection>

            {/* Framework Section */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">How to frame SaaS SEO thinking</h2>
              <p>
                Don't treat SEO as a narrow checklist. I find it useful to split the work into three mechanical parts:
              </p>
              
              <div className="bg-muted/50 rounded-xl p-6 my-6 border border-border">
                <ul className="space-y-3 list-none pl-0">
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">⚙️</span>
                    <div>
                      <strong>Engine</strong> = your website — the foundation (fast, crawlable, structured).
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">⛽</span>
                    <div>
                      <strong>Fuel</strong> = your content — pages and articles that attract and convert.
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-2xl">🛢️</span>
                    <div>
                      <strong>Oil</strong> = links — internal and external links that help Google discover and trust you.
                    </div>
                  </li>
                </ul>
              </div>
              
              <p>
                Think of the engine first; fuel won't deliver its full value unless the engine is properly built. Links speed up and amplify everything.
              </p>
            </RevealSection>

            {/* Section 1 - Engine */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">1 — The Engine: Build Your Site for Search</h2>
              
              <figure className="my-8">
                <img 
                  src={blogSeoEngine} 
                  alt="Technical SEO Engine Illustration" 
                  className="w-full rounded-xl border border-border"
                />
                <figcaption className="text-sm text-muted-foreground text-center mt-2">
                  Your website is the engine — the technical foundation for SEO success.
                </figcaption>
              </figure>

              <p>
                If the site is broken, content can't reach its potential. For typical SaaS marketing sites (not giant marketplaces), focus on these essentials:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Technical Checklist</h3>
              <ul className="list-none space-y-2 pl-0">
                <ChecklistItem>
                  <strong>Sitemap:</strong> /sitemap.xml and submit it in Search Console.
                </ChecklistItem>
                <ChecklistItem>
                  <strong>Schema markup:</strong> add relevant schema (Organization on home, Article on posts) so search engines understand page types.
                </ChecklistItem>
                <ChecklistItem>
                  <strong>Canonicals:</strong> set canonical tags to avoid duplicate-content confusion.
                </ChecklistItem>
                <ChecklistItem>
                  <strong>301 redirects:</strong> use redirects sensibly when URLs change; don't overdo them.
                </ChecklistItem>
                <ChecklistItem>
                  Mobile responsiveness and fast hosting are non-negotiable.
                </ChecklistItem>
                <ChecklistItem>
                  Ability to edit SEO elements (meta tags, sitemaps, schema, redirects).
                </ChecklistItem>
              </ul>

              <p className="text-muted-foreground italic mt-4">
                Many modern CMSs let you handle this. Pick a platform you can control; inconsistency in hosting/plugins or bloated JS can slow you down.
              </p>
            </RevealSection>

            {/* Section 2 - Content */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">2 — The Fuel: Content Strategy That Maps to Search Behavior</h2>

              <figure className="my-8">
                <img 
                  src={blogSeoContent} 
                  alt="Content Strategy Funnel Illustration" 
                  className="w-full rounded-xl border border-border"
                />
                <figcaption className="text-sm text-muted-foreground text-center mt-2">
                  Content is where the ROI lives — but strategy matters more than volume.
                </figcaption>
              </figure>

              <h3 className="text-xl font-semibold mt-8 mb-4">Start with a search-aware buyer journey</h3>
              <p>
                Organize content by the user's awareness level (problem → solution → product). Don't rely solely on funnel labels; think in terms of search intent and awareness:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Problem-aware</strong> (discovering they have an issue)</li>
                <li><strong>Solution-aware</strong> (researching fixes)</li>
                <li><strong>Product-aware</strong> (evaluating vendors)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4">Quarterly planning: ATK</h3>
              <p>Plan content by:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li><strong>Audiences</strong> — who are you writing for?</li>
                <li><strong>Topics</strong> — what subjects matter to them?</li>
                <li><strong>Keywords</strong> — which queries match those topics?</li>
              </ul>

              <div className="bg-muted/50 rounded-xl p-6 my-6 border border-border">
                <p className="font-semibold mb-2">Example:</p>
                <ul className="list-none space-y-1 pl-0 text-sm">
                  <li><strong>Audience:</strong> freelance web designers</li>
                  <li><strong>Topic:</strong> portfolios</li>
                  <li><strong>Keywords:</strong> "web design portfolio examples", "how to create a design portfolio"</li>
                </ul>
              </div>

              <p>This keeps content aligned with product fit and demand.</p>
            </RevealSection>

            {/* Section 3 - Links */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">3 — The Oil: Internal Links and Backlinks</h2>

              <figure className="my-8">
                <img 
                  src={blogSeoLinks} 
                  alt="Link Network Illustration" 
                  className="w-full rounded-xl border border-border"
                />
                <figcaption className="text-sm text-muted-foreground text-center mt-2">
                  Links are the lubricant that makes your content strategy scalable.
                </figcaption>
              </figure>

              <p>
                <strong>Internal linking:</strong> connect related articles and landing pages. Good internal linking builds topical authority and helps pass ranking signals across the site.
              </p>
              <p>
                <strong>Backlinks:</strong> aim for high-quality, relevant links from authoritative sites. They speed indexation, increase domain trust, and help rank for competitive keywords.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">Practical rules:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prioritize quality over quantity for external links.</li>
                <li>Avoid spammy PBNs or cheap link packages. Low-quality links can backfire.</li>
                <li>Guest posts, founder outreach, and genuinely useful contributions to other publications are reliable paths.</li>
              </ul>
            </RevealSection>

            {/* Five-Stage Workflow */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">The Five-Stage SaaS SEO Workflow</h2>
              
              <div className="grid gap-3 my-6">
                {[
                  { num: 1, title: 'Website', desc: 'technical setup and hygiene' },
                  { num: 2, title: 'Ideate', desc: 'research and plan content that maps to user search journeys' },
                  { num: 3, title: 'Create', desc: 'produce SEO-first briefs and well-structured content' },
                  { num: 4, title: 'Publish', desc: 'CMS best practices + link insertion and indexing' },
                  { num: 5, title: 'Monitor', desc: 'analytics, conversions, and content refresh cycles' },
                ].map((stage) => (
                  <div key={stage.num} className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg border border-border">
                    <span className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full font-bold">
                      {stage.num}
                    </span>
                    <div>
                      <span className="font-semibold">{stage.title}</span>
                      <span className="text-muted-foreground"> — {stage.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>

            {/* Stage 1 Detail */}
            <RevealSection>
              <h3 className="text-xl font-semibold mt-10 mb-4">1) Website — Quick Technical How-To</h3>
              <p>For most SaaS sites, these items cover 90% of needs:</p>
              <ul className="list-none space-y-2 pl-0 my-4">
                <ChecklistItem><code className="bg-muted px-2 py-0.5 rounded text-sm">yourdomain.com/sitemap.xml</code> — create and submit in Search Console.</ChecklistItem>
                <ChecklistItem>Add schema for page types (Article, Organization, Product where relevant).</ChecklistItem>
                <ChecklistItem>Set canonical tags on every page.</ChecklistItem>
                <ChecklistItem>Manage 301 redirects for changed URLs (use sparingly; redirects can add complexity).</ChecklistItem>
                <ChecklistItem>Make sure the site is responsive and loads fast.</ChecklistItem>
              </ul>
            </RevealSection>

            {/* Stage 2 Detail */}
            <RevealSection>
              <h3 className="text-xl font-semibold mt-10 mb-4">2) Ideate — Content Planning That Converts</h3>
              <p>This is where the leverage is. Steps to follow:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Map content to levels of awareness rather than forcing a linear funnel.</li>
                <li>Audit existing pages to find gaps in the awareness map.</li>
                <li>Use the ATK model (Audience → Topic → Keywords) to plan quarters of content.</li>
                <li>Prioritize topics that tie to real product use-cases and conversion potential.</li>
              </ul>
              <p className="text-muted-foreground italic">
                A note on keyword research: keywords matter, but they should connect to audience and topic first, keywords second.
              </p>
            </RevealSection>

            {/* Stage 3 Detail */}
            <RevealSection>
              <h3 className="text-xl font-semibold mt-10 mb-4">3) Create — Briefs and Writing for SEO</h3>
              <p>A reliable process for single-article creation:</p>
              <ol className="list-decimal pl-6 space-y-2 my-4">
                <li>Search the target keyword in incognito to confirm intent.</li>
                <li>Draft an outline with proper H1 / H2 / H3 structure.</li>
                <li>Use an optimization tool if you have one (Clearscope, Surfer, etc.) to surface semantically related terms.</li>
                <li>Write with humans first: expertise, clear examples, and practical steps beat novelty.</li>
                <li>Interlink to relevant internal pages while drafting.</li>
              </ol>
              <p className="text-muted-foreground italic">
                AI can speed drafting, but human review and domain expertise are what build trust with readers and search engines.
              </p>
            </RevealSection>

            {/* Stage 4 Detail */}
            <RevealSection>
              <h3 className="text-xl font-semibold mt-10 mb-4">4) Publish — Checklist Before Hitting "Publish"</h3>
              <p>Small publishing mistakes cost visibility. Before you publish:</p>
              <ul className="list-none space-y-2 pl-0 my-4">
                <ChecklistItem>Keep H1 under ~60 characters for best SERP display.</ChecklistItem>
                <ChecklistItem>Meta description ~155 characters containing target keyword.</ChecklistItem>
                <ChecklistItem>Make the URL slug match the keyword (don't rely on auto-generated long slugs).</ChecklistItem>
                <ChecklistItem>Optimize images: use JPG where possible, aim for &lt;100 KB for thumbnails or large images.</ChecklistItem>
                <ChecklistItem>Add ALT text to every image (accessibility + image SEO).</ChecklistItem>
                <ChecklistItem>Add the new article to the sitemap and request indexing in Search Console if needed.</ChecklistItem>
                <ChecklistItem>Interlink the new post from 1–5 existing pages on your site to avoid orphan pages.</ChecklistItem>
                <ChecklistItem>If the article doesn't move after 3–6 months, start a backlink push.</ChecklistItem>
              </ul>

              <h4 className="text-lg font-semibold mt-8 mb-3">Backlink tactics that work</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Produce genuinely useful guest posts or original research.</li>
                <li>Offer to write for other SaaS blogs by showing clear keyword opportunity.</li>
                <li>Collaborate on link insertions with reputable partners.</li>
                <li>Avoid low-quality link networks and Fiverr-style link packages.</li>
              </ul>
              <p className="text-muted-foreground italic mt-4">
                Budget expectation: reputable links can cost from a few hundred to a thousand dollars each when using agencies. If you can't buy links, focus on outstanding content and outreach.
              </p>
            </RevealSection>

            {/* Stage 5 Detail */}
            <RevealSection>
              <h3 className="text-xl font-semibold mt-10 mb-4">5) Monitor — Analytics and Content Refresh</h3>
              <p>Track performance and iterate:</p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>Connect Search Console and GA4. Track conversions per landing page.</li>
                <li>Use Looker Studio (or similar) to create dashboards that segment organic, non-branded traffic.</li>
                <li>Use product analytics (Amplitude, Mixpanel) to understand on-site behavior from organic visitors.</li>
                <li>Refresh underperforming content regularly — sometimes updating an old article yields faster ROI than publishing new content.</li>
                <li>Schedule content refreshes depending on competition: quarterly for high-competition pages, annually for lower-competition ones.</li>
              </ul>
            </RevealSection>

            {/* Micro-tips Recap */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">Practical SEO Micro-Tips (Publish Checklist Recap)</h2>
              <div className="bg-muted/50 rounded-xl p-6 my-6 border border-border">
                <ul className="list-none space-y-2 pl-0">
                  <ChecklistItem>Sitemap in place and submitted.</ChecklistItem>
                  <ChecklistItem>Schema added where useful.</ChecklistItem>
                  <ChecklistItem>Canonical tags set.</ChecklistItem>
                  <ChecklistItem>Smart, minimal 301 usage.</ChecklistItem>
                  <ChecklistItem>H1 &lt; ~60 chars; meta description ~155 chars.</ChecklistItem>
                  <ChecklistItem>URL slug = target keyword.</ChecklistItem>
                  <ChecklistItem>Images optimized, named, and ALT-tagged.</ChecklistItem>
                  <ChecklistItem>Interlink newly published post from existing content.</ChecklistItem>
                  <ChecklistItem>Request indexing if you want a faster crawl.</ChecklistItem>
                </ul>
              </div>
            </RevealSection>

            {/* Final Notes */}
            <RevealSection>
              <h2 className="text-2xl font-bold mt-12 mb-4">Final Notes</h2>
              <p>
                This guide condenses actionable steps for B2B SaaS SEO into a playbook you can apply right away. Focus on getting the engine right, creating content that maps to your audience's search journey, and using links to amplify. <strong>Monitor, iterate, and refresh.</strong>
              </p>
            </RevealSection>
          </div>

          {/* Bottom Appreciation */}
          <BlogInteractions slug="blog2" variant="bottom" />

          {/* Read Full CTA */}
          <div className="mt-8 pt-8 border-t border-border">
            <a 
              href="https://thewhylayer.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              For more insights, check out The Why Layer
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
