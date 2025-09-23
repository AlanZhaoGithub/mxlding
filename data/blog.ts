import { BlogPost } from 'types/blog';

const blogPosts: BlogPost[] = [
  {
    title: 'First Post!',
    slug: 'getting-started-with-nextjs',
    excerpt: 'An introduction to Next.js and building a portfolio site.',
    content: 'HIhIHIHI',
    date: '2025-09-20',
    image: 'placeholder1.jpg',
    tags: ['JavaScript','Docker', 'Cassandra', 'Redis', 'AWS'],
  },
  {
    title: 'TypeScript Tips',
    slug: 'typescript-tips',
    excerpt: 'Some useful tips for using TypeScript in your projects.',
    content: 'Full content of TypeScript Tips post goes here.',
    date: '2025-09-18',
    image: 'placeholder2.jpg',
  },
  {
    title: 'TailwindCSS Basics',
    slug: 'tailwindcss-basics',
    excerpt: 'A simple guide to using TailwindCSS effectively.',
    content: 'Full content for TailwindCSS Basics post.',
    date: '2025-09-15',
    image: 'placeholder3.jpeg',
  },
  {
    title: 'League of Legends Basics',
    slug: 'league-basics',
    excerpt: 'A simple guide to using TailwindCSS effectively.',
    content: 'Full content for TailwindCSS Basics post.',
    date: '2025-09-15',
    tags: ['League of Legends']
  },
];

export default blogPosts;
