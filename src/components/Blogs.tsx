import { Link } from 'react-router-dom';
import blogMindFirst from '@/assets/blog-mind-first.svg';
import blogSeoHero from '@/assets/blog-seo-hero.png';
import blogOrganicHero from '@/assets/blog-organic-hero.png';
import blogFilmmakingImage from '@/assets/blog-filmmaking.png';
import { Reveal, StaggerContainer } from '@/hooks/useScrollReveal';

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
    date: 'January 2026',
    link: '/blog4',
  },
];

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <Link to={blog.link} className="project-card card-hover block">
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
            className="px-2 py-0.5 text-xs bg-muted rounded-full badge-animate"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{blog.date}</span>
        <span className="hover:text-foreground transition-colors link-animate">Read More</span>
      </div>
    </div>
  </Link>
);

const Blogs = () => {
  return (
    <section id="blogs" className="container mx-auto px-4 py-8">
      <Reveal>
        <p className="section-label">Writing</p>
        <h2 className="section-title">Thoughts</h2>
      </Reveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={100}>
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </StaggerContainer>

      <Reveal delay={200}>
        <Link
          to="/blog"
          className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors link-animate"
        >
          View all writing
        </Link>
      </Reveal>
    </section>
  );
};

export default Blogs;
