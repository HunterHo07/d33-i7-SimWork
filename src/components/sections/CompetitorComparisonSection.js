'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../ui/GlassCard';

const CompetitorComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const features = [
    {
      feature: "Immersive 3D Environment",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: false,
      description: "Real office simulation with interactive workstations"
    },
    {
      feature: "Multi-Role Assessment",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: true,
      description: "Developer, Designer, PM, Data Entry, AI Engineer roles"
    },
    {
      feature: "Real-World Task Simulation",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: false,
      description: "Authentic work environments with actual tools"
    },
    {
      feature: "AI-Powered Adaptivity",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: false,
      description: "Dynamic difficulty adjustment based on performance"
    },
    {
      feature: "Real-Time Analytics",
      simwork: true,
      hackerrank: true,
      codility: true,
      testgorilla: true,
      description: "Live performance tracking and detailed insights"
    },
    {
      feature: "Session Recording",
      simwork: true,
      hackerrank: false,
      codility: true,
      testgorilla: false,
      description: "Complete session playback for detailed review"
    },
    {
      feature: "Embedded Development Tools",
      simwork: true,
      hackerrank: true,
      codility: true,
      testgorilla: false,
      description: "VS Code, terminals, and professional dev environments"
    },
    {
      feature: "Design Tool Integration",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: false,
      description: "Canvas-based design tools and asset libraries"
    },
    {
      feature: "Gamified Experience",
      simwork: true,
      hackerrank: false,
      codility: false,
      testgorilla: false,
      description: "Quest-based progression with achievements"
    },
    {
      feature: "Mobile Responsive",
      simwork: true,
      hackerrank: true,
      codility: true,
      testgorilla: true,
      description: "Full functionality on mobile devices"
    },
    {
      feature: "Anti-Cheating Technology",
      simwork: true,
      hackerrank: true,
      codility: true,
      testgorilla: true,
      description: "Advanced proctoring and plagiarism detection"
    },
    {
      feature: "Custom Branding",
      simwork: true,
      hackerrank: true,
      codility: true,
      testgorilla: true,
      description: "White-label options for enterprise clients"
    }
  ];

  const competitors = [
    {
      name: "SimWork",
      logo: "🚀",
      tagline: "The Future of Work Assessment",
      pricing: "$149-599/mo",
      highlight: true,
      color: "primary"
    },
    {
      name: "HackerRank",
      logo: "💻",
      tagline: "Coding Skills Assessment",
      pricing: "$199-999/mo",
      highlight: false,
      color: "neutral"
    },
    {
      name: "Codility",
      logo: "⚡",
      tagline: "Technical Hiring Platform",
      pricing: "$300-1200/mo",
      highlight: false,
      color: "neutral"
    },
    {
      name: "TestGorilla",
      logo: "🎯",
      tagline: "Multi-Skill Testing",
      pricing: "$85-300/mo",
      highlight: false,
      color: "neutral"
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-6 border border-secondary/30">
              ⚔️ Competitive Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SimWork
              </span>{' '}
              Over Others?
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              See how SimWork's immersive approach revolutionizes hiring assessment 
              compared to traditional testing platforms.
            </p>
          </motion.div>

          {/* Competitor Cards */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6 mb-12">
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: competitor.highlight ? 1.02 : 1.05 }}
                className={competitor.highlight ? 'md:col-span-1' : ''}
              >
                <GlassCard 
                  className={`text-center h-full ${
                    competitor.highlight 
                      ? 'border-primary/50 bg-primary/10 ring-2 ring-primary/30' 
                      : 'hover:border-white/30'
                  }`}
                >
                  <div className="text-4xl mb-4">{competitor.logo}</div>
                  <h3 className={`text-xl font-bold mb-2 ${
                    competitor.highlight ? 'text-primary' : 'text-contrast-high'
                  }`}>
                    {competitor.name}
                  </h3>
                  <p className="text-sm text-contrast-medium mb-4">
                    {competitor.tagline}
                  </p>
                  <div className={`text-lg font-semibold ${
                    competitor.highlight ? 'text-primary' : 'text-contrast-high'
                  }`}>
                    {competitor.pricing}
                  </div>
                  {competitor.highlight && (
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30">
                        Best Value
                      </span>
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Comparison Table */}
          <motion.div variants={itemVariants}>
            <GlassCard className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-contrast-high font-semibold">
                        Features
                      </th>
                      {competitors.map((competitor, index) => (
                        <th key={index} className={`text-center p-4 font-semibold ${
                          competitor.highlight ? 'text-primary' : 'text-contrast-high'
                        }`}>
                          {competitor.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <motion.tr
                        key={index}
                        variants={itemVariants}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4">
                          <div>
                            <div className="font-medium text-contrast-high mb-1">
                              {feature.feature}
                            </div>
                            <div className="text-sm text-contrast-medium">
                              {feature.description}
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            {feature.simwork ? <CheckIcon /> : <XIcon />}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            {feature.hackerrank ? <CheckIcon /> : <XIcon />}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            {feature.codility ? <CheckIcon /> : <XIcon />}
                          </div>
                        </td>
                        <td className="p-4 text-center">
                          <div className="flex justify-center">
                            {feature.testgorilla ? <CheckIcon /> : <XIcon />}
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold text-contrast-high text-center mb-8">
              SimWork's Unique Advantages
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <GlassCard className="text-center group hover:border-primary/50 transition-colors">
                <div className="text-4xl mb-4">🌟</div>
                <h4 className="text-lg font-semibold text-contrast-high mb-3 group-hover:text-primary transition-colors">
                  85% Higher Engagement
                </h4>
                <p className="text-contrast-medium text-sm">
                  Immersive 3D environment keeps candidates engaged throughout the entire assessment process.
                </p>
              </GlassCard>
              
              <GlassCard className="text-center group hover:border-accent/50 transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-lg font-semibold text-contrast-high mb-3 group-hover:text-accent transition-colors">
                  73% Faster Hiring
                </h4>
                <p className="text-contrast-medium text-sm">
                  Real-world simulations provide immediate insights into actual job performance capabilities.
                </p>
              </GlassCard>
              
              <GlassCard className="text-center group hover:border-secondary/50 transition-colors">
                <div className="text-4xl mb-4">💰</div>
                <h4 className="text-lg font-semibold text-contrast-high mb-3 group-hover:text-secondary transition-colors">
                  82% Reduction in Mis-hires
                </h4>
                <p className="text-contrast-medium text-sm">
                  Comprehensive skill validation in authentic work environments ensures better hiring decisions.
                </p>
              </GlassCard>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitorComparisonSection;
