import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReadingProgress from '@/components/ReadingProgress';
import BlogInteractions from '@/components/BlogInteractions';
import { ArrowLeft, Calendar, ExternalLink, Film, Eye, Target, Zap, Clock, User, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import blogFilmmakingImage from '@/assets/blog-filmmaking.png';

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const InsightCard = ({ icon, title, children }: InsightCardProps) => (
  <div className="bg-muted/30 border border-border rounded-xl p-6 my-6">
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
);

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
    {children}
  </span>
);

const Blog4 = () => {
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
              src={blogFilmmakingImage} 
              alt="Filmmaking and product storytelling" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Storytelling</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Product</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted rounded-full">Marketing</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What filmmaking taught me about product storytelling
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-4">
            Lessons from watching audiences drift away — and what it means for how we explain products.
          </p>

          {/* Date Row */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            <Calendar className="w-4 h-4" />
            <span>December 2025</span>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              I didn't learn storytelling from decks, frameworks, or growth threads. I learned it by watching people <Highlight>lose attention</Highlight>.
            </p>

            <p>
              Not dramatically. Not angrily. Just quietly drifting away.
            </p>

            <p>
              That's the part no one warns you about. Audiences don't leave because something is bad. They leave because it doesn't give them a reason to stay.
            </p>

            <p>
              That lesson followed me everywhere. Especially into how products are explained, marketed, and positioned.
            </p>

            <p className="text-muted-foreground italic border-l-2 border-primary pl-4">
              This isn't a story about filmmaking as a craft. It's about what working close to stories taught me about how people actually understand products — and why most product storytelling fails before it even starts.
            </p>

            <InsightCard icon={<Film className="w-5 h-5" />} title="Storytelling starts before the story">
              <p>
                In films, the story doesn't begin when the dialogue starts. It begins earlier.
              </p>
              <p>
                With a frame. With a tone. With a signal that tells the viewer: <strong>this is worth your attention</strong>.
              </p>
              <p>
                Products work the same way. Most product pages jump straight into features, slogans, or claims. But users haven't decided to listen yet. They're still asking a quieter question:
              </p>
              <p className="text-foreground font-medium">
                "Why should I care about this?"
              </p>
              <p>
                If you miss that moment, nothing that follows matters. Good storytelling doesn't rush. It earns attention first.
              </p>
            </InsightCard>

            <InsightCard icon={<Eye className="w-5 h-5" />} title="People don't want plots. They want orientation.">
              <p>
                In filmmaking, clarity beats cleverness every time. Viewers don't want to be impressed. They want to know:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Where am I?</li>
                <li>Who is this for?</li>
                <li>What kind of experience am I about to have?</li>
              </ul>
              <p className="mt-3">
                Products are no different. When someone lands on a product page, they're disoriented. New interface. New language. New promises. If you don't orient them quickly, they mentally check out.
              </p>
              <p>
                This is why vague positioning kills good products. "Everything you need to scale faster" sounds nice, but it tells people nothing about whether this is for them.
              </p>
              <p className="text-foreground font-medium">
                Clear beats poetic. Always.
              </p>
            </InsightCard>

            <InsightCard icon={<Target className="w-5 h-5" />} title="Conflict is more important than capability">
              <p>
                One of the biggest mistakes in product storytelling is over-explaining what a product can do instead of acknowledging what the user is struggling with.
              </p>
              <p>
                In stories, conflict drives attention. Without it, there is no momentum.
              </p>
              <p>
                Products often skip conflict entirely. They list features, integrations, dashboards, metrics. But users don't wake up wanting features. They wake up <Highlight>annoyed, anxious, blocked, or confused</Highlight>.
              </p>
              <p>
                Strong product storytelling starts with friction:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>What's broken?</li>
                <li>What's slow?</li>
                <li>What feels embarrassing, risky, or exhausting?</li>
              </ul>
              <p className="mt-3">
                If the story doesn't reflect the user's internal problem, the product feels irrelevant — no matter how powerful it is.
              </p>
            </InsightCard>

            <InsightCard icon={<Zap className="w-5 h-5" />} title="Subtlety builds trust">
              <p>
                In films, the most effective moments are rarely shouted. They're implied.
              </p>
              <p>
                A look instead of a speech. A pause instead of an explanation. Over-selling breaks immersion.
              </p>
              <p>
                Product storytelling has the same problem. When everything is framed as "best", "fastest", or "most powerful", nothing feels believable.
              </p>
              <p className="text-foreground font-medium">
                Confidence doesn't need volume.
              </p>
              <p>
                Showing how something fits naturally into a user's workflow is more persuasive than telling them it will "change everything". People trust what feels grounded, not grand.
              </p>
            </InsightCard>

            <InsightCard icon={<Clock className="w-5 h-5" />} title="Pacing matters more than polish">
              <p>
                A technically perfect scene can still fail if it's poorly paced. The same applies to product narratives.
              </p>
              <p>
                Many product pages dump information all at once: feature grids, long blocks of text, endless screenshots. That's not storytelling. That's noise.
              </p>
              <p>
                Good pacing means:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Introducing one idea at a time</li>
                <li>Letting the user process before moving on</li>
                <li>Knowing when to stop explaining</li>
              </ul>
              <p className="mt-3 text-foreground font-medium">
                Less information, arranged well, beats more information every time.
              </p>
            </InsightCard>

            <InsightCard icon={<User className="w-5 h-5" />} title="The user is the protagonist, not the product">
              <p>
                This is obvious, yet constantly ignored.
              </p>
              <p>
                In stories, the audience doesn't care about the world unless they care about the character moving through it. In product storytelling, the user is that character.
              </p>
              <p className="text-foreground font-medium">
                The product is not the hero. It's the tool.
              </p>
              <p>
                When messaging centers the product too much, it creates distance. When it centers the user's journey, it creates alignment.
              </p>
              <p>
                People don't want to admire your product. They want to see themselves using it.
              </p>
            </InsightCard>

            <InsightCard icon={<Flag className="w-5 h-5" />} title="Endings matter more than openings">
              <p>
                Openings grab attention. Endings decide memory.
              </p>
              <p>
                In films, people often remember how something made them feel at the end, not the beginning. Product storytelling is the same.
              </p>
              <p>
                What happens after the explanation matters:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Do users feel confident?</li>
                <li>Relieved?</li>
                <li>Curious?</li>
                <li>Ready to act?</li>
              </ul>
              <p className="mt-3">
                If the story ends with confusion or overload, the product loses momentum.
              </p>
              <p className="text-foreground font-medium">
                A clear next step beats a clever closing line.
              </p>
            </InsightCard>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-8 my-8">
              <h2 className="text-xl font-bold mb-4">Final thought</h2>
              <p className="text-muted-foreground mb-4">
                Storytelling isn't about drama. It's about empathy, clarity, and restraint.
              </p>
              <p className="text-muted-foreground mb-4">
                The biggest lesson I learned is simple:
              </p>
              <p className="text-lg font-semibold text-foreground">
                People don't want to be convinced. They want to be understood.
              </p>
              <p className="text-muted-foreground mt-4">
                When a product story reflects how someone already thinks and feels, trust follows naturally. No hype required.
              </p>
              <p className="text-primary font-medium mt-4">
                That's the kind of storytelling that lasts.
              </p>
            </div>
          </div>

          {/* Bottom Appreciation */}
          <BlogInteractions slug="blog4" variant="bottom" />

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

export default Blog4;
