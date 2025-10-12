"use client";

import React from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectsStoryline = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Online Auction Platform",
      description: "Revolutionary Auction Experience",
      features: [
        "Token-based bidding system with minimum bid requirements",
        "Dynamic auction start based on participant thresholds", 
        "Real-time updates and unlimited participant capacity",
        "Secure, fast, and reliable transaction processing"
      ],
      techStack: ["React", "Spring Boot", "Redis", "PostgreSQL"],
      link: "/auction",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Bank Workflow Management",
      description: "Streamlined Banking Operations",
      features: [
        "Document workflow management and tracking",
        "Client information and loan product management",
        "Multi-level approval hierarchy system", 
        "Real-time status updates and notifications"
      ],
      techStack: ["React", "Spring Boot", "PostgreSQL"],
      link: "/bank",
      gradient: "from-green-500 to-blue-600"
    },
    {
      id: 3,
      title: "AR Menu App",
      description: "Revolutionary Dining Experience",
      features: [
        "Augmented Reality food visualization and 3D models",
        "Multi-language and multi-currency support",
        "Dynamic menu management for restaurant owners",
        "Real-time order processing and payment integration"
      ],
      techStack: ["React", "Spring Boot", "PostgreSQL"],
      link: "/armenu",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "E-Evidence System",
      description: "Investigation Management Platform",
      features: [
        "Blueprint Matrix for systematic legal breakdown",
        "Evidence scoring and progress tracking",
        "Entity management for suspects and witnesses",
        "Court readiness assessment automation"
      ],
      techStack: ["React", "Spring Boot", "PostgreSQL"],
      link: "/evidence",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-section');
    
        sections.forEach((section: unknown) => {
      gsap.fromTo(section as Element, 
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section as Element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 font-recoleta">
            Featured Projects
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Showcasing my most impactful work across different industries and technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={project.id} className={`project-section grid lg:grid-cols-2 gap-16 items-center p-8 lg:p-12 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-5 rounded-3xl`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 space-y-8">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-slate-400 text-lg font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px bg-gradient-to-r from-slate-300 to-transparent flex-1"></div>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-recoleta">
                        {project.title}
                      </h2>
                      <p className="text-2xl text-orange-500 font-medium mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-slate-600 text-lg leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <Link 
                        href={project.link}
                        className={`inline-flex items-center px-8 py-4 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group`}
                      >
                        Explore Project
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                  <Link href={project.link} className="block">
                    <div className="relative">
                      <div className={`w-full ${project.id === 3 ? 'h-[450px] sm:h-96' : 'h-96'} bg-white rounded-2xl shadow-2xl relative overflow-hidden group cursor-pointer border border-slate-200`}>
                        {/* Project Content Preview */}
                        {project.id === 1 && (
                          <div className="p-3 h-full overflow-y-auto">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-sm font-bold text-blue-600">Live Auctions</h3>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-600">Online</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              {[
                                { name: "MacBook Pro", price: "$800", bidders: "42", image: "/macbookpro.webp" },
                                { name: "iPhone 15", price: "$200", bidders: "28", image: "/iphone.webp" },
                                { name: "PlayStation 5", price: "$450", bidders: "35", image: "/ps5.webp" },
                                { name: "Digital Camera", price: "$320", bidders: "19", image: "/camera.png" },
                                { name: "iPad Pro", price: "$300", bidders: "24", image: "/macbookpro.webp" },
                                { name: "Apple Watch", price: "$150", bidders: "31", image: "/iphone.webp" }
                              ].map((item, idx) => (
                                <div key={idx} className="border rounded p-2 hover:bg-blue-50 transition-colors cursor-pointer">
                                  <img src={item.image} alt={item.name} className="w-full h-12 object-contain rounded mb-1" />
                                  <div className="text-xs font-semibold">{item.name}</div>
                                  <div className="text-xs text-blue-600 font-bold">{item.price}</div>
                                  <div className="text-xs text-gray-500">{item.bidders} bidders</div>
                                  <button className="w-full mt-1 bg-blue-600 text-white text-xs py-1 rounded hover:bg-blue-700 transition-colors">
                                    Join Auction
                                  </button>
                                </div>
                              ))}
                            </div>
                            
                            <div className="bg-blue-50 p-2 rounded text-center">
                              <div className="text-xs text-gray-500">4 Active Auctions • 124 Total Bidders</div>
                            </div>
                          </div>
                        )}

                        {project.id === 2 && (
                          <div className="p-3 h-full">
                            {/* Client Info Header */}
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs font-bold">JS</span>
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold">John Smith</h4>
                                  <p className="text-xs text-gray-600">Client ID: #CS12345</p>
                                </div>
                              </div>
                              
                              <div className="bg-blue-50 p-2 rounded">
                                <div className="text-xs font-semibold text-blue-600">#OKR0123</div>
                                <div className="text-sm font-bold">Personal Loan Application</div>
                                <div className="text-xs text-gray-600">Amount: $25,000</div>
                              </div>
                            </div>

                            {/* Documents Table */}
                            <div className="mb-3">
                              <div className="text-xs font-semibold mb-2">Required Documents</div>
                              <div className="space-y-1">
                                {[
                                  { name: "Identity Document", type: "ID", archive: "#ARC001", status: "view", color: "green" },
                                  { name: "Income Certificate", type: "INC", archive: "#ARC002", status: "view", color: "green" },
                                  { name: "Bank Statements", type: "BANK", archive: "-", status: "upload", color: "orange" },
                                  { name: "Credit Report", type: "CREDIT", archive: "-", status: "request", color: "red" }
                                ].map((doc, idx) => (
                                  <div key={idx} className="flex justify-between items-center text-xs py-1 border-b border-gray-100">
                                    <div className="flex-1">
                                      <div className="font-medium">{doc.name}</div>
                                      <div className="text-gray-500">{doc.type} • {doc.archive}</div>
                                    </div>
                                    <button className={`bg-${doc.color}-500 text-white text-xs px-2 py-1 rounded capitalize`}>
                                      {doc.status}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute bottom-3 left-3 right-3 flex gap-1">
                              <button className="bg-gray-500 text-white text-xs px-2 py-1 rounded flex-1">← Back</button>
                              <button className="bg-blue-600 text-white text-xs px-2 py-1 rounded flex-1">Send to Supervisor</button>
                              <button className="bg-red-500 text-white text-xs px-2 py-1 rounded flex-1">Cancel</button>
                            </div>
                          </div>
                        )}

                        {project.id === 3 && (
                          <div className="h-full bg-white flex items-center justify-center p-3 sm:p-4">
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
                              {/* Responsive Phone - Exact same as desktop but smaller */}
                              <div className="w-[120px] h-[240px] sm:w-[140px] sm:h-[280px] bg-gray-800 rounded-[24px] sm:rounded-[28px] overflow-hidden relative border-2 sm:border-3 border-gray-600"
                                   style={{ boxShadow: "0 0 0 4px #1f2937, 0 0 0 6px #374151, 0 4px 16px rgba(0,0,0,0.3)" }}>
                                {/* Landing Content */}
                                <div className="h-full absolute inset-0 transition-opacity duration-500 bg-white">
                                  {/* Phone Header - Exact same as desktop */}
                                  <div className="bg-blue-600 text-white px-2 py-1.5 sm:px-3 sm:py-3 flex justify-between items-center">
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 flex flex-col justify-center">
                                      <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white mb-0.5"></div>
                                      <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white mb-0.5"></div>
                                      <div className="w-2 h-0.5 sm:w-3 sm:h-0.5 bg-white"></div>
                                    </div>
                                    <h3 className="text-xs sm:text-xs font-bold">Carmine&apos;s</h3>
                                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex items-center justify-center"></div>
                                  </div>

                                  {/* Search Bar - Exact same as desktop */}
                                  <div className="px-1.5 py-1 sm:px-2 sm:py-1.5">
                                    <div className="flex items-center bg-gray-100 rounded-lg px-1.5 py-1 sm:px-2 sm:py-1">
                                      <svg className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                      </svg>
                                      <input type="text" placeholder="Search..." className="flex-1 text-xs outline-none bg-transparent" style={{ fontSize: "9px" }} />
                                    </div>
                                  </div>

                                  {/* Categories - Exact same as desktop */}
                                  <div className="px-1.5 mb-1 sm:px-2">
                                    <div className="flex gap-1 sm:gap-1">
                                      <button className="bg-blue-600 text-white px-1.5 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full" style={{ fontSize: "8px" }}>All</button>
                                      <button className="bg-white text-blue-600 px-1.5 py-0.5 sm:px-1.5 sm:py-0.5 rounded-full border border-blue-600" style={{ fontSize: "8px" }}>Pizza</button>
                                    </div>
                                  </div>

                                  {/* Special Foods - Exact same as desktop */}
                                  <div className="px-1.5 sm:px-2">
                                    <div className="flex justify-between items-center mb-1 sm:mb-1.5">
                                      <h4 className="font-bold" style={{ fontSize: "9px" }}>Special Foods</h4>
                                      <span className="text-blue-600" style={{ fontSize: "8px" }}>See All</span>
                                    </div>

                                    <div className="space-y-1 sm:space-y-1.5">
                                      <div className="bg-white border rounded p-1 sm:p-1.5">
                                        <div className="relative">
                                          <img src="/alfredo.webp" alt="Grilled Chicken Alfredo" className="w-full h-8 sm:h-10 object-cover rounded mb-0.5 sm:mb-1" />
                                          <div className="absolute top-0.5 left-0.5 bg-blue-600 text-white px-1 py-0.5 sm:px-1 sm:py-0.5 rounded" style={{ fontSize: "7px" }}>SPECIAL</div>
                                          <div className="absolute bottom-0.5 right-0.5 bg-blue-600 text-white px-1 py-0.5 sm:px-1 sm:py-0.5 rounded" style={{ fontSize: "7px" }}>$12</div>
                                        </div>
                                        <h5 className="font-bold" style={{ fontSize: "8px" }}>Grilled Chicken Alfredo</h5>
                                        <p className="text-gray-600" style={{ fontSize: "7px" }}>Tender grilled chicken</p>
                                      </div>

                                      <div className="bg-white border rounded p-1 sm:p-1.5">
                                        <div className="relative">
                                          <img src="/chickenwings.webp" alt="Spicy Chicken Wings" className="w-full h-8 sm:h-10 object-cover rounded mb-0.5 sm:mb-1" />
                                          <div className="absolute top-0.5 left-0.5 bg-red-600 text-white px-1 py-0.5 sm:px-1 sm:py-0.5 rounded" style={{ fontSize: "7px" }}>HOT</div>
                                          <div className="absolute bottom-0.5 right-0.5 bg-blue-600 text-white px-1 py-0.5 sm:px-1 sm:py-0.5 rounded" style={{ fontSize: "7px" }}>$8</div>
                                        </div>
                                        <h5 className="font-bold" style={{ fontSize: "8px" }}>Spicy Wings</h5>
                                        <p className="text-gray-600" style={{ fontSize: "7px" }}>Crispy wings</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Text next to phone - Exact same as desktop */}
                              <div className="flex-1 ml-0 sm:ml-4">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 sm:p-6 rounded-lg sm:rounded-2xl border border-blue-100">
                                  <div className="flex items-center mb-1.5 sm:mb-4">
                                 
                                    <div>
                                      <h4 className="text-xs sm:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1">AR Experience</h4>
                                      <p className="text-xs sm:text-sm text-gray-600">Next-Gen Dining</p>
                                    </div>
                                  </div>
                                  
                                  <div className="space-y-1.5 sm:space-y-3">
                                    <div className="flex items-center">
                                     
                                      <div>
                                        <p className="font-semibold text-gray-800 text-xs sm:text-lg">Scan QR code and let your food come to life</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                    
                                      <div>
                                        <p className="text-gray-600 text-xs sm:text-base">View 3D food models in augmented reality</p>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                    
                                      <div>
                                        <p className="text-gray-600 text-xs sm:text-base">Interactive menu with real-time ordering</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {project.id === 4 && (
                          <div className="p-4 h-full">
                            <div className="flex justify-between items-center mb-3">
                              <h3 className="text-sm font-bold text-blue-600">Investigation Dashboard</h3>
                              <div className="flex items-center gap-1">
                                <span className="text-xs text-gray-600">Prosecutor</span>
                                <img src="/employee.webp" alt="Investigator" className="w-4 h-4 rounded-full object-cover" />
                              </div>
                            </div>
                            <div className="mb-3">
                              <div className="flex items-center border rounded px-2 py-1">
                                <input type="text" placeholder="Search investigations..." className="flex-1 text-xs outline-none" />
                                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 mb-3">
                              <div className="border rounded p-1">
                                <div className="text-xs font-semibold text-green-600">Active</div>
                                <div className="text-xs text-blue-600">24</div>
                              </div>
                              <div className="border rounded p-1">
                                <div className="text-xs font-semibold text-blue-600">Total</div>
                                <div className="text-xs text-blue-600">156</div>
                              </div>
                              <div className="border rounded p-1">
                                <div className="text-xs font-semibold text-orange-600">Pending</div>
                                <div className="text-xs text-blue-600">8</div>
                              </div>
                              <div className="border rounded p-1">
                                <div className="text-xs font-semibold text-red-600">Closed</div>
                                <div className="text-xs text-blue-600">3</div>
                              </div>
                            </div>
                            
                            {/* Linear Graph - Investigations Solved Over Time */}
                            <div className="border rounded p-1 mt-2">
                              <div className="text-xs font-semibold text-gray-700 mb-1">Solved Over Time</div>
                              <div className="h-12 bg-gray-50 rounded relative">
                                {/* Grid lines */}
                                <div className="absolute inset-0 flex flex-col justify-between">
                                  <div className="border-t border-gray-300 opacity-30"></div>
                                  <div className="border-t border-gray-300 opacity-30"></div>
                                  <div className="border-t border-gray-300 opacity-30"></div>
                                  <div className="border-t border-gray-300 opacity-30"></div>
                                </div>
                                
                                {/* Line graph */}
                                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                  <polyline
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="2"
                                    points="5,80 20,60 35,45 50,30 65,25 80,20 95,15"
                                  />
                                  {/* Data points */}
                                  <circle cx="5" cy="80" r="1.5" fill="#10b981" />
                                  <circle cx="20" cy="60" r="1.5" fill="#10b981" />
                                  <circle cx="35" cy="45" r="1.5" fill="#10b981" />
                                  <circle cx="50" cy="30" r="1.5" fill="#10b981" />
                                  <circle cx="65" cy="25" r="1.5" fill="#10b981" />
                                  <circle cx="80" cy="20" r="1.5" fill="#10b981" />
                                  <circle cx="95" cy="15" r="1.5" fill="#10b981" />
                                </svg>
                                
                                {/* Time labels */}
                                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
                                  <span className="text-xs text-gray-500" style={{ fontSize: "7px" }}>Week 1</span>
                                  <span className="text-xs text-gray-500" style={{ fontSize: "7px" }}>Week 2</span>
                                  <span className="text-xs text-gray-500" style={{ fontSize: "7px" }}>Week 3</span>
                                  <span className="text-xs text-gray-500" style={{ fontSize: "7px" }}>Week 4</span>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1 text-center" style={{ fontSize: "8px" }}>Last 4 weeks</div>
                            </div>
                          </div>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Hover icon */}
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>

                        {/* Project number */}
                        <div className="absolute bottom-4 left-4">
                          <span className="text-slate-400 text-2xl font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

    
      </div>
    </div>
  );
};

export default ProjectsStoryline;
