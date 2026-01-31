import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, ExternalLink, Brain, Eye, Lightbulb, Target } from 'lucide-react';
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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group animate-fade-in"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 bg-muted animate-scale-in">
            <img 
              src={blogTasteImage} 
              alt="Why What Comes to Mind First Wins" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>

          {/* Tags */}
          <div className="flex gap-2 mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Psychology</span>
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">Consumer Behavior</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in leading-tight" style={{ animationDelay: '0.15s' }}>
            Why What Comes to Mind First Wins Before the Marketplace
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Understanding accessibility-based decision making and why it matters for your brand.
          </p>

          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 pb-8 border-b border-border animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <Calendar className="w-4 h-4" />
            <span>January 2026</span>
            <span className="mx-2">•</span>
            <span>5 min read</span>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Intro Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg leading-relaxed text-foreground/90">
                Most marketing advice assumes consumers carefully evaluate every option before making a decision.
              </p>
              <p className="text-2xl font-semibold mt-4 text-primary">
                They don't.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-foreground/90">
                In reality, most consumer decisions are made using whatever information happens to be <span className="font-medium text-foreground">most accessible at the moment of choice</span>, not necessarily what's most accurate or most relevant. This idea sits at the center of consumer psychology and explains why small cues, timing, and framing often matter more than detailed feature lists or long explanations.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-foreground/90">
                Understanding this changes how you approach messaging, design, pricing, and even product positioning.
              </p>
              <p className="text-lg font-medium mt-6 text-foreground">
                Let's break it down.
              </p>
            </section>

            {/* Core Idea Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.35s' }}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">The Core Idea: Accessibility Beats Completeness</h2>
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">
                  When people make judgments or decisions, they rarely use all the knowledge they have. Instead, they rely on a small subset of information that <span className="font-medium text-foreground">comes to mind quickly and easily</span>.
                </p>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Attention', 'Interpretation', 'Evaluation', 'Final Decision'].map((item, index) => (
                    <div 
                      key={item}
                      className="bg-background/50 rounded-lg p-3 text-center border border-border hover:border-primary/50 transition-colors hover-scale"
                    >
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg leading-relaxed mt-6 text-foreground/90 font-medium">
                  In other words, marketing doesn't win by saying more. It wins by making the right thing easier to think about.
                </p>
              </div>
            </section>

            {/* Process Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                How Consumers Actually Process Information
              </h2>
              <p className="text-lg leading-relaxed text-foreground/90 mb-8">
                Consumer decision-making usually moves through four broad stages:
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Eye, title: 'Attention', desc: 'What gets noticed' },
                  { icon: Brain, title: 'Comprehension', desc: 'How information is interpreted' },
                  { icon: Lightbulb, title: 'Inference', desc: 'What conclusions are drawn' },
                  { icon: Target, title: 'Response', desc: 'The action taken' },
                ].map((stage, index) => (
                  <div 
                    key={stage.title}
                    className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:bg-muted group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <stage.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{stage.title}</h3>
                      <p className="text-muted-foreground">{stage.desc}</p>
                    </div>
                    <span className="ml-auto text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-lg leading-relaxed mt-8 text-foreground/90">
                At each stage, previously learned knowledge has to be activated. But not all knowledge is equally likely to show up. The brain takes shortcuts and uses what's already active or familiar.
              </p>
              <p className="text-lg leading-relaxed mt-4 text-foreground/90 italic border-l-4 border-primary pl-4">
                This is why two people can see the same product and walk away with very different impressions.
              </p>
            </section>

            {/* CTA Card */}
            <section className="animate-fade-in" style={{ animationDelay: '0.45s' }}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2">Want to read the full piece?</h3>
                  <p className="text-primary-foreground/80 mb-6">
                    Dive deeper into consumer psychology and marketing strategies.
                  </p>
                  <a 
                    href="https://medium.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors hover-scale"
                  >
                    Read full on Medium
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>

            {/* Takeaway Section */}
            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-3">
                  <Lightbulb className="w-4 h-4" />
                  KEY TAKEAWAY
                </div>
                <p className="text-xl md:text-2xl font-medium leading-relaxed">
                  Being first to mind beats being best on paper. Build mental availability through <span className="text-primary">consistent presence</span>, not just clever targeting.
                </p>
              </div>
            </section>
          </div>

          {/* Footer CTA */}
          <div className="mt-12 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.55s' }}>
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
