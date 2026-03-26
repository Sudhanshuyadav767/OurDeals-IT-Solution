import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

function Counter({ to, duration = 2.5, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * to));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
            setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="py-32 bg-surface overflow-hidden relative border-y border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
             
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-primary mb-6 leading-[1.1]">
                Our Global <br/><span className="text-accent underline decoration-accent/30 underline-offset-8">Impact</span>
              </h2>
              <p className="text-secondary text-lg max-w-lg leading-relaxed mb-10">
                We're extremely proud of the concrete results we've delivered. From scaling startups to outfitting enterprise clients, our apps and websites generate real revenue.
              </p>
              
              <div className="relative w-full max-w-[400px] h-[280px] rounded-[3rem] bg-gradient-to-tr from-accent to-highlight overflow-hidden flex items-center justify-center p-8 shadow-2xl shadow-accent/20 cursor-none group">
                 <motion.img 
                    src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&q=80" 
                    alt="3D Graphics" 
                    className="w-[150%] h-[150%] object-cover mix-blend-screen opacity-40 absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                 />
                 <h3 className="relative z-10 text-white text-3xl font-bold text-center leading-snug drop-shadow-lg p-4 backdrop-blur-sm rounded-2xl bg-white/10 border border-white/20">
                    "Driving digital transformation globally."
                 </h3>
              </div>
            </motion.div>

            {/* Right Counters 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
               <motion.div 
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
               >
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 mb-6 flex items-center justify-center shadow-inner">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
                     <Counter to={500} suffix="+" />
                  </h3>
                  <p className="text-secondary font-medium text-lg">Projects Delivered</p>
               </motion.div>

               <motion.div 
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center translate-y-0 sm:translate-y-12"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 mb-6 flex items-center justify-center shadow-inner">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
                     <Counter to={50} suffix="+" />
                  </h3>
                  <p className="text-secondary font-medium text-lg">Cities Worldwide</p>
               </motion.div>

               <motion.div 
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
               >
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 mb-6 flex items-center justify-center shadow-inner">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-extrabold text-primary mb-2 tracking-tight">
                     <Counter to={120} suffix="+" />
                  </h3>
                  <p className="text-secondary font-medium text-lg">Expert Engineers</p>
               </motion.div>

               <motion.div 
                  className="bg-accent rounded-[2.5rem] p-10 shadow-2xl shadow-accent/30 border border-accent flex flex-col justify-center translate-y-0 sm:translate-y-12"
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
               >
                  <div className="w-14 h-14 rounded-2xl bg-white/20 text-white mb-6 flex items-center justify-center backdrop-blur-md shadow-[inset_0_2px_10px_rgba(255,255,255,0.3)]">
                     <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                     <Counter to={99} suffix="%" />
                  </h3>
                  <p className="text-white/90 font-medium text-lg">Client Retention</p>
               </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
