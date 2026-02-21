import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const conductionSteps = [
  {
    id: 'san',
    name: 'SAN',
    fullName: 'Sinoatrial Node',
    color: '#ef4444',
    desc: "The heart's natural pacemaker. Generates the electrical impulse that initiates each heartbeat. Traditional ECG cannot isolate this signal.",
  },
  {
    id: 'atrial',
    name: 'Atrial',
    fullName: 'Atrial Conduction',
    color: '#3b82f6',
    desc: "Electrical impulse spreads across both atria, causing contraction. saahECG captures the complete P-wave, unlike traditional ECG which records only half.",
  },
  {
    id: 'avn',
    name: 'AVN',
    fullName: 'Atrioventricular Node',
    color: '#0ea5e9',
    desc: 'Critical junction where the impulse is briefly delayed, allowing atria to finish contracting before ventricles begin. Detectable only by saahECG.',
  },
  {
    id: 'his',
    name: 'His',
    fullName: 'Bundle of His',
    color: '#22c55e',
    desc: 'The pathway connecting AVN to ventricles. Previously only detectable via invasive EP catheterization. saahECG records this non-invasively.',
  },
  {
    id: 'bb',
    name: 'BB',
    fullName: 'Bundle Branches',
    color: '#eab308',
    desc: 'Splits into left and right branches conducting impulses down the ventricular septum. saahECG provides complete visualization.',
  },
  {
    id: 'purkinje',
    name: 'Purkinje',
    fullName: 'Purkinje Fibers',
    color: '#a855f7',
    desc: 'Rapidly distributes the impulse throughout ventricular walls for synchronized contraction. Complete mapping via saahECG.',
  },
];

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section data-testid="how-it-works-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">How It Works</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="howitworks-heading">
            Mapping the Heart's <span className="text-cyan-400">Complete</span> Electrical Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
            saahECG records signals from every anatomical region of the cardiac conduction system &mdash; 
            something no traditional ECG has ever achieved.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Conduction Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://customer-assets.emergentagent.com/job_8c10b883-b543-42af-9be7-ba8e8b3afeb7/artifacts/hke1zc2t_WhatsApp%20Image%202025-09-29%20at%2009.36.23_df46886f.jpg"
                alt="Cardiac Conduction System - vistaECG Color Wave Mapping"
                className="w-full h-auto"
                data-testid="howitworks-conduction-image"
              />
            </div>
            <p className="text-slate-600 text-xs mt-3 text-center">
              Anatomical regions corresponding to vistaECG color waves
            </p>
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 via-cyan-500 to-violet-500 opacity-20" />
              
              <div className="space-y-6">
                {conductionSteps.map((step, i) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="relative flex gap-4 group"
                    data-testid={`conduction-step-${step.id}`}
                  >
                    {/* Node */}
                    <div className="flex-shrink-0 relative z-10">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110"
                        style={{
                          borderColor: step.color,
                          background: `${step.color}15`,
                          boxShadow: `0 0 12px ${step.color}30`,
                        }}
                      >
                        <span className="font-mono text-xs font-bold" style={{ color: step.color }}>
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="glass rounded-xl p-4 flex-1 group-hover:border-white/10 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-sm font-bold" style={{ color: step.color }}>
                          {step.name}
                        </span>
                        <span className="text-slate-600 text-xs">&mdash;</span>
                        <span className="text-slate-400 text-xs">{step.fullName}</span>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Summary note */}
            <div className="glass rounded-xl p-5 mt-8 border-cyan-500/20">
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-cyan-400 font-semibold">Key Insight:</span> Traditional ECG captures only 
                <span className="text-white"> 1 wave</span> each for atrium and ventricles. saahECG captures 
                <span className="font-mono text-cyan-400"> 5 waves</span> for each &mdash; providing a complete 
                picture of the heart's electrical activity for the first time non-invasively.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
