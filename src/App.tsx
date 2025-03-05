import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import About from './components/About';
import Startup from './components/Startup';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CursorEffect from './components/CursorEffect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-text">
      <CursorEffect />
      <ParticleBackground />
      
      {loading ? (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          onAnimationComplete={() => setLoading(false)}
        >
          <motion.div 
            className="text-4xl font-bold gradient-text"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            SK
          </motion.div>
        </motion.div>
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Startup />
            <Collaboration />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;