import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ imageUrl, title, category, slug }) => {
  return (
    <Link to={`/posts/${slug}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
        <div className="overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2 flex-grow">{title}</h3>
          <p className="text-gray-500 text-sm mb-4">{category}</p>
          <div className="mt-auto text-center">
            <span className="bg-green-900 text-center  text-white font-bold py-2 px-6 rounded-full inline-block group-hover:bg-green-700 transition-colors">
              Read Now
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;