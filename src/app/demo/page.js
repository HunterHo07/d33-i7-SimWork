'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function DemoPage() {
  const [selectedRole, setSelectedRole] = useState('developer');
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState('desktop'); // desktop or mobile

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const roles = [
    {
      id: 'developer',
      name: 'Developer',
      icon: '💻',
      color: 'blue',
      description: 'Code challenges, debugging, and development workflows',
      station: { x: 20, y: 30 }
    },
    {
      id: 'designer',
      name: 'Designer',
      icon: '🎨',
      color: 'purple',
      description: 'Visual design, prototyping, and creative problem solving',
      station: { x: 70, y: 30 }
    },
    {
      id: 'pm',
      name: 'Project Manager',
      icon: '📊',
      color: 'green',
      description: 'Planning, coordination, and stakeholder management',
      station: { x: 20, y: 70 }
    },
    {
      id: 'data',
      name: 'Data Entry',
      icon: '📝',
      color: 'orange',
      description: 'Accuracy, speed, and attention to detail',
      station: { x: 70, y: 70 }
    },
    {
      id: 'ai',
      name: 'AI Engineer',
      icon: '🤖',
      color: 'red',
      description: 'Prompt engineering and AI model optimization',
      station: { x: 45, y: 50 }
    }
  ];

  const levels = [
    { id: 1, name: 'Basic Navigation', difficulty: 'Beginner', time: '2 min' },
    { id: 2, name: 'Simple Tasks', difficulty: 'Easy', time: '5 min' },
    { id: 3, name: 'Core Skills', difficulty: 'Medium', time: '15 min' },
    { id: 4, name: 'Advanced Challenge', difficulty: 'Hard', time: '25 min' },
    { id: 5, name: 'Expert Assessment', difficulty: 'Expert', time: '35 min' }
  ];

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-contrast-high mb-2">
          Initializing SimWork Demo
        </h2>
        <p className="text-contrast-medium">
          Setting up your immersive work environment...
        </p>
      </div>
    </motion.div>
  );

  const OfficeEnvironment = () => (
    <div className="relative w-full h-96 bg-gradient-to-br from-background to-surface rounded-xl overflow-hidden border border-white/10">
      {/* Office Layout */}
      <div className="absolute inset-0 p-4">
        {/* Walls */}
        <div className="absolute inset-2 border-2 border-white/20 rounded-lg" />

        {/* Role Stations */}
        {roles.map((role) => (
          <motion.div
            key={role.id}
            className={`absolute w-16 h-12 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
              selectedRole === role.id
                ? `border-${role.color}-400 bg-${role.color}-500/30 scale-110`
                : 'border-white/30 bg-white/10 hover:border-white/50'
            }`}
            style={{
              left: `${role.station.x}%`,
              top: `${role.station.y}%`,
            }}
            onClick={() => setSelectedRole(role.id)}
            whileHover={{ scale: selectedRole === role.id ? 1.1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-2xl">{role.icon}</span>
            </div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-contrast-medium whitespace-nowrap">
              {role.name}
            </div>
          </motion.div>
        ))}

        {/* Character */}
        <motion.div
          animate={{
            left: `${roles.find(r => r.id === selectedRole)?.station.x}%`,
            top: `${roles.find(r => r.id === selectedRole)?.station.y}%`,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute w-6 h-6 bg-primary rounded-full border-2 border-white transform -translate-x-1/2 -translate-y-1/2 z-10"
          style={{ marginTop: '24px', marginLeft: '32px' }}
        />

        {/* Interactive Elements */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-4 right-4 px-3 py-1 bg-accent/20 text-accent rounded-full text-xs border border-accent/30"
        >
          Level {currentLevel}
        </motion.div>
      </div>
    </div>
  );

  const TaskInterface = () => {
    const currentRole = roles.find(r => r.id === selectedRole);

    return (
      <GlassCard className="h-96">
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{currentRole?.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-contrast-high">
                  {currentRole?.name} Station
                </h3>
                <p className="text-sm text-contrast-medium">
                  {currentRole?.description}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-contrast-medium">Level {currentLevel}</div>
              <div className="text-xs text-contrast-medium">
                {levels.find(l => l.id === currentLevel)?.difficulty}
              </div>
            </div>
          </div>

          <div className="flex-1 bg-background/50 rounded-lg p-4 border border-white/10">
            {selectedRole === 'developer' && (
              <div className="space-y-2">
                <div className="flex space-x-2 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm space-y-1">
                  <div className="text-blue-400">function calculateSum(a, b) &#123;</div>
                  <div className="text-white ml-4">return a + b;</div>
                  <div className="text-blue-400">&#125;</div>
                  <div className="text-gray-500">// Your task: Optimize this function</div>
                </div>
              </div>
            )}

            {selectedRole === 'designer' && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded"></div>
                  <div className="h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded"></div>
                  <div className="h-16 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded"></div>
                </div>
                <div className="text-sm text-contrast-medium">
                  Design a user interface for a mobile app login screen
                </div>
              </div>
            )}

            {selectedRole === 'pm' && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-8 bg-green-500/30 rounded"></div>
                  <div className="h-8 bg-yellow-500/30 rounded"></div>
                </div>
                <div className="h-12 bg-blue-500/30 rounded"></div>
                <div className="text-sm text-contrast-medium">
                  Manage project timeline and resource allocation
                </div>
              </div>
            )}

            {selectedRole === 'data' && (
              <div className="space-y-2">
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-white/10 rounded">Name</div>
                  <div className="p-2 bg-white/10 rounded">Email</div>
                  <div className="p-2 bg-white/10 rounded">Phone</div>
                  <div className="p-2 bg-white/10 rounded">Status</div>
                </div>
                <div className="text-sm text-contrast-medium">
                  Enter customer data with 99.5% accuracy
                </div>
              </div>
            )}

            {selectedRole === 'ai' && (
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                  <div className="text-sm text-contrast-medium mb-2">Prompt:</div>
                  <div className="text-xs font-mono">
                    "Create a marketing email that..."
                  </div>
                </div>
                <div className="text-sm text-contrast-medium">
                  Engineer prompts for optimal AI responses
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div className="text-sm text-contrast-medium">
              Progress: {Math.min(currentLevel * 20, 100)}%
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setCurrentLevel(Math.min(currentLevel + 1, 5))}
            >
              {currentLevel < 5 ? 'Next Level' : 'Complete'}
            </Button>
          </div>
        </div>
      </GlassCard>
    );
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-contrast-high mb-4">
            SimWork{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Live Demo
            </span>
          </h1>
          <p className="text-xl text-contrast-medium max-w-3xl mx-auto mb-8">
            Experience the future of work assessment. Navigate the 3D office,
            choose your role, and complete real-world challenges.
          </p>

          {/* View Mode Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'desktop'
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-contrast-medium hover:bg-white/20'
              }`}
            >
              🖥️ Desktop View
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'mobile'
                  ? 'bg-primary text-white'
                  : 'bg-white/10 text-contrast-medium hover:bg-white/20'
              }`}
            >
              📱 Mobile View
            </button>
          </div>
        </motion.div>

        {/* Demo Interface */}
        <div className={`grid gap-8 ${viewMode === 'desktop' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
          {/* 3D Office Environment */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard>
              <h2 className="text-xl font-semibold text-contrast-high mb-4">
                🏢 Interactive Office Environment
              </h2>
              <OfficeEnvironment />
              <div className="mt-4 text-sm text-contrast-medium">
                Click on different stations to explore various roles and challenges.
              </div>
            </GlassCard>
          </motion.div>

          {/* Task Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <TaskInterface />
          </motion.div>
        </div>

        {/* Level Selector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <GlassCard>
            <h3 className="text-lg font-semibold text-contrast-high mb-6 text-center">
              Choose Your Challenge Level
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {levels.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setCurrentLevel(level.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    currentLevel === level.id
                      ? 'border-primary bg-primary/20 text-primary'
                      : 'border-white/20 bg-white/5 text-contrast-medium hover:border-white/40'
                  }`}
                >
                  <div className="text-lg font-bold mb-1">Level {level.id}</div>
                  <div className="text-sm mb-2">{level.name}</div>
                  <div className="text-xs opacity-70">{level.difficulty}</div>
                  <div className="text-xs opacity-70">{level.time}</div>
                </button>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <GlassCard className="p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
            <h3 className="text-2xl font-bold text-contrast-high mb-4">
              Ready to Transform Your Hiring Process?
            </h3>
            <p className="text-contrast-medium mb-6 max-w-2xl mx-auto">
              This is just a preview of SimWork's capabilities. The full platform includes
              advanced analytics, session recordings, and comprehensive reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Start Free Trial
              </Button>
              <Button variant="glass" size="lg">
                Schedule Full Demo
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
