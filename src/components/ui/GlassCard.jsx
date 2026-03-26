import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function GlassCard({ children, className, ...props }) {
  return (
    <motion.div
      className={cn("bg-surface rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group transition-all duration-500 shadow-[0_4px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2", className)}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
