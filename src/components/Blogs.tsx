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
    title: 'What is taste and how can you develop it?',
    description: 'Understanding what is taste, resources and how to practice',
    image: blogTaste,
    tags: ['Frontend', 'Design'],
    date: 'December 6, 2025',
    link: '#',
  },
  {
    title: 'Go in bits',
    description: "Archive of all the links from my socials for go tuts.",
    image: blogGo,
    tags: ['Go', 'Development', 'Backend'],
    date: 'October 1, 2025',
    link: '#',
  },
];

const BlogCard = ({ blog }: { blog: BlogPost }) => (
  <a href={blog.link} className="project-card block">
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
  </a>
);

const Blogs = () => {
  return (
    <section id="blogs" className="container mx-auto px-4 py-8">
      <p className="section-label">Featured</p>
      <h2 className="section-title">Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} blog={blog} />
        ))}
      </div>

      <a
        href="#"
        className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
      >
        Show all blogs
      </a>
    </section>
  );
};

export default Blogs;
