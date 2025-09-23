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
    <nav>
      {/* Desktop Links */}
        <ul className="flex items-center justify-center gap-4">
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

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        {isOpen && (
          <ul className="absolute right-4 mt-2 w-40 bg-white shadow-lg rounded-md py-2 flex flex-col space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
