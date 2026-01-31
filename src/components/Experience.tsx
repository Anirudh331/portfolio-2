import companyPromote from '@/assets/company-promote.png';
import companyUpsurge from '@/assets/company-upsurge.png';
import companyPrepeasy from '@/assets/company-prepeasy.png';
import companyExpelee from '@/assets/company-expelee.png';
import { Globe, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  company: string;
  logo: string;
  role: string;
  period: string;
  location: string;
  isWorking?: boolean;
  technologies?: string[];
  description?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'good day :3',
    logo: companyPromote,
    role: 'Founding Frontend Engineer',
    period: 'August 2025 - Present',
    location: 'United States (Remote)',
    isWorking: true,
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'React', 'Figma', 'Vercel', 'AWS', 'Postman', 'Bun'],
    description: [
      'Architected and developed the complete frontend infrastructure for the platform, a comprehensive solution for creating and managing promotional campaigns.',
      'Led a comprehensive codebase refactoring initiative that improved maintainability, scalability, and development velocity across the entire platform.',
    ],
  },
  {
    company: 'Upsurge Labs',
    logo: companyUpsurge,
    role: 'Backend Developer Intern',
    period: 'June 2025 - July 2025',
    location: 'Bangalore, India (On-Site)',
  },
  {
    company: 'Prepeasy',
    logo: companyPrepeasy,
    role: 'Founding Engineer',
    period: 'April 2025 - June 2025',
    location: 'Remote (India)',
  },
  {
    company: 'Expelee',
    logo: companyExpelee,
    role: 'SDE-1 (Full Stack) Intern',
    period: 'Aug 2023 - April 2025',
    location: 'Dubai, UAE (Remote - Freelance)',
  },
];

const TechBadge = ({ name }: { name: string }) => (
  <span className="tech-badge text-xs">{name}</span>
);

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-4 py-8">
      <p className="section-label">Featured</p>
      <h2 className="section-title">Experience</h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
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
                  <span className="status-working">Working</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.role}</p>
              
              {exp.technologies && (
                <div className="mt-3">
                  <p className="text-xs font-medium mb-2">Technologies & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
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
      </div>

      <a
        href="#"
        className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        Show all work experiences
      </a>
    </section>
  );
};

export default Experience;
