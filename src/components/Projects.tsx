import projectNotesbuddy from '@/assets/project-notesbuddy.png';
import projectStudydeck from '@/assets/project-studydeck.png';
import projectSyncify from '@/assets/project-syncify.png';
import projectPasandida from '@/assets/project-pasandida.png';
import { Rocket, Film, BookOpen } from 'lucide-react';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';

interface Project {
  name: string;
  image: string;
  description: string;
  status: string;
  statusIcon: 'building' | 'concept' | 'completed';
  link: string;
}

const projects: Project[] = [
  {
    name: 'BacklogBuddy',
    image: projectNotesbuddy,
    description: 'A student-focused education platform addressing academic backlogs. Built for university students who need structured support.',
    status: 'MVP / Early Build',
    statusIcon: 'building',
    link: 'https://backlogbuddy.in',
  },
  {
    name: 'StudyDeck',
    image: projectAppwrite,
    description: 'A preparation ecosystem for graduates navigating exams and career decisions. Focused on clarity over overwhelm.',
    status: 'Concept + Development',
    statusIcon: 'concept',
    link: 'https://studydeck.in',
  },
];

const StatusIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'building':
      return <Rocket className="w-3.5 h-3.5 text-yellow-500" />;
    case 'concept':
      return <BookOpen className="w-3.5 h-3.5 text-blue-500" />;
    case 'completed':
      return <Film className="w-3.5 h-3.5 text-green-500" />;
    default:
      return null;
  }
};

const ProjectCard = ({ project }: { project: Project }) => (
  <a href={project.link} className="project-card card-hover block">
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs">
          <StatusIcon type={project.statusIcon} />
          <span className="text-muted-foreground">{project.status}</span>
        </div>
        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors link-animate">
          Learn More
        </span>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">Featured</p>
        <h2 className="section-title">Projects</h2>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={100}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </StaggerContainer>

      <Reveal delay={200}>
        <a
          href="#"
          className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors link-animate"
        >
          View all work
        </a>
      </Reveal>
    </section>
  );
};

export default Projects;
