'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Project } from '../types/project';
import { FaAngleDown, FaExternalLinkAlt } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Image from 'next/image';


interface Props {
  project: Project;
}


export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`self-start text-dark-text font-display cursor-pointer rounded-md p-4 shadow-md border-2 border-dark-bg hover:border-light-text-secondary
        bg-dark-bg max-w-sm w-full
      `}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <h3 className="text-2xl md:text-lg font-bold mt-1 break-words">{project.title}</h3>
        </div>
        {expanded ? <FaAngleUp className="text-light-text-secondary hover:text-dark-text" /> :
                    <FaAngleDown className="text-light-text-secondary hover:text-dark-text" />}
      </div>

      {/* Expand/collapse section */}
      <div
        className={`
          overflow-hidden transition-all duration-1000 ease-in-out
          ${expanded ? "max-h-[1000px] opacity-100 mt-2" : "max-h-0 opacity-0"}
        `}
      >
        <div className="relative w-full h-48 rounded-md overflow-hidden">
          <Image
            src={project.imageUrl || '/404-not-found.jpg'}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <p className="mt-2 text-dark-text">{project.description}</p>
        <p className="mt-2 text-sm text-dark-text-secondary">
          Tech Stack: {project.techStack.join(', ')}
        </p>
        {project.imageUrl ?
        <Link
          href={`/projects/${project.slug}`}
          className="mt-2 inline-block transition-all duration-100 hover:text-blue-accent"
          onClick={(e) => e.stopPropagation()}
        >
          <FaInfoCircle className="text-4xl sm:text-lg mt-1"></FaInfoCircle>
        </Link>: null}
        {project.githubUrl ? 
        <Link
          href={project.githubUrl || '#'}
          className="mt-2 mx-2 inline-block transition-all duration-100 hover:text-blue-accent"
          onClick={(e) => e.stopPropagation()}>
          <FaGithub className="text-4xl sm:text-lg ml-1"></FaGithub>
        </Link> : null}
        {project.liveDemoUrl ?
        <Link
        href={project.liveDemoUrl || '#'}
        className="mt-2 mx-2 inline-block transition-all duration-100 hover:text-blue-accent hover:scale-110"
        onClick={(e) => e.stopPropagation()}>
        <FaExternalLinkAlt className="text-4xl sm:text-lg ml-1"></FaExternalLinkAlt>
      </Link> : null}
      </div>
    </div>
  );
}
