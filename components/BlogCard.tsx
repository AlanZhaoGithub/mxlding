import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '../types/blog';


interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="
        flex flex-col sm:flex-row bg-dark-bg rounded-lg overflow-hidden
        cursor-pointer shadow-md hover:shadow-lg w-full max-w-4xl
        p-4">
        
        <div className="relative w-full sm:w-1/3 h-40 sm:h-auto">
          <Image
            src={post.image ? post.image : '404-not-found.jpg'}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
      </div>
      <div className="flex flex-col p-4 w-full sm:w-2/3">
        <h2 className="text-dark-text font-bold mb-1 truncate">{post.title}</h2>
        <p className="text-dark-text-secondary text-sm mb-2">{post.date}</p>
        <p className="text-dark-text text-sm line-clamp-3">{post.excerpt}</p>
      </div>
    </Link>
  );
}
