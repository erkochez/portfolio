import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Mert Miftar",
      designation: "Front-End Developer at InTec System",
      src: "/MertPicture.webp",
    },
    {
      quote:
        "Working with Eren was such a pleasure. He is such a professional who delivers exceptional results with attention to detail and innovative solutions.",
      name: "Kebir Asim",
      designation: "Full-Stack Developer at InTec System",
      src: "/kebirasim.webp",
    },
  
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
