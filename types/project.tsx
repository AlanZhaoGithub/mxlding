export interface Project {
    title: string;           // Project title
    slug: string;            // URL-friendly identifier
    description: string;     // Short description of the project
    imageUrl?: string;           // Path to project image
    techStack: string[];     // List of technologies used
    githubUrl?: string;    // Optional GitHub URL
    liveDemoUrl?: string;  // Optional live demo URL
  }
  