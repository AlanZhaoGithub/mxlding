import blogPosts from '@data/blog';
import BlogCard from '@components/BlogCard';
import Header from '@/components/Header';
import Particles from '@/components/Particles';

export default function BlogPage() {
  return (
      <div className="animate-[fade-in_0.3s_forwards]">
        <Header></Header>
        <Particles
          className="absolute inset-0 -z-10 animate-pulse"
          quantity={100}
          staticity={10}
        />
        <Particles
          className="absolute inset-0 -z-12 animate-[spin_50s_ease-in-out_infinite]"
          quantity={100}
          staticity={40}
        />
        <div className="pt-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-dark-text md:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-dark-text-secondary">
            Thoughts and insights on technology, life, and even some deep dives 
            into high-level League of Legends concepts.          
          </p>
          <div className="w-full h-px my-10 bg-zinc-800" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-8 md:p-16 gap-6 justify-items-center">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
