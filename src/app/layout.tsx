import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eren Ahmed - Software Engineer & AR Developer",
  description: "Head Backend Developer from Skopje, Macedonia. Specializing in Spring Boot, React Native, Next.js, and cutting-edge AR technologies. Creator of innovative solutions including Restaurant AR menu systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical styles for LCP */
            .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
            .min-h-screen { min-height: 100vh; }
            .flex { display: flex; }
            .items-center { align-items: center; }
            .justify-center { justify-content: center; }
            .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
            .from-blue-50 { --tw-gradient-from: #eff6ff; --tw-gradient-to: rgb(239 246 255 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
            .via-white { --tw-gradient-to: rgb(255 255 255 / 0); --tw-gradient-stops: var(--tw-gradient-from), #ffffff, var(--tw-gradient-to); }
            .to-blue-100 { --tw-gradient-to: #dbeafe; }
            .text-slate-800 { color: #1e293b; }
            .relative { position: relative; }
            .overflow-hidden { overflow: hidden; }
            .pt-20 { padding-top: 5rem; }
            .md\\:pt-0 { }
            @media (min-width: 768px) { .md\\:pt-0 { padding-top: 0px; } }
            .pc-card { position: relative; width: 300px; height: 400px; }
            .avatar { width: 100%; height: 100%; object-fit: cover; border-radius: 20px; }
          `
        }} />
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
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://upload.wikimedia.org" />
        <link rel="preconnect" href="https://images.icon-icons.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
