'use client';
import Header from '@/components/Header';
import Particles from '@/components/Particles';
import Link from 'next/link';
import { useState } from 'react';
import { FaGit } from 'react-icons/fa';
import { FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa6';

export default function Contact() {
  return(
    <div className="animate-[fade-in_0.3s_forwards]">
        <Header></Header>
        <Particles
          className="absolute inset-0 -z-10 animate-pulse"
          quantity={200}
          staticity={10}
        />
        <div className="pt-16 px-8 md:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-dark-text md:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-dark-text-secondary">
            Feel free to reach out for collaborations, opportunities, or just to chat.      
          </p>
          <div className="w-full h-px my-10 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
          <Link
            href="mailto:zhaoalan01@gmail.com"
            className="inline-flex transition-all duration-100 hover:text-blue-accent"
            onClick={(e) => e.stopPropagation()}>
            <FaEnvelope className="text-4xl" />
          </Link>

          <Link
            href="https://github.com/alanzhaogithub"
            className="inline-flex transition-all duration-100 hover:text-blue-accent"
            onClick={(e) => e.stopPropagation()}>
            <FaGithub className="text-4xl" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/alanzhao01/"
            className="inline-flex transition-all duration-100 hover:text-blue-accent"
            onClick={(e) => e.stopPropagation()}>
            <FaLinkedin className="text-4xl" />
          </Link>
        </div>
      </div>
  );
}
