import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProgramSearch from './components/ProgramSearch';
import Stats from './components/Stats';
import CampusLife from './components/CampusLife';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#4b2c85] selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProgramSearch />
        <Stats />
        <CampusLife />
      </main>
      <Footer />
    </div>
  );
}

export default App;
