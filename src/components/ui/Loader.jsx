import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assests/OurDeals.png';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const duration = 2800; // slightly longer for dramatic pacing
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    // Block scrolling while loading
    document.body.style.overflow = 'hidden';

    // Complex custom easing: Slow start, fast middle, very slow end
    const easeInOutCubic = x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round(easeInOutCubic(currentStep / steps) * 100), 100);
      
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
           setIsLoading(false);
           setTimeout(() => {
              document.body.style.overflow = '';
              onComplete();
           }, 1500); // Wait for both shutters and exits to finish completely
        }, 500); // Pause briefly at 100%
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  // The Dark Shutter that smoothly follows the White loader
  const secondaryShutter = {
    initial: { y: 0 },
    exit: { 
      y: "-100vh", 
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.15 } 
    }
  };

  const primaryShutter = {
    initial: { y: 0 },
    exit: { 
      y: "-100vh", 
      transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  return (
    <>
      {/* Secondary Dark Shutter */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            variants={secondaryShutter}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[99998] bg-[#0A0F1C] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading && (
          <motion.div 
            variants={primaryShutter}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden"
            style={{ perspective: 1200 }}
          >
            {/* Ultra-Light Technical Animated Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#0066ff 1px, transparent 1px), linear-gradient(90deg, #0066ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />

            {/* Massive Background Percentage */}
            <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-slate-100 tracking-tighter pointer-events-none select-none z-0 flex items-center justify-center w-full"
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
               transition={{ duration: 1.5, ease: "easeOut" }}
            >
               {progress}
            </motion.div>

            {/* 3D Modern Logo Presentation */}
            <motion.div 
               className="relative z-10 w-48 h-24 md:w-76 md:h-36 flex items-center justify-center"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.8, y: -50, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
               transition={{ duration: 1, delay: 0.2 }}
            >
               {/* Minimal Ambient Glow */}
               <motion.div 
                  className="absolute top-0 w-full h-full bg-accent/15 rounded-full blur-[50px]"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
               
               {/* Hardware Accelerated 3D Logo */}
               <motion.img 
                  src={Logo} 
                  alt="OurDeals"
                  className="w-full h-full object-contain relative z-20 drop-shadow-2xl"
                  animate={{ 
                    y: [-12, 12, -12],
                    rotateY: [-18, 18, -18],
                    rotateX: [6, -6, 6]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ transformStyle: "preserve-3d" }}
               />
            </motion.div>

            {/* Modern Minimal Bottom Bar */}
            <motion.div 
               className="absolute bottom-12 left-8 right-8 md:left-24 md:right-24 flex items-center gap-6 z-10"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: 20, transition: { duration: 0.4 } }}
               transition={{ duration: 1, delay: 0.4 }}
            >
               <div className="text-primary font-bold text-xs tracking-[0.3em] uppercase flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  System Loading
               </div>
               
               <div className="flex-1 h-[1px] bg-slate-200 rounded-full overflow-hidden relative">
                  <motion.div 
                     className="absolute top-0 left-0 h-full bg-accent shadow-[0_0_10px_#0066ff]"
                     initial={{ width: "0%" }}
                     animate={{ width: `${progress}%` }}
                     transition={{ duration: 0.1, ease: "linear" }}
                  />
               </div>
               
               <div className="text-primary font-bold text-xs tracking-widest flex items-center justify-end w-12 text-right">
                  {progress}%
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
