import companyPromote from '@/assets/company-promote.png';
import companyUpsurge from '@/assets/company-upsurge.png';
import companyPrepeasy from '@/assets/company-prepeasy.png';
import companyExpelee from '@/assets/company-expelee.png';
import { Globe, ExternalLink } from 'lucide-react';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  isWorking?: boolean;
  skills?: string[];
  description?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'BacklogBuddy',
    logo: companyPromote,
    role: 'Founder · Product & Marketing',
    period: '2025 - Present',
    location: 'India (Remote)',
    isWorking: true,
    skills: ['Product Strategy', 'Marketing', 'Content', 'Branding', 'Landing Pages', 'User Research'],
    description: [
      'Building an education platform for university students with academic backlogs. Handling product concept, positioning, and end-to-end execution.',
      'Responsible for website structure, content flow, branding, naming, and running marketing experiments to drive traffic.',
    ],
  },
  {
    company: 'Graduate Prep Platform',
    logo: companyUpsurge,
    role: 'Founder · Product Strategy',
    period: '2024 - 2025',
    location: 'India (Remote)',
    skills: ['Audience Research', 'Content Planning', 'Information Architecture'],
    description: [
      'Developing a preparation-focused platform for graduates navigating exams and career decisions.',
    ],
  },
  {
    company: 'Independent Short Films',
    logo: companyPrepeasy,
    role: 'Director · Editor',
    period: '2022 - Present',
    location: 'India',
    skills: ['Direction', 'Editing', 'Storytelling', 'Post-Production', 'Team Leadership'],
    description: [
      'Directed short films with national-level recognition.',
      'Working with small teams and limited budgets while maintaining audience-focused storytelling.',
    ],
  },
  {
    company: 'Freelance Projects',
    logo: companyExpelee,
    role: 'Media & Marketing',
    period: '2023 - Present',
    location: 'Remote',
    description: [
      'Various video editing, graphic design, and marketing projects for clients across education and creative industries.',
    ],
  },
];

const SkillBadge = ({ name }: { name: string }) => (
  <span className="tech-badge badge-animate text-xs">{name}</span>
);

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">Featured</p>
        <h2 className="section-title">Experience</h2>
      </Reveal>

      <StaggerContainer className="space-y-4" staggerDelay={100}>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card card-hover">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-12 h-12 rounded-lg border object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold">{exp.company}</h3>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                {exp.isWorking && (
                  <span className="status-working">Active</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.role}</p>
              
              {exp.skills && (
                <div className="mt-3">
                  <p className="text-xs font-medium mb-2">Skills & Focus Areas</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              )}

              {exp.description && (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-foreground">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="text-right text-sm text-muted-foreground flex-shrink-0">
              <p>{exp.period}</p>
              <p>{exp.location}</p>
            </div>
          </div>
        ))}
      </StaggerContainer>

      <Reveal delay={400}>
        <div className="mt-8">
          <p className="text-xs font-medium mb-3 text-muted-foreground">Tools & Skills</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">Media & Creative</p>
              <p className="text-muted-foreground">Video editing, Graphic design, Visual storytelling, Direction & narrative</p>
            </div>
            <div>
              <p className="font-medium mb-2">Marketing & Growth</p>
              <p className="text-muted-foreground">Meta ads, Landing pages & copy, Audience positioning, Content strategy</p>
            </div>
            <div>
              <p className="font-medium mb-2">Product & Workflow</p>
              <p className="text-muted-foreground">Office Suite, No-code tools, Analytics, Planning workflows</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Experience;
