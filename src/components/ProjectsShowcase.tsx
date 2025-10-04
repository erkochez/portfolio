"use client";

import React from "react";
import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ProjectsShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Online Auction Platform",
      description: "A revolutionary token-based auction system with real-time bidding and dynamic participant thresholds.",
      tech: ["React", "Spring Boot", "Redis", "PostgreSQL"],
      link: "/auction",
      image: "/macbookpro.webp",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Bank Workflow Management",
      description: "Comprehensive document management system for bank loan processing with multi-level approval hierarchy.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      link: "/bank",
      image: "/employee.webp",
      color: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "AR Menu App",
      description: "Revolutionary AR-powered restaurant menu with 3D food models and multi-language support.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      link: "/armenu",
      image: "/alfredo.webp",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "E-Evidence System",
      description: "Investigation management system for legal professionals with systematic case analysis and evidence scoring.",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      link: "/evidence",
      image: "/employee.webp",
      color: "from-purple-500 to-pink-600"
    }
  ];

  useGSAP(() => {
    // Only run animations on desktop
    if (window.innerWidth < 1024) return;

    // Animate project cards on scroll
    projects.forEach((_, index) => {
      const card = `.project-card-${index}`;
      
      gsap.fromTo(card, 
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate header
    gsap.fromTo(".projects-header", 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="projects" className="py-20 bg-slate-50" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-recoleta">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing my most impactful work across different industries and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Link 
              key={project.id} 
              href={project.link}
              className={`project-card-${index} group block`}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Want to see more of my work or discuss a project?
          </p>
          <Link 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
