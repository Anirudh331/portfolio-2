import { useNavigate } from 'react-router-dom';
import companyPromote from '@/assets/company-promote.png';
import companyUpsurge from '@/assets/company-upsurge.png';
import companyPrepeasy from '@/assets/company-prepeasy.png';
import companyExpelee from '@/assets/company-expelee.png';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  isWorking?: boolean;
  link?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: 'BacklogBuddy',
    logo: companyPromote,
    role: 'Founder · Product & Marketing',
    period: '2025 - Present',
    isWorking: true,
    link: 'https://backlogbuddy.in',
  },
  {
    company: 'Graduate Prep Platform',
    logo: companyUpsurge,
    role: 'Founder · Product Strategy',
    period: '2024 - 2025',
  },
  {
    company: 'Independent Short Films',
    logo: companyPrepeasy,
    role: 'Director · Editor',
    period: '2020 - Present',
  },
  {
    company: 'Freelance Projects',
    logo: companyExpelee,
    role: 'Media & Marketing',
    period: '2023 - Present',
  },
];

const Experience = () => {
  const navigate = useNavigate();

  return (
    <section id="experience" className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">Featured</p>
        <h2 className="section-title">Experience</h2>
      </Reveal>

      <StaggerContainer className="space-y-3" staggerDelay={100}>
        {experiences.map((exp, index) => {
          const CardWrapper = exp.link ? 'a' : 'div';
          const cardProps = exp.link ? { href: exp.link, target: '_blank', rel: 'noopener noreferrer' } : {};
          
          return (
            <CardWrapper key={index} {...cardProps} className="experience-card card-hover py-3">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-10 h-10 rounded-lg border object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{exp.company}</h3>
                  {exp.isWorking && (
                    <span className="status-working">Active</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{exp.role}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground flex-shrink-0">
                <p>{exp.period}</p>
              </div>
            </CardWrapper>
          );
        })}
      </StaggerContainer>

      <Reveal delay={300}>
        <button
          onClick={() => navigate('/work-experience')}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          View all experience
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </Reveal>
    </section>
  );
};

export default Experience;
