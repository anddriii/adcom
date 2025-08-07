import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo3d.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="AndroidDev Logo" className="h-17 mix-blend-multiply" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link to="/#about" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
          </li>

          <li className="relative group">
            <Link
              to="/#division"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer"
            >
              Division
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-48 py-2 border border-gray-100 z-50">
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Front-End Developer</Link>
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Back-End Developer</Link>
              <Link to="/#division" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">UI/UX Designer</Link>
            </div>
          </li>
          
          <li>
            <Link to="/#projects" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Project</Link>
          </li>
          <li>
            <Link to="/#gallery" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Gallery</Link>
          </li>
          <li>
            <a href="/struktur-organisasi" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Struktur Organisasi</a>
          </li>
        </ul>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-800 focus:outline-none">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 pt-2 border-t">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><Link to="/#about" onClick={() => setMenuOpen(false)} className="block">About</Link></li>
            <li><Link to="/#division" onClick={() => setMenuOpen(false)} className="block">Division</Link></li>
            <li><Link to="/#projects" onClick={() => setMenuOpen(false)} className="block">Project</Link></li>
            <li><Link to="/#gallery" onClick={() => setMenuOpen(false)} className="block">Gallery</Link></li>
            <li><a href="/struktur-organisasi" onClick={() => setMenuOpen(false)} className="block">Struktur Organisasi</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
