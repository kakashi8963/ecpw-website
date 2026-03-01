import React from "react";
import "@/index.css";
import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import ComparisonTable from "@/components/ComparisonTable";
import PublicationsSection from "@/components/PublicationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const normalizedPath =
    typeof window !== "undefined"
      ? window.location.pathname.replace(/\/+$/, "") || "/"
      : "/";
  const isPublicationsPage = normalizedPath === "/publications";

  if (isPublicationsPage) {
    return (
      <div className="min-h-screen bg-[#050505] text-white" data-testid="app-root">
        <Navbar />
        <main>
          <PublicationsSection />
        </main>
        <Footer />
        <Analytics />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white" data-testid="app-root">
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <ProblemSection />
        <div className="section-divider" />
        <SolutionSection />
        <HowItWorks />
        <div className="section-divider" />
        <FeaturesGrid />
        <ComparisonTable />
        <div className="section-divider" />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
