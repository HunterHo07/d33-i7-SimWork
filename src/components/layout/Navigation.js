'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Demo', href: '/demo' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Showcase', href: '/showcase' },
    { name: 'Pitch Deck', href: '/pitch' },
    { name: 'Roadmap', href: '/roadmap' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassCard 
            className={`transition-all duration-300 ${
              scrolled ? 'backdrop-blur-xl bg-background/80' : 'backdrop-blur-lg bg-background/60'
            }`}
            padding="sm"
            rounded="xl"
            hover={false}
          >
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </motion.div>
                <span className="text-xl font-bold text-contrast-high group-hover:text-primary transition-colors">
                  SimWork
                </span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? 'bg-primary text-white shadow-lg'
                          : 'text-text-secondary hover:text-text-primary hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center space-x-4">
                <Button variant="primary" size="sm">
                  Start Free Trial
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-text-primary hover:bg-white/10 transition-colors"
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </motion.div>
              </button>
            </div>
          </GlassCard>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 md:hidden"
            >
              <GlassCard className="h-full rounded-none rounded-l-2xl" padding="lg">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold text-contrast-high">Menu</span>
                    <button
                      onClick={closeMenu}
                      className="p-2 rounded-lg text-text-primary hover:bg-white/10 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Navigation Items */}
                  <div className="flex-1 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={item.href} onClick={closeMenu}>
                          <div
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                              pathname === item.href
                                ? 'bg-primary text-white shadow-lg'
                                : 'text-text-secondary hover:text-text-primary hover:bg-white/10'
                            }`}
                          >
                            {item.name}
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 border-t border-white/20"
                  >
                    <Button variant="primary" className="w-full" onClick={closeMenu}>
                      Start Free Trial
                    </Button>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
