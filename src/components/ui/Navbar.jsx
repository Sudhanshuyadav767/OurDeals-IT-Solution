import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from '../assests/OurDeals.png';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Features', href: '#features' },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${
        scrolled ? "pt-4" : "pt-6"
      }`}
    >
      <div 
        className={`flex items-center justify-between transition-all duration-500 ${
          scrolled 
            ? "w-[95%] md:w-[80%] max-w-[1200px] h-16 bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/40 rounded-full px-6 md:px-8" 
            : "w-full max-w-[1400px] h-20 bg-transparent px-4 md:px-8"
        }`}
      >
        {/* Logo Section */}
        <div 
           className="flex-shrink-0 flex items-center gap-2 cursor-pointer z-20 group" 
           onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <span className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center -ml-2 transition-transform duration-300 group-hover:scale-105 transform origin-left">
            <img src={Logo} alt="OurDeals Logo" className="w-full h-full object-contain drop-shadow-sm" />
          </span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-1 md:gap-2 absolute left-1/2 -translate-x-1/2 rounded-full p-1 bg-slate-50/50 backdrop-blur-sm border border-slate-200/50 shadow-inner">
           {navLinks.map((link, index) => (
             <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-semibold text-primary transition-colors cursor-none z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
             >
                <span className="relative z-10">{link.name}</span>
                {hoveredIndex === index && (
                   <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                   />
                )}
             </a>
           ))}
        </div>
        
        {/* Right CTA */}
        <div className="flex items-center flex-shrink-0 z-20">
          <a 
            href="#contact" 
            className={`group flex items-center gap-2 font-bold text-sm transition-all duration-300 cursor-none shadow-accent/20 rounded-full overflow-hidden relative ${
              scrolled ? "bg-primary text-white px-6 py-2.5 shadow-lg" : "bg-accent text-white px-7 py-3 shadow-xl"
            }`}
          >
            <span className="relative z-10">Connect</span>
            <div className={`flex items-center justify-center rounded-full transition-all duration-300 relative z-10 ${scrolled ? "w-6 h-6 bg-white/20 group-hover:bg-white group-hover:text-primary" : "w-7 h-7 bg-white/20 group-hover:bg-white group-hover:text-accent"}`}>
               <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
            <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0 ${scrolled ? "bg-white/10" : "bg-white/20"}`} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
