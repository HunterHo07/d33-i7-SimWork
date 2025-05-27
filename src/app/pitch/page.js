'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function PitchPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    {
      title: "The $240B Problem",
      subtitle: "Corporate Hiring Crisis",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">The Crisis</h3>
              <ul className="space-y-3 text-contrast-medium">
                <li className="flex items-center space-x-3">
                  <span className="text-red-400">💸</span>
                  <span>$240K average cost per mis-hire</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400">⏰</span>
                  <span>45 days average time to hire</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400">📉</span>
                  <span>67% of hires don't meet expectations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-red-400">🎭</span>
                  <span>Fake skills pass traditional interviews</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-2">$240B</div>
              <div className="text-xl text-contrast-medium">Annual cost of mis-hires globally</div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "SimWork Solution",
      subtitle: "The Future of Work Assessment",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard className="text-center">
              <div className="text-4xl mb-3">🏢</div>
              <h4 className="font-semibold text-contrast-high mb-2">Immersive 3D Office</h4>
              <p className="text-sm text-contrast-medium">Real work environment simulation</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-4xl mb-3">🤖</div>
              <h4 className="font-semibold text-contrast-high mb-2">AI-Powered Adaptivity</h4>
              <p className="text-sm text-contrast-medium">Dynamic difficulty adjustment</p>
            </GlassCard>
            <GlassCard className="text-center">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-semibold text-contrast-high mb-2">Real-Time Analytics</h4>
              <p className="text-sm text-contrast-medium">Data-driven hiring decisions</p>
            </GlassCard>
          </div>
          <div className="text-center">
            <p className="text-xl text-contrast-medium">
              Experience real work before you hire. Test authentic skills in immersive environments.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Market Opportunity",
      subtitle: "$17.8B TAM Growing at 15.2% CAGR",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Total Addressable Market</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Corporate Training</span>
                  <span className="font-bold text-primary">$366.2B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Simulation Training</span>
                  <span className="font-bold text-secondary">$17.8B</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Technical Assessment</span>
                  <span className="font-bold text-accent">$2.1B</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Market Trends</h3>
              <ul className="space-y-2 text-contrast-medium">
                <li>• 78% adopting AI-driven training</li>
                <li>• VR/AR training up 340% since 2022</li>
                <li>• 89% prioritizing skills over degrees</li>
                <li>• 65% increase in virtual assessments</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Competitive Advantage",
      subtitle: "First-to-Market Immersive Assessment",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-contrast-high">Only Immersive 3D Platform</div>
                    <div className="text-sm text-contrast-medium">No competitor offers full office simulation</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-contrast-high">Multi-Role Assessment</div>
                    <div className="text-sm text-contrast-medium">5 roles vs competitors' single focus</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-contrast-high">Real-World Task Integration</div>
                    <div className="text-sm text-contrast-medium">Actual tools vs theoretical tests</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-secondary mb-4">Results</h3>
              <div className="space-y-3">
                <div className="text-center p-4 bg-accent/20 rounded-lg">
                  <div className="text-2xl font-bold text-accent">85%</div>
                  <div className="text-sm text-contrast-medium">Higher Engagement</div>
                </div>
                <div className="text-center p-4 bg-primary/20 rounded-lg">
                  <div className="text-2xl font-bold text-primary">73%</div>
                  <div className="text-sm text-contrast-medium">Faster Hiring</div>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">82%</div>
                  <div className="text-sm text-contrast-medium">Fewer Mis-hires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Business Model",
      subtitle: "SaaS with Proven Unit Economics",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard>
              <h4 className="font-bold text-primary mb-3">Starter</h4>
              <div className="text-2xl font-bold text-contrast-high mb-2">$149/mo</div>
              <div className="text-sm text-contrast-medium">per recruiter</div>
              <div className="mt-3 text-xs text-contrast-medium">50 assessments/month</div>
            </GlassCard>
            <GlassCard className="border-primary/50 bg-primary/10">
              <h4 className="font-bold text-primary mb-3">Professional</h4>
              <div className="text-2xl font-bold text-contrast-high mb-2">$299/mo</div>
              <div className="text-sm text-contrast-medium">per recruiter</div>
              <div className="mt-3 text-xs text-contrast-medium">200 assessments/month</div>
            </GlassCard>
            <GlassCard>
              <h4 className="font-bold text-secondary mb-3">Enterprise</h4>
              <div className="text-2xl font-bold text-contrast-high mb-2">$599/mo</div>
              <div className="text-sm text-contrast-medium">per recruiter</div>
              <div className="mt-3 text-xs text-contrast-medium">Unlimited assessments</div>
            </GlassCard>
          </div>
          <div className="text-center">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xl font-bold text-accent">$500K</div>
                <div className="text-sm text-contrast-medium">Year 1 ARR</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">$2.5M</div>
                <div className="text-sm text-contrast-medium">Year 2 ARR</div>
              </div>
              <div>
                <div className="text-xl font-bold text-secondary">$8M</div>
                <div className="text-sm text-contrast-medium">Year 3 ARR</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Traction & Validation",
      subtitle: "Strong Early Signals",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Customer Discovery</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Pain Point Validation</span>
                  <span className="font-bold text-accent">89%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Solution Interest</span>
                  <span className="font-bold text-primary">76%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Pricing Acceptance</span>
                  <span className="font-bold text-secondary">68%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Early Traction</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Landing Page Signups</span>
                  <span className="font-bold text-primary">2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Demo Requests</span>
                  <span className="font-bold text-accent">150+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Pilot Interest</span>
                  <span className="font-bold text-secondary">25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "The Ask",
      subtitle: "Series A: $5M to Scale",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-primary mb-4">$5M Series A</div>
            <p className="text-xl text-contrast-medium">18 months runway to $10M ARR</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-accent mb-4">Use of Funds</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Engineering Team</span>
                  <span className="font-bold text-accent">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Sales & Marketing</span>
                  <span className="font-bold text-primary">35%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Operations</span>
                  <span className="font-bold text-secondary">15%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-contrast-medium">Working Capital</span>
                  <span className="font-bold text-neutral">10%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Milestones</h3>
              <div className="space-y-3 text-contrast-medium">
                <div>• 500+ enterprise customers</div>
                <div>• $10M ARR by month 18</div>
                <div>• International expansion</div>
                <div>• Advanced AI features</div>
                <div>• Series B readiness</div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button variant="primary" size="lg" className="text-xl px-12 py-4">
              Join the Future of Hiring
            </Button>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-contrast-high mb-4">
            SimWork{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pitch Deck
            </span>
          </h1>
          <p className="text-xl text-contrast-medium">
            The Future of Work Assessment Platform
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-4 mb-8">
          <Button variant="glass" size="sm" onClick={prevSlide}>
            ← Previous
          </Button>
          <span className="text-contrast-medium">
            {currentSlide + 1} / {slides.length}
          </span>
          <Button variant="glass" size="sm" onClick={nextSlide}>
            Next →
          </Button>
          <Button
            variant={isAutoPlay ? "primary" : "glass"}
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
          >
            {isAutoPlay ? "⏸️ Pause" : "▶️ Auto Play"}
          </Button>
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 lg:p-12 min-h-[500px]">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-contrast-high mb-2">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-xl text-contrast-medium">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              {slides[currentSlide].content}
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-primary scale-125'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <GlassCard className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <h3 className="text-xl font-bold text-contrast-high mb-4">
              Download Full Pitch Deck
            </h3>
            <p className="text-contrast-medium mb-6">
              Get the complete presentation with detailed financials, market analysis, and technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                📄 Download PDF
              </Button>
              <Button variant="glass" size="lg">
                📧 Email Deck
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
