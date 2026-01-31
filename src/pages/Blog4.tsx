import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog4 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-2xl mx-auto">
          <p className="text-sm text-muted-foreground mb-2">October 2025</p>
          <h1 className="text-3xl font-bold mb-4">From filmmaker to founder</h1>
          <div className="flex gap-2 mb-8">
            <span className="px-2 py-0.5 text-xs bg-muted rounded-full">Journey</span>
            <span className="px-2 py-0.5 text-xs bg-muted rounded-full">Media</span>
          </div>
          <div className="prose prose-neutral dark:prose-invert">
            <p className="text-muted-foreground">
              How directing short films prepared me for building products. Content coming soon.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Blog4;
