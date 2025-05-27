import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import AuroraBackground from "@/components/effects/AuroraBackground";
import ParticleField from "@/components/effects/ParticleField";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "SimWork - The Future of Work Simulation Platform",
  description: "AI-driven, immersive work simulation that combines real-world tasks with adaptive difficulty, OCR-enabled asset submission, and real-time analytics. Reduce mis-hires and accelerate workforce readiness.",
  keywords: "hiring assessment, work simulation, technical skills, AI-powered training, corporate training, skill assessment",
  authors: [{ name: "SimWork Team" }],
  creator: "SimWork",
  publisher: "SimWork",
  robots: "index, follow",
  openGraph: {
    title: "SimWork - The Future of Work Simulation Platform",
    description: "Experience real work before you hire. Immersive 3D office simulation with authentic task assessment.",
    url: "https://simwork.ai",
    siteName: "SimWork",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SimWork Platform Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimWork - The Future of Work Simulation Platform",
    description: "Experience real work before you hire. Immersive 3D office simulation with authentic task assessment.",
    images: ["/og-image.jpg"],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066FF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">

      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {/* Background Effects */}
        <AuroraBackground intensity="medium" speed="normal">
          <ParticleField
            particleCount={50}
            particleColor="#0066FF"
            particleSize={2}
            speed={1}
            interactive={true}
          />
        </AuroraBackground>

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
