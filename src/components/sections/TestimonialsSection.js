'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Engineering",
      company: "TechFlow Inc",
      avatar: "👩‍💻",
      rating: 5,
      quote: "SimWork completely transformed our hiring process. We went from 45-day hiring cycles to just 12 days, and our mis-hire rate dropped by 80%. The 3D environment gives us insights we never had before.",
      metrics: {
        timeReduction: "73%",
        mishireReduction: "80%",
        candidateSatisfaction: "94%"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Talent Acquisition",
      company: "DataVision Corp",
      avatar: "👨‍💼",
      rating: 5,
      quote: "The real-world simulation aspect is game-changing. Candidates actually enjoy the assessment process, and we get to see how they handle actual work scenarios. It's like having a crystal ball for hiring decisions.",
      metrics: {
        engagementIncrease: "85%",
        accuracyImprovement: "67%",
        costSavings: "$2.1M"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Chief People Officer",
      company: "InnovateLabs",
      avatar: "👩‍🔬",
      rating: 5,
      quote: "We've tested every major assessment platform, but SimWork is in a league of its own. The AI-powered adaptivity means each candidate gets a personalized experience that truly tests their capabilities.",
      metrics: {
        platformComparison: "Best in class",
        adaptivityScore: "96%",
        hiringSatisfaction: "92%"
      }
    },
    {
      name: "James Park",
      role: "Senior Recruiter",
      company: "CloudScale Systems",
      avatar: "👨‍💻",
      rating: 5,
      quote: "The session recordings are invaluable. We can review exactly how candidates approached problems, their thought processes, and collaboration skills. It's like being in the room with them during the assessment.",
      metrics: {
        insightQuality: "Exceptional",
        reviewEfficiency: "78%",
        decisionConfidence: "89%"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Director of HR",
      company: "NextGen Solutions",
      avatar: "👩‍💼",
      rating: 5,
      quote: "Our candidates love the SimWork experience. Instead of dreading assessments, they're excited to showcase their skills in a realistic environment. This has dramatically improved our employer brand.",
      metrics: {
        candidateNPS: "+73",
        completionRate: "94%",
        brandImprovement: "Significant"
      }
    }
  ];

  const companies = [
    { name: "TechFlow", logo: "🚀" },
    { name: "DataVision", logo: "📊" },
    { name: "InnovateLabs", logo: "🔬" },
    { name: "CloudScale", logo: "☁️" },
    { name: "NextGen", logo: "⚡" },
    { name: "DevCorp", logo: "💻" },
    { name: "AITech", logo: "🤖" },
    { name: "StartupX", logo: "🌟" }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
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
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 border border-accent/30">
              💬 Customer Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Trusted by{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Leading Companies
              </span>
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto">
              See how industry leaders are transforming their hiring process with SimWork's 
              immersive assessment platform.
            </p>
          </motion.div>

          {/* Main Testimonial */}
          <motion.div variants={itemVariants} className="mb-16">
            <GlassCard className="p-8 lg:p-12 relative overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-3 gap-8 items-center"
              >
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <StarRating rating={testimonials[currentTestimonial].rating} />
                  <blockquote className="text-xl lg:text-2xl text-contrast-high leading-relaxed my-6 font-medium">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{testimonials[currentTestimonial].avatar}</div>
                    <div>
                      <div className="font-semibold text-contrast-high text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-contrast-medium">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {Object.entries(testimonials[currentTestimonial].metrics).map(([key, value], index) => (
                    <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-sm text-contrast-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'bg-primary scale-125' 
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Company Logos Infinite Scroll */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-center text-lg text-contrast-medium mb-8">
              Trusted by 500+ companies worldwide
            </h3>
            <div className="relative overflow-hidden">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex space-x-12 items-center"
                style={{ width: 'calc(200% + 48px)' }}
              >
                {[...companies, ...companies].map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-contrast-medium hover:text-primary transition-colors whitespace-nowrap"
                  >
                    <span className="text-2xl">{company.logo}</span>
                    <span className="font-medium">{company.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-4 gap-6">
              <GlassCard className="text-center group hover:border-primary/50 transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  500+
                </motion.div>
                <div className="text-contrast-medium">Companies Trust Us</div>
              </GlassCard>
              
              <GlassCard className="text-center group hover:border-accent/50 transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="text-3xl font-bold text-accent mb-2"
                >
                  50K+
                </motion.div>
                <div className="text-contrast-medium">Assessments Completed</div>
              </GlassCard>
              
              <GlassCard className="text-center group hover:border-secondary/50 transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="text-3xl font-bold text-secondary mb-2"
                >
                  94%
                </motion.div>
                <div className="text-contrast-medium">Customer Satisfaction</div>
              </GlassCard>
              
              <GlassCard className="text-center group hover:border-primary/50 transition-colors">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  $2.1M
                </motion.div>
                <div className="text-contrast-medium">Average Annual Savings</div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Early Adopter CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-contrast-high mb-4">
                Join the Early Adopter Program
              </h3>
              <p className="text-contrast-medium mb-6 max-w-2xl mx-auto">
                Be among the first to experience the future of hiring assessment. 
                Early adopters get exclusive access, priority support, and special pricing.
              </p>
              <motion.div
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="inline-block px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_100%] text-white rounded-lg font-semibold cursor-pointer hover:scale-105 transition-transform"
              >
                🚀 Join Early Adopter Program
              </motion.div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
