'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.fromTo(formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'erenahmed3@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+389 71 229 173',
      description: 'Available during business hours'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Skopje, Macedonia',
      description: 'Available for remote & local work'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: '/in/erkochez',
      description: 'Let&apos;s connect professionally'
    }
  ];


  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Whether it&apos;s enterprise solutions, 
            mobile apps, or cutting-edge AR experiences, I&apos;m here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I&apos;m always excited to discuss new opportunities, whether you&apos;re looking 
                to build enterprise-grade systems, innovative mobile applications, or 
                explore the possibilities of AR technology. Let&apos;s create something amazing together.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center text-xl">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                    <p className="text-cyan-300 font-medium">{info.value}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

          
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Project Discussion"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting && submitStatus !== 'success' ? { scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" } : {}}
                whileTap={!isSubmitting && submitStatus !== 'success' ? { scale: 0.95 } : {}}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                } shadow-lg`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : submitStatus === 'success' ? (
                  <div className="flex items-center justify-center space-x-2">
                    <span>✅</span>
                    <span>Message Sent!</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-400 text-center text-sm">
                  Thank you! I&apos;ll get back to you as soon as possible.
                </p>
              )}
            </form>
          </div>
        </div>

   
      </div>
    </section>
  );
}
