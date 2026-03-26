import { motion } from 'framer-motion';
import Button from '../ui/Button';
import emailjs from 'emailjs-com';

export default function Contact() {

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1yiwxp3",     // 👈 yaha apna daal
      "template_dwvo0ne",    // 👈 yaha apna daal
      e.target,
      "EMHCId13ojN1GTWcY"      // 👈 yaha apna daal
    )
    .then(() => {
      alert("Message Sent Successfully 🚀");
    })
    .catch(() => {
      alert("Error sending message ❌");
    });

    e.target.reset(); // form clear
  };

  return (
    <section className="py-32 relative z-10 bg-surface border-y border-slate-200" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1]">
              Let's build <br />
              <span className="text-accent">together.</span>
            </h2>
            <p className="text-secondary text-xl mb-12 max-w-lg">
              Get in touch with our expert team today to accelerate your next major digital project.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-lg">HQ Office</h4>
                  <p className="text-secondary mt-1">AKASA TECHNOLOGY PRIVATE LIMITED
Block C, 56/6,3rd Floor, Sector 62, New Delhi, Noida, India
                  </p>
                </div>
              </div>
              <a href="mailto:hello@ourdeals.com" className="flex items-start gap-6 group cursor-none">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">Direct Email</h4>
                  <p className="text-secondary mt-1">ourdeals@gmail.com </p>
                </div>
               
              </a>
            <a href="tel:+918858729800" className="flex items-start gap-6 group cursor-none">
  <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 group-hover:bg-accent group-hover:text-white transition-colors">
    
    {/* Phone Icon */}
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.7 2.8a2 2 0 01-.45 1.94l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 011.94-.45l2.8.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
      />
    </svg>

  </div>

  <div>
    <h4 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">
      Call Us
    </h4>
    <p className="text-secondary mt-1">
      +91 8858729800
    </p>
  </div>
</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-background rounded-[3rem] p-10 lg:p-14 shadow-sm border border-slate-200/50"
          >
            <form className="flex flex-col gap-6" onSubmit={sendEmail}>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">Name</label>
                <input 
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm" 
                  placeholder="John Doe" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">Company Email</label>
                <input 
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm" 
                  placeholder="john@company.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">What do you need help with?</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-white border border-slate-200 rounded-3xl px-5 py-5 text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all resize-none text-lg shadow-sm" 
                  placeholder="App development, website design, support..." 
                />
              </div>

              <Button 
                type="submit"
                variant="primary" 
                className="w-full py-4 mt-4 text-lg"
              >
                Send Inquiry
              </Button>

            </form>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
