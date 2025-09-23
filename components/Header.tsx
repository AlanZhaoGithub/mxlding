import { FaArrowLeft } from 'react-icons/fa';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="size-full">
        <div className="px-16 pt-4 flex grow justify-between items-center">
          <Link href="/" className="text-sm text-dark-text-secondary hover:text-dark-text">
            <FaArrowLeft></FaArrowLeft>
          </Link>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
