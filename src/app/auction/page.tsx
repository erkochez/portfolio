"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AuctionPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when page mounts - more robust approach
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Also try after a small delay to ensure it works
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      // Force scroll even if browser tries to restore position
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);

    return () => clearTimeout(timer);
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

      // Platform section - pinned with parallax
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

      // Pricing comparison section
      const pricingCards = gsap.utils.toArray<HTMLElement>(".pricing-card");
      pricingCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 100, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Bidding process timeline
      const biddingSteps = gsap.utils.toArray<HTMLElement>(".bidding-step");
      biddingSteps.forEach((step, index) => {
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

      // Timer countdown animation
      gsap.fromTo(
        ".timer-circle",
        { scale: 1, opacity: 1 },
        {
          scale: 1.2,
          opacity: 0.7,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );

      // Winner section dramatic entrance
      gsap.fromTo(
        ".winner-section",
        { opacity: 0, scale: 0.5, rotateY: 90 },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".winner-section",
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
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase tracking-tighter">
            BITEKLIF
          </h1>
          <p className="hero-subtitle text-2xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-8">
            THE FUTURE OF AUCTIONS
          </p>
          <div className="hero-subtitle text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Where hundreds of premium products meet competitive bidding. Win premium tech at unbeatable prices.
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
      <section className="platform-section relative py-16 md:py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 uppercase">
              OPEN AUCTION <span className="text-blue-400">PLATFORM</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-4 md:mb-6 leading-relaxed">
              Biteklif is a revolutionary platform where users join auctions using Biteklif tokens. An open marketplace with hundreds of products waiting for their new owners.
            </p>
            <div className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-400">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                <p>Token-based bidding system for fair participation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Hundreds of premium products available daily</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
                <p>Real-time bidding with unlimited participants</p>
              </div>
            </div>
          </div>

          <div className="platform-image relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl shadow-blue-500/50">
              <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6">
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-blue-400">Live Auctions</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm text-gray-400">Online</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { name: "MacBook Pro", price: "$800", retail: "$2,000", image: "/macbook.webp" },
                    { name: "iPhone 17", price: "$400", retail: "$1,200", image: "/iphone copy.webp" },
                    { name: "PlayStation 5", price: "$450", retail: "$600", image: "/ps5.webp" },
                    { name: "Digital Camera", price: "$320", retail: "$800", image: "/camera.png" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg md:rounded-xl p-2 md:p-3 hover:bg-gray-700 transition-colors">
                      <img src={item.image} alt={item.name} className="w-full h-16 md:h-20 lg:h-24 object-contain rounded mb-1 md:mb-2" />
                      <div className="text-xs md:text-sm font-semibold mb-1 truncate">{item.name}</div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-[10px] md:text-xs text-gray-500 line-through">{item.retail}</span>
                        <span className="text-sm md:text-lg text-blue-400 font-bold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison Section */}
      <section className="relative py-16 md:py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-8 md:mb-16 uppercase">
            UNBEATABLE <span className="text-blue-400">PRICES</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-400 mb-8 md:mb-16 max-w-4xl mx-auto px-2">
            Premium products at a fraction of retail prices. iPhone 17 retails at $1,200 but the highest bid on Biteklif? Only $800.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="pricing-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 border-2 border-gray-700 hover:border-blue-500 transition-all">
              <img src="/iphone copy.webp" alt="iPhone 17" className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">iPhone 17</h3>
              <div className="text-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl font-black text-blue-400 mb-2">$800</div>
                <div className="text-base md:text-lg text-gray-500 line-through">Retail: $1,200</div>
              </div>
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-3 text-center">
                <span className="text-green-400 font-bold text-sm md:text-base">Save $400</span>
              </div>
            </div>

            <div className="pricing-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 border-2 border-gray-700 hover:border-purple-500 transition-all">
              <img src="/macbook.webp" alt="MacBook Pro" className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">MacBook Pro</h3>
              <div className="text-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl font-black text-purple-400 mb-2">$1,400</div>
                <div className="text-base md:text-lg text-gray-500 line-through">Retail: $2,500</div>
              </div>
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-3 text-center">
                <span className="text-green-400 font-bold text-sm md:text-base">Save $1,100</span>
              </div>
            </div>

            <div className="pricing-card bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 md:p-8 border-2 border-gray-700 hover:border-pink-500 transition-all">
              <img src="/ps5.webp" alt="PlayStation 5" className="w-24 h-24 md:w-32 md:h-32 object-contain mx-auto mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4">PlayStation 5</h3>
              <div className="text-center mb-4 md:mb-6">
                <div className="text-3xl md:text-4xl font-black text-pink-400 mb-2">$450</div>
                <div className="text-base md:text-lg text-gray-500 line-through">Retail: $600</div>
              </div>
              <div className="bg-green-500/20 border border-green-500 rounded-xl p-3 text-center">
                <span className="text-green-400 font-bold text-sm md:text-base">Save $150</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bidding Process Section */}
      <section className="relative py-16 md:py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-center mb-8 md:mb-16 uppercase">
            HOW IT <span className="text-blue-400">WORKS</span>
          </h2>

          <div className="space-y-12 md:space-y-24">
            {/* Step 1 */}
            <div className="bidding-step grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="text-5xl md:text-6xl font-black text-blue-400 mb-3 md:mb-4">01</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">AUCTION STARTS</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Each auction begins at a predetermined lowest price. Products are carefully curated, and the starting price is set to ensure competitive bidding while offering massive savings.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl md:rounded-3xl p-4 md:p-8">
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <div className="text-center">
                    <div className="text-xs md:text-sm text-gray-400 mb-2">Starting Price</div>
                    <div className="text-4xl md:text-5xl font-black text-blue-400">$100</div>
                    <div className="mt-3 md:mt-4 text-sm md:text-base text-gray-400">MacBook Pro</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bidding-step grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="lg:order-2">
                <div className="text-5xl md:text-6xl font-black text-purple-400 mb-3 md:mb-4">02</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">PLACE YOUR BID</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  Users bid the minimum amount using Biteklif tokens. Each bid triggers a 60-second timer. If the timer runs out with no new bids, the last bidder wins. If bidding reaches the maximum price, the highest bidder wins.
                </p>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-4 md:p-8">
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="text-xs md:text-sm text-gray-400">Current Bid</div>
                    <div className="timer-circle w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <div className="text-lg md:text-2xl font-bold">60s</div>
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-purple-400 mb-3 md:mb-4">$750</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 md:gap-3 bg-gray-800 rounded-lg p-2 md:p-3">
                      <img src="/chris.webp" alt="Chris" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="text-sm md:text-base font-semibold">Chris</div>
                        <div className="text-xs md:text-sm text-green-400">$750</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 bg-gray-800 rounded-lg p-2 md:p-3">
                      <img src="/oliver.webp" alt="Oliver" className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover" />
                      <div className="flex-1">
                        <div className="text-sm md:text-base font-semibold">Oliver</div>
                        <div className="text-xs md:text-sm text-gray-400">$720</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bidding-step grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <div className="text-5xl md:text-6xl font-black text-pink-400 mb-3 md:mb-4">03</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">TIMER COUNTDOWN</h3>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                  After each bid, a 60-second countdown begins. No new bids? The last bidder wins. New bid placed? Timer resets. The tension builds as bidders compete for the winning position.
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl md:rounded-3xl p-4 md:p-8">
                <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                  <div className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4">Time Remaining</div>
                  <div className="relative inline-block">
                    <div className="timer-circle w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center mx-auto mb-3 md:mb-4">
                      <div className="text-4xl md:text-5xl font-black">60</div>
                    </div>
                    <div className="text-sm md:text-base text-gray-400">seconds</div>
                  </div>
                  <div className="mt-4 md:mt-6 text-xs md:text-sm text-red-400 font-bold">Hurry! Place your bid now!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winner Section */}
      <section className="winner-section relative py-16 md:py-32 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-5xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 uppercase">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              WINNER!
            </span>
          </div>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-2">
            Winners are notified via email and on the website. To complete the purchase, winners must send legitimation documents via email to verify their identity.
          </p>

          <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl shadow-yellow-500/50">
            <div className="bg-gray-900 rounded-xl md:rounded-2xl p-4 md:p-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-4 md:mb-6">
                <img src="/avatar.webp" alt="Winner" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-yellow-400" />
                <div className="text-center sm:text-left">
                  <div className="text-2xl md:text-3xl font-black mb-1 md:mb-2">Congratulations!</div>
                  <div className="text-sm md:text-base text-gray-400">You won the auction</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-xl p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <img src="/macbook.webp" alt="MacBook Pro" className="w-24 h-24 sm:w-20 sm:h-20 object-contain" />
                  <div className="text-center sm:text-right">
                    <div className="text-2xl font-bold">MacBook Pro</div>
                    <div className="text-3xl font-black text-yellow-400">$800</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 md:space-y-4 text-left">
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-bold mb-1">Email Notification Sent</div>
                    <div className="text-xs md:text-sm text-gray-400">Check your inbox for next steps</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm md:text-base font-bold mb-1">Send Legitimation Documents</div>
                    <div className="text-xs md:text-sm text-gray-400">Verify your identity to complete purchase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-32 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-black text-blue-400 mb-1 md:mb-2" data-target="500">0</div>
              <div className="text-sm md:text-base lg:text-xl text-gray-400">Active Auctions</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-black text-purple-400 mb-1 md:mb-2" data-target="10000">0</div>
              <div className="text-sm md:text-base lg:text-xl text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-black text-pink-400 mb-1 md:mb-2" data-target="95">0</div>
              <div className="text-sm md:text-base lg:text-xl text-gray-400">% Savings</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-4xl md:text-5xl lg:text-6xl font-black text-yellow-400 mb-1 md:mb-2" data-target="24">0</div>
              <div className="text-sm md:text-base lg:text-xl text-gray-400">Hours Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative py-16 md:py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 uppercase">
            BUILT WITH <span className="text-blue-400">CUTTING-EDGE TECH</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 md:mb-16 max-w-4xl mx-auto px-2">
            Powered by Spring Boot backend and React TypeScript frontend, with GSAP animations and modern libraries for a seamless experience.
          </p>

          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-4 md:gap-8">
            <div className="tech-icon bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl md:rounded-3xl p-4 md:p-8 w-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48 flex flex-col items-center justify-center shadow-2xl shadow-blue-500/50">
              <img src="/react.webp" alt="React" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2 md:mb-4" />
              <div className="text-base md:text-lg lg:text-xl font-bold">React</div>
              <div className="text-xs md:text-sm text-gray-300">TypeScript</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-green-600 to-green-800 rounded-2xl md:rounded-3xl p-4 md:p-8 w-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48 flex flex-col items-center justify-center shadow-2xl shadow-green-500/50">
              <img src="/springlogo.webp" alt="Spring Boot" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2 md:mb-4" />
              <div className="text-base md:text-lg lg:text-xl font-bold">Spring Boot</div>
              <div className="text-xs md:text-sm text-gray-300">Backend</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-red-600 to-red-800 rounded-2xl md:rounded-3xl p-4 md:p-8 w-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48 flex flex-col items-center justify-center shadow-2xl shadow-red-500/50">
              <img src="/redis.webp" alt="Redis" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2 md:mb-4" />
              <div className="text-base md:text-lg lg:text-xl font-bold">Redis</div>
              <div className="text-xs md:text-sm text-gray-300">Cache</div>
            </div>
            <div className="tech-icon bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl md:rounded-3xl p-4 md:p-8 w-full md:w-40 lg:w-48 h-40 md:h-40 lg:h-48 flex flex-col items-center justify-center shadow-2xl shadow-purple-500/50">
              <img src="/postgresql.webp" alt="PostgreSQL" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2 md:mb-4" />
              <div className="text-base md:text-lg lg:text-xl font-bold">PostgreSQL</div>
              <div className="text-xs md:text-sm text-gray-300">Database</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 md:py-32 px-4 bg-gradient-to-b from-black via-purple-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 uppercase px-2">
            READY TO <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">WIN?</span>
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-300 px-2">
            Join thousands of users winning premium products at unbeatable prices
          </p>
        </div>
      </section>
    </div>
  );
};

export default AuctionPage;
