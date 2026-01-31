import { Monitor, Terminal, Wrench, BookOpen, Film } from 'lucide-react';

const SetupLinks = () => {
  const devSetup = [
    {
      title: 'Gears Used',
      description: 'Productivity Tools, Gears i use daily.',
      icon: Wrench,
      link: '#',
    },
    {
      title: 'VSCode / Cursor Setup',
      description: 'VSCode / Cursor setup i use daily.',
      icon: Monitor,
      link: '#',
    },
    {
      title: 'Terminal Setup',
      description: 'Terminal setup for macOS & Linux.',
      icon: Terminal,
      link: '#',
    },
  ];

  const personal = [
    {
      title: 'Books',
      description: 'Books that have influenced my thinking and growth.',
      icon: BookOpen,
      link: '#',
    },
    {
      title: 'Movies',
      description: 'Movies and shows that have inspired and entertained me.',
      icon: Film,
      link: '#',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <p className="section-label">Development</p>
      <h2 className="section-title">Setup</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {devSetup.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="flex items-start gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="section-label">Personal</p>
      <h2 className="section-title">Life</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {personal.map((item) => (
          <a
            key={item.title}
            href={item.link}
            className="flex items-start gap-3 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
          >
            <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SetupLinks;
