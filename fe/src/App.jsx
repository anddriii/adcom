import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MasteringTools from './components/MasteringTools';

function App() {
  return (
    // <> adalah React Fragment, pembungkus tanpa membuat div baru
    <>
      <Navbar />
      <Hero />
      <MasteringTools/>
      
      {/* Di sini nanti kita bisa tambahkan komponen-komponen lain 
        sesuai urutan di desainnya.
      */}
    </>
  );
}

export default App;