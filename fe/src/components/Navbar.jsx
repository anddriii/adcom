import React from 'react';

// Pastikan path ke logo-mu sudah benar
import logo from '../assets/logo3d.png'; 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Bagian Kiri: Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="AndroidDev Logo" className="h-17 " />
        </a>

        {/* Bagian Kanan: Menu Navigasi */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <a href="/about" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/division" className="flex items-center gap-1 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Division
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </li>
          <li>
            <a href="/project" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Project
            </a>
          </li>
          <li>
            <a href="/gallery" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Gallery
            </a>
          </li>
           <li>
            <a href="/struktur organisasi" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Struktur Organisasi
            </a>
          </li>
        </ul>

        {/* Tombol Hamburger untuk Mobile (akan kita fungsikan nanti) */}
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;