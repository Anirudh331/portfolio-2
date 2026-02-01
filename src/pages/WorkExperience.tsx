import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
import { ExternalLink } from 'lucide-react';

import companyPromote from '@/assets/company-promote.png';
import companyUpsurge from '@/assets/company-upsurge.png';
import companyPrepeasy from '@/assets/company-prepeasy.png';
import companyExpelee from '@/assets/company-expelee.png';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  isWorking?: boolean;
  skills?: string[];
  description?: string[];
  link?: string;
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
    link: 'https://backlogbuddy.in',
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
    period: '2020 - Present',
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

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A timeline of my professional journey and projects.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="max-w-4xl mx-auto space-y-6" staggerDelay={100}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card card-hover">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-14 h-14 rounded-lg border object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  {exp.link ? (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-lg hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {exp.company}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <h3 className="font-semibold text-lg">{exp.company}</h3>
                  )}
                  {exp.isWorking && (
                    <span className="status-working">Active</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period} · {exp.location}</p>
                
                {exp.skills && (
                  <div className="mb-4">
                    <p className="text-xs font-medium mb-2">Skills & Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <SkillBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                )}

                {exp.description && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-foreground">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="max-w-4xl mx-auto mt-12">
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
      </main>
      <Footer />
    </div>
  );
};

export default WorkExperience;
