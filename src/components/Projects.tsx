'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { WordPullUp, FadeInBlur } from './ui/TextAnimations';

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Bank Loan Workflow Management System",
      category: "Enterprise Solution",
      description: "A comprehensive web application with advanced workflow management and document handling system for bank employees to process loan applications efficiently.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript"],
      features: [
        "Document Management System",
        "Workflow Automation",
        "Role-based Access Control",
        "Real-time Notifications",
        "Audit Trail & Compliance"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "Restaurant AR Menu App",
      category: "AR Innovation",
      description: "Revolutionary AR-powered restaurant menu system that transforms dining experiences with interactive 3D food visualization and real-time ordering.",
      technologies: ["React Native", "AR Core", "Unity", "Node.js", "MongoDB"],
      features: [
        "3D Food Visualization",
        "AR Menu Interface",
        "Real-time Ordering",
        "Multi-language Support",
        "Analytics Dashboard"
      ],
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center",
      color: "from-emerald-600 to-emerald-800",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    {
      id: 3,
      title: "Biteklif Online Auction Platform",
      category: "E-commerce Platform",
      description: "A full-featured online auction platform with real-time bidding, secure payments, and comprehensive seller management system.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "WebSocket"],
      features: [
        "Real-time Bidding",
        "Secure Payment Processing",
        "Seller Dashboard",
        "Bid Notifications",
        "Auction Management"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
      color: "from-purple-600 to-purple-800",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  const categories = ['all', 'Enterprise Solution', 'AR Innovation', 'E-commerce Platform'];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <WordPullUp 
              words="My Projects"
              className="text-4xl md:text-5xl font-bold text-slate-800"
              delayMultiple={0.1}
            />
            <img
              src="/pcmemoji.png"
              alt="PC Memoji"
              className="w-12 h-12 md:w-16 md:h-16 rounded-2xl object-cover"
            />
          </div>
          <FadeInBlur delay={0.5} className="text-xl text-slate-600 max-w-3xl mx-auto">
            From enterprise solutions to cutting-edge AR experiences, 
            here's a showcase of projects that define my journey as a developer.
          </FadeInBlur>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl ${project.bgColor} ${project.borderColor} border-2 shadow-lg transition-all duration-500 flex flex-col h-full`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color}`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-slate-600 text-xs font-medium rounded-full border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li className="text-sm text-slate-500 italic">
                        +{project.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

             
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}