import SkillsAnimations from './ui/SkillsAnimations';

export default function Skills() {

  const coreSkills = [
    { name: "Spring Boot", experience: "2.5+ years" },
    { name: "Java", experience: "4+ years" },
    { name: "React", experience: "1.5+ years" },
    { name: "Next.js", experience: "0.8+ years" },
    { name: "TypeScript", experience: "1+ years" },
    { name: "PostgreSQL", experience: "2.5+ years" },
    { name: "React Native", experience: "2+ years" },
    { name: "Docker", experience: "1+ years" },
    { name: "AR Core", experience: "1+ years" },
    { name: "Microservices", experience: "2+ years" },
  ];

  const achievements = [
    {
      title: "Head Backend Developer",
      description:
        "Leading enterprise workflow management systems for banks and state institutions",
      highlight: "2.5+ years experience",
    },
    {
      title: "AR Innovation Pioneer",
      description:
        "Created revolutionary Restaurant AR menu app transforming dining experiences across Skopje",
      highlight: "20+ establishments using it",
    },
    {
      title: "Startup Founder",
      description:
        "Built Biteklif - real-time online auction platform with live bidding and secure payments",
      highlight: "1000+ active users",
    },
    {
      title: "Enterprise Solutions Architect",
      description:
        "Designed and implemented complex microservices architectures for financial institutions",
      highlight: "Multiple banks using systems",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <SkillsAnimations sectionId="skills" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-recoleta">
            Technical Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Core technologies and frameworks I work with daily, plus key
            achievements that showcase my impact.
          </p>
        </div>

        {/* Core Skills - Clean List */}
        <div className="mb-20 skills-container">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Core Technologies
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {coreSkills.map((skill, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors duration-300"
                >
                  <div className="font-semibold text-slate-800 mb-1">
                    {skill.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {skill.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements - Clean Cards */}
        <div className="achievements-container">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-slate-800">
                    {achievement.title}
                  </h4>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {achievement.highlight}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
