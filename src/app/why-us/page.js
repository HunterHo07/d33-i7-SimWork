'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function WhyUsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('innovation');

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

  const differentiators = [
    {
      icon: "🚀",
      title: "First-to-Market Innovation",
      description: "The only platform combining 3D immersive environments with real-world task assessment",
      stats: "Patent-pending technology"
    },
    {
      icon: "🎯",
      title: "Proven Results",
      description: "82% reduction in mis-hires, 73% faster hiring, 85% higher candidate engagement",
      stats: "500+ companies trust us"
    },
    {
      icon: "🔬",
      title: "Science-Backed Approach",
      description: "Built on cognitive psychology and behavioral assessment research",
      stats: "PhD-level expertise"
    },
    {
      icon: "🌍",
      title: "Global Scale Ready",
      description: "Multi-language support, GDPR compliant, enterprise-grade security",
      stats: "99.9% uptime SLA"
    }
  ];

  const comparisonData = {
    innovation: {
      title: "Innovation Leadership",
      items: [
        { feature: "3D Immersive Environment", us: "✓ First & Only", others: "✗ None" },
        { feature: "Multi-Role Assessment", us: "✓ 5 Roles", others: "✗ Single Focus" },
        { feature: "Real-World Simulation", us: "✓ Authentic Tasks", others: "✗ Theoretical Tests" },
        { feature: "AI-Powered Adaptivity", us: "✓ Dynamic Difficulty", others: "✗ Static Tests" },
        { feature: "Gamified Experience", us: "✓ Quest-Based", others: "✗ Traditional UI" }
      ]
    },
    performance: {
      title: "Performance Metrics",
      items: [
        { feature: "Candidate Completion Rate", us: "85%", others: "65%" },
        { feature: "Assessment Accuracy", us: "94%", others: "78%" },
        { feature: "Time to Hire Reduction", us: "73%", others: "25%" },
        { feature: "Mis-hire Reduction", us: "82%", others: "35%" },
        { feature: "Candidate Satisfaction", us: "4.8/5", others: "3.2/5" }
      ]
    },
    technology: {
      title: "Technology Stack",
      items: [
        { feature: "Frontend Framework", us: "Next.js 15+", others: "Legacy React" },
        { feature: "3D Engine", us: "Three.js + WebGL", others: "None" },
        { feature: "AI Integration", us: "GPT-4 + Custom", others: "Basic ML" },
        { feature: "Real-time Analytics", us: "Live Dashboard", others: "Batch Reports" },
        { feature: "Mobile Support", us: "Native Experience", others: "Responsive Web" }
      ]
    }
  };

  const caseStudies = [
    {
      company: "TechFlow Inc",
      industry: "Software Development",
      challenge: "45-day hiring cycles, 60% mis-hire rate",
      solution: "Implemented SimWork for developer assessment",
      results: [
        "Reduced hiring time to 12 days",
        "Mis-hire rate dropped to 8%",
        "Saved $2.1M annually",
        "94% candidate satisfaction"
      ],
      quote: "SimWork transformed our entire hiring process. We now hire with confidence.",
      avatar: "👩‍💻"
    },
    {
      company: "DataVision Corp",
      industry: "Data Analytics",
      challenge: "Difficulty assessing real analytical skills",
      solution: "Multi-role assessment for data teams",
      results: [
        "85% improvement in skill validation",
        "67% faster onboarding",
        "Reduced training costs by 40%",
        "Higher team performance"
      ],
      quote: "The real-world simulations give us insights we never had before.",
      avatar: "👨‍💼"
    }
  ];

  const roiCalculator = {
    inputs: {
      hiresPerYear: 100,
      averageSalary: 80000,
      currentMishireRate: 0.67,
      currentTimeToHire: 45
    },
    withSimwork: {
      mishireRate: 0.12,
      timeToHire: 12,
      costPerHire: 5000
    }
  };

  const calculateROI = () => {
    const currentCost = roiCalculator.inputs.hiresPerYear * roiCalculator.inputs.currentMishireRate * 240000;
    const simworkCost = roiCalculator.inputs.hiresPerYear * roiCalculator.withSimwork.mishireRate * 240000;
    const savings = currentCost - simworkCost;
    const simworkAnnualCost = roiCalculator.inputs.hiresPerYear * 12 * 299; // Professional plan
    const netSavings = savings - simworkAnnualCost;
    const roi = ((netSavings / simworkAnnualCost) * 100).toFixed(0);

    return {
      currentCost: currentCost.toLocaleString(),
      simworkCost: simworkCost.toLocaleString(),
      savings: savings.toLocaleString(),
      netSavings: netSavings.toLocaleString(),
      roi: roi
    };
  };

  const roiResults = calculateROI();

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
              Why Choose{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                SimWork?
              </span>
            </h1>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              We're not just another assessment platform. We're revolutionizing how companies
              evaluate talent with immersive, data-driven experiences.
            </p>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <GlassCard className="text-center h-full group hover:border-primary/50 transition-colors">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-contrast-high mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-contrast-medium mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium border border-primary/30">
                      {item.stats}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Comparison */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-contrast-high text-center mb-8">
              Detailed Comparison
            </h2>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-white/5 rounded-lg p-1">
                {Object.keys(comparisonData).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-contrast-medium hover:text-contrast-high hover:bg-white/10'
                    }`}
                  >
                    {comparisonData[tab].title}
                  </button>
                ))}
              </div>
            </div>

            {/* Comparison Table */}
            <GlassCard className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-contrast-high font-semibold">
                        {comparisonData[activeTab].title}
                      </th>
                      <th className="text-center p-4 font-semibold text-primary">
                        SimWork
                      </th>
                      <th className="text-center p-4 font-semibold text-contrast-medium">
                        Traditional Platforms
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData[activeTab].items.map((item, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-4 text-contrast-high font-medium">
                          {item.feature}
                        </td>
                        <td className="p-4 text-center text-primary font-semibold">
                          {item.us}
                        </td>
                        <td className="p-4 text-center text-contrast-medium">
                          {item.others}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </GlassCard>
          </motion.div>

          {/* Case Studies */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-3xl font-bold text-contrast-high text-center mb-12">
              Success Stories
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard className="h-full">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{study.avatar}</div>
                      <div>
                        <h3 className="text-xl font-bold text-contrast-high">
                          {study.company}
                        </h3>
                        <p className="text-contrast-medium">{study.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-contrast-high mb-2">Challenge:</h4>
                      <p className="text-contrast-medium text-sm">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-contrast-high mb-2">Solution:</h4>
                      <p className="text-contrast-medium text-sm">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-contrast-high mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center space-x-2 text-sm">
                            <span className="text-accent">✓</span>
                            <span className="text-contrast-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic text-contrast-medium">
                      "{study.quote}"
                    </blockquote>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ROI Calculator */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h2 className="text-3xl font-bold text-contrast-high text-center mb-8">
                ROI Calculator
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-contrast-high mb-6">
                    Your Current Situation
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Hires per year:</span>
                      <span className="font-bold text-contrast-high">100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Current mis-hire rate:</span>
                      <span className="font-bold text-red-400">67%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Time to hire:</span>
                      <span className="font-bold text-red-400">45 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Annual mis-hire cost:</span>
                      <span className="font-bold text-red-400">${roiResults.currentCost}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-contrast-high mb-6">
                    With SimWork
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Improved mis-hire rate:</span>
                      <span className="font-bold text-accent">12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Reduced time to hire:</span>
                      <span className="font-bold text-accent">12 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Annual mis-hire cost:</span>
                      <span className="font-bold text-accent">${roiResults.simworkCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-contrast-medium">Net annual savings:</span>
                      <span className="font-bold text-primary">${roiResults.netSavings}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 p-6 bg-white/10 rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">
                  {roiResults.roi}% ROI
                </div>
                <p className="text-contrast-medium">
                  Return on investment in the first year
                </p>
              </div>

              <div className="text-center mt-8">
                <Button variant="primary" size="lg">
                  Calculate Your Custom ROI
                </Button>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
