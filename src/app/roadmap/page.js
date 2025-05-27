'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function RoadmapPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhase, setSelectedPhase] = useState(0);

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

  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      period: "Q1 2024",
      status: "completed",
      progress: 100,
      description: "Core platform with 2.5D simulation and basic assessment features",
      features: [
        "✅ 2.5D Interactive Office Environment",
        "✅ 5 Role-Based Assessment Stations",
        "✅ Basic Analytics Dashboard",
        "✅ Session Recording & Playback",
        "✅ Multi-Device Responsive Design",
        "✅ Real-Time Performance Tracking"
      ],
      metrics: {
        users: "1,000+",
        assessments: "5,000+",
        satisfaction: "4.6/5"
      }
    },
    {
      phase: "Phase 2",
      title: "AI Enhancement",
      period: "Q2 2024",
      status: "in-progress",
      progress: 75,
      description: "Advanced AI-powered features and adaptive difficulty scaling",
      features: [
        "✅ GPT-4 Integration for Dynamic Scenarios",
        "✅ Adaptive Difficulty Algorithm",
        "🔄 Natural Language Feedback System",
        "🔄 AI-Powered Candidate Insights",
        "⏳ Automated Report Generation",
        "⏳ Predictive Performance Analytics"
      ],
      metrics: {
        accuracy: "+25%",
        engagement: "+40%",
        efficiency: "+60%"
      }
    },
    {
      phase: "Phase 3",
      title: "Enterprise Scale",
      period: "Q3 2024",
      status: "planned",
      progress: 0,
      description: "Enterprise-grade features and advanced customization options",
      features: [
        "🔮 White-Label Solutions",
        "🔮 Advanced Security & Compliance",
        "🔮 Custom Role Builder",
        "🔮 API Integration Platform",
        "🔮 Advanced Team Analytics",
        "🔮 Multi-Tenant Architecture"
      ],
      metrics: {
        enterprises: "100+",
        scalability: "10x",
        security: "SOC 2"
      }
    },
    {
      phase: "Phase 4",
      title: "VR/AR Integration",
      period: "Q4 2024",
      status: "planned",
      progress: 0,
      description: "Immersive VR/AR experiences for next-generation assessment",
      features: [
        "🔮 VR Office Environment",
        "🔮 AR Mobile Assessment",
        "🔮 Haptic Feedback Integration",
        "🔮 Spatial Computing Support",
        "🔮 Mixed Reality Collaboration",
        "🔮 Advanced Motion Tracking"
      ],
      metrics: {
        immersion: "Next-level",
        adoption: "Early access",
        innovation: "Industry-first"
      }
    },
    {
      phase: "Phase 5",
      title: "Global Expansion",
      period: "Q1 2025",
      status: "future",
      progress: 0,
      description: "International markets and localization features",
      features: [
        "🔮 Multi-Language Support (20+ languages)",
        "🔮 Regional Compliance Features",
        "🔮 Local Market Customization",
        "🔮 Global Partner Network",
        "🔮 Cultural Assessment Adaptation",
        "🔮 International Data Centers"
      ],
      metrics: {
        markets: "50+",
        languages: "20+",
        partners: "Global"
      }
    },
    {
      phase: "Phase 6",
      title: "AI Workforce",
      period: "Q2 2025",
      status: "future",
      progress: 0,
      description: "AI-human collaboration assessment and future work scenarios",
      features: [
        "🔮 AI Colleague Simulations",
        "🔮 Human-AI Collaboration Tests",
        "🔮 Future Work Scenarios",
        "🔮 Quantum Computing Readiness",
        "🔮 Neural Interface Support",
        "🔮 Autonomous Assessment Agents"
      ],
      metrics: {
        innovation: "Cutting-edge",
        readiness: "Future-proof",
        impact: "Revolutionary"
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-accent border-accent bg-accent/20';
      case 'in-progress': return 'text-primary border-primary bg-primary/20';
      case 'planned': return 'text-secondary border-secondary bg-secondary/20';
      case 'future': return 'text-neutral border-neutral bg-neutral/20';
      default: return 'text-neutral border-neutral bg-neutral/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📋';
      case 'future': return '🔮';
      default: return '⏳';
    }
  };

  const communityFeatures = [
    {
      title: "Custom Assessment Builder",
      votes: 234,
      description: "Allow customers to create their own assessment scenarios",
      status: "Under Review"
    },
    {
      title: "Team Collaboration Mode",
      votes: 189,
      description: "Multi-candidate collaborative assessment scenarios",
      status: "In Development"
    },
    {
      title: "Industry-Specific Templates",
      votes: 156,
      description: "Pre-built assessment templates for different industries",
      status: "Planned"
    },
    {
      title: "Advanced Video Analytics",
      votes: 143,
      description: "AI-powered analysis of candidate behavior and expressions",
      status: "Research"
    },
    {
      title: "Mobile-First Assessment",
      votes: 127,
      description: "Native mobile app with full assessment capabilities",
      status: "Planned"
    }
  ];

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
              Product{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Roadmap
              </span>
            </h1>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              Our journey to revolutionize hiring assessment. See what we've built,
              what we're working on, and what's coming next.
            </p>
          </motion.div>

          {/* Timeline Navigation */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {roadmapPhases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPhase(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 border ${
                    selectedPhase === index
                      ? getStatusColor(phase.status)
                      : 'bg-white/10 text-contrast-medium border-white/20 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{getStatusIcon(phase.status)}</span>
                  {phase.phase}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Selected Phase Details */}
          <motion.div
            key={selectedPhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <GlassCard className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-4xl">{getStatusIcon(roadmapPhases[selectedPhase].status)}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-contrast-high">
                        {roadmapPhases[selectedPhase].title}
                      </h2>
                      <p className="text-contrast-medium">
                        {roadmapPhases[selectedPhase].period} • {roadmapPhases[selectedPhase].phase}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-contrast-medium mb-6 leading-relaxed">
                    {roadmapPhases[selectedPhase].description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-contrast-medium">Progress</span>
                      <span className="text-sm font-semibold text-primary">
                        {roadmapPhases[selectedPhase].progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${roadmapPhases[selectedPhase].progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h3 className="text-xl font-semibold text-contrast-high mb-4">Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {roadmapPhases[selectedPhase].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-xl font-semibold text-contrast-high mb-4">Key Metrics</h3>
                  <div className="space-y-4">
                    {Object.entries(roadmapPhases[selectedPhase].metrics).map(([key, value], index) => (
                      <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                        <div className="text-sm text-contrast-medium capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Community Voting */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-contrast-high text-center mb-8">
              Community Feature Requests
            </h2>
            <p className="text-center text-contrast-medium mb-8">
              Help shape our roadmap by voting on features you'd like to see next
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <GlassCard className="h-full group hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-semibold text-contrast-high group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(feature.status.toLowerCase().replace(' ', '-'))}`}>
                        {feature.status}
                      </span>
                    </div>

                    <p className="text-contrast-medium text-sm mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-primary font-bold">{feature.votes}</span>
                        <span className="text-contrast-medium text-sm">votes</span>
                      </div>
                      <Button variant="glass" size="sm">
                        👍 Vote
                      </Button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Get Involved */}
          <motion.div variants={itemVariants}>
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-contrast-high mb-4">
                  Shape the Future with Us
                </h2>
                <p className="text-xl text-contrast-medium mb-8 max-w-3xl mx-auto">
                  Join our community of forward-thinking companies and help us build
                  the future of work assessment. Your feedback drives our roadmap.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl mb-3">💡</div>
                    <h3 className="font-semibold text-contrast-high mb-2">Suggest Features</h3>
                    <p className="text-sm text-contrast-medium">Share your ideas for new features and improvements</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🧪</div>
                    <h3 className="font-semibold text-contrast-high mb-2">Beta Testing</h3>
                    <p className="text-sm text-contrast-medium">Get early access to new features and provide feedback</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-3">🤝</div>
                    <h3 className="font-semibold text-contrast-high mb-2">Partner Program</h3>
                    <p className="text-sm text-contrast-medium">Collaborate with us on custom solutions and integrations</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" size="lg">
                    Join Beta Program
                  </Button>
                  <Button variant="glass" size="lg">
                    Submit Feature Request
                  </Button>
                  <Button variant="glass" size="lg">
                    Become a Partner
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
