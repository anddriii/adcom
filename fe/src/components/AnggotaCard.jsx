import React from 'react';

const AnggotaCard = ({ photoUrl, nama, jabatan }) => {
  return (
    <div className="text-center transition-transform duration-300 hover:scale-105">
      <img 
        src={photoUrl} 
        alt={nama} 
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-white"
      />
      <h3 className="text-xl font-bold text-gray-800">{nama}</h3>
      <p className="text-gray-500">{jabatan}</p>
    </div>
  );
};

export default AnggotaCard;