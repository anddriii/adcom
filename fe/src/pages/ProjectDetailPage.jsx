import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchProjectBySlug } from '../api/mockApi';

const ProjectDetailPage = () => {
  // useParams() mengambil parameter dari URL, dalam kasus ini adalah 'slug'
  const { slug } = useParams(); 
  
  // State untuk menyimpan data proyek, gambar utama, loading, dan error
  const [project, setProject] = useState(null);
  const [mainImage, setMainImage] = useState(''); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectData = async () => {
      setLoading(true);
      setError(null); // Reset error setiap kali slug berubah
      try {
        const result = await fetchProjectBySlug(slug);
        setProject(result.data);
        
        // Atur gambar utama dengan gambar pertama dari array 'photos'
        if (result.data.photos && result.data.photos.length > 0) {
          setMainImage(result.data.photos[0]);
        }
      } catch (err) {
        setError("Proyek yang Anda cari tidak ditemukan.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjectData();
  }, [slug]); // Efek ini akan berjalan kembali jika nilai 'slug' di URL berubah

  // Tampilan saat data sedang dimuat
  if (loading) {
    return <div className="text-center py-40">Loading project details...</div>;
  }

  // Tampilan jika terjadi error
  if (error) {
    return <div className="text-center py-40 text-red-500 font-bold">{error}</div>;
  }

  // Jika tidak ada proyek (sebagai fallback)
  if (!project) {
    return <div className="text-center py-40">Project not available.</div>;
  }

  // Tampilan utama jika data berhasil dimuat
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-6">
        {/* Judul Proyek */}
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12">{project.title}</h1>
        
        {/* Galeri Gambar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Kolom Kiri - Gambar Utama (Besar) */}
          <div className="lg:col-span-3">
            <img 
              src={mainImage} 
              alt="Main project view" 
              className="rounded-2xl w-full h-auto object-cover shadow-lg" 
            />
          </div>
          
          {/* Kolom Kanan - Thumbnails */}
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-hidden pb-4 lg:pb-0">
            {project.photos.map((photoUrl, index) => (
              <img 
                key={index}
                src={photoUrl} 
                alt={`Project thumbnail ${index + 1}`} 
                onClick={() => setMainImage(photoUrl)}
                className={`w-32 h-20 lg:w-full lg:h-auto object-cover rounded-lg cursor-pointer transition-all duration-200
                  ${mainImage === photoUrl ? 'border-4 border-green-500' : 'opacity-70 hover:opacity-100'}
                `}
              />
            ))}
          </div>
        </div>

        {/* Deskripsi dan Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Konten deskripsi akan di-render dari Markdown di sini */}
            <div className="prose lg:prose-lg max-w-none text-gray-600">
              <ReactMarkdown>{project.description}</ReactMarkdown>
            </div>
          </div>
          
          {/* Kartu Info di Kanan (Saat ini masih statis) */}
          <div className="relative">
            <div className="sticky top-28 p-6 border rounded-2xl shadow-md">
              <div className="text-4xl mb-4">🎨</div> 
              <h3 className="font-bold">View More</h3>
              <p className="text-sm text-gray-500 mb-4">Explore Our High-Quality Project</p>
              <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full mb-6 hover:bg-green-700 transition-colors">View Project</button>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Miftah Rachmatullah</p>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;