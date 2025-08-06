import React from 'react';

import IconWifi from '../assets/icons/wifi.svg';
import IconCollaboration from '../assets/icons/collaboration.svg';
import IconDatabase from '../assets/icons/database.svg';
import IconSkill from '../assets/icons/skill.svg';
import IconInnovation from '../assets/icons/innovation.svg';
import IconNetwork from '../assets/icons/network.svg';

const benefits = [
  {
    icon: IconWifi,
    title: 'Pertumbuhan Karier di bidang Teknologi',
    description: 'Membangun reputasi sebagai pengembang yang kompeten dan berpengalaman dalam industri.',
  },
  {
    icon: IconCollaboration,
    title: 'Kesempatan Kolaborasi dan Proyek',
    description: 'Membantu dalam pengembangan portofolio melalui proyek-proyek bersama.',
  },
  {
    icon: IconDatabase,
    title: 'Akses ke Sumber Daya Berkualitas',
    description: 'Menyediakan platform untuk terus memperbarui dan meningkatkan keterampilan.',
  },
  {
    icon: IconSkill,
    title: 'Meningkatkan Keterampilan Pengembangan',
    description: 'Memberikan sumber daya dan pelatihan untuk meningkatkan keterampilan pengembangan aplikasi bagi anggotanya.',
  },
  {
    icon: IconInnovation,
    title: 'Mendorong Kolaborasi dan Inovasi',
    description: 'Menggalang kolaborasi antara pengembang untuk menciptakan solusi inovatif dan mempercepat kemajuan dalam industri teknologi.',
  },
  {
    icon: IconNetwork,
    title: 'Memperluas Jaringan Profesional',
    description: 'Memberikan platform untuk memperluas jaringan profesional, dan berinteraksi dengan para ahli pengembang.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Goals & Benefit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-left">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
                <img src={benefit.icon} alt="" className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;