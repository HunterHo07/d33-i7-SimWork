'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnnual, setIsAnnual] = useState(true);

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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 149,
      annualPrice: 119,
      popular: false,
      features: [
        "Up to 50 assessments/month",
        "3 role simulations (Dev, Design, PM)",
        "Basic analytics dashboard",
        "Email support",
        "Standard session recordings",
        "Mobile responsive interface",
        "Basic anti-cheating protection"
      ],
      limitations: [
        "Limited customization",
        "Standard reporting only"
      ],
      cta: "Start Free Trial",
      color: "blue"
    },
    {
      name: "Professional",
      description: "Most popular for growing companies",
      monthlyPrice: 299,
      annualPrice: 239,
      popular: true,
      features: [
        "Up to 200 assessments/month",
        "All 5 role simulations",
        "Advanced analytics & insights",
        "Priority support",
        "HD session recordings",
        "Custom branding",
        "Advanced anti-cheating",
        "API access",
        "Team collaboration tools",
        "Performance benchmarking"
      ],
      limitations: [],
      cta: "Get Started",
      color: "primary"
    },
    {
      name: "Enterprise",
      description: "For large organizations with custom needs",
      monthlyPrice: 599,
      annualPrice: 479,
      popular: false,
      features: [
        "Unlimited assessments",
        "Custom role creation",
        "White-label solution",
        "Dedicated success manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Custom reporting",
        "Multi-tenant architecture",
        "24/7 phone support",
        "Training & onboarding"
      ],
      limitations: [],
      cta: "Contact Sales",
      color: "purple"
    }
  ];

  const CheckIcon = () => (
    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const getPrice = (plan) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice * 12;
    const savings = monthlyCost - annualCost;
    return Math.round((savings / monthlyCost) * 100);
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
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 border border-accent/30">
              💰 Simple, Transparent Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-contrast-high mb-6">
              Choose Your{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h2>
            <p className="text-xl text-contrast-medium max-w-3xl mx-auto mb-8">
              Start with a free trial, then choose the plan that scales with your hiring needs. 
              No hidden fees, cancel anytime.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm ${!isAnnual ? 'text-contrast-high' : 'text-contrast-medium'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-primary' : 'bg-gray-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? 'text-contrast-high' : 'text-contrast-medium'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium border border-accent/30">
                  Save up to 20%
                </span>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full text-white text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <GlassCard 
                  className={`h-full ${
                    plan.popular 
                      ? 'border-primary/50 bg-primary/5 ring-2 ring-primary/30' 
                      : 'hover:border-white/30'
                  }`}
                  padding="lg"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-contrast-high mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-contrast-medium mb-6">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-contrast-high">
                          ${getPrice(plan)}
                        </span>
                        <span className="text-contrast-medium ml-2">
                          /month per recruiter
                        </span>
                      </div>
                      {isAnnual && (
                        <div className="text-sm text-accent mt-2">
                          Save {getSavings(plan)}% annually
                        </div>
                      )}
                    </div>

                    <Button
                      variant={plan.popular ? "primary" : "glass"}
                      size="lg"
                      className="w-full"
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-contrast-high">
                      Everything included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckIcon />
                          <span className="text-contrast-medium text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <h5 className="text-sm font-medium text-contrast-medium mb-2">
                          Limitations:
                        </h5>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, limitIndex) => (
                            <li key={limitIndex} className="text-xs text-contrast-medium opacity-70">
                              • {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-contrast-high text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <GlassCard>
                <h4 className="font-semibold text-contrast-high mb-3">
                  Is there a free trial?
                </h4>
                <p className="text-contrast-medium text-sm">
                  Yes! All plans include a 14-day free trial with full access to features. 
                  No credit card required to start.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h4 className="font-semibold text-contrast-high mb-3">
                  Can I change plans anytime?
                </h4>
                <p className="text-contrast-medium text-sm">
                  Absolutely. Upgrade or downgrade your plan at any time. 
                  Changes take effect immediately with prorated billing.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h4 className="font-semibold text-contrast-high mb-3">
                  What's included in support?
                </h4>
                <p className="text-contrast-medium text-sm">
                  All plans include comprehensive documentation, video tutorials, 
                  and responsive support. Enterprise gets dedicated success management.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h4 className="font-semibold text-contrast-high mb-3">
                  Do you offer custom pricing?
                </h4>
                <p className="text-contrast-medium text-sm">
                  Yes, for organizations with 100+ recruiters or unique requirements, 
                  we offer custom enterprise pricing and features.
                </p>
              </GlassCard>
            </div>
          </motion.div>

          {/* ROI Calculator CTA */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
              <h3 className="text-2xl font-bold text-contrast-high mb-4">
                Calculate Your ROI
              </h3>
              <p className="text-contrast-medium mb-6 max-w-2xl mx-auto">
                See how much SimWork can save your organization in reduced mis-hires, 
                faster hiring cycles, and improved candidate experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  ROI Calculator
                </Button>
                <Button variant="glass" size="lg">
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">$240K</div>
                  <div className="text-sm text-contrast-medium">Avg. cost per mis-hire</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">73%</div>
                  <div className="text-sm text-contrast-medium">Faster hiring process</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary mb-1">847%</div>
                  <div className="text-sm text-contrast-medium">Average ROI</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
