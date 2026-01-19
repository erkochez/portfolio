import AboutAnimations from './ui/AboutAnimations';
import Image from 'next/image';

export default function About() {

  const timeline = [
    {
      year: "2012",
      title: "Started Coding",
      description:
        "Fell in love with programming at age 12. Created multiple websites and a sports news platform that gained thousands of monthly views.",
      icon: "💻",
    },
    {
      year: "2022",
      title: "University Graduate",
      description:
        "Graduated with a Bachelor's degree from International Balkan University, equipped with solid computer science fundamentals.",
      icon: "🎓",
    },
    {
      year: "2022",
      title: "Junior Backend Developer",
      description:
        "Started my professional journey as a Junior Spring Backend Developer at a company in Skopje, Macedonia.",
      icon: "🚀",
    },
    {
      year: "2024",
      title: "Head Backend Developer",
      description:
        "Promoted to Head Backend Developer. Led multiple projects including Workflow Management systems for Banks and state institutions.",
      icon: "👑",
    },
    {
      year: "Present",
      title: "AR Innovator",
      description:
        "Co-created a modern Restaurant AR menu app used across Skopje. Building next-generation AR tools and managing enterprise systems.",
      icon: "🥽",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-background text-foreground"
    >
      <AboutAnimations sectionId="about" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-recoleta">
            Spring Boot Developer Journey in Macedonia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a curious 12-year-old creating websites to becoming a <strong>Head Backend Developer </strong>
            leading enterprise-level Spring Boot solutions and pioneering AR experiences in
            <strong> Macedonia&apos;s tech scene</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            {/* Memoji and Text on same line */}
            <div className="flex items-start gap-4">
              <Image
                src="/hiemoji.webp"
                alt="Eren Ahmed Memoji"
                width={160}
                height={160}
                className="w-20 h-20 md:w-24 md:h-24 rounded-2xl object-cover flex-shrink-0"
                priority
                sizes="(max-width: 768px) 80px, 96px"
              />
              <div className="prose prose-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m{" "}
                  <span className="font-semibold text-primary">
                    Eren Ahmed
                  </span>
                  , a passionate software engineer from
                  <span className="font-semibold"> Skopje, Macedonia</span>. My
                  journey in programming began with an insatiable curiosity
                  about how digital worlds are created.
                </p>
              </div>
            </div>

            <div className="prose prose-lg">
              <p className="text-slate-600 leading-relaxed">
                Over the years, I&apos;ve evolved from creating simple websites
                to architecting complex enterprise solutions. Today, as the{" "}
                <span className="font-semibold text-blue-700">
                  Head Backend Developer
                </span>{" "}
                at my company, I lead teams in building robust Workflow
                Management systems for banks and state institutions.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Beyond my professional role, I&apos;m an entrepreneur and
                innovator. I&apos;ve created
                <span className="font-semibold text-blue-500"> Biteklif</span>,
                an online auction platform with real-time bidding, and
                co-developed a revolutionary{" "}
                <span className="font-semibold text-blue-600">
                  Restaurant AR menu app
                </span>{" "}
                that&apos;s transforming dining experiences across Skopje.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">3</div>
                <div className="text-slate-600">Years Professional</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-700">10+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-500">AR</div>
                <div className="text-slate-600">Innovation Focus</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">Tech</div>
                <div className="text-slate-600">Leadership</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-container relative">
            <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item relative pl-12 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full ring-4 ring-white shadow-sm group-hover:scale-125 transition-transform duration-300"></div>

                  {/* Card */}
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group-hover:border-blue-200">
                    {/* Year badge */}
                    <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
