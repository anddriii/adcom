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

function App() {
  return (
  
    <>
     <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <BenefitsSection />
              <AboutSection />
              <MasteringTools />
              <DivisionSection />
              <ProjectsSection />
            </>
          } />

          {/* 2. Tambahkan Rute Baru untuk Detail Proyek */}
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  );
}

export default App;