import projectNotesbuddy from '@/assets/project-notesbuddy.png';
import projectAppwrite from '@/assets/project-appwrite.png';
import projectSyncify from '@/assets/project-syncify.png';
import projectPasandida from '@/assets/project-pasandida.png';
import { CheckCircle, Loader2 } from 'lucide-react';

interface Project {
  name: string;
  image: string;
  description: string;
  status: 'operational' | 'building';
  link: string;
}

const projects: Project[] = [
  {
    name: 'NotesBuddy',
    image: projectNotesbuddy,
    description: 'A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools',
    status: 'operational',
    link: '#',
  },
  {
    name: 'Appwrite MCP Server',
    image: projectAppwrite,
    description: 'Model Context Protocol server for seamless Appwrite database operations with 7 powerful tools and 99.9% success rate',
    status: 'operational',
    link: '#',
  },
  {
    name: 'Syncify',
    image: projectSyncify,
    description: 'Real-time music streaming platform with synchronized playback, live chat, and social listening features',
    status: 'operational',
    link: '#',
  },
  {
    name: 'Pasandida Aurat',
    image: projectPasandida,
    description: 'Innovative dating platform featuring anonymous questions and authentic connections - currently in development',
    status: 'building',
    link: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a href={project.link} className="project-card block">
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
          {project.status === 'operational' ? (
            <>
              <CheckCircle className="w-3.5 h-3.5 text-green-500" />
              <span className="text-green-600">All Systems Operational</span>
            </>
          ) : (
            <>
              <Loader2 className="w-3.5 h-3.5 text-yellow-500 animate-spin" />
              <span className="text-yellow-600">Building</span>
            </>
          )}
        </div>
        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          View Details
        </span>
      </div>
    </div>
  </a>
);

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-8">
      <p className="section-label">Featured</p>
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <a
        href="#"
        className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        Show all projects
      </a>
    </section>
  );
};

export default Projects;
