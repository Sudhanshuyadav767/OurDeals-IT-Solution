import { motion } from 'framer-motion';
import Button from '../ui/Button';
import heroImage from '../assests/Landing page Png.png';  

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background  px-4">
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          className="max-w-xl z-10"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-accent mb-6 tracking-tight leading-[1.1]">
            Build apps & <br />websites that scale
          </h1>
          <p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
            OurDeals IT Solution is your dedicated technology partner. We bring businesses of all industries online, maintain your digital presence, and help you grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start pointer-events-auto">
            <Button variant="primary" className="px-10">Start your project</Button>
            <Button variant="outline" className="px-10">View our work</Button>
          </div>
        </motion.div>

        {/* Right side 3D Image */}
        <motion.div 
          className="relative h-[400px] lg:h-[700px] w-full flex items-center justify-center z-10 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.img 
            src={heroImage} 
            alt="IT Solutions Team 3D illustration" 
            className="w-full h-[120%] object-contain mix-blend-multiply drop-shadow-2xl scale-125 translate-y-8"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
