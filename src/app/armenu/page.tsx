"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ARMenuPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(
    () => {
      // Kill all existing ScrollTriggers to prevent conflicts
      ScrollTrigger.killAll();

      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        const isMobile = window.innerWidth < 1024;

      // Hero section animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Platform section - parallax
      if (!isMobile) {
        gsap.to(".platform-image", {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: ".platform-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Feature cards animation
      const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
      featureCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Admin panel steps animation
      const adminSteps = gsap.utils.toArray<HTMLElement>(".admin-step");
      adminSteps.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Menu items 3D rotation
      gsap.fromTo(
        ".menu-item-3d",
        { opacity: 0, rotateY: 90, scale: 0.5 },
        {
          opacity: 1,
          rotateY: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".menu-showcase",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Allergen filter animation
      gsap.fromTo(
        ".allergen-filter",
        { opacity: 0, scale: 0, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".allergen-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Language cards dramatic entrance
      gsap.fromTo(
        ".language-card",
        { opacity: 0, scale: 0.5, rotateX: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".language-section",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tech stack floating animation
      gsap.to(".tech-icon", {
        y: -20,
        duration: 2,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // Stats counter animation
      const stats = gsap.utils.toArray<HTMLElement>(".stat-number");
      stats.forEach((stat) => {
        const target = parseInt(stat.getAttribute("data-target") || "0");
        gsap.fromTo(
          stat,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2,
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // 3D model pulse
      gsap.to(".ar-pulse", {
        scale: 1.3,
        opacity: 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, 100); // Close setTimeout

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-black to-red-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-tighter">
            AR MENU
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-8">
            DINING REIMAGINED
          </p>
          <div className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of restaurant menus with AR technology, 3D food visualization, and seamless ordering.
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="platform-section relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase">
              MODERN <span className="text-orange-400">RESTAURANT MENU</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              AR Menu is a revolutionary restaurant menu app featuring 3D models, images, and multi-language support. Modern, fast, and easy to use for both restaurants and customers.
            </p>
            <div className="space-y-4 text-lg text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <p>Augmented Reality food visualization with 3D models</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <p>Multi-language and multi-currency support</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <p>Advanced allergen filtering for dietary requirements</p>
              </div>
            </div>
          </div>

          <div className="platform-image relative">
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl shadow-orange-500/50">
              <div className="bg-gray-900 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-orange-400">Menu Preview</h3>
                  <div className="flex items-center gap-2">
                    <div className="ar-pulse w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-400">AR Ready</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { dish: "Chicken Alfredo", price: "$12", time: "20 min", tag: "SPECIAL" },
                    { dish: "Spicy Wings", price: "$8", time: "15 min", tag: "HOT" },
                    { dish: "Margherita Pizza", price: "$15", time: "25 min", tag: "NEW" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-xl p-3 hover:bg-gray-700 transition-colors group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{item.dish}</div>
                        <div className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500">
                          {item.tag}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold text-orange-400">{item.price}</div>
                        <div className="text-sm text-gray-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.time}
                        </div>
                      </div>
                      <button className="mt-2 w-full bg-orange-500 opacity-0 group-hover:opacity-100 text-white text-sm py-2 rounded-lg transition-all">
                        View in 3D
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            KEY <span className="text-orange-400">FEATURES</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-orange-500">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">3D MODELS & AR</h3>
              <p className="text-gray-400 text-lg">
                Visualize dishes in 3D and AR before ordering. See realistic food models right on your table through your device.
              </p>
            </div>

            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-red-500">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">MULTI-LANGUAGE</h3>
              <p className="text-gray-400 text-lg">
                Support for multiple languages and currencies. Perfect for international restaurants and diverse customer base.
              </p>
            </div>

            <div className="feature-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border-2 border-pink-500">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">LIGHTNING FAST</h3>
              <p className="text-gray-400 text-lg">
                Modern design with blazing-fast performance. Smooth scrolling, instant loading, and seamless interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Panel Section */}
      <section className="relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            ADMIN <span className="text-orange-400">PANEL</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Restaurant owners have complete control with an intuitive admin panel. Manage menu, categories, and products with ease.
          </p>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="admin-step grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl font-black text-orange-400 mb-4">01</div>
                <h3 className="text-4xl font-bold mb-6">ADD CATEGORIES</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-4">
                  Organize your menu with categories like Main Dishes, Starters, Desserts, Beverages. Create subcategories under each main category for better organization.
                </p>
                <div className="bg-orange-500/20 border-2 border-orange-500 rounded-2xl p-4">
                  <div className="text-sm text-orange-400 font-semibold mb-2">Example Structure:</div>
                  <div className="text-gray-300 space-y-1 text-sm">
                    <div>📁 Main Dishes</div>
                    <div className="ml-4">└ Pasta</div>
                    <div className="ml-4">└ Grilled</div>
                    <div>📁 Starters</div>
                    <div className="ml-4">└ Soups</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Category Manager</h4>
                  <div className="space-y-2">
                    {[
                      { name: "Main Dishes", items: 24, icon: "🍽️" },
                      { name: "Starters", items: 12, icon: "🥗" },
                      { name: "Desserts", items: 8, icon: "🍰" },
                      { name: "Beverages", items: 15, icon: "🥤" },
                    ].map((cat, idx) => (
                      <div key={idx} className="bg-gray-800 rounded-lg p-3 flex items-center justify-between hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{cat.icon}</span>
                          <div>
                            <div className="font-semibold">{cat.name}</div>
                            <div className="text-xs text-gray-400">{cat.items} items</div>
                          </div>
                        </div>
                        <button className="text-orange-400 hover:text-orange-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="admin-step grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-6xl font-black text-red-400 mb-4">02</div>
                <h3 className="text-4xl font-bold mb-6">ADD PRODUCTS</h3>
                <p className="text-xl text-gray-400 leading-relaxed mb-4">
                  Add products with comprehensive details including images, title, description, preparation time, allergens, and even 3D models for AR visualization.
                </p>
                <ul className="space-y-3 text-lg text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">•</span>
                    <span>Upload images and 3D models</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">•</span>
                    <span>Set prices, portions, and prep time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-400">•</span>
                    <span>Add allergen information</span>
                  </li>
                </ul>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-red-600 to-pink-600 rounded-3xl p-8">
                <div className="bg-gray-900 rounded-2xl p-6">
                  <h4 className="text-lg font-bold mb-4">Add New Product</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Product Name</label>
                      <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm">Grilled Chicken Alfredo</div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Price</label>
                        <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm">$12.00</div>
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1">Prep Time</label>
                        <div className="bg-gray-800 rounded-lg px-3 py-2 text-sm">20 min</div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">Allergens</label>
                      <div className="flex gap-2">
                        <span className="bg-pink-500/20 border border-pink-500 rounded-lg px-2 py-1 text-xs text-pink-400">Gluten</span>
                        <span className="bg-pink-500/20 border border-pink-500 rounded-lg px-2 py-1 text-xs text-pink-400">Dairy</span>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">3D Model</label>
                      <div className="bg-orange-500/20 border-2 border-dashed border-orange-500 rounded-lg p-4 text-center">
                        <svg className="w-8 h-8 text-orange-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="text-xs text-orange-400">Upload 3D Model</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Showcase Section */}
      <section className="menu-showcase relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            MENU <span className="text-orange-400">SHOWCASE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { dish: "Chicken Alfredo", img: "/alfredo.webp", price: "$12", time: "20 min", tag: "SPECIAL" },
              { dish: "Spicy Wings", img: "/chickenwings.webp", price: "$8", time: "15 min", tag: "HOT" },
              { dish: "Margherita Pizza", img: "/pizza.webp", price: "$15", time: "25 min", tag: "NEW" },
            ].map((item, idx) => (
              <div key={idx} className="menu-item-3d bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden border-2 border-gray-700 hover:border-orange-500 transition-all group">
                <div className="relative">
                  <img src={item.img} alt={item.dish} className="w-full h-48 object-cover" />
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-bold">
                    {item.tag}
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <span className="text-white text-xs font-bold">3D</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.dish}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-black text-orange-400">{item.price}</div>
                    <div className="text-sm text-gray-400 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.time}
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allergen Filtering Section */}
      <section className="allergen-section relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            ALLERGEN <span className="text-orange-400">FILTERING</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Users can filter products by allergens. If someone is allergic to lactose, they can select it and all products containing lactose will be hidden from view.
          </p>

          <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 shadow-2xl shadow-orange-500/50 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Filter by Allergens</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "Lactose", icon: "🥛", active: true },
                  { name: "Gluten", icon: "🌾", active: false },
                  { name: "Nuts", icon: "🥜", active: false },
                  { name: "Shellfish", icon: "🦐", active: false },
                  { name: "Eggs", icon: "🥚", active: false },
                  { name: "Soy", icon: "🫘", active: false },
                  { name: "Fish", icon: "🐟", active: false },
                  { name: "Sesame", icon: "🌱", active: false },
                ].map((allergen, idx) => (
                  <button
                    key={idx}
                    className={`allergen-filter rounded-2xl p-4 text-center transition-all ${
                      allergen.active
                        ? "bg-red-500 border-2 border-red-400"
                        : "bg-gray-800 border-2 border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="text-3xl mb-2">{allergen.icon}</div>
                    <div className="text-sm font-semibold">{allergen.name}</div>
                  </button>
                ))}
              </div>

              <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-6 text-center">
                <p className="text-lg">
                  <span className="font-bold text-red-400">Lactose</span> filter active - Hiding 24 items
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Language Section */}
      <section className="language-section relative py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase">
            GLOBAL <span className="text-orange-400">SUPPORT</span>
          </h2>
          <p className="text-xl md:text-2xl text-center text-gray-400 mb-16 max-w-4xl mx-auto">
            Support for multiple languages and currencies makes AR Menu perfect for international restaurants and diverse customer base.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { flag: "🇺🇸", lang: "English", currency: "USD" },
              { flag: "🇪🇸", lang: "Spanish", currency: "EUR" },
              { flag: "🇫🇷", lang: "French", currency: "EUR" },
              { flag: "🇩🇪", lang: "German", currency: "EUR" },
              { flag: "🇮🇹", lang: "Italian", currency: "EUR" },
              { flag: "🇯🇵", lang: "Japanese", currency: "JPY" },
              { flag: "🇨🇳", lang: "Chinese", currency: "CNY" },
              { flag: "🇰🇷", lang: "Korean", currency: "KRW" },
            ].map((item, idx) => (
              <div key={idx} className="language-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border-2 border-gray-700 hover:border-orange-500 transition-all text-center">
                <div className="text-5xl mb-3">{item.flag}</div>
                <div className="font-bold text-lg mb-1">{item.lang}</div>
                <div className="text-sm text-gray-400">{item.currency}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-orange-400 mb-2" data-target="500">0</div>
              <div className="text-xl text-gray-400">Menu Items</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-red-400 mb-2" data-target="8">0</div>
              <div className="text-xl text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-pink-400 mb-2" data-target="50">0</div>
              <div className="text-xl text-gray-400">Restaurants</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-6xl font-black text-yellow-400 mb-2" data-target="100">0</div>
              <div className="text-xl text-gray-400">% AR Ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase">
            POWERED BY <span className="text-orange-400">MODERN TECH</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="tech-icon bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50">
              <img src="/react.webp" alt="React" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">React</div>
              <div className="text-sm text-gray-300">Frontend</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-green-500/50">
              <img src="/springlogo.webp" alt="Spring Boot" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">Spring Boot</div>
              <div className="text-sm text-gray-300">Backend</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-blue-800 to-purple-800 rounded-3xl p-8 w-48 h-48 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/50">
              <img src="/postgresql.webp" alt="PostgreSQL" className="w-20 h-20 object-contain mb-4" />
              <div className="text-xl font-bold">PostgreSQL</div>
              <div className="text-sm text-gray-300">Database</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-gray-900 via-orange-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-8 uppercase">
            EXPERIENCE THE <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">FUTURE</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-12">
            Modern restaurant menu with AR, 3D models, and intelligent filtering
          </p>
          <a 
            href="https://coresense.org/ar-menu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-xl md:text-2xl font-bold px-12 py-6 rounded-full hover:scale-105 transform transition-all shadow-2xl shadow-orange-500/50"
          >
            EXPLORE PROJECT
          </a>
        </div>
      </section>
    </div>
  );
};

export default ARMenuPage;
