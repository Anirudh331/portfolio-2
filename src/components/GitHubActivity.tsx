import { Rocket, Target, TrendingUp, Lightbulb } from 'lucide-react';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';

const activities = [
  {
    icon: Rocket,
    title: 'Building MVPs',
    description: 'Shipping early versions of education products to real users',
  },
  {
    icon: Target,
    title: 'Running Marketing Experiments',
    description: 'Testing content, positioning, and channels to find what works',
  },
  {
    icon: TrendingUp,
    title: 'Improving Product Positioning',
    description: 'Refining how products communicate value to the right audience',
  },
  {
    icon: Lightbulb,
    title: 'Learning Through Outcomes',
    description: 'Marketing skills built by doing, not just reading',
  },
];

const GitHubActivity = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">Currently</p>
        <h2 className="section-title">What I'm Working On</h2>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={80}>
        {activities.map((activity, index) => (
          <div key={index} className="p-4 rounded-lg border bg-card card-hover">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-md bg-muted">
                <activity.icon className="w-4 h-4 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium mb-1">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
};

export default GitHubActivity;
