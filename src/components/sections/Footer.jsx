import logo from '../assests/Handshakegraphic.png';
export default function Footer() {
  return (
    <footer className="bg-[#0A0F1C] text-slate-400 py-32 relative overflow-hidden mt-[-2rem] rounded-t-[3rem] z-20">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-highlight/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/80 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive CTA Section */}
        <div className="border-b border-white/5 pb-20 mb-20 relative flex flex-col items-center justify-center">
          <h2 className="text-[15vw] md:text-[12vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent leading-[0.85] text-center tracking-tighter hover:scale-[1.02] transition-transform duration-700 select-none pb-4 relative z-0">
            LET'S TALK
          </h2>
          <div className="flex justify-center mt-[-4vw] md:mt-[-3vw] relative z-10">
            <a href="#contact" className="group bg-accent text-white px-8 py-3 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-highlight hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(0,102,255,0.4)] flex items-center gap-4 cursor-none overflow-hidden relative">
              <span className="relative z-10">Start a Project</span>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-accent transition-all duration-300 relative z-10">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-20 border-b border-white/5 pb-16">
          <div className="col-span-2 md:col-span-2 pr-8">
            <div className="flex items-center cursor-pointer group">
               <span className="w-29 h-29">
            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
               </span>
               <span className="text-2xl font-bold tracking-tight text-white">
                 OurDeals
               </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              We design, develop, and maintain globally recognized digital products for innovative brands. Elevating the standard of the web.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-highlight hover:text-white transition-all duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Web Development</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">App Development</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Cloud Hosting</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Digital Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Our Work</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent hover:pl-2 transition-all duration-300 inline-block">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} OurDeals IT Solution. All rights reserved.</p>
          <div className="flex gap-6 font-medium">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
