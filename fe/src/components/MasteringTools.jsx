import React from 'react';
import js from '../assets/tools/js.svg';
import laravel from '../assets/tools/laravel.svg';
import html from '../assets/tools/html.svg';
import figma from '../assets/tools/figma.svg';
import css from '../assets/tools/css.svg';
import php from '../assets/tools/php.svg';

const tools = [
  { name: 'Javascript', icon: js },
  { name: 'Laravel', icon: laravel },
  { name: 'Html', icon: html },
  { name: 'Figma', icon: figma },
  { name: 'Css', icon: css },
  { name: 'PHP', icon: php },
];


const MasteringTools = () => {
  return (
    
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Mastering Tools</h2>

        {/* Wrapper untuk efek fade di ujung */}
        <div className="relative w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          
          {/* Baris Atas (Berjalan ke Kanan) */}
          <div className="flex animate-scroll-right [animation-play-state:running] hover:[animation-play-state:paused]">
            {/* Kita duplikasi array-nya di sini */}
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="flex-shrink-0 mx-4 my-2">
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 w-48">
                  <img src={tool.icon} alt={tool.name} className="h-8 w-8" />
                  <span className="font-semibold text-gray-700">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Baris Bawah (Berjalan ke Kiri) */}
          <div className="flex mt-4 animate-scroll-left [animation-play-state:running] hover:[animation-play-state:paused]">
            {/* Duplikasi lagi untuk baris kedua */}
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="flex-shrink-0 mx-4 my-2">
                <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 w-48">
                  <img src={tool.icon} alt={tool.name} className="h-8 w-8" />
                  <span className="font-semibold text-gray-700">{tool.name}</span>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MasteringTools;