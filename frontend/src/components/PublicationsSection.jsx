import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink } from 'lucide-react';

const PublicationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const publicationPath = '/international-journal-of-cardiology-2016.pdf';

  return (
    <section id="publications" data-testid="publications-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#060b14]" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">Publications</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="publications-heading">
            Research <span className="text-cyan-400">Publications</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-500 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass rounded-2xl p-6 lg:p-8 border border-white/10"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="text-white font-semibold">International Journal of Cardiology (2016)</div>
                <div className="text-slate-400 text-sm">Peer-reviewed publication</div>
              </div>
            </div>

            <a
              href={publicationPath}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 text-white text-sm font-semibold hover:bg-cyan-400 transition-colors"
              data-testid="publication-open-link"
            >
              Open PDF
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-white/10 bg-black/20">
            <iframe
              src={publicationPath}
              title="International Journal of Cardiology 2016"
              className="w-full h-[500px]"
              data-testid="publication-pdf-preview"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
