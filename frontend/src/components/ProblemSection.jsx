import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingDown, AlertTriangle, EyeOff } from 'lucide-react';

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section data-testid="problem-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 text-xs font-mono uppercase tracking-[0.2em]">The Problem</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="problem-heading">
            The ECG Has Not Changed in <span className="text-red-400">120 Years</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mt-4 text-base lg:text-lg">
            Invented in 1903, the ECG's core signal processing remains fundamentally the same &mdash; leaving 
            critical cardiac conditions undetected every day.
          </p>
        </motion.div>

        {/* Focused ECG-only visual + stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* ECG stagnation timeline — minimal, ECG-only */}
          <div className="glass rounded-2xl p-8 lg:p-10 mb-8">
            <div className="flex items-center justify-between gap-4 flex-wrap mb-8">
              <div>
                <div className="font-mono text-xs text-red-400/70 mb-1">1903 &mdash; Present</div>
                <h3 className="text-white font-heading font-bold text-lg">Traditional ECG: Unchanged Core Technology</h3>
              </div>
              <div className="font-mono text-3xl lg:text-4xl font-extrabold text-red-400/30">120+yr</div>
            </div>

            {/* Visual timeline bar */}
            <div className="relative h-2 bg-white/5 rounded-full mb-8 overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-red-500/60 to-red-500/20 rounded-full" style={{ width: '100%' }} />
              {/* Markers */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-[#0a0f1c]" title="1903 — ECG Invented" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-400 border-2 border-[#0a0f1c] animate-pulse" title="2026 — Still unchanged" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-600 -mt-4 mb-6">
              <span>1903 &mdash; ECG invented</span>
              <span>No fundamental update since</span>
              <span>2026 &mdash; Still the same</span>
            </div>

            {/* Key limitation stats */}
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: TrendingDown, stat: '~50%', label: 'AMI Detection', desc: 'Nearly 0% for Acute Coronary Syndrome' },
                { icon: AlertTriangle, stat: '1/2', label: 'P & T Waves', desc: 'Only half of atrial & ventricular signals captured' },
                { icon: EyeOff, stat: '0', label: 'U.S. Patents', desc: 'No ECG maker holds a U.S. patent on signal processing' },
              ].map((item, i) => (
                <div key={i} className="bg-white/[0.03] rounded-xl p-5 group hover:bg-red-500/5 transition-colors" data-testid={`problem-card-${i}`}>
                  <item.icon className="w-5 h-5 text-red-400/70 mb-3" />
                  <div className="font-mono text-2xl font-bold text-red-400">{item.stat}</div>
                  <div className="text-white text-sm font-semibold mt-1">{item.label}</div>
                  <div className="text-slate-600 text-xs mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass rounded-xl px-6 py-4 border-red-500/10 max-w-3xl mx-auto"
          >
            <p className="text-slate-500 text-sm italic text-center leading-relaxed">
              "The ECG is the most direct biomarker for assessing heart function &mdash; yet its 
              image resolution and signal processing have remained at 1903 levels, while every 
              other medical device has evolved generations ahead."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
