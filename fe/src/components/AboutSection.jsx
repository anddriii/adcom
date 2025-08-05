import React from 'react';

// Impor gambar tim
import teamPhoto from '../assets/team-foto.jpeg'; 

const AboutSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Kolom Kiri: Teks */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 leading-relaxed">
             <span className='font-bold'>Android Developer Community</span>  adalah wadah bagi para pengembang Android dan Website dari berbagai latar belakang dan tingkat keahlian untuk berkumpul, belajar, dan berkolaborasi. Dengan fokus pada pertukaran pengetahuan, pengembangan keterampilan, dan mendukung inovasi, kami bertekad untuk memperkuat komunitas pengembang teknologi lokal maupun global. Bergabunglah dengan kami untuk mengeksplorasi dunia pengembangan website dan android, berbagi ide, dan meraih kesuksesan bersama.
            </p>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="flex justify-center">
            <img 
              src={teamPhoto} 
              alt="Our Team" 
              className="w-90 h-90 rounded-2xl shadow-lg object-cover" 
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;