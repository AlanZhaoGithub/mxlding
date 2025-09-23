import { Project } from '@/types/project';

const projects: Project[] = [
  {
    title: 'PixelCanvas',
    slug: 'pixel-canvas',
    description: 'A collaborative pixel-art canvas inspired by reddit\'s r\/place.',
    imageUrl: 'placeholder1.jpg',
    techStack: ['JavaScript','Docker', 'Cassandra', 'Redis', 'AWS'],
  },
  {
    title: 'TinyLink',
    slug: 'tiny-link',
    description: 'A custom-built scalable URL shortener ',
    imageUrl: 'placeholder2.jpg',
    techStack: ['Python','Flask','Docker','Cassandra','Redis'],
  },
  {
    title: 'EasyChef',
    slug: 'easy-chef',
    description: 'A web platform for sharing recipes.',
    imageUrl: 'placeholder3.jpeg',
    techStack: ['Python','React', 'Django', 'Tailwind', 'HTML', 'CSS'],
  },
  {
    title: 'Three Musketeers',
    slug: 'three-musketeers',
    description: 'A Java-based implementation of the classic board game “Three Musketeers,” featuring turn-based gameplay mechanics, rule enforcement, and a playable console interface.',
    imageUrl: 'placeholder1.jpg',
    techStack: ['Java'],
  },
  {
    title: 'Franka Robot Controller',
    slug: 'franka-robot-controller',
    description: 'A ros2-based teleoperation system to control the Franka Emika Panda robot arm using a webcam as the input device.',
    imageUrl: 'placeholder2.jpg',
    techStack: ['Python', 'C++','Ros2', 'Mediapipe'],
  },
  {
    title: 'Benchmarking LLMs with RAG-IR',
    slug: 'benchmarking-llms-with-rag-ir',
    description: 'A performance analysis of large language models w & w/out RAG-IR on the efficacy and accuracy of answering natural questions dataset.',
    imageUrl: 'placeholder2.jpg',
    techStack: ['Python', 'HuggingFace'],
  },
  {
    title: 'Personal Portfolio Website',
    slug: 'personal-portfolio-website',
    description: 'A personal portfolio website to showcase my projects and skills, built with modern web technologies.',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    githubUrl: "https://www.github.com/alanzhaogithub/mxlding.git",
    liveDemoUrl: "http://alanzhaogithub.github.io/mxlding",
  },
];

export default projects;
