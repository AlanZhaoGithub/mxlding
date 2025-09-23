'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Project } from '../types/project';
import { FaAngleDown, FaGit } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";


interface Props {
  project: Project;
}


export default function ProjectCard({ project }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`text-dark-text font-display cursor-pointer rounded-md p-4 shadow-md border-2 border-dark-bg hover:border-light-text-secondary
        bg-dark-bg max-w-sm w-full
      `}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <h3 className="text-lg font-bold">{project.title}</h3>
          {expanded ? null:
          <div className="ml-2">
            <Link
            href={`/projects/${project.slug}`}
            className="mt-2 inline-block transition-all duration-100 hover:text-blue-accent"
            onClick={(e) => e.stopPropagation()}>
            <FaInfoCircle></FaInfoCircle>
            </Link>
            <Link
              href={`https://github.com/alanzhaogithub/`}
              className="mt-2 mx-2 inline-block transition-all duration-100 hover:text-blue-accent"
              onClick={(e) => e.stopPropagation()}>
              <FaGithub></FaGithub>
            </Link>
          </div>
          }
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
        <img
          src={project.image}
          alt={project.title}
          className="rounded-md w-full h-48 object-cover"
        />
        <p className="mt-2 text-dark-text">{project.description}</p>
        <p className="mt-1 text-sm text-dark-text-secondary">
          Tech Stack: {project.techStack.join(', ')}
        </p>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-2 inline-block transition-all duration-100 hover:text-blue-accent"
          onClick={(e) => e.stopPropagation()}
        >
          <FaInfoCircle></FaInfoCircle>
        </Link>
        <Link
          href={`https://github.com/alanzhaogithub/`}
          className="mt-2 mx-2 inline-block transition-all duration-100 hover:text-blue-accent"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub></FaGithub>
        </Link>
      </div>
    </div>
  );
}
