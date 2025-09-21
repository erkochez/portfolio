'use client';

import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import DecryptedText from './ui/DecryptedText';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 text-slate-800 relative overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30"></div>
      
      {/* Animated Background Shapes */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
      />
      <motion.div 
        animate={{ 
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Card for Mobile - Shown at top on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8 lg:hidden"
        >
          <ProfileCard
            name="Eren Ahmed"
            title="Software Engineer"
            handle="erenahmed"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/profileimage.webp"
            showUserInfo={true}
            enableTilt={false}
            enableMobileTilt={false}
            onContactClick={scrollToContact}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-40 items-center">
          {/* Left Side - Profile Card (Hidden on mobile, shown on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <ProfileCard
              name="Eren Ahmed"
              title="Software Engineer"
              handle="erenahmed"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/profileimage.webp"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={scrollToContact}
            />
          </motion.div>

          {/* Right Side - Decrypted Text Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <DecryptedText
                text="Eren Ahmed"
                speed={40}
                maxIterations={8}
                animateOn="view"
                revealDirection="center"
                className="text-5xl md:text-6xl font-bold text-slate-800"
              />
              
              <DecryptedText
                text="Spring Boot Developer in Macedonia"
                speed={20}
                maxIterations={3}
                animateOn="view"
                revealDirection="left"
                className="text-lg md:text-xl font-semibold text-blue-600"
              />
              
            

            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Expert Spring Boot Developer from Skopje, Macedonia. </strong> 
                Specializing in backend architecture, microservices, and enterprise solutions. 
                Also skilled in React, Next.js, and AR development. Available for hire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                >
                  View My Work
                </motion.button>
                
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="hidden md:flex justify-center mt-16"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
