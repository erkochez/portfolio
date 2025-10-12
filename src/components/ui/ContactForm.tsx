"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  const handleEmailClick = () => {
    // Try multiple methods to ensure it works
    try {
      // Method 1: Direct window.location
      window.location.href = 'mailto:erenahmed3@gmail.com';
    } catch (error) {
      try {
        // Method 2: Create and click a link
        const link = document.createElement('a');
        link.href = 'mailto:erenahmed3@gmail.com';
        link.click();
      } catch (error2) {
        // Method 3: Fallback - copy email to clipboard
        navigator.clipboard.writeText('erenahmed3@gmail.com');
        alert('Email copied to clipboard: erenahmed3@gmail.com');
      }
    }
  };

  return (
    <div className="contact-form">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center gap-4"
      >
        <motion.button
          onClick={handleEmailClick}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg cursor-pointer"
          type="button"
        >
          Contact Me
        </motion.button>
        
        {/* Fallback: Simple mailto link */}
        <motion.a
          href="mailto:erenahmed3@gmail.com"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg cursor-pointer"
        >
          Email Direct
        </motion.a>
      </motion.div>
    </div>
  );
}
