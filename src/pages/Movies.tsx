import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MouseFollower from '@/components/MouseFollower';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
import { Film } from 'lucide-react';

interface Movie {
  title: string;
  year: string;
  image: string;
}

const movies: Movie[] = [
  { title: 'Ford v Ferrari', year: '2019', image: 'https://cms.ramx.in/uploads/ford_4f7f595581.jpg' },
  { title: 'Whiplash', year: '2014', image: 'https://cms.ramx.in/uploads/whip_25bfdde04d.jpg' },
  { title: 'The Social Network', year: '2010', image: 'https://cms.ramx.in/uploads/ss_3f59430235.jpg' },
  { title: 'Rush', year: '2013', image: 'https://cms.ramx.in/uploads/rush_34ea6012d7.jpg' },
  { title: 'Steve Jobs', year: '2015', image: 'https://cms.ramx.in/uploads/steve_cfaa2406dc.jpeg' },
  { title: 'The Founder', year: '2016', image: 'https://cms.ramx.in/uploads/f_313d80b8d8.jpg' },
  { title: 'Silicon Valley', year: '2014', image: 'https://cms.ramx.in/uploads/sili_5ab26d4209.jpg' },
  { title: 'Black Swan', year: '2010', image: 'https://cms.ramx.in/uploads/black_edb302a741.jpg' },
  { title: 'The Big Short', year: '2015', image: 'https://cms.ramx.in/uploads/the_big_short_60be421959.jpg' },
  { title: 'F1', year: '2019', image: 'https://cms.ramx.in/uploads/f1_8dc82c8172.png' },
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
