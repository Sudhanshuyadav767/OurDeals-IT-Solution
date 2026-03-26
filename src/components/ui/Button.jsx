import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function Button({ children, className, variant = 'primary', ...props }) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-[15px] transition-all duration-300 z-10 rounded-full cursor-none";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md hover:-translate-y-0.5",
    secondary: "bg-surface text-primary hover:bg-gray-50 border border-slate-200",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
