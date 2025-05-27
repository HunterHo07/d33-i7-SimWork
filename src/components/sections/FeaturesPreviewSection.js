'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const FeaturesPreviewSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLevel, setActiveLevel] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const levels = [
    {
      level: 1,
      title: "Basic Navigation",
      description: "Character creation and office exploration",
      icon: "🚶‍♂️",
      difficulty: "Beginner",
      time: "2 min",
      skills: ["Spatial awareness", "UI interaction"],
      preview: "Navigate through the 3D office environment and interact with basic elements"
    },
    {
      level: 2,
      title: "Form Mastery",
      description: "Data entry and form completion challenges",
      icon: "📝",
      difficulty: "Easy",
      time: "5 min",
      skills: ["Attention to detail", "Data accuracy"],
      preview: "Complete complex forms with validation and error handling"
    },
    {
      level: 3,
      title: "Code Challenge",
      description: "Embedded terminal programming tasks",
      icon: "💻",
      difficulty: "Medium",
      time: "15 min",
      skills: ["Programming", "Problem solving"],
      preview: "Solve coding challenges in a real VS Code environment"
    },
    {
      level: 4,
      title: "Design Studio",
      description: "Creative design tasks with canvas tools",
      icon: "🎨",
      difficulty: "Medium",
      time: "20 min",
      skills: ["Visual design", "Tool proficiency"],
      preview: "Create designs using professional design tools and asset libraries"
    },
    {
      level: 5,
      title: "Project Management",
      description: "Multi-step project coordination scenario",
      icon: "📊",
      difficulty: "Hard",
      time: "25 min",
      skills: ["Planning", "Resource management"],
      preview: "Manage timelines, resources, and stakeholder communications"
    },
    {
      level: 6,
      title: "AI Engineering",
      description: "Prompt engineering and model optimization",
      icon: "🤖",
      difficulty: "Hard",
      time: "30 min",
      skills: ["AI/ML", "Prompt engineering"],
      preview: "Design and optimize AI prompts for specific business outcomes"
    },
    {
      level: 7,
      title: "Data Analysis",
      description: "Complex data visualization and insights",
      icon: "📈",
      difficulty: "Expert",
      time: "35 min",
      skills: ["Analytics", "Data visualization"],
      preview: "Analyze datasets and create meaningful visualizations"
    },
    {
      level: 8,
      title: "Team Collaboration",
      description: "Multi-user collaborative workspace",
      icon: "👥",
      difficulty: "Expert",
      time: "40 min",
      skills: ["Communication", "Teamwork"],
      preview: "Work with virtual team members on shared projects"
    },
    {
      level: 9,
      title: "Crisis Management",
      description: "High-pressure decision making scenario",
      icon: "🚨",
      difficulty: "Master",
      time: "45 min",
      skills: ["Decision making", "Stress management"],
      preview: "Handle critical situations with time pressure and multiple stakeholders"
    },
    {
      level: 10,
      title: "Full Assessment",
      description: "Complete role-based evaluation",
      icon: "🏆",
      difficulty: "Master",
      time: "60 min",
      skills: ["All skills", "Role mastery"],
      preview: "Comprehensive assessment combining all previous challenges"
    }
  ];

  const difficultyColors = {
    "Beginner": "bg-green-500/20 text-green-400 border-green-500/30",
    "Easy": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Medium": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "Hard": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    "Expert": "bg-red-500/20 text-red-400 border-red-500/30",
    "Master": "bg-purple-500/20 text-purple-400 border-purple-500/30"
  };

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
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6 border border-primary/30">
              🎮 Interactive Demo Levels
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Experience{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                10 Levels
              </span>{' '}
              of Real Work
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              From basic navigation to complex role-based assessments, each level tests 
              authentic skills in an immersive environment with real-time feedback.
            </p>
          </motion.div>

          {/* Level Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLevel(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === index ? 'ring-2 ring-primary' : ''
                }`}
              >
                <GlassCard 
                  className={`text-center h-full ${
                    activeLevel === index ? 'border-primary/50 bg-primary/10' : ''
                  }`}
                  padding="sm"
                >
                  <div className="text-3xl mb-2">{level.icon}</div>
                  <div className="text-lg font-semibold text-contrast-high mb-1">
                    Level {level.level}
                  </div>
                  <div className="text-sm text-contrast-medium mb-2">
                    {level.title}
                  </div>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium border ${difficultyColors[level.difficulty]}`}>
                    {level.difficulty}
                  </span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Level Details */}
          <motion.div
            key={activeLevel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Level Info */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-6xl">{levels[activeLevel].icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-contrast-high mb-2">
                    {levels[activeLevel].title}
                  </h3>
                  <p className="text-lg text-contrast-medium">
                    {levels[activeLevel].description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {levels[activeLevel].time}
                  </div>
                  <div className="text-sm text-contrast-medium">Duration</div>
                </div>
                <div className="text-center">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${difficultyColors[levels[activeLevel].difficulty]}`}>
                    {levels[activeLevel].difficulty}
                  </div>
                  <div className="text-sm text-contrast-medium mt-1">Difficulty</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-contrast-high mb-3">Skills Tested:</h4>
                <div className="flex flex-wrap gap-2">
                  {levels[activeLevel].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm border border-accent/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-contrast-medium mb-6 leading-relaxed">
                {levels[activeLevel].preview}
              </p>

              <div className="flex space-x-4">
                <Button variant="primary" size="md">
                  Try Level {levels[activeLevel].level}
                </Button>
                <Button variant="glass" size="md">
                  Watch Demo
                </Button>
              </div>
            </div>

            {/* Level Preview */}
            <div className="relative">
              <GlassCard className="p-8 relative overflow-hidden" glow={true}>
                {/* Simulated Interface */}
                <div className="aspect-video bg-gradient-to-br from-background to-surface rounded-lg relative overflow-hidden border border-white/10">
                  {/* Dynamic content based on active level */}
                  {activeLevel < 3 && (
                    // Basic levels - Simple UI
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/30 rounded-full"></div>
                        <div className="h-4 bg-white/20 rounded flex-1"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 bg-white/10 rounded"></div>
                        <div className="h-16 bg-white/10 rounded"></div>
                        <div className="h-16 bg-white/10 rounded"></div>
                      </div>
                    </div>
                  )}
                  
                  {activeLevel >= 3 && activeLevel < 6 && (
                    // Medium levels - Code/Design interface
                    <div className="p-4 space-y-2">
                      <div className="flex space-x-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-blue-400/30 rounded w-3/4"></div>
                        <div className="h-3 bg-green-400/30 rounded w-1/2"></div>
                        <div className="h-3 bg-purple-400/30 rounded w-2/3"></div>
                        <div className="h-3 bg-orange-400/30 rounded w-1/3"></div>
                      </div>
                    </div>
                  )}
                  
                  {activeLevel >= 6 && (
                    // Advanced levels - Complex dashboard
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="h-12 bg-gradient-to-r from-primary/20 to-secondary/20 rounded"></div>
                        <div className="h-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded"></div>
                      </div>
                      <div className="h-20 bg-white/5 rounded mb-3"></div>
                      <div className="flex space-x-2">
                        <div className="h-8 bg-white/10 rounded flex-1"></div>
                        <div className="h-8 bg-white/10 rounded flex-1"></div>
                      </div>
                    </div>
                  )}

                  {/* Floating Progress Indicator */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs border border-accent/30"
                  >
                    Level {levels[activeLevel].level}
                  </motion.div>

                  {/* Simulated Progress Bar */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: `${(activeLevel + 1) * 10}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Overlay */}
                <motion.div
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </motion.div>
              </GlassCard>

              {/* Level Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {levels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveLevel(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeLevel === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-contrast-high mb-4">
                Ready to Experience All 10 Levels?
              </h3>
              <p className="text-contrast-medium mb-6 max-w-2xl mx-auto">
                Start with Level 1 and progress through increasingly complex challenges 
                that mirror real-world work scenarios. Each level adapts to your performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" href="/demo">
                  Start Interactive Demo
                </Button>
                <Button variant="glass" size="lg">
                  Schedule Live Walkthrough
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesPreviewSection;
