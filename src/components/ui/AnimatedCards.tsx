'use client';

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";

// 3D Card Tilt Effect
export const TiltCard = ({ 
  children, 
  className = "",
  scale = 1.05 
}: { 
  children: React.ReactNode; 
  className?: string;
  scale?: number;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

// Magnetic Card Effect
export const MagneticCard = ({ 
  children, 
  className = "",
  strength = 0.3 
}: { 
  children: React.ReactNode; 
  className?: string;
  strength?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    setPosition({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Glow Border Card
export const GlowCard = ({ 
  children, 
  className = "",
  glowColor = "rgba(59, 130, 246, 0.5)" 
}: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(45deg, ${glowColor}, transparent, ${glowColor})`,
          backgroundSize: "400% 400%",
        }}
      />
      <motion.div
        animate={{
          backgroundPosition: isHovered ? "100% 100%" : "0% 0%",
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-[1px] rounded-lg"
        style={{
          background: `linear-gradient(45deg, ${glowColor}, transparent, ${glowColor})`,
          backgroundSize: "400% 400%",
        }}
      />
      <div className="relative bg-white dark:bg-gray-900 rounded-lg">
        {children}
      </div>
    </motion.div>
  );
};

// Particle Effect Card
export const ParticleCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const particles = Array.from({ length: 20 }, (_, i) => {
    // Generate consistent movement patterns using index
    const xMovement = ((i % 5) - 2) * 50; // -100 to 100 range
    const yMovement = ((i % 4) - 1.5) * 60; // -90 to 90 range
    
    return (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered ? [0, 1, 0] : 0,
          scale: isHovered ? [0, 1, 0] : 0,
          x: isHovered ? xMovement : 0,
          y: isHovered ? yMovement : 0,
        }}
        transition={{
          duration: 1.5,
          delay: i * 0.1,
          repeat: Infinity,
        }}
        className="absolute w-1 h-1 bg-blue-400 rounded-full"
        style={{
          left: "50%",
          top: "50%",
        }}
      />
    );
  });

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none">
        {particles}
      </div>
      {children}
    </motion.div>
  );
};

// Expanding Border Card
export const ExpandingBorderCard = ({ 
  children, 
  className = "",
  borderColor = "bg-gradient-to-r from-blue-500 to-purple-500" 
}: { 
  children: React.ReactNode; 
  className?: string;
  borderColor?: string;
}) => {
  return (
    <motion.div
      whileHover="hover"
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <motion.div
        variants={{
          hover: { scale: 1 },
        }}
        initial={{ scale: 0 }}
        className={`absolute inset-0 ${borderColor} rounded-lg`}
      />
      <motion.div
        variants={{
          hover: { scale: 1 },
        }}
        initial={{ scale: 0 }}
        transition={{ delay: 0.1 }}
        className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-lg"
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
};
