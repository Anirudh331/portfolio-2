import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import MouseFollower from '@/components/MouseFollower';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
import { Film } from 'lucide-react';

interface Movie {
  title: string;
  year: string;
  image: string;
}

const movies: Movie[] = [
  { title: 'Ford v Ferrari', year: '2019', image: 'https://image.tmdb.org/t/p/w500/6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg' },
  { title: 'Whiplash', year: '2014', image: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedos.jpg' },
  { title: 'The Social Network', year: '2010', image: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg' },
  { title: 'Rush', year: '2013', image: 'https://image.tmdb.org/t/p/w500/vfBFpfVYCDButBqzGREPkhY0OOk.jpg' },
  { title: 'Steve Jobs', year: '2015', image: 'https://image.tmdb.org/t/p/w500/cTh3dLzCUOJ3MHjaYKRuIXbmpE3.jpg' },
  { title: 'The Founder', year: '2016', image: 'https://image.tmdb.org/t/p/w500/eDCMONA5V0KLShlVJMq0sEQ7MJT.jpg' },
  { title: 'Silicon Valley', year: '2014', image: 'https://image.tmdb.org/t/p/w500/dc5r71XI1gD4YwIhMBBWHWNlpkF.jpg' },
  { title: 'Black Swan', year: '2010', image: 'https://image.tmdb.org/t/p/w500/rR2hJMBBhQNqSV2CEWjkuGnVjP5.jpg' },
  { title: 'The Big Short', year: '2015', image: 'https://image.tmdb.org/t/p/w500/idk04cHwpWajFjJcinMmMUDgJC0.jpg' },
  { title: 'F1', year: '2025', image: 'https://image.tmdb.org/t/p/w500/pBpMnSzQMfHPEJonJOMLOjSDfmE.jpg' },
];

const MovieCard = ({ movie }: { movie: Movie }) => (
  <div className="group rounded-xl border bg-card overflow-hidden card-hover">
    <div className="aspect-[2/3] overflow-hidden">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-sm">{movie.title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{movie.year}</p>
    </div>
  </div>
);

const Movies = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Movies — Anirudh N Raiker" description="Movies and shows that inspired Anirudh N Raiker's storytelling and creative work." canonical="https://anirudhworks.site/movies" />
      <MouseFollower />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Movies</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Movies and shows that have inspired and entertained me.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-2 mb-6 pb-4 border-b">
              <Film className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-xl font-semibold">Favorites</h2>
            </div>
          </Reveal>
          <StaggerContainer 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            staggerDelay={80}
          >
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </StaggerContainer>
        </div>

        <Reveal>
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <blockquote className="text-lg italic text-muted-foreground">
              "You have a right to perform your prescribed duty, but you are not entitled to the fruits of actions."
            </blockquote>
            <p className="mt-2 text-sm text-muted-foreground">— Bhagavad Gita</p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Movies;
