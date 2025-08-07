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
    <section className="mastering-section">
      <div className="mastering-container">
        <h2 className="mastering-title">Mastering Tools</h2>

        <div className="scroll-wrapper">
          {/* Baris Atas (kanan) */}
          <div className="scroll-row scroll-right">
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="tool-card">
                <img src={tool.icon} alt={tool.name} className="tool-icon" />
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Baris Bawah (kiri) */}
          <div className="scroll-row scroll-left">
            {[...tools, ...tools].map((tool, index) => (
              <div key={index} className="tool-card">
                <img src={tool.icon} alt={tool.name} className="tool-icon" />
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasteringTools;
