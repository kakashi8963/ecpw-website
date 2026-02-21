import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Zap, ShieldCheck, Microscope, Brain, Waves } from 'lucide-react';

const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="technology" data-testid="solution-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#0a0f1c]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">The Solution</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="solution-heading">
            Introducing <span className="text-cyan-400">saahECG</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
            A once-in-a-century breakthrough &mdash; the world's first non-invasive ECG to achieve 
            ion-level signal capture with AI-automated diagnosis.
          </p>
        </motion.div>

        {/* Main product showcase */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative glass rounded-2xl p-6 h-full flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent" />
              <img
                src="https://customer-assets.emergentagent.com/job_cranky-haibt-2/artifacts/4deo1vm3_WhatsApp%20Image%202026-02-09%20at%201.45.15%20PM.jpeg"
                alt="saahECG Device"
                className="relative w-full max-w-sm mx-auto"
                data-testid="solution-device-image"
              />
            </div>
          </motion.div>

          {/* Key Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 space-y-4"
          >
            {[
              {
                icon: Microscope,
                title: 'Ion-Level Signal Capture',
                desc: 'Records cardiac signals at 10^22 ion-level resolution &mdash; a century ahead of traditional 10^8 cellular-level ECGs. Captures 12,000 data points per second.',
                tag: '10^22 Resolution',
              },
              {
                icon: Brain,
                title: 'AI-Powered Diagnosis (i-Dx)',
                desc: 'A brain-like intelligent system that autonomously reads, analyzes, differentiates, and measures &mdash; automatically identifying 2,700 parameters from each heartbeat without database dependency.',
                tag: 'Database-Free AI',
              },
              {
                icon: Waves,
                title: 'Complete Cardiac Mapping',
                desc: 'Records signals from SAN, Atrial, AVN, His Bundle, Bundle Branches, and Purkinje fibers &mdash; the entire cardiac conduction pathway that traditional ECG cannot capture.',
                tag: 'Full Conduction System',
              },
              {
                icon: ShieldCheck,
                title: 'Non-Invasive Precision',
                desc: 'Achieves diagnostic depth previously only possible through invasive EP catheterization &mdash; no hospitalization, no X-ray exposure, no surgical risk.',
                tag: 'Body Surface Test',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group glass rounded-xl p-5 hover:border-cyan-500/20 transition-all duration-300"
                data-testid={`solution-capability-${i}`}
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                    </div>
                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.desc }} />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { icon: Zap, value: '12 sec', label: 'Test Duration', desc: 'Rapid results' },
            { icon: Cpu, value: '99%', label: 'Recording Rate', desc: 'Signal capture' },
            { icon: Microscope, value: '5,800+', label: 'Image Definition', desc: 'vs 50-100 traditional' },
            { icon: ShieldCheck, value: '21 yrs', label: 'R&D Investment', desc: 'Since 2005' },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 text-center group hover:border-cyan-500/20 transition-all duration-300"
              data-testid={`solution-stat-${i}`}
            >
              <stat.icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" />
              <div className="font-mono text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium mt-1">{stat.label}</div>
              <div className="text-[10px] text-slate-600 mt-0.5">{stat.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
