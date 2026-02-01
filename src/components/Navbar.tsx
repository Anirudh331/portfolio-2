import { useState, useEffect } from 'react';
import { Search, Sun, Moon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import headerLogoLight from '@/assets/header-logo-light.png';
import headerLogoDark from '@/assets/header-logo-dark.png';
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
  const location = useLocation();

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark');
  };

  // Handle navigation to section (works from any page)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
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
          <div className="flex items-center gap-6">
            <a href="/" className="hover-scale will-change-transform flex-shrink-0" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
              <div className="relative h-14 w-14">
                <img
                  src={headerLogoLight}
                  alt="ANR Logo"
                  loading="eager"
                  fetchPriority="high"
                  className="absolute inset-0 h-14 w-14 object-contain dark:opacity-0 transition-opacity duration-0"
                />
                <img
                  src={headerLogoDark}
                  alt="ANR Logo"
                  loading="eager"
                  fetchPriority="high"
                  className="absolute inset-0 h-14 w-14 object-contain opacity-0 dark:opacity-100 transition-opacity duration-0"
                />
              </div>
            </a>
            <nav className="hidden sm:flex items-center gap-4">
              <a href="/#experience" className="nav-link" onClick={(e) => handleNavClick(e, 'experience')}>Work</a>
              <a href="/#blogs" className="nav-link" onClick={(e) => handleNavClick(e, 'blogs')}>Blogs</a>
              <a href="/#projects" className="nav-link" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
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
