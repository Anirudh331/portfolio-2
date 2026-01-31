import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import blogTaste from '@/assets/blog-taste.png';
import blogGo from '@/assets/blog-go.png';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link: string;
}

const blogs: BlogPost[] = [
  {
    title: 'What storytelling teaches marketing',
    description: 'How directing films shaped the way I think about positioning and audience',
    image: blogTaste,
    tags: ['Marketing', 'Storytelling'],
    date: 'January 2026',
    link: '/blog1',
  },
  {
    title: 'Why most student platforms fail',
    description: 'Observations from building in the education space',
    image: blogGo,
    tags: ['Product', 'Education'],
    date: 'December 2025',
    link: '/blog2',
  },
  {
    title: 'Building before being ready',
    description: 'Why waiting for the perfect moment is the biggest trap',
    image: blogTaste,
    tags: ['Mindset', 'Startups'],
    date: 'November 2025',
    link: '/blog3',
  },
  {
    title: 'The art of simple positioning',
    description: 'What I learned about clarity from making short films',
    image: blogGo,
    tags: ['Marketing', 'Film'],
    date: 'October 2025',
    link: '/blog4',
  },
  {
    title: 'Learning marketing by doing',
    description: 'Real experiments over theoretical frameworks',
    image: blogTaste,
    tags: ['Marketing', 'Growth'],
    date: 'September 2025',
    link: '/blog5',
  },
];

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <Link to={blog.link} className="project-card block">
    <div className="aspect-video overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold mb-2">{blog.title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{blog.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs bg-muted rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{blog.date}</span>
        <span className="hover:text-foreground transition-colors">Read More</span>
      </div>
    </div>
  </Link>
);

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <p className="section-label">Writing</p>
        <h1 className="section-title mb-8">All Thoughts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.title} blog={blog} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
