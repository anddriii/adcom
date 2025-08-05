import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import Pagination from './Pagination';
import { fetchProjects } from '../api/mockApi'; 

const PROJECTS_PER_PAGE = 3; // Tentukan berapa proyek per halaman

const ProjectsSection = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectsData = async () => {
      try {
         // --- KODE UNTUK API ASLI (DIKOMENTARI DULU) ---
        // const response = await fetch('http://localhost:8080/api/v1/posts');
        // if (!response.ok) throw new Error('Gagal mengambil data project');
        // const result = await response.json();
        // setAllPosts(result.data);
        const result = await fetchProjects();
        setAllProjects(result.data); 
      } catch (err) {
        console.error("Gagal fetch proyek:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProjectsData();
  }, []);

  // Logika untuk menghitung total halaman
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);

  // Logika untuk "memotong" data proyek sesuai halaman yang aktif
  const currentProjects = allProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="bg-gray-50 py-20" id='projects'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Project Portofolio</h2>
          <p className="text-gray-500 mt-2">Elevate Your Journey With Us</p>
        </div>

        <div>
          {loading && <p className="text-center">Loading projects...</p>}
          {error && <p className="text-center text-red-500">Error: {error}</p>}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tampilkan proyek untuk halaman saat ini */}
              {currentProjects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  slug={project.slug} 
                  imageUrl={project.photos[0]}
                  title={project.title}
                  category={project.category || 'Project'}
                />
              ))}
            </div>
          )}
        </div>

        {/* Kirim state dan fungsi ke komponen Pagination */}
        {!loading && !error && totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;