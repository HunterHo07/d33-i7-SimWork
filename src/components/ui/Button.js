'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  href,
  target,
  ...props 
}, ref) => {
  const baseClasses = 'btn-base focus-visible inline-flex items-center justify-center font-semibold transition-all duration-300 ease-in-out';
  
  const variants = {
    primary: 'bg-primary hover:bg-blue-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25',
    secondary: 'bg-secondary hover:bg-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-secondary/25',
    accent: 'bg-accent hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-accent/25',
    glass: 'glass glass-hover text-text-primary border border-white/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-text-primary hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-2xl',
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';
  const loadingClasses = 'cursor-wait';

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled ? disabledClasses : ''}
    ${loading ? loadingClasses : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const buttonContent = (
    <>
      {loading && (
        <div className="mr-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {icon && iconPosition === 'left' && !loading && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && !loading && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  const motionProps = {
    whileHover: disabled || loading ? {} : { 
      scale: 1.02,
      y: -2,
    },
    whileTap: disabled || loading ? {} : { 
      scale: 0.98,
      y: 0,
    },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 17,
    },
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        className={buttonClasses}
        {...motionProps}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
