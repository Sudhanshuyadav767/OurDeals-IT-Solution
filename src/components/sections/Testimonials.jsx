import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Roy Bauer', role: 'CEO', company: 'RetailTech', text: `"OurDeals completely transformed our e-commerce presence. Their app development team delivered a flawless mobile experience that boosted our sales by 40%."` },
  { name: 'Sarah Jenkins', role: 'Founder', company: 'HealthConnect', text: `"The best decision we made was partnering with OurDeals. They built our secure healthcare portal from scratch and provide incredible 24/7 maintenance support."` },
  { name: 'James Rodriguez', role: 'Operations Director', company: 'Global Logistics', text: `"Their enterprise web solutions scaled perfectly with our business. The dedicated development team truly acts as an extension of our own IT department."` },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative z-10 bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-primary">
            What our <span className="text-highlight relative inline-block">customers<svg className="absolute w-full h-3 -bottom-1 left-0 text-highlight opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none"/></svg></span> have to say.
          </h2>
        </div>

        {/* Abstract 3D BG Element */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:border-slate-200 hover:bg-white flex flex-col justify-between transition-all duration-500 cursor-none group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              <div className="mb-10 text-accent/30">
                 <svg className="w-10 h-10 transform group-hover:scale-110 group-hover:text-accent transition-all duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
              <p className="text-primary text-lg leading-relaxed mb-10 font-medium italic">"{t.text}"</p>
              
              <div className="flex items-center gap-5 mt-auto border-t border-slate-100 pt-6">
                <div className="relative">
                   <div className="w-14 h-14 bg-gradient-to-tr from-accent to-highlight rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                     {t.name.charAt(0)}
                   </div>
                   <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-base tracking-wide">{t.name}</h4>
                  <p className="text-secondary text-sm font-medium">{t.role} at <span className="text-accent">{t.company}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center relative z-10">
            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-base hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
              Read all customer success stories <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
        </div>
      </div>
    </section>
  );
}
