export interface BlogPost {
    title: string;           // Blog post title
    slug: string;            // URL-friendly identifier
    excerpt: string;         // Short summary of the blog post
    content: string;         // Full content of the post
    date: string;            // Publication date
    image?: string;
    tags?: string[];
  }
  