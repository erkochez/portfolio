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
    <section id="home" className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden pt-20 md:pt-0">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
        style={{
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
        }}
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] opacity-30 mix-blend-screen"
        style={{
          transform: 'translate3d(0,0,0)',
          willChange: 'transform',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Profile Card for Mobile - Shown ONLY on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-12 lg:hidden"
        >
          <ProfileCard
            name="Eren Ahmed"
            title="Software Engineer"
            handle="erenahmed"
            status="Available"
            contactText="Contact Me"
            avatarUrl="/erenprofile.webp"
            showUserInfo={true}
            enableTilt={false}
            enableMobileTilt={true}
            onContactClick={scrollToContact}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-32 items-center">
          {/* Left Side - Profile Card (Hidden on mobile, shown ONLY on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-end"
          >
            <ProfileCard
              name="Eren Ahmed"
              title="Software Engineer"
              handle="erenahmed"
              status="Available"
              contactText="Contact Me"
              avatarUrl="/erenprofile.webp"
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
                speed={30}
                maxIterations={2}
                animateOn="view"
                revealDirection="center"
                className="text-6xl md:text-7xl font-bold tracking-tight text-foreground font-recoleta"
              />

              <DecryptedText
                text="Spring Boot Developer in Macedonia"
                speed={20}
                maxIterations={3}
                animateOn="view"
                revealDirection="left"
                className="text-xl md:text-2xl font-light text-primary tracking-wide"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                <strong className="text-foreground font-semibold">Expert Spring Boot Developer from Skopje, Macedonia. </strong>
                Specializing in backend architecture, microservices, and enterprise solutions.
                Also skilled in React, Next.js, and AR development. Available for hire.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2">
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-white font-medium rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all duration-300"
                >
                  View My Work
                </motion.button>

                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 border border-input text-foreground font-medium rounded-xl hover:bg-secondary/50 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
