'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  const projects = [
    { id: 1, title: "AR Menu Revolution", category: "AR/VR", gradient: "from-purple-600 to-blue-600" },
    { id: 2, title: "Banking Systems", category: "Enterprise", gradient: "from-blue-600 to-cyan-600" },
    { id: 3, title: "Auction Platform", category: "Web App", gradient: "from-pink-600 to-purple-600" },
    { id: 4, title: "Mobile Solutions", category: "Mobile", gradient: "from-orange-600 to-red-600" },
    { id: 5, title: "Warehouse Management", category: "Enterprise", gradient: "from-green-600 to-blue-600" },
    { id: 6, title: "Sports News Platform", category: "Legacy", gradient: "from-indigo-600 to-purple-600" },
  ];

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Background Elements */}
      <motion.div
        style={{ y: y3 }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent"
          >
            Innovative Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12"
          >
            Transforming ideas into reality with cutting-edge technology
          </motion.p>
        </div>
      </div>

      {/* Floating Project Cards - Top Row */}
      <motion.div
        style={{ y }}
        className="absolute top-16 left-0 right-0"
      >
        <div className="flex justify-center space-x-4 px-4">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`w-52 h-32 rounded-xl bg-gradient-to-br ${project.gradient} p-4 shadow-xl backdrop-blur-sm bg-opacity-90 hidden md:block`}
            >
              <div className="text-white">
                <h3 className="text-sm font-bold mb-1">{project.title}</h3>
                <p className="text-xs opacity-80">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating Project Cards - Bottom Row */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-16 left-0 right-0"
      >
        <div className="flex justify-center space-x-4 px-4">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`w-52 h-32 rounded-xl bg-gradient-to-br ${project.gradient} p-4 shadow-xl backdrop-blur-sm bg-opacity-90 hidden md:block`}
            >
              <div className="text-white">
                <h3 className="text-sm font-bold mb-1">{project.title}</h3>
                <p className="text-xs opacity-80">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => {
          // Generate consistent positions using index
          const left = (i * 17) % 100;
          const top = (i * 23) % 100;
          const duration = 3 + (i % 3);
          const delay = (i % 4) * 0.5;
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
