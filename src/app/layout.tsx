import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eren Ahmed - Spring Boot Developer in Macedonia | React & Next.js Expert",
  description: "Hire Spring Boot Developer in Macedonia. Expert React, Next.js, TypeScript developer from Skopje. Head Backend Developer with 2.5+ years experience. Specializing in microservices, AR development, and enterprise solutions. Available for hire.",
  keywords: [
    "Spring Boot developer Macedonia",
    "React developer Skopje",
    "Next.js developer Macedonia", 
    "TypeScript developer",
    "Java developer Macedonia",
    "Backend developer hire",
    "Full stack developer Skopje",
    "AR developer Macedonia",
    "Microservices developer",
    "Enterprise developer hire",
    "Software engineer Macedonia",
    "Web developer Skopje",
    "Mobile app developer",
    "React Native developer",
    "Node.js developer",
    "PostgreSQL developer",
    "Docker developer",
    "AWS developer Macedonia"
  ],
  authors: [{ name: "Eren Ahmed" }],
  creator: "Eren Ahmed",
  publisher: "Eren Ahmed",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://erenahmed.netlify.app',
    title: 'Eren Ahmed - Spring Boot Developer in Macedonia | React & Next.js Expert',
    description: 'Hire Spring Boot Developer in Macedonia. Expert React, Next.js, TypeScript developer from Skopje. Head Backend Developer with 2.5+ years experience.',
    siteName: 'Eren Ahmed Portfolio',
    images: [
      {
        url: '/profileimage.webp',
        width: 400,
        height: 400,
        alt: 'Eren Ahmed - Spring Boot Developer in Macedonia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eren Ahmed - Spring Boot Developer in Macedonia',
    description: 'Hire Spring Boot Developer in Macedonia. Expert React, Next.js, TypeScript developer from Skopje.',
    images: ['/profileimage.webp'],
  },
  alternates: {
    canonical: 'https://erenahmed.netlify.app',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch for better loading */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/JosefinSans-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/JosefinSans-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Recoleta-RegularDEMO.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        
        {/* Preload critical images */}
        <link
          rel="preload"
          href="/profileimage.webp"
          as="image"
          type="image/webp"
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://images.icon-icons.com" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Eren Ahmed",
              "jobTitle": "Head Backend Developer",
              "description": "Spring Boot Developer in Macedonia specializing in React, Next.js, TypeScript, and AR development",
              "url": "https://erenahmed.netlify.app",
              "image": "https://erenahmed.netlify.app/profileimage.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Skopje",
                "addressCountry": "Macedonia"
              },
              "knowsAbout": [
                "Spring Boot",
                "React",
                "Next.js", 
                "TypeScript",
                "Java",
                "PostgreSQL",
                "React Native",
                "AR Development",
                "Microservices",
                "Docker",
                "Node.js"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Engineer",
                "description": "Head Backend Developer specializing in enterprise solutions and AR development"
              },
              "alumniOf": "International Balkan University",
              "sameAs": [
                "https://github.com/erenahmed",
                "https://linkedin.com/in/erenahmed"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
