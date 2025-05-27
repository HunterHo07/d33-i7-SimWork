'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 border border-primary/30">
                🚀 The Future of Work Assessment
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-contrast-high mb-6 leading-tight"
            >
              Experience{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Real Work
              </span>{' '}
              Before You Hire
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-contrast-medium mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Immersive 3D office simulation where candidates complete authentic tasks with real-time KPI tracking and AI-powered adaptivity.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button 
                variant="primary" 
                size="lg"
                className="text-lg px-8 py-4"
                href="/demo"
              >
                Try Live Demo
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                Watch Preview
              </Button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-contrast-medium"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>No Setup Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Real-Time Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>Multi-Role Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Content - 3D Preview */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative"
            >
              <GlassCard 
                className="p-8 relative overflow-hidden"
                glow={true}
                rounded="2xl"
              >
                {/* 3D Office Preview Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl relative overflow-hidden">
                  {/* Simulated 3D Office Elements */}
                  <div className="absolute inset-4">
                    {/* Desk Elements */}
                    <motion.div
                      animate={{ 
                        rotateY: [0, 360],
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="w-full h-full relative"
                    >
                      {/* Developer Station */}
                      <div className="absolute top-4 left-4 w-16 h-12 bg-blue-500/30 rounded border border-blue-400/50 flex items-center justify-center">
                        <span className="text-xs text-blue-300">DEV</span>
                      </div>
                      
                      {/* Design Station */}
                      <div className="absolute top-4 right-4 w-16 h-12 bg-purple-500/30 rounded border border-purple-400/50 flex items-center justify-center">
                        <span className="text-xs text-purple-300">DESIGN</span>
                      </div>
                      
                      {/* PM Station */}
                      <div className="absolute bottom-4 left-4 w-16 h-12 bg-green-500/30 rounded border border-green-400/50 flex items-center justify-center">
                        <span className="text-xs text-green-300">PM</span>
                      </div>
                      
                      {/* AI Station */}
                      <div className="absolute bottom-4 right-4 w-16 h-12 bg-orange-500/30 rounded border border-orange-400/50 flex items-center justify-center">
                        <span className="text-xs text-orange-300">AI</span>
                      </div>
                      
                      {/* Center Character */}
                      <motion.div
                        animate={{ 
                          x: [0, 20, -20, 0],
                          y: [0, -10, 10, 0]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full border border-white/40"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Floating UI Elements */}
                  <motion.div
                    animate={{ 
                      y: [-5, 5, -5],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-8 left-8 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                  >
                    Task: Code Review
                  </motion.div>
                  
                  <motion.div
                    animate={{ 
                      y: [5, -5, 5],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-8 right-8 px-3 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                  >
                    Score: 94%
                  </motion.div>
                </div>

                {/* Interactive Demo Button */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer rounded-xl"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -right-4 top-1/4 hidden lg:block"
            >
              <GlassCard padding="sm" className="text-center">
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-xs text-contrast-medium">Completion Rate</div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute -left-4 bottom-1/4 hidden lg:block"
            >
              <GlassCard padding="sm" className="text-center">
                <div className="text-2xl font-bold text-accent">$240K</div>
                <div className="text-xs text-contrast-medium">Saved per Hire</div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-contrast-medium"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
