import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../ui/Button';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState(null);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (!toast) return undefined;

    const timeoutId = window.setTimeout(() => {
      setToast(null);
    }, 3600);

    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS config missing. Add VITE_EMAILJS_* values in your .env file.');
      setToast({
        type: 'error',
        title: 'Email setup missing',
        message: 'Add your EmailJS values in the .env file and restart the app.',
      });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
      setToast({
        type: 'success',
        title: 'Message sent',
        message: 'Thanks for reaching out. We will get back to you shortly.',
      });
      e.target.reset();
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setToast({
        type: 'error',
        title: 'Message failed',
        message: 'Check your EmailJS keys and template field names, then try again.',
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-32 relative z-10 bg-surface border-y border-slate-200" id="contact">
      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-[120] max-w-sm"
          >
            <div
              className={`overflow-hidden rounded-[1.75rem] border shadow-[0_24px_60px_rgba(15,23,42,0.18)] backdrop-blur-xl ${
                toast.type === 'success'
                  ? 'border-emerald-200/70 bg-white/95'
                  : 'border-rose-200/70 bg-white/95'
              }`}
            >
              <div
                className={`h-1.5 w-full ${
                  toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
                }`}
              />
              <div className="flex gap-4 p-5">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                    toast.type === 'success'
                      ? 'bg-emerald-500/12 text-emerald-600'
                      : 'bg-rose-500/12 text-rose-600'
                  }`}
                >
                  {toast.type === 'success' ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M12 8v4m0 4h.01M4.93 19h14.14A2 2 0 0020.8 16L13.73 4a2 2 0 00-3.46 0L3.2 16A2 2 0 004.93 19z" />
                    </svg>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-primary">{toast.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary">{toast.message}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setToast(null)}
                  className="h-9 w-9 shrink-0 rounded-full border border-slate-200 text-slate-400 transition-colors hover:text-primary"
                  aria-label="Close notification"
                >
                  <svg className="mx-auto h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

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
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-lg">HQ Office</h4>
                  <p className="text-secondary mt-1">
                    AKASA TECHNOLOGY PRIVATE LIMITED
                    <br />
                    Block C, 56/6,3rd Floor, Sector 62, New Delhi, Noida, India
                  </p>
                </div>
              </div>

              <a href="mailto:hello@ourdeals.com" className="flex items-start gap-6 group cursor-none">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 group-hover:bg-accent group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">Direct Email</h4>
                  <p className="text-secondary mt-1">ourdeals@gmail.com</p>
                </div>
              </a>

              <a href="tel:+918858729800" className="flex items-start gap-6 group cursor-none">
                <div className="w-14 h-14 bg-background rounded-2xl flex items-center justify-center text-accent shadow-sm border border-slate-100 group-hover:bg-accent group-hover:text-white transition-colors">
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
                  <h4 className="text-primary font-semibold text-lg group-hover:text-accent transition-colors">Call Us</h4>
                  <p className="text-secondary mt-1">+91 8858729800</p>
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
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-primary mb-3">Company Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-primary focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-lg shadow-sm"
                  placeholder="Enter your email"
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
                disabled={isSending}
                variant="primary"
                className="w-full py-4 mt-4 text-lg disabled:opacity-70"
              >
                {isSending ? 'Sending...' : 'Send Inquiry'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
