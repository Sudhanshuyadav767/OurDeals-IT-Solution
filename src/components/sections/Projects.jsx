import { motion } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  { 
    title: 'E-Commerce App', 
    tech: 'React Native, Node.js', 
    desc: 'High-converting mobile application for a national retailer.', 
    image: 'https://plus.unsplash.com/premium_photo-1678281888592-8ad623bb39e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    span: 'md:col-span-2 md:row-span-2'
  },
  { 
    title: 'FinTech Dashboard', 
    tech: 'React, Tailwind', 
    desc: 'Secure banking and analytics portal.', 
    image: 'https://plus.unsplash.com/premium_photo-1682104376530-7c733d97802f?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-1'
  },
  { 
    title: 'Health Portal', 
    tech: 'Next.js, AWS', 
    desc: 'HIPAA compliant patient management system.', 
    image: 'https://images.unsplash.com/vector-1739803316910-1de9cb66fc2d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    span: 'md:col-span-1 md:row-span-1'
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           className="text-center mb-20 relative z-20"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">
            Featured <span className="text-accent underline decoration-accent/30 underline-offset-8">Projects</span>
          </h2>
          <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            A website or app is only as good as the revenue it generates. Explore our recent deliveries that are driving concrete growth and new work for our clients.
          </p>
        </motion.div>

        {/* 3D Decor element floating behind the grid */}
        <motion.img 
            src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80" 
            alt="3D Abstract Blocks" 
            className="absolute -right-40 top-40 w-[600px] h-[600px] object-cover mix-blend-multiply opacity-20 rounded-full blur-xl pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[700px]">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className={`group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-slate-100/50 cursor-none ${proj.span}`}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/40" />
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 z-20 flex flex-col justify-end h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                   <p className="text-accent font-bold mb-2 tracking-wider uppercase text-xs md:text-sm">{proj.tech}</p>
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-accent transition-colors">{proj.title}</h3>
                   <p className="text-slate-200 mb-6 line-clamp-2 md:max-w-md text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{proj.desc}</p>
                   <Button variant="primary" className="py-2.5 px-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">View Case Study</Button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
