import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Web Development', 
    desc: 'High-performance, secure websites that capture leads and drive your business forward.', 
    img: 'https://plus.unsplash.com/premium_photo-1720287601300-cf423c3d6760?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-blue-50/50 border-blue-100/50 hover:border-blue-200'
  },
  { 
    title: 'App Development', 
    desc: 'Native and cross-platform mobile apps built for flawless consumer experiences.', 
    img: 'https://plus.unsplash.com/premium_photo-1722209813944-a4ee13b7bfd8?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-purple-50/50 border-purple-100/50 hover:border-purple-200'
  },
  { 
    title: 'Updates & Support', 
    desc: '24/7 online support and proactive maintenance so you never worry about downtime.', 
    img: 'https://plus.unsplash.com/premium_photo-1726797757852-d718e284b86d?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-cyan-50/50 border-cyan-100/50 hover:border-cyan-200'
  },
  { 
    title: 'Digital Growth', 
    desc: 'Scale your brand, increase visibility, and get new work with our strategic online solutions.', 
    img: 'https://plus.unsplash.com/premium_photo-1683402693577-035defb30159?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'bg-orange-50/50 border-orange-100/50 hover:border-orange-200'
  },
];

export default function Services() {
  return (
    <section id="services" className="  bg-background relative overflow-hidden border-b border-slate-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
           className="text-center mb-20 z-10 relative"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
             Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6">
            End-to-End <span className="text-accent underline decoration-accent/30 underline-offset-8">IT Solutions</span>
          </h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            We provide everything you need to establish, maintain, and scale your global digital presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 z-10 relative">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-[2.5rem] p-8 md:p-10 flex flex-col h-full border ${srv.color} transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden cursor-none`}
            >
              <div className="relative w-full aspect-square mb-8 rounded-2xl overflow-hidden bg-white/60 backdrop-blur-md shadow-sm border border-white flex items-center justify-center p-1">
                 <img src={srv.img} alt={srv.title} className="w-full h-full rounded-lg mix-blend-multiply drop-shadow-md group-hover:scale-120 transition-transform duration-700 ease-out" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-accent transition-colors">{srv.title}</h3>
              <p className="text-secondary text-base leading-relaxed mb-8 flex-grow">{srv.desc}</p>
              
              <div className="mt-auto">
                 <a href="#contact" 
                 className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 text-primary group-hover:bg-accent hover:text-white group-hover:border-accent group-hover:shadow-md transition-all duration-300 cursor-none">
                   <svg className="w-5 h-5 translate-x-0 group-hover:translate-x-1 group-hover:text-white transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                 </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
