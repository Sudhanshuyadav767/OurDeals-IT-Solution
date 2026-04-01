import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const projects = [
  {
    title: 'E-Commerce App',
    tech: 'React Native, Node.js',
    desc: 'High-converting mobile commerce experience built for faster checkout and repeat sales.',
    image:
      'https://plus.unsplash.com/premium_photo-1678281888592-8ad623bb39e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
    url: 'https://our-deals-it-solution.vercel.app/#contact',
  },
  {
    title: 'FinTech Dashboard',
    tech: 'React, Tailwind',
    desc: 'Secure analytics and banking dashboard designed for live insights and confident decision-making.',
    image:
      'https://plus.unsplash.com/premium_photo-1682104376530-7c733d97802f?q=80&w=484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://resumecraft-ai-app.base44.app/login?from_url=https://resumecraft-ai-app.base44.app/&app_id=68ae9d255750f4323cc54c1d',
  },
  {
    title: 'Health Portal',
    tech: 'Next.js, AWS',
    desc: 'Patient management portal with structured workflows, privacy-first architecture, and simple onboarding.',
    image:
      'https://images.unsplash.com/vector-1739803316910-1de9cb66fc2d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    url: 'https://www.healthians.com/',
  },
  {
    title: 'Real Estate Platform',
    tech: 'Vite, Firebase',
    desc: 'Lead-focused listing platform that helps brokers manage inventory and convert inquiries faster.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.realestateplatform.com/',
  },
];

const loopedProjects = [...projects, ...projects];

export default function Projects() {
  const railRef = useRef(null);

  useLayoutEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    let tween;

    const createLoop = () => {
      if (tween) tween.kill();

      const travelDistance = rail.scrollWidth / 2;
      tween = gsap.fromTo(
        rail,
        { x: 0 },
        {
          x: -travelDistance,
          duration: 24,
          ease: 'none',
          repeat: -1,
        }
      );
    };

    createLoop();

    const handleMouseEnter = () => tween?.pause();
    const handleMouseLeave = () => tween?.resume();
    const handleResize = () => createLoop();

    rail.addEventListener('mouseenter', handleMouseEnter);
    rail.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      rail.removeEventListener('mouseenter', handleMouseEnter);
      rail.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      tween?.kill();
    };
  }, []);

  return (
    <section id="projects" className="py-32 relative z-10 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
            Recent Launches
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">
            Featured <span className="text-accent underline decoration-accent/30 underline-offset-8">Projects</span>
          </h2>
          {/* <p className="text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Each card can link directly to a live product. Add new project objects to the array and they will automatically join the moving showcase.
          </p> */}
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 md:w-24 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 md:w-24 bg-gradient-to-l from-surface to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="overflow-hidden"
          >
            <div ref={railRef} className="flex w-max gap-6 md:gap-8 py-4">
              {loopedProjects.map((project, index) => {
                const hasLiveUrl = project.url && project.url !== '#';

                return (
                  <article
                    key={`${project.title}-${index}`}
                    className="group relative min-h-[460px] w-[320px] md:w-[420px] shrink-0 overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/5" />
                    </div>

                    <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
                      <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                        {project.tech}
                      </div>

                      <h3 className="mb-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-200 md:text-base">
                        {project.desc}
                      </p>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.url}
                          target={hasLiveUrl ? '_blank' : undefined}
                          rel={hasLiveUrl ? 'noreferrer' : undefined}
                          aria-disabled={!hasLiveUrl}
                          className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                            hasLiveUrl
                              ? 'bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg'
                              : 'cursor-not-allowed bg-white/15 text-white/70'
                          }`}
                        >
                          View Project
                        </a>
                        <span className="text-xs font-medium uppercase tracking-[0.22em] text-white/65">
                         
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
