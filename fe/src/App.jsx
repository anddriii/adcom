import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MasteringTools from './components/MasteringTools';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import DivisionSection from './components/DivisionSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogSection from './components/BlogSection';
import PostDetailPage from './pages/BlogDetailPage'; 
import Gallery from './components/galerry';
import FAQSection from './components/FaqSection';
import Footer from './components/Footer';
import StrukturOrganisasiPage from './pages/StrukturOrganisasiPage'; // <-- Pastikan ini diimpor
import ScrollToHashElement from './utils/ScrollToHashElement'; // ← import dulu


function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Navbar />
      <main>
        <div>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <BenefitsSection />
                <AboutSection />
                <MasteringTools />
                <DivisionSection />
                <ProjectsSection />
                <BlogSection />
                <Gallery />
                <FAQSection />
              </>
            } />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/posts/:slug" element={<PostDetailPage />} />
            <Route path="/struktur-organisasi" element={<StrukturOrganisasiPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;