'use client';

import { useEffect, useRef, useState } from 'react';

const ParticleField = ({ 
  particleCount = 50,
  particleColor = '#0066FF',
  particleSize = 2,
  speed = 1,
  interactive = true,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * particleSize + 1,
          opacity: Math.random() * 0.5 + 0.2,
          originalOpacity: Math.random() * 0.5 + 0.2,
        });
      }
      particlesRef.current = particles;
    };

    const updateParticles = () => {
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Interactive mouse effect
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance;
            particle.opacity = particle.originalOpacity + force * 0.5;
            
            // Repel particles from mouse
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force * 0.1;
            particle.vy -= Math.sin(angle) * force * 0.1;
          } else {
            particle.opacity = particle.originalOpacity;
          }

          // Damping
          particle.vx *= 0.99;
          particle.vy *= 0.99;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = particleColor;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections between nearby particles
      if (interactive) {
        particles.forEach((particle, i) => {
          particles.slice(i + 1).forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 80) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              const opacity = (80 - distance) / 80 * 0.2;
              ctx.strokeStyle = `${particleColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          });
        });
      }
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, particleCount, particleColor, particleSize, speed, interactive]);

  if (!isClient) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className={`particles-container ${className}`}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: interactive ? 'auto' : 'none',
        zIndex: -1,
      }}
    />
  );
};

export default ParticleField;
