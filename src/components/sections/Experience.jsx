import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Experience() {
  return (
    <section className="py-32 relative z-10 bg-background text-center flex flex-col items-center justify-center border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[3rem] bg-gradient-to-br from-accent via-blue-600 to-highlight overflow-hidden shadow-2xl shadow-accent/20"
        >
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-[2rem] mx-auto mb-10 flex items-center justify-center p-4 border border-white/20 shadow-xl">
                 <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10"><path d="M12 2L2 22h20L12 2z"/></svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 text-white tracking-tight leading-[1.1] max-w-4xl">
              Ready to build the digital future of your business?
            </h2>
            <Button variant="primary" className="px-12 py-5 text-xl shadow-2xl shadow-black/20 bg-white text-accent hover:bg-slate-50 border-none font-bold">
              Get Started Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
