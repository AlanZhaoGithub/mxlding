'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex">
        <ul className="hidden md:flex items-center justify-center gap-4">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-dark-text-secondary hover:text-dark-text"
            >
              {item.name}
            </Link>
          ))}
        </ul>

      <div className="md:hidden pt-4 bg-dark-bg">
        <button
          className="absolute md:hidden hover:bg-light-bg hover:text-light-text left-1 top-1 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          {/* Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`flex fixed top-0 left-0 h-full w-1/2 bg-dark-bg shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button className="absolute top-1 left-1 hover:bg-light-bg hover:text-light-text rounded-md" onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Links */}
          <div className="flex grow flex-col items-center justify-center space-y-8 p-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-600">About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Projects</Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Blog</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
