import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
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
];

const BlogCard = ({ blog, index }: { blog: BlogPost; index: number }) => (
  <Link 
    to={blog.link} 
    className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {blog.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {blog.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {blog.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{blog.date}</span>
        </div>
        <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
          Read More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </Link>
);

const Blogs = () => {
  return (
    <section id="blogs" className="container mx-auto px-4 py-12">
      <div className="animate-fade-in">
        <p className="section-label">Writing</p>
        <h2 className="section-title">Thoughts</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.title} blog={blog} index={index} />
        ))}
      </div>

      <Link
        to="/blog"
        className="inline-flex items-center gap-2 mt-8 text-sm text-muted-foreground hover:text-primary transition-colors group animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        View all writing
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
};

export default Blogs;
