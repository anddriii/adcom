// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- 1. Import Link

// Tambahkan prop 'slug'
const ProjectCard = ({ imageUrl, title, category, slug }) => {
  return (
    // 2. Bungkus semua dengan komponen Link
    <Link to={`/projects/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
        <div className="overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2 h-16">{title}</h3>
          <p className="text-gray-500 text-sm">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;