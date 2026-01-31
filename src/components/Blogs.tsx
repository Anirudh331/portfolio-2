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
    title: 'Why What Comes to Mind First Wins',
    description: 'Understanding accessibility-based decision making and why it matters for your brand',
    image: blogTaste,
    tags: ['Marketing', 'Psychology'],
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

const Blogs = () => {
  return (
    <section id="blogs" className="container mx-auto px-4 py-8">
      <p className="section-label">Writing</p>
      <h2 className="section-title">Thoughts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>

      <Link
        to="/blog"
        className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        View all writing
      </Link>
    </section>
  );
};

export default Blogs;
