import { useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Stats from './components/sections/Stats';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <ReactLenis root>
        {/* Global Noise Texture Overlay */}
        <div 
          className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-darken" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        
        <CustomCursor />
        
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: loading ? 0 : 1 }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          <Navbar />
          <main className="min-h-screen relative overflow-hidden cursor-none bg-background text-primary">
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Stats />
            <Features />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      </ReactLenis>
    </>
  );
}

export default App;
