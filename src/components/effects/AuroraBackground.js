'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AuroraBackground = ({ 
  className = '',
  intensity = 'medium',
  speed = 'normal',
  colors = ['#0066FF', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444'],
  children 
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const intensitySettings = {
    low: { opacity: 0.3, blur: 20 },
    medium: { opacity: 0.5, blur: 15 },
    high: { opacity: 0.7, blur: 10 },
  };

  const speedSettings = {
    slow: 20000,
    normal: 15000,
    fast: 10000,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { opacity } = intensitySettings[intensity];
      
      // Create multiple aurora layers
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createLinearGradient(
          0, 0, 
          canvas.width, canvas.height
        );
        
        const colorIndex = (i + Math.floor(time / 1000)) % colors.length;
        const nextColorIndex = (colorIndex + 1) % colors.length;
        
        gradient.addColorStop(0, `${colors[colorIndex]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(0.5, `${colors[nextColorIndex]}${Math.floor(opacity * 0.5 * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${colors[(colorIndex + 2) % colors.length]}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
        
        ctx.fillStyle = gradient;
        
        // Create wave-like aurora effect
        ctx.beginPath();
        const waveHeight = canvas.height * 0.3;
        const waveOffset = Math.sin(time / 2000 + i) * 100;
        
        ctx.moveTo(0, canvas.height / 2 + waveOffset);
        
        for (let x = 0; x <= canvas.width; x += 10) {
          const y = canvas.height / 2 + 
                   Math.sin((x + time + i * 1000) / 200) * waveHeight +
                   Math.sin((x + time * 2 + i * 500) / 100) * (waveHeight * 0.5) +
                   waveOffset;
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }
      
      time += 16; // ~60fps
      animationRef.current = requestAnimationFrame(drawAurora);
    };

    resizeCanvas();
    drawAurora();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [intensity, colors]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Canvas Aurora */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          filter: `blur(${intensitySettings[intensity].blur}px)`,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* CSS Aurora Fallback */}
      <motion.div
        className="absolute inset-0 aurora-bg opacity-30"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: speedSettings[speed] / 1000,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          filter: `blur(${intensitySettings[intensity].blur}px)`,
          mixBlendMode: 'screen',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AuroraBackground;
