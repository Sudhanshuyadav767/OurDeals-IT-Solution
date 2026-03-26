import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="platform" className="py-32 relative z-10 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent tracking-tight">
            Digital solutions for every industry
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10 max-w-lg">
            Whether you are in retail, healthcare, real estate, or education, we tailor our websites and applications to fit your specific field. We don't just build software; we bring your entire business online.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 className="font-bold text-primary mb-2">End-to-End Delivery</h4>
              <p className="text-sm text-secondary leading-relaxed">From initial design to final deployment, we handle the entire technical lifecycle.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 className="font-bold text-primary mb-2">Cross-Platform</h4>
              <p className="text-sm text-secondary leading-relaxed">Reach your customers wherever they are: on desktop devices, iOS, or Android.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[500px] w-full flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Stunning 3D Graphic */}
          <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center bg-accent/5 rounded-[3rem] border border-accent/10 shadow-inner overflow-hidden">
             
             {/* 3D Image */}
             <motion.img 
                src="https://images.unsplash.com/photo-1614850715649-1d0106293cb1?auto=format&fit=crop&q=80" 
                alt="3D Robot Character" 
                className="w-[120%] h-[120%] object-cover mix-blend-multiply opacity-90 drop-shadow-2xl absolute"
                animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
             />

             {/* UI Floating Cards over Image */}
             <motion.div 
               className="absolute top-10 right-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white flex items-center gap-4"
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                   <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                </div>
                <div>
                   <div className="font-bold text-primary">Deployment</div>
                   <div className="text-secondary text-sm">Successfully live</div>
                </div>
             </motion.div>

             <motion.div 
               className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white"
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             >
                <div className="flex items-center gap-2 mb-3">
                   <div className="w-3 h-3 rounded-full bg-red-400" />
                   <div className="w-3 h-3 rounded-full bg-yellow-400" />
                   <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-2">
                   <div className="w-32 h-2 bg-slate-200 rounded" />
                   <div className="w-24 h-2 bg-slate-100 rounded" />
                   <div className="w-40 h-2 bg-slate-100 rounded" />
                </div>
             </motion.div>
          </div>
          
          {/* Floating Accents */}
          <motion.div animate={{y:[-15, 15, -15], rotate:[0, 10, 0]}} transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}} className="absolute top-10 right-10 w-6 h-6 bg-highlight rounded-full" />
          <motion.div animate={{y:[15, -15, 15], rotate:[0, -10, 0]}} transition={{duration: 7, repeat: Infinity, ease: "easeInOut"}} className="absolute bottom-20 left-10 w-10 h-10 bg-accent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
