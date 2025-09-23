import blogPosts from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: {params: Promise<{ slug: string }>}) {
  const { slug }: {slug: string} = use(params) ;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <article className="prose mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      {post.image && (
        <Image
          src={`/images/${post.image}`}
          alt={post.title}
          className="my-4 rounded-md"
        />
      )}
      <p>{post.content}</p>
      {post.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-gray-200 px-2 py-1 text-sm text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
