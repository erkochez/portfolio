import LogoLoop from "./LogoLoop";
import SkillsLogosAnimations from "./SkillsLogosAnimations";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiVercel,
  SiAmazon,
  SiGooglecloud,
  SiUnity,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-blue-500" style={{ fontSize: "120px" }} />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-black" style={{ fontSize: "120px" }} />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: (
      <SiTypescript className="text-blue-600" style={{ fontSize: "120px" }} />
    ),
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: (
      <SiJavascript className="text-yellow-500" style={{ fontSize: "120px" }} />
    ),
    title: "JavaScript",
    href: "https://javascript.info",
  },
  {
    node: (
      <SiTailwindcss className="text-cyan-500" style={{ fontSize: "120px" }} />
    ),
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: (
      <SiPostgresql className="text-blue-700" style={{ fontSize: "120px" }} />
    ),
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
  },
  {
    node: (
      <SiNodedotjs className="text-green-500" style={{ fontSize: "120px" }} />
    ),
    title: "Node.js",
    href: "https://nodejs.org",
  },
  {
    node: <SiExpress className="text-gray-800" style={{ fontSize: "120px" }} />,
    title: "Express.js",
    href: "https://expressjs.com",
  },
  {
    node: (
      <SiMongodb className="text-green-700" style={{ fontSize: "120px" }} />
    ),
    title: "MongoDB",
    href: "https://www.mongodb.com",
  },
  {
    node: <SiRedis className="text-red-600" style={{ fontSize: "120px" }} />,
    title: "Redis",
    href: "https://redis.io",
  },
  {
    node: <SiDocker className="text-blue-600" style={{ fontSize: "120px" }} />,
    title: "Docker",
    href: "https://www.docker.com",
  },
  {
    node: <SiGit className="text-orange-600" style={{ fontSize: "120px" }} />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub className="text-gray-800" style={{ fontSize: "120px" }} />,
    title: "GitHub",
    href: "https://github.com",
  },
  {
    node: (
      <SiGitlab className="text-orange-500" style={{ fontSize: "120px" }} />
    ),
    title: "GitLab",
    href: "https://gitlab.com",
  },
  {
    node: <SiFigma className="text-purple-600" style={{ fontSize: "120px" }} />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiVercel className="text-black" style={{ fontSize: "120px" }} />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: (
      <SiAmazon className="text-orange-500" style={{ fontSize: "120px" }} />
    ),
    title: "AWS",
    href: "https://aws.amazon.com",
  },
  {
    node: (
      <SiGooglecloud className="text-blue-500" style={{ fontSize: "120px" }} />
    ),
    title: "Google Cloud",
    href: "https://cloud.google.com",
  },
  {
    node: <SiUnity className="text-gray-800" style={{ fontSize: "120px" }} />,
    title: "Unity",
    href: "https://unity.com",
  },
  {
    node: (
      <SiArduino className="text-green-600" style={{ fontSize: "120px" }} />
    ),
    title: "Arduino",
    href: "https://www.arduino.cc",
  },
  {
    node: (
      <SiRaspberrypi className="text-red-600" style={{ fontSize: "120px" }} />
    ),
    title: "Raspberry Pi",
    href: "https://www.raspberrypi.org",
  },
];

export default function SkillsLogos() {
  return (
    <div id="skillslogos" className="py-24 bg-white">
      <SkillsLogosAnimations sectionId="skillslogos" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 font-recoleta">
            Technologies and Tools
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive collection of technologies I work with to build
            modern, scalable applications
          </p>
        </div>

        <div className="relative">
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={150}
            gap={80}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology skills and tools"
          />
        </div>
      </div>
    </div>
  );
}
