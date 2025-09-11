'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselProps {
  items: unknown[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  renderItem: (item: unknown, index: number) => React.ReactNode;
}

export const Carousel = ({
  items,
  autoplay = true,
  autoplayDelay = 5000,
  showIndicators = true,
  showArrows = true,
  renderItem
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, items.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Navigation Arrows - Outside the content */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute -right-16 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-cyan-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Carousel Content */}
      <div className="relative overflow-hidden rounded-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {renderItem(items[currentIndex], currentIndex)}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-500 scale-110'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Testimonial Carousel Component
export const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "Eren's expertise in backend development and AR technology helped us create an innovative restaurant menu system that revolutionized our customer experience.",
      author: "Restaurant Owner",
      position: "Skopje, Macedonia",
      avatar: "👨‍💼"
    },
    {
      id: 2,
      text: "Working with Eren on our banking workflow system was exceptional. His attention to detail and system architecture skills delivered exactly what we needed.",
      author: "Bank IT Director",
      position: "Financial Institution",
      avatar: "👩‍💼"
    },
    {
      id: 3,
      text: "The auction platform Eren developed for us handles thousands of users seamlessly. His technical leadership and problem-solving abilities are outstanding.",
      author: "Biteklif User",
      position: "Platform Feedback",
      avatar: "🎯"
    },
    {
      id: 4,
      text: "From junior to head developer in just 2 years - Eren's growth mindset and technical excellence make him an invaluable team member.",
      author: "Team Lead",
      position: "Current Company",
      avatar: "🚀"
    }
  ];

  const renderTestimonial = (testimonial: unknown) => {
    const testimonialData = testimonial as { avatar: string; text: string; author: string; role: string; position: string };
    return (
    <div className="bg-gray-800 rounded-xl p-8 mx-4 border border-gray-700">
      <div className="flex items-start space-x-4">
        <div className="text-4xl">{testimonialData.avatar}</div>
        <div className="flex-1">
          <blockquote className="text-gray-300 text-lg leading-relaxed mb-4">
            &ldquo;{testimonialData.text}&rdquo;
          </blockquote>
          <div>
            <cite className="text-purple-400 font-semibold not-italic">
              {testimonialData.author}
            </cite>
            <p className="text-gray-500 text-sm">{testimonialData.position}</p>
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-16">
      <Carousel
        items={testimonials}
        renderItem={renderTestimonial}
        autoplay={true}
        autoplayDelay={6000}
      />
    </div>
  );
};

// Project Showcase Carousel
export const ProjectShowcase = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "Restaurant AR Menu Revolution",
      description: "A groundbreaking AR application that transforms dining experiences across Skopje. Features real-time 3D food visualization, interactive ordering, and seamless integration with restaurant systems.",
      technologies: ["React Native", "AR Core", "Node.js", "PostgreSQL"],
      impact: "Used in 20+ establishments",
      gradient: "from-cyan-600 to-blue-600",
      stats: [
        { label: "Restaurants", value: "20+" },
        { label: "Daily Users", value: "500+" },
        { label: "Success Rate", value: "98%" }
      ]
    },
    {
      id: 2,
      title: "Enterprise Banking Solutions",
      description: "Robust workflow management systems for banks and state institutions. Handles complex approval processes, document management, and ensures enterprise-grade security and compliance.",
      technologies: ["Spring Boot", "Microservices", "PostgreSQL", "Docker"],
      impact: "Multiple banks using",
      gradient: "from-blue-600 to-cyan-600",
      stats: [
        { label: "Institutions", value: "5+" },
        { label: "Transactions/Day", value: "10K+" },
        { label: "Uptime", value: "99.9%" }
      ]
    },
    {
      id: 3,
      title: "Biteklif Auction Platform",
      description: "Real-time bidding platform with live updates, secure payments, and automated winner selection. Built to handle thousands of concurrent users with seamless performance.",
      technologies: ["Spring Boot", "Redis", "WebSocket","React"],
      impact: "1000+ active users",
      gradient: "from-emerald-600 to-cyan-600",
      stats: [
        { label: "Active Users", value: "1K+" },
        { label: "Auctions/Month", value: "200+" },
        { label: "Success Rate", value: "95%" }
      ]
    }
  ];

  const renderProject = (project: unknown) => {
    const projectData = project as { title: string; description: string; stats: Array<{ label: string; value: string }>; gradient: string; impact: string; technologies: string[] };
    return (
    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${projectData.gradient} p-1`}>
      <div className="bg-gray-900 rounded-xl p-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">{projectData.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {projectData.description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-cyan-400 font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {projectData.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-green-400 font-semibold">
              🚀 {projectData.impact}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {projectData.stats.map((stat: { label: string; value: string }, index: number) => (
              <div key={index} className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-16">
      <Carousel
        items={featuredProjects}
        renderItem={renderProject}
        autoplay={true}
        autoplayDelay={8000}
      />
    </div>
  );
};
