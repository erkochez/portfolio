'use client';

import { motion } from 'framer-motion';
import { WordPullUp, FadeInBlur } from './ui/TextAnimations';

export default function Skills() {
  const coreSkills = [
    { name: "Spring Boot", experience: "2.5+ years" },
    { name: "Java", experience: "3+ years" },
    { name: "React", experience: "2+ years" },
    { name: "Next.js", experience: "1.5+ years" },
    { name: "TypeScript", experience: "2+ years" },
    { name: "PostgreSQL", experience: "2.5+ years" },
    { name: "React Native", experience: "2+ years" },
    { name: "Docker", experience: "2+ years" },
    { name: "AR Core", experience: "1+ years" },
    { name: "Microservices", experience: "2+ years" }
  ];

  const achievements = [
    {
      title: "Head Backend Developer",
      description: "Leading enterprise workflow management systems for banks and state institutions",
      highlight: "2.5+ years experience"
    },
    {
      title: "AR Innovation Pioneer", 
      description: "Created revolutionary Restaurant AR menu app transforming dining experiences across Skopje",
      highlight: "20+ establishments using it"
    },
    {
      title: "Startup Founder",
      description: "Built Biteklif - real-time online auction platform with live bidding and secure payments",
      highlight: "1000+ active users"
    },
    {
      title: "Enterprise Solutions Architect",
      description: "Designed and implemented complex microservices architectures for financial institutions",
      highlight: "Multiple banks using systems"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <WordPullUp 
            words="Technical Expertise"
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
            delayMultiple={0.1}
          />
          <FadeInBlur delay={0.5} className="text-xl text-slate-600 max-w-3xl mx-auto">
            Core technologies and frameworks I work with daily, plus key achievements that showcase my impact.
          </FadeInBlur>
        </div>

        {/* Core Skills - Clean List */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Technologies</h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors duration-300"
                >
                  <div className="font-semibold text-slate-800 mb-1">{skill.name}</div>
                  <div className="text-sm text-slate-500">{skill.experience}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements - Clean Cards */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-800">{achievement.title}</h4>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {achievement.highlight}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
