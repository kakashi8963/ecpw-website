import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

const comparisonData = [
  {
    category: 'Signal Capture',
    features: [
      {
        name: 'Signal Level',
        ecg: '10^8 Cellular',
        ep: 'His Bundle Only',
        saah: '10^22 Ion Level',
        ecgStatus: 'poor',
        epStatus: 'partial',
        saahStatus: 'good',
      },
      {
        name: 'SAN / AVN / His / BB Recording',
        ecg: 'No',
        ep: 'His Bundle Only',
        saah: 'All Regions',
        ecgStatus: 'bad',
        epStatus: 'partial',
        saahStatus: 'good',
      },
      {
        name: 'Waves per Chamber',
        ecg: '1 wave each',
        ep: 'N/A',
        saah: '5 waves each',
        ecgStatus: 'poor',
        epStatus: 'neutral',
        saahStatus: 'good',
      },
      {
        name: 'Recording Rate',
        ecg: 'Limited',
        ep: '~75%',
        saah: '99.99%',
        ecgStatus: 'poor',
        epStatus: 'partial',
        saahStatus: 'good',
      },
    ],
  },
  {
    category: 'Analysis & AI',
    features: [
      {
        name: 'Measurement Method',
        ecg: 'Manual',
        ep: 'Manual',
        saah: 'AI Automated',
        ecgStatus: 'poor',
        epStatus: 'poor',
        saahStatus: 'good',
      },
      {
        name: 'Data Points per Beat',
        ecg: 'None',
        ep: 'Limited',
        saah: '2,700 Parameters',
        ecgStatus: 'bad',
        epStatus: 'partial',
        saahStatus: 'good',
      },
      {
        name: 'Image Definition Order',
        ecg: '50-100',
        ep: 'N/A',
        saah: '5,800-8,000',
        ecgStatus: 'poor',
        epStatus: 'neutral',
        saahStatus: 'good',
      },
      {
        name: 'Precision Unit',
        ecg: 'Seconds (s)',
        ep: 'Milliseconds (ms)',
        saah: 'Milliseconds (ms)',
        ecgStatus: 'poor',
        epStatus: 'good',
        saahStatus: 'good',
      },
    ],
  },
  {
    category: 'Clinical Practicality',
    features: [
      {
        name: 'Test Method',
        ecg: 'Non-invasive',
        ep: 'Invasive Catheter',
        saah: 'Non-invasive',
        ecgStatus: 'good',
        epStatus: 'bad',
        saahStatus: 'good',
      },
      {
        name: 'Test Duration',
        ecg: '8 seconds',
        ep: 'Several hours',
        saah: '12 seconds',
        ecgStatus: 'good',
        epStatus: 'bad',
        saahStatus: 'good',
      },
      {
        name: 'Testing Environment',
        ecg: 'Any clinic',
        ep: 'Hospital cath lab',
        saah: 'Any clinic',
        ecgStatus: 'good',
        epStatus: 'poor',
        saahStatus: 'good',
      },
      {
        name: 'Pre & Post-Op Assessment',
        ecg: 'Limited',
        ep: 'Not recommended',
        saah: 'Full capability',
        ecgStatus: 'partial',
        epStatus: 'bad',
        saahStatus: 'good',
      },
      {
        name: 'Consumable Cost',
        ecg: '$2-5/test',
        ep: '$500-8,000/test',
        saah: '$9-12/test',
        ecgStatus: 'good',
        epStatus: 'bad',
        saahStatus: 'good',
      },
    ],
  },
];

const statusIcon = (status) => {
  switch (status) {
    case 'good':
      return <Check className="w-3.5 h-3.5 text-emerald-400" />;
    case 'bad':
      return <X className="w-3.5 h-3.5 text-red-400" />;
    case 'partial':
      return <Minus className="w-3.5 h-3.5 text-amber-400" />;
    case 'poor':
      return <Minus className="w-3.5 h-3.5 text-orange-400" />;
    default:
      return <Minus className="w-3.5 h-3.5 text-slate-600" />;
  }
};

const ComparisonTable = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="comparison" data-testid="comparison-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">Comparison</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="comparison-heading">
            saahECG vs <span className="text-slate-500">Traditional ECG</span> vs <span className="text-slate-500">EP Systems</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
            A comprehensive head-to-head comparison demonstrating how saahECG bridges the gap 
            between non-invasive accessibility and invasive-level diagnostic precision.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[700px]">
            {/* Table Header */}
            <div className="grid grid-cols-4 gap-2 mb-3">
              <div className="p-3" />
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-slate-400 text-xs font-medium">Traditional</div>
                <div className="text-white text-sm font-semibold mt-0.5">ECG</div>
              </div>
              <div className="glass rounded-lg p-3 text-center">
                <div className="text-slate-400 text-xs font-medium">Invasive</div>
                <div className="text-white text-sm font-semibold mt-0.5">EP System</div>
              </div>
              <div className="rounded-lg p-3 text-center bg-cyan-500/10 border border-cyan-500/20" style={{ boxShadow: '0 0 20px rgba(14,165,233,0.1)' }}>
                <div className="text-cyan-400 text-xs font-medium">Revolutionary</div>
                <div className="text-cyan-300 text-sm font-bold mt-0.5">saahECG</div>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((category, ci) => (
              <div key={ci} className="mb-6" data-testid={`comparison-category-${ci}`}>
                <div className="text-xs font-mono text-cyan-400/60 uppercase tracking-wider mb-2 px-3">{category.category}</div>
                <div className="space-y-1.5">
                  {category.features.map((feature, fi) => (
                    <div
                      key={fi}
                      className="grid grid-cols-4 gap-2 group"
                      data-testid={`comparison-row-${ci}-${fi}`}
                    >
                      <div className="glass rounded-lg p-3 flex items-center">
                        <span className="text-slate-300 text-xs font-medium">{feature.name}</span>
                      </div>
                      <div className="glass rounded-lg p-3 flex items-center gap-2 justify-center group-hover:border-white/10 transition-colors">
                        {statusIcon(feature.ecgStatus)}
                        <span className="text-slate-500 text-xs">{feature.ecg}</span>
                      </div>
                      <div className="glass rounded-lg p-3 flex items-center gap-2 justify-center group-hover:border-white/10 transition-colors">
                        {statusIcon(feature.epStatus)}
                        <span className="text-slate-500 text-xs">{feature.ep}</span>
                      </div>
                      <div className="rounded-lg p-3 flex items-center gap-2 justify-center bg-cyan-500/5 border border-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
                        {statusIcon(feature.saahStatus)}
                        <span className="text-cyan-300 text-xs font-medium">{feature.saah}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-xl p-6 mt-10 border-cyan-500/10"
        >
          <p className="text-sm text-slate-400 leading-relaxed italic text-center">
            "Since the inception of medical science, no non-invasive method has matched the diagnostic 
            accuracy of invasive techniques. However, this new ECG technology achieves such accuracy for 
            the first time. It is recommended that its efficacy be further validated and implemented in 
            clinical practice."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
