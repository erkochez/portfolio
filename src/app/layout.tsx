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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
