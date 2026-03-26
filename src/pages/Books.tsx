import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import MouseFollower from '@/components/MouseFollower';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';
import { BookOpen } from 'lucide-react';

// Book cover imports
import bookNoLongerHuman from '@/assets/book-no-longer-human.jpg';
import bookCrimePunishment from '@/assets/book-crime-punishment.jpg';
import book1984 from '@/assets/book-1984.jpg';
import bookProjectHailMary from '@/assets/book-project-hail-mary.jpg';
import bookCountMonteCristo from '@/assets/book-count-monte-cristo.jpg';
import bookMeditations from '@/assets/book-meditations.jpg';

interface Book {
  title: string;
  author: string;
  image: string;
}

interface BookCategory {
  name: string;
  books: Book[];
}

const bookCategories: BookCategory[] = [
  {
    name: 'Fiction & Literature',
    books: [
      { title: 'No Longer Human', author: 'Osamu Dazai', image: bookNoLongerHuman },
      { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', image: bookCrimePunishment },
      { title: '1984', author: 'George Orwell', image: book1984 },
      { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', image: bookCountMonteCristo },
    ],
  },
  {
    name: 'Science Fiction',
    books: [
      { title: 'Project Hail Mary', author: 'Andy Weir', image: bookProjectHailMary },
    ],
  },
  {
    name: 'Philosophy & Stoicism',
    books: [
      { title: 'Meditations', author: 'Marcus Aurelius', image: bookMeditations },
    ],
  },
  {
    name: 'Power & Influence',
    books: [
      { title: 'The 48 Laws of Power', author: 'Robert Greene', image: 'https://covers.openlibrary.org/b/isbn/0140280197-L.jpg' },
      { title: 'The Art of Seduction', author: 'Robert Greene', image: 'https://covers.openlibrary.org/b/isbn/0142001198-L.jpg' },
      { title: 'The Laws of Human Nature', author: 'Robert Greene', image: 'https://covers.openlibrary.org/b/isbn/0525428143-L.jpg' },
      { title: 'Surrounded by Idiots', author: 'Thomas Erikson', image: 'https://covers.openlibrary.org/b/isbn/1250179947-L.jpg' },
    ],
  },
  {
    name: 'Mastery & Focus',
    books: [
      { title: 'Mastery', author: 'Robert Greene', image: 'https://covers.openlibrary.org/b/isbn/014312417X-L.jpg' },
      { title: 'Deep Work', author: 'Cal Newport', image: 'https://covers.openlibrary.org/b/isbn/1455586692-L.jpg' },
      { title: 'Limitless', author: 'Jim Kwik', image: 'https://covers.openlibrary.org/b/isbn/1401958230-L.jpg' },
    ],
  },
  {
    name: 'Discipline & Grit',
    books: [
      { title: 'No Excuses', author: 'Brian Tracy', image: 'https://covers.openlibrary.org/b/isbn/1593156324-L.jpg' },
      { title: "Can't Hurt Me", author: 'David Goggins', image: 'https://covers.openlibrary.org/b/isbn/1544512287-L.jpg' },
      { title: 'Unfuck Yourself', author: 'Gary John Bishop', image: 'https://covers.openlibrary.org/b/isbn/0062803832-L.jpg' },
    ],
  },
  {
    name: 'Meaning & Mind',
    books: [
      { title: "Man's Search for Meaning", author: 'Viktor E. Frankl', image: 'https://covers.openlibrary.org/b/isbn/0807014273-L.jpg' },
      { title: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy', image: 'https://covers.openlibrary.org/b/isbn/0735204551-L.jpg' },
    ],
  },
  {
    name: 'Habits & Systems',
    books: [
      { title: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', image: 'https://covers.openlibrary.org/b/isbn/1982137274-L.jpg' },
    ],
  },
  {
    name: 'Attention & Dopamine',
    books: [
      { title: 'Dopamine Detox', author: 'Thibaut Meurisse', image: 'https://covers.openlibrary.org/b/isbn/B0B3Y5R3S1-L.jpg' },
      { title: 'Digital Minimalism', author: 'Cal Newport', image: 'https://covers.openlibrary.org/b/isbn/0525536515-L.jpg' },
    ],
  },
  {
    name: 'Creativity',
    books: [
      { title: 'Steal Like an Artist', author: 'Austin Kleon', image: 'https://covers.openlibrary.org/b/isbn/0761169253-L.jpg' },
    ],
  },
  {
    name: 'Big Ideas',
    books: [
      { title: 'This Explains Everything', author: 'John Brockman', image: 'https://covers.openlibrary.org/b/isbn/0062230174-L.jpg' },
    ],
  },
];

const BookCard = ({ book }: { book: Book }) => (
  <div className="group rounded-xl border bg-card overflow-hidden card-hover">
    <div className="aspect-[2/3] overflow-hidden">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="font-medium text-sm">{book.title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{book.author}</p>
    </div>
  </div>
);

const Books = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title="Books — Anirudh N Raiker" description="Books that shaped Anirudh N Raiker's thinking on storytelling, product building, and life." canonical="https://anirudhworks.site/books" />
      <MouseFollower />
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <Reveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Books</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A collection of books that have influenced my thinking and growth.
            </p>
          </div>
        </Reveal>

        <div className="max-w-5xl mx-auto space-y-12">
          {bookCategories.map((category) => (
            <div key={category.name}>
              <Reveal>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <h2 className="text-xl font-semibold">{category.name}</h2>
                </div>
              </Reveal>
              <StaggerContainer 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                staggerDelay={80}
              >
                {category.books.map((book) => (
                  <BookCard key={book.title} book={book} />
                ))}
              </StaggerContainer>
            </div>
          ))}
        </div>

        <Reveal>
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <blockquote className="text-lg italic text-muted-foreground">
              "Man is made by his belief. As he believes, so he is."
            </blockquote>
            <p className="mt-2 text-sm text-muted-foreground">— Bhagavad Gita</p>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
};

export default Books;
