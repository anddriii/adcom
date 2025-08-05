import React from "react";

const galleryImages = [
  "https://i.imgur.com/QkD8TQj.png", // Ganti dengan link asli atau gunakan file lokal jika ada
  "https://i.imgur.com/2DgJxLh.png",
  "https://i.imgur.com/QkD8TQj.png",
  "https://i.imgur.com/B4iV2aR.png",
  "https://i.imgur.com/L2b0fWx.png",
  "https://i.imgur.com/BsZFR6u.png",
  "https://i.imgur.com/E8WvNHz.png",
  "https://i.imgur.com/2DgJxLh.png",
  "https://i.imgur.com/El53WMR.png",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white" id="gallery">
      {/* Kontainer untuk Gallery */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-xl shadow">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
