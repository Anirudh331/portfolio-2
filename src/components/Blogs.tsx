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
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'Why most student platforms fail',
    description: 'Observations from building in the education space',
    image: blogGo,
    tags: ['Product', 'Education'],
    date: 'December 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'Building before being ready',
    description: 'Why waiting for the perfect moment kills more ideas than bad execution',
    image: blogTaste,
    tags: ['Mindset', 'Product'],
    date: 'November 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'The myth of the target audience',
    description: 'How I stopped guessing and started listening to real users',
    image: blogGo,
    tags: ['Marketing', 'Strategy'],
    date: 'October 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'What film direction taught me about product design',
    description: 'Lessons from framing shots that apply to framing user experiences',
    image: blogTaste,
    tags: ['Design', 'Storytelling'],
    date: 'September 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'Running experiments without a budget',
    description: 'How I test marketing ideas with zero ad spend and real feedback',
    image: blogGo,
    tags: ['Marketing', 'Growth'],
    date: 'August 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
  {
    title: 'Why I stopped chasing virality',
    description: 'The shift from reach to resonance in content strategy',
    image: blogTaste,
    tags: ['Content', 'Strategy'],
    date: 'July 2025',
    link: 'https://ramx.in/blog/what-is-taste-and-how-can-you-develop-it',
  },
];

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <a href={blog.link} target="_blank" rel="noopener noreferrer" className="project-card block">
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
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
        <span>{blog.date}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        To read full, check out at{' '}
        <span className="text-primary hover:underline font-medium">The Why Layer</span>
      </p>
    </div>
  </a>
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

      <a
        href="#"
        className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        View all writing
      </a>
    </section>
  );
};

export default Blogs;
