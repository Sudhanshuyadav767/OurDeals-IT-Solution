import { motion } from 'framer-motion';
import Image from '../assests/Handshakegraphic.png';
export default function Features() {
  return (
    <section id="trust" className="py-32 relative z-10 bg-background overflow-hidden">
      <div  id="features"  className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent tracking-tight">
            Unwavering online support
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-10 max-w-lg">
            Building the app is just the start. We provide continuous maintenance, hosting, and technical support so you can focus on running your business rather than managing servers.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h4 className="font-bold text-primary mb-2">24/7 Monitoring</h4>
              <p className="text-sm text-secondary leading-relaxed">We keep your websites and apps running smoothly round the clock with proactive checks.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              </div>
              <h4 className="font-bold text-primary mb-2">Regular Updates</h4>
              <p className="text-sm text-secondary leading-relaxed">Stay ahead of the curve with continuous feature rollouts and security patches.</p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/></svg>
              </div>
              <h4 className="font-bold text-primary mb-2">Dedicated Team</h4>
              <p className="text-sm text-secondary leading-relaxed">Get direct access to the engineers and support staff who know your project inside and out.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Illustration (Concentric circles) */}
        <motion.div
           className="relative h-[500px] w-full flex items-center justify-center"
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
           <div className="relative w-[400px] h-[400px] flex items-center justify-center">
              {/* Circles */}
              <div className="absolute w-[100%] h-[100%] rounded-full border border-slate-200 border-dashed animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[75%] h-[75%] rounded-full border border-slate-200 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
              <div className="absolute w-[50%] h-[50%] rounded-full border border-slate-200 border-dashed animate-[spin_20s_linear_infinite]" />
              
              {/* Center 3D Logo */}
              <div className="w-32 h-32 bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl shadow-accent/20 border-2 border-white flex items-center justify-center z-10 relative overflow-hidden group">
                 <motion.img 
                    src={Image} 
                    alt="3D Tech Element" 
                    className="w-[120%] h-[120%] object-cover mix-blend-multiply opacity-90 transition-transform duration-500 group-hover:scale-110"
                 />
              </div>
              
              {/* Orbiting Icons */}
              <div className="absolute top-[10%] left-[10%] w-12 h-12 bg-white rounded-full shadow-md border border-slate-50 flex items-center justify-center text-accent animate-bounce"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
              <div className="absolute bottom-[20%] right-[5%] w-10 h-10 bg-white rounded-full shadow-md border border-slate-50 flex items-center justify-center text-highlight"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
              <div className="absolute top-[40%] right-[-5%] w-14 h-14 bg-white rounded-full shadow-md border border-slate-50 flex items-center justify-center text-blue-500"><svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg></div>
              <div className="absolute bottom-[10%] left-[20%] w-12 h-12 bg-white rounded-full shadow-md border border-slate-50 flex items-center justify-center text-red-500"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg></div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
