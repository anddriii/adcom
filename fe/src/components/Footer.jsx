import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaDribbble,
  FaBehance,
  FaGithub,
} from 'react-icons/fa';
import  logo  from '../assets/logo3d.png'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
        {/* Logo & Address */}
        <div className="md:w-1/3 space-y-4">
          <img
            src={logo} // Ganti logo jika perlu
            alt="Android Dev Cirebon"
            className="w-48 rounded-4xl shadow-lg mb-4 mx-auto md:mx-0 mix-blend-multiply"
          />
          <p className="text-sm leading-relaxed">
            Jl. Perjuangan No.10B, Karyamulya, Kec. Kesambi,<br />
            Kota Cirebon, Jawa Barat 45135
          </p>
          <p className="text-sm mt-2">© 2024 Android Developer Community</p>

          {/* Sosmed */}
          <div className="flex space-x-4 pt-4 text-xl">
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaDribbble />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaBehance />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-lg">About Adcom</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">E-Learning</a></li>
              <li><a href="#" className="hover:underline">Division</a></li>
              <li><a href="#" className="hover:underline">Gallery</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Mastering Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Javascript</a></li>
              <li><a href="#" className="hover:underline">PHP</a></li>
              <li><a href="#" className="hover:underline">Laravel</a></li>
              <li><a href="#" className="hover:underline">HTML</a></li>
              <li><a href="#" className="hover:underline">Figma</a></li>
              <li><a href="#" className="hover:underline">CSS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Github</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Behance</a></li>
              <li><a href="#" className="hover:underline">Dribbble</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
