"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  const handleEmailClick = () => {
    // Open mailto link in new tab/window
    window.open('mailto:erenahmed3@gmail.com', '_blank');
  };

  return (
    <div className="contact-form">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <motion.button
          onClick={handleEmailClick}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
        >
          Contact Me
        </motion.button>
      </motion.div>
    </div>
  );
}
