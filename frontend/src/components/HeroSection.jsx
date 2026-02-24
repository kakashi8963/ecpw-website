import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Activity } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[100px]" />
      
      {/* ECG Line SVG */}
      <svg className="absolute bottom-24 left-0 w-full h-24 opacity-10" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path
          d="M0,50 L200,50 L220,50 L240,20 L260,80 L280,10 L300,90 L320,50 L340,50 L500,50 L520,50 L540,20 L560,80 L580,10 L600,90 L620,50 L640,50 L800,50 L820,50 L840,20 L860,80 L880,10 L900,90 L920,50 L940,50 L1100,50 L1120,50 L1140,20 L1160,80 L1180,10 L1200,90 L1220,50 L1240,50 L1440,50"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          className="ecg-animate"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight"
              data-testid="hero-heading"
            >
              Advancing
              <br />
              Healthcare Through
              <br />
              <span className="text-cyan-400 glow-text">Science & Precision</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-slate-400 text-base lg:text-lg leading-relaxed max-w-lg"
              data-testid="hero-subtext"
            >
              Pioneering the next generation of cardiac diagnostics with 
              <span className="text-white font-medium"> saahECG </span>
              technology &mdash; the world's first AI-powered ECG capturing signals at the 
              <span className="font-mono text-cyan-400"> 10<sup>22</sup> </span> ion level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#technology"
                data-testid="hero-cta-discover"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#technology')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 glow-cyan"
              >
                Discover saahECG
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                data-testid="hero-cta-contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-slate-300 font-medium text-sm hover:border-cyan-500/40 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              {[
                { value: '12,000', label: 'Samples/sec', sub: 'vs 1,000 traditional' },
                { value: '2,700', label: 'Data Points', sub: 'per heartbeat' },
                { value: '12s', label: 'Test Time', sub: 'rapid diagnosis' },
                { value: '96', label: 'Patents', sub: 'protected IP' },
              ].map((stat, i) => (
                <div key={i} className="group" data-testid={`hero-stat-${i}`}>
                  <div className="font-mono text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                  <div className="text-[10px] text-slate-600 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 blur-xl" />
              
              {/* Device image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0f1c]">
                <img
                  src="https://customer-assets.emergentagent.com/job_cranky-haibt-2/artifacts/4deo1vm3_WhatsApp%20Image%202026-02-09%20at%201.45.15%20PM.jpeg"
                  alt="saahECG Device by PhysioSign"
                  className="w-full h-auto object-cover animate-float"
                  data-testid="hero-device-image"
                />
                
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-2 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-white font-medium">saahECG Technology</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
