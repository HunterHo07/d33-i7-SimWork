'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const GlassCard = forwardRef(({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'md',
  rounded = 'lg',
  ...props
}, ref) => {
  const baseClasses = 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass';

  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const roundings = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  };

  const hoverClasses = hover ? 'hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer' : '';
  const glowClasses = glow ? 'hover:shadow-glow transition-shadow duration-300' : '';

  const cardClasses = `
    ${baseClasses}
    ${paddings[padding]}
    ${roundings[rounded]}
    ${hoverClasses}
    ${glowClasses}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const motionProps = hover ? {
    whileHover: {
      scale: 1.02,
      y: -4,
    },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  } : {};

  return (
    <motion.div
      ref={ref}
      className={cardClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;
