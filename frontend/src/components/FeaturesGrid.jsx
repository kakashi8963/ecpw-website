import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Microscope, Cpu, Zap, ShieldCheck, Activity, Brain, Waves, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Microscope,
    title: 'Ion-Level Precision',
    desc: 'Captures signals at 10^22 ion level &mdash; a century-technology leap beyond traditional 10^8 cellular-level ECGs.',
    size: 'large',
    accent: 'cyan',
  },
  {
    icon: Brain,
    title: 'AI-Powered i-Dx System',
    desc: 'A database-free, brain-like intelligent system that autonomously reads, analyzes, differentiates, and diagnoses cardiac conditions in real-time.',
    size: 'large',
    accent: 'violet',
  },
  {
    icon: Zap,
    title: '12-Second Test',
    desc: 'Complete cardiac assessment in just 12 seconds. Optional extended recording of 3, 5, or 10 minutes available.',
    size: 'small',
    accent: 'yellow',
  },
  {
    icon: ShieldCheck,
    title: 'Non-Invasive',
    desc: 'Body surface test identical to traditional ECG placement. No catheterization, no hospitalization, no X-ray exposure.',
    size: 'small',
    accent: 'green',
  },
  {
    icon: Waves,
    title: '5x Signal Capture',
    desc: 'Records 5 waves each for atrium and ventricles vs. just 1 wave with traditional ECG.',
    size: 'small',
    accent: 'blue',
  },
  {
    icon: BarChart3,
    title: '2,700 Data Parameters',
    desc: 'Automated measurement of 2,700 quantified parameters per heartbeat, per lead. Millisecond precision.',
    size: 'small',
    accent: 'cyan',
  },
  {
    icon: Activity,
    title: '99% Recording Rate',
    desc: 'Achieves near-perfect signal capture including abnormal QRS, SAN, Atrial, AVN, His, and BB signals.',
    size: 'medium',
    accent: 'green',
  },
  {
    icon: Cpu,
    title: '96 Patents Protected',
    desc: 'Proprietary hardware, signal processing, and AI technology protected by 96 patents with special protection clauses.',
    size: 'medium',
    accent: 'violet',
  },
];

const accentColors = {
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', glow: 'hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]' },
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/20', text: 'text-violet-400', glow: 'hover:shadow-[0_0_20px_rgba(124,58,237,0.15)]' },
  green: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', glow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]' },
  yellow: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', glow: 'hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', glow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' },
};

const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" data-testid="features-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#0a0f1c]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">Key Features</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="features-heading">
            Why <span className="text-cyan-400">saahECG</span> Changes Everything
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
            A comprehensive suite of breakthrough capabilities that redefine cardiac diagnostics.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => {
            const colors = accentColors[feature.accent];
            const colSpan = feature.size === 'large' ? 'lg:col-span-2' : feature.size === 'medium' ? 'lg:col-span-2' : 'lg:col-span-1';

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className={`${colSpan} group`}
                data-testid={`feature-card-${i}`}
              >
                <div className={`glass rounded-xl p-6 h-full ${colors.glow} hover:${colors.border} transition-all duration-300 relative overflow-hidden`}>
                  {/* Shimmer line */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-transparent via-current to-transparent ${colors.text} opacity-0 group-hover:opacity-40 animate-shimmer`} />
                  </div>

                  <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.desc }} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
