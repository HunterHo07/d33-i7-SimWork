'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function ShowcasePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedShowcase, setSelectedShowcase] = useState(null);

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

  const filters = [
    { id: 'all', name: 'All Industries', count: 12 },
    { id: 'tech', name: 'Technology', count: 5 },
    { id: 'finance', name: 'Finance', count: 3 },
    { id: 'healthcare', name: 'Healthcare', count: 2 },
    { id: 'retail', name: 'Retail', count: 2 }
  ];

  const showcases = [
    {
      id: 1,
      company: "TechFlow Inc",
      industry: "tech",
      size: "500-1000",
      logo: "🚀",
      title: "Revolutionizing Developer Hiring",
      description: "How TechFlow reduced their hiring cycle by 73% while improving candidate quality",
      challenge: "45-day hiring cycles with 60% mis-hire rate for senior developers",
      solution: "Implemented SimWork's immersive coding challenges and real-world project simulations",
      results: [
        "Reduced hiring time from 45 to 12 days",
        "Mis-hire rate dropped from 60% to 8%",
        "Candidate satisfaction increased to 94%",
        "Saved $2.1M annually in hiring costs"
      ],
      metrics: {
        timeReduction: "73%",
        mishireReduction: "87%",
        satisfaction: "94%",
        savings: "$2.1M"
      },
      testimonial: "SimWork completely transformed our hiring process. We now hire with confidence and candidates love the experience.",
      author: "Sarah Chen, VP of Engineering",
      image: "bg-gradient-to-br from-blue-500/30 to-purple-500/30",
      featured: true
    },
    {
      id: 2,
      company: "DataVision Corp",
      industry: "tech",
      size: "1000+",
      logo: "📊",
      title: "Data Team Excellence",
      description: "Building high-performing data teams through immersive skill assessment",
      challenge: "Difficulty validating real analytical and visualization skills",
      solution: "Multi-role assessment covering data analysis, visualization, and AI engineering",
      results: [
        "85% improvement in skill validation accuracy",
        "67% faster onboarding process",
        "40% reduction in training costs",
        "Higher team performance metrics"
      ],
      metrics: {
        accuracy: "85%",
        onboarding: "67%",
        training: "40%",
        performance: "High"
      },
      testimonial: "The real-world simulations give us insights we never had before. Our data team quality has never been higher.",
      author: "Marcus Rodriguez, Head of Data",
      image: "bg-gradient-to-br from-green-500/30 to-blue-500/30",
      featured: false
    },
    {
      id: 3,
      company: "FinanceFirst Bank",
      industry: "finance",
      size: "5000+",
      logo: "🏦",
      title: "Compliance & Risk Assessment",
      description: "Ensuring regulatory compliance through comprehensive skill validation",
      challenge: "Complex regulatory requirements and risk management skills assessment",
      solution: "Custom compliance scenarios and risk management simulations",
      results: [
        "100% regulatory compliance maintained",
        "50% reduction in compliance training time",
        "Enhanced risk assessment capabilities",
        "Improved audit outcomes"
      ],
      metrics: {
        compliance: "100%",
        training: "50%",
        risk: "Enhanced",
        audits: "Improved"
      },
      testimonial: "SimWork helps us maintain the highest standards while streamlining our assessment process.",
      author: "Jennifer Walsh, Chief Risk Officer",
      image: "bg-gradient-to-br from-yellow-500/30 to-orange-500/30",
      featured: false
    },
    {
      id: 4,
      company: "HealthTech Solutions",
      industry: "healthcare",
      size: "200-500",
      logo: "🏥",
      title: "Medical Device Innovation",
      description: "Assessing technical skills for medical device development teams",
      challenge: "Specialized technical skills for FDA-regulated medical devices",
      solution: "Industry-specific simulations with regulatory compliance scenarios",
      results: [
        "Improved technical skill validation",
        "Faster FDA approval processes",
        "Enhanced team collaboration",
        "Reduced development cycles"
      ],
      metrics: {
        validation: "Improved",
        approval: "Faster",
        collaboration: "Enhanced",
        cycles: "Reduced"
      },
      testimonial: "The specialized healthcare scenarios help us find the right talent for our complex regulatory environment.",
      author: "Dr. Michael Chen, CTO",
      image: "bg-gradient-to-br from-red-500/30 to-pink-500/30",
      featured: false
    },
    {
      id: 5,
      company: "RetailMax Global",
      industry: "retail",
      size: "10000+",
      logo: "🛍️",
      title: "E-commerce Team Building",
      description: "Scaling e-commerce operations with the right talent",
      challenge: "Rapid scaling requirements for global e-commerce expansion",
      solution: "Multi-role assessments for developers, designers, and operations teams",
      results: [
        "300% faster team scaling",
        "Improved cross-functional collaboration",
        "Enhanced customer experience metrics",
        "Successful global expansion"
      ],
      metrics: {
        scaling: "300%",
        collaboration: "Improved",
        experience: "Enhanced",
        expansion: "Successful"
      },
      testimonial: "SimWork enabled our rapid global expansion by helping us build world-class teams quickly.",
      author: "Lisa Thompson, Global HR Director",
      image: "bg-gradient-to-br from-purple-500/30 to-indigo-500/30",
      featured: false
    }
  ];

  const filteredShowcases = selectedFilter === 'all'
    ? showcases
    : showcases.filter(item => item.industry === selectedFilter);

  const featuredShowcase = showcases.find(item => item.featured);

  return (
    <div ref={ref} className="min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Customer{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              See how leading companies across industries are transforming their hiring
              process with SimWork's immersive assessment platform.
            </p>
          </motion.div>

          {/* Featured Showcase */}
          {featuredShowcase && (
            <motion.div variants={itemVariants} className="mb-20">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30">
                  ⭐ Featured Success Story
                </span>
              </div>
              <GlassCard className="p-8 lg:p-12 relative overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-5xl">{featuredShowcase.logo}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-contrast-high">
                          {featuredShowcase.company}
                        </h2>
                        <p className="text-contrast-medium capitalize">
                          {featuredShowcase.industry} • {featuredShowcase.size} employees
                        </p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-primary mb-4">
                      {featuredShowcase.title}
                    </h3>

                    <p className="text-contrast-medium mb-6 leading-relaxed">
                      {featuredShowcase.description}
                    </p>

                    <blockquote className="border-l-4 border-primary pl-6 mb-6">
                      <p className="text-lg italic text-contrast-high mb-2">
                        "{featuredShowcase.testimonial}"
                      </p>
                      <cite className="text-contrast-medium">
                        — {featuredShowcase.author}
                      </cite>
                    </blockquote>

                    <Button variant="primary" size="lg">
                      Read Full Case Study
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(featuredShowcase.metrics).map(([key, value], index) => (
                        <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                          <div className="text-sm text-contrast-medium capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className={`h-48 ${featuredShowcase.image} rounded-lg relative overflow-hidden`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-50">{featuredShowcase.logo}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white/10 text-contrast-medium hover:bg-white/20 hover:text-contrast-high'
                  }`}
                >
                  {filter.name} ({filter.count})
                </button>
              ))}
            </div>
          </motion.div>

          {/* Showcase Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredShowcases.map((showcase, index) => (
              <motion.div
                key={showcase.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                onClick={() => setSelectedShowcase(showcase)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full group hover:border-primary/50 transition-colors">
                  <div className={`h-32 ${showcase.image} rounded-lg mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl opacity-70">{showcase.logo}</div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full capitalize">
                        {showcase.industry}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-contrast-high mb-2 group-hover:text-primary transition-colors">
                    {showcase.company}
                  </h3>

                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {showcase.title}
                  </h4>

                  <p className="text-contrast-medium text-sm mb-4 leading-relaxed">
                    {showcase.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {Object.entries(showcase.metrics).slice(0, 2).map(([key, value], index) => (
                      <div key={index} className="text-center p-2 bg-white/5 rounded">
                        <div className="font-bold text-primary text-sm">{value}</div>
                        <div className="text-xs text-contrast-medium capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-contrast-medium">
                      {showcase.size} employees
                    </span>
                    <span className="text-primary text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Summary */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h2 className="text-3xl font-bold text-contrast-high text-center mb-8">
                Collective Impact
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    500+
                  </motion.div>
                  <div className="text-contrast-medium">Companies Served</div>
                </div>
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="text-4xl font-bold text-accent mb-2"
                  >
                    50K+
                  </motion.div>
                  <div className="text-contrast-medium">Assessments Completed</div>
                </div>
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="text-4xl font-bold text-secondary mb-2"
                  >
                    $50M+
                  </motion.div>
                  <div className="text-contrast-medium">Total Savings Generated</div>
                </div>
                <div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="text-4xl font-bold text-primary mb-2"
                  >
                    94%
                  </motion.div>
                  <div className="text-contrast-medium">Average Satisfaction</div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-xl text-contrast-medium mb-6">
                  Ready to join these success stories?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Start Your Success Story
                  </Button>
                  <Button variant="glass" size="lg">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
