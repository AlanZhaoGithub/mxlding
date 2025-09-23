import { notFound } from 'next/navigation';
import blogPosts from '@data/blog';

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div>{post.content}</div>
    </article>
  );
}
