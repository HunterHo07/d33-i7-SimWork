'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from '../ui/GlassCard';

const ProblemSolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const problems = [
    {
      icon: "💸",
      title: "Wrong Hires, Wasted Money",
      description: "Companies keep hiring the wrong people—time, salary, and training costs wasted. Real candidates also lose out due to bad screening and vague interviews.",
      stat: "$240K",
      statLabel: "Average cost per bad hire"
    },
    {
      icon: "🎭",
      title: "Fake Skills, No Real Test",
      description: "Many hires pass interviews but fail on the job. There's no hands-on task or live environment to prove they can actually do the daily work—even with AI tools.",
      stat: "67%",
      statLabel: "Of hires don't meet expectations"
    },
    {
      icon: "⏰",
      title: "Slow, Inefficient Hiring Process",
      description: "Too many rounds, test sheets, and guesswork. No live data, no real output. Hiring managers waste time when they could just watch candidates solve actual tasks.",
      stat: "45 days",
      statLabel: "Average time to hire"
    },
    {
      icon: "📊",
      title: "No KPI or Proof of Skill",
      description: "Current systems don't track real performance. Without real-time KPIs, logs, and session recordings, it's all talk—no proof.",
      stat: "89%",
      statLabel: "Of companies lack skill validation"
    }
  ];

  const solutions = [
    {
      icon: "🏢",
      title: "Immersive, Multi-Role Game World",
      description: "SimWork places users in a 3D office/map with stations for Developer, Designer, PM, Data Entry, and AI Engineer roles. Trainees navigate to desks equipped with real terminals, virtual notebooks, and design tools.",
      highlight: "Real work environment simulation"
    },
    {
      icon: "🤖",
      title: "AI-Powered Adaptivity & Agents",
      description: "Integrated GPT-based agents guide scenarios, perform OCR on designer-submitted assets, and dynamically adjust task complexity. This prevents mis-hires by exposing candidates to true job demands.",
      highlight: "Intelligent difficulty scaling"
    },
    {
      icon: "📈",
      title: "Real-Time Analytics & Feedback",
      description: "A dashboard tracks KPIs (accuracy, speed, decision quality), generates personalized feedback loops, and offers hiring managers live or recorded sessions—bridging learning and evaluation.",
      highlight: "Data-driven hiring decisions"
    }
  ];

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
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6 border border-red-500/30">
              🚨 The Hiring Crisis
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              The Problem with{' '}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Traditional Hiring
              </span>
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              Companies waste billions on mis-hires while talented candidates get overlooked. 
              It's time for a revolution in how we assess real-world skills.
            </p>
          </motion.div>

          {/* Problems Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GlassCard className="h-full text-center group hover:border-red-500/50 transition-colors duration-300">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-lg font-semibold text-contrast-high mb-3 group-hover:text-red-400 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-contrast-medium mb-4 leading-relaxed">
                    {problem.description}
                  </p>
                  <div className="mt-auto">
                    <div className="text-2xl font-bold text-red-400 mb-1">{problem.stat}</div>
                    <div className="text-xs text-contrast-medium">{problem.statLabel}</div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-6 py-3 text-contrast-medium">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="inline-block"
                >
                  ⚡
                </motion.div>
                <span className="ml-2">Our Solution</span>
              </span>
            </div>
          </motion.div>

          {/* Solution Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 border border-accent/30">
              ✨ The SimWork Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Experience{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Real Work
              </span>{' '}
              Before You Hire
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              SimWork revolutionizes hiring with immersive 3D simulations that test real skills 
              in authentic work environments, powered by AI and backed by data.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GlassCard className="h-full group hover:border-primary/50 transition-colors duration-300">
                  <div className="text-5xl mb-6">{solution.icon}</div>
                  <h3 className="text-xl font-semibold text-contrast-high mb-4 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-contrast-medium mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                      {solution.highlight}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Results Comparison */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8 lg:p-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-contrast-high mb-6">
                    The Results Speak for Themselves
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-contrast-medium">Mis-hire Rate</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-red-400 line-through">67%</span>
                        <span className="text-accent font-bold">12%</span>
                        <span className="text-accent text-sm">↓ 82%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-contrast-medium">Time to Hire</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-red-400 line-through">45 days</span>
                        <span className="text-accent font-bold">12 days</span>
                        <span className="text-accent text-sm">↓ 73%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <span className="text-contrast-medium">Assessment Completion</span>
                      <div className="flex items-center space-x-4">
                        <span className="text-red-400 line-through">65%</span>
                        <span className="text-accent font-bold">85%</span>
                        <span className="text-accent text-sm">↑ 31%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    $2.1M
                  </div>
                  <p className="text-xl text-contrast-medium mb-6">
                    Average annual savings per 100 hires
                  </p>
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block px-6 py-3 bg-accent/20 text-accent rounded-full font-semibold border border-accent/30"
                  >
                    ROI: 847%
                  </motion.div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
