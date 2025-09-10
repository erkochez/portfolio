'use client';

import React, { useEffect, useRef, useState } from 'react';

import './Ribbons.css';

interface RibbonsProps {
  colors?: string[];
  baseThickness?: number;
  speedMultiplier?: number;
  maxAge?: number;
  enableFade?: boolean;
  enableShaderEffect?: boolean;
}

interface RibbonPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  color: string;
}

const Ribbons: React.FC<RibbonsProps> = ({
  colors = ['#3b82f6', '#0ea5e9', '#06b6d4', '#10b981'],
  baseThickness = 30,
  speedMultiplier = 0.5,
  maxAge = 500,
  enableFade = false,
  enableShaderEffect = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const ribbonsRef = useRef<RibbonPoint[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMouse({ x, y });
    };

    const handleMouseLeave = () => {
      setMouse({ x: -1000, y: -1000 });
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new ribbon points
      if (mouse.x > 0 && mouse.y > 0) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        ribbonsRef.current.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          age: 0,
          color
        });
      }

      // Update and draw ribbons
      ribbonsRef.current = ribbonsRef.current.filter(ribbon => {
        ribbon.x += ribbon.vx * speedMultiplier;
        ribbon.y += ribbon.vy * speedMultiplier;
        ribbon.age += 16 * speedMultiplier;
        
        const alpha = enableFade ? Math.max(0, 1 - ribbon.age / maxAge) : 1;
        const size = baseThickness * (1 - ribbon.age / maxAge);
        
        if (ribbon.age < maxAge && size > 0) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = ribbon.color;
          
          if (enableShaderEffect) {
            // Add wave effect
            const wave = Math.sin(ribbon.age * 0.01) * 5;
            ctx.fillRect(ribbon.x + wave, ribbon.y, size, size);
          } else {
            ctx.fillRect(ribbon.x, ribbon.y, size, size);
          }
          
          ctx.restore();
          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, baseThickness, speedMultiplier, maxAge, enableFade, enableShaderEffect, mouse]);

  return (
    <div ref={containerRef} className="ribbons-container">
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default Ribbons;
