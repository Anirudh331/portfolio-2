import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';
import projectNotesbuddy from '@/assets/project-notesbuddy.png';
import projectStudydeck from '@/assets/project-studydeck.png';
import projectKitro from '@/assets/project-kitro.png';
import { Rocket, BookOpen, Wrench } from 'lucide-react';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
interface Project {
  name: string;
  image: string;
  description: string;
  longDescription: string;
  status: string;
  statusIcon: 'building' | 'concept' | 'completed' | 'live';
  link: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: 'BacklogBuddy',
    image: projectNotesbuddy,
    description: 'A student-focused education platform addressing academic backlogs. Built for university students who need structured support.',
    longDescription: 'BacklogBuddy helps university students clear their academic backlogs with structured study plans, curated resources, and progress tracking — all tailored to their syllabus.',
    status: 'MVP / Early Build',
    statusIcon: 'building',
    link: 'https://backlogbuddy.in',
    tags: ['EdTech', 'Students', 'Platform'],
  },
  {
    name: 'StudyDeck',
    image: projectStudydeck,
    description: 'A preparation ecosystem for graduates navigating exams and career decisions. Focused on clarity over overwhelm.',
    longDescription: 'StudyDeck is a preparation ecosystem designed for graduates who feel overwhelmed by career choices and competitive exams. It brings clarity through curated paths and community.',
    status: 'Concept + Development',
    statusIcon: 'concept',
    link: 'https://studydeck.in',
    tags: ['EdTech', 'Career', 'Ecosystem'],
  },
  {
    name: 'Kitro.in',
    image: projectKitro,
    description: 'Marketing Decision Tools — Free & Private. Helping marketers make faster, smarter decisions without sharing sensitive data.',
    longDescription: 'Kitro.in offers a suite of free, privacy-first marketing decision tools. From budget allocators to campaign planners — everything runs locally with zero data collection.',
    status: 'Live',
    statusIcon: 'live',
    link: 'https://kitro.in',
    tags: ['Marketing', 'Tools', 'Privacy'],
  },
];

const StatusIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'building':
      return <Rocket className="w-4 h-4 text-yellow-500" />;
    case 'concept':
      return <BookOpen className="w-4 h-4 text-blue-500" />;
    case 'live':
      return <Wrench className="w-4 h-4 text-green-500" />;
    default:
      return null;
  }
};

const FeaturedProjects = () => {
  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <Reveal>
          <p className="section-label">Featured</p>
          <h1 className="section-title text-3xl md:text-4xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground mb-10 max-w-xl">
            Things I'm building, shipping, or thinking about. Each project reflects a real problem I wanted to solve.
          </p>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 gap-6" staggerDelay={120}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card card-hover block"
            >
              <div className="flex flex-col md:flex-row">
                {project.image ? (
                  <div className="md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="md:w-2/5 aspect-video md:aspect-auto bg-muted flex items-center justify-center">
                    <span className="text-4xl font-bold text-muted-foreground/30">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs">
                      <StatusIcon type={project.statusIcon} />
                      <span className="text-muted-foreground">{project.status}</span>
                    </div>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors link-animate">
                      Visit →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </StaggerContainer>
      </main>
      <Footer />
    </div>
  );
};

export default FeaturedProjects;
