import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import blogMindFirst from '@/assets/blog-mind-first.svg';
import blogSeoHero from '@/assets/blog-seo-hero.png';
import blogOrganicHero from '@/assets/blog-organic-hero.png';
import blogFilmmakingImage from '@/assets/blog-filmmaking.png';
import blogStorytellingImage from '@/assets/blog-storytelling-vs-performance.png';

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
    image: blogMindFirst,
    tags: ['Marketing', 'Psychology'],
    date: 'January 2026',
    link: '/blog1',
  },
  {
    title: 'B2B SaaS SEO: A Compact Playbook for 2026',
    description: 'A straight-to-the-point guide to build a repeatable SEO approach for SaaS',
    image: blogSeoHero,
    tags: ['SEO', 'SaaS', 'Marketing'],
    date: 'January 2026',
    link: '/blog2',
  },
  {
    title: '5 High-Leverage Organic Growth Strategies for 2026',
    description: 'Systems that compound over time. Nothing flashy. Nothing theoretical.',
    image: blogOrganicHero,
    tags: ['Marketing', 'Growth', 'Strategy'],
    date: 'January 2026',
    link: '/blog3',
  },
  {
    title: 'What Filmmaking Taught Me About Product Storytelling',
    description: 'Lessons from watching audiences drift away — and what it means for how we explain products.',
    image: blogFilmmakingImage,
    tags: ['Storytelling', 'Product', 'Marketing'],
    date: 'December 2025',
    link: '/blog4',
  },
  {
    title: 'Storytelling vs Performance Marketing: A False Fight',
    description: 'The debate keeps coming back. But the tension only exists when you look at each in isolation.',
    image: blogStorytellingImage,
    tags: ['Marketing', 'Strategy', 'Growth'],
    date: 'October 2025',
    link: '/blog5',
  },
];

// Extract all unique tags with counts
const tagCounts = blogs.reduce((acc, blog) => {
  blog.tags.forEach(tag => {
    acc[tag] = (acc[tag] || 0) + 1;
  });
  return acc;
}, {} as Record<string, number>);

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <Link to={blog.link} className="group block bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
    <div className="aspect-video overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            className="px-3 py-1 text-xs font-medium bg-muted rounded-full"
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

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blogs</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on building, marketing, and storytelling.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-10" />

        {/* Popular Tags */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4">Popular Tags</h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(tagCounts).map(([tag, count]) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm font-medium bg-muted hover:bg-muted/80 rounded-full cursor-pointer transition-colors"
              >
                {tag} ({count})
              </span>
            ))}
          </div>
        </div>

        {/* Latest Posts */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold">
            Latest Posts <span className="text-muted-foreground font-normal">({blogs.length} posts)</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
