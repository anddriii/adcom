import React from 'react';
import heroImage from '../assets/hero-image.jpg';
import avatar1 from '../assets/avatars/avatar1.svg';
import avatar2 from '../assets/avatars/avatar2.svg';
import avatar3 from '../assets/avatars/avatar3.svg';


const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks */}
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Android Developer Community
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Bersama-sama kita dapat menggali potensi, berbagi wawasan, dan membentuk masa depan inovasi digital. Bergabunglah dengan komunitas ini, di mana batasan diuji dan kreativitas tidak terbatas.
            </p>
            <div className="flex flex-col items-start">
              <button className="bg-green-800 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition-colors shadow-lg mb-6">
                Join The Community
              </button>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img src={avatar1} alt="Member 1" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={avatar2} alt="Member 2" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src={avatar3} alt="Member 3" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                </div>
                <p className="ml-4 text-gray-500 font-medium">
                  <span className="text-gray-800">500+</span> People now joined
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={heroImage} 
              alt="A person using VR" 
              className="w-full max-w-lg h-auto rounded-l-[100px] rounded-br-[100px]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;