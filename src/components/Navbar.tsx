import { useState, useEffect } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import profileAvatar from '@/assets/profile-avatar.png';
import profileAvatarDark from '@/assets/profile-avatar-dark.png';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

const searchItems = [
  { title: 'Home', href: '/', category: 'Pages' },
  { title: 'Work Experience', href: '/#experience', category: 'Pages' },
  { title: 'Projects', href: '/#projects', category: 'Pages' },
  { title: 'All Blogs', href: '/blog', category: 'Pages' },
  { title: 'Books', href: '/books', category: 'Pages' },
  { title: 'Movies', href: '/movies', category: 'Pages' },
  { title: 'What storytelling teaches marketing', href: '/blog1', category: 'Blogs' },
  { title: 'Why most student platforms fail', href: '/blog2', category: 'Blogs' },
  { title: 'Building before being ready', href: '/blog3', category: 'Blogs' },
  { title: 'From filmmaker to founder', href: '/blog4', category: 'Blogs' },
  { title: 'Learning marketing by doing', href: '/blog5', category: 'Blogs' },
];

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'));
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark');
  };

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      navigate('/');
      setTimeout(() => {
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      navigate(href);
    }
  };

  const groupedItems = searchItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof searchItems>);

  return (
    <>
      <header className="container mx-auto sticky top-0 z-50 py-4 glass-nav">
        <div className="flex items-center justify-between px-2">
          <div className="flex items-baseline gap-4">
            <a href="/" className="hover-scale will-change-transform">
              <div className="relative h-12 w-12">
                <img
                  src={profileAvatar}
                  alt="Ram"
                  className="absolute inset-0 h-12 w-12 rounded-md border border-border dark:opacity-0 transition-opacity duration-0"
                />
                <img
                  src={profileAvatarDark}
                  alt="Ram"
                  className="absolute inset-0 h-12 w-12 rounded-md border border-border opacity-0 dark:opacity-100 transition-opacity duration-0"
                />
              </div>
            </a>
            <nav className="flex items-baseline gap-4">
              <a href="#experience" className="nav-link">Work</a>
              <a href="#blogs" className="nav-link">Blogs</a>
              <a href="#projects" className="nav-link">Projects</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted rounded-md hover:bg-muted/80 transition-colors"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-background rounded border">
                <span>Ctrl</span>
                <span>+</span>
                <span>K</span>
              </kbd>
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, blogs..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {Object.entries(groupedItems).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleSelect(item.href)}
                  className="cursor-pointer"
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Navbar;
