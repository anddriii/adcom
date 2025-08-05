import React from 'react';

// Impor gambar-gambar yang sudah kamu siapkan
import frontendImage from '../assets/division/fe.png';
import backendImage from '../assets/division/be.png';
import uiuxImage from '../assets/division/uiux.png';

const divisions = [
  {
    title: 'Front-End Developer',
    description: 'Sebagai seorang front-end developer di Android Developer Community, Anda akan menemukan ruang untuk mengekspresikan kreativitas dalam merancang antarmuka pengguna yang menarik dan responsif. Kami menyediakan lingkungan yang mendukung untuk Anda menjelajahi teknologi terkini dalam pembuatan aplikasi Android dan Website yang mengesankan.',
    imageUrl: frontendImage,
  },
  {
    title: 'Back-End Developer',
    description: 'Dalam Android Developer Community, peran back-end developer sangat penting dalam memastikan aplikasi atau website berjalan dengan lancar dan efisien di balik layar. Bergabunglah dengan kami untuk memperluas pengetahuan Anda tentang pengembangan server-side dan berkolaborasi dalam membangun infrastruktur yang tangguh.',
    imageUrl: backendImage,
  },
  {
    title: 'UI/UX Designer',
    description: 'Sebagai seorang UI/UX designer di Android Developer Community, Anda akan menemukan tempat untuk mengubah ide menjadi pengalaman pengguna yang memukau dan intuitif. Kami menawarkan kesempatan bagi Anda untuk berkolaborasi dengan pengembang dan mendefinisikan estetika serta fungsi aplikasi dan website yang unggul.',
    imageUrl: uiuxImage,
  },
];

const DivisionSection = () => {
  return (
    // Ganti 'bg-gray-900' dengan warna hijau gelap yang sesuai dari desainmu
    <section className="bg-[#09340c] text-white py-20 ">
      <div className="container mx-auto px-6 ">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Division</h2>
          <p className="text-gray-400 mt-2">Empower Your Journey With Us</p>
        </div>

        {/* Kontainer untuk semua baris divisi */}
        <div className="flex flex-col gap-16 justify-center">
          {divisions.map((division, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Kolom Teks */}
              <div>
                <h3 className="text-2xl font-bold mb-4">{division.title}</h3>
                <p className="text-gray-300 leading-relaxed">{division.description}</p>
              </div>
              {/* Kolom Gambar */}
              <div className="flex justify-center">
                <img 
                  src={division.imageUrl} 
                  alt={division.title} 
                  className="rounded-2xl shadow-lg w-50 h-55 object-cover max-w-md" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisionSection;