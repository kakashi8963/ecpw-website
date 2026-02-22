import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Beaker, Globe } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" data-testid="about-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#0a0f1c]" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">About Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="about-heading">
            Our <span className="text-cyan-400">Mission</span>
          </h2>
          <div className="w-16 h-[2px] bg-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/10 rounded-2xl blur-lg" />
              <img
                src="https://images.pexels.com/photos/8532847/pexels-photo-8532847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Research and Development Lab"
                className="relative rounded-2xl w-full h-[400px] object-cover border border-white/5"
                data-testid="about-image"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-8" data-testid="about-description">
              <span className="text-white font-semibold">Eastern Chemical & Pharmaceutical Works</span> is 
              dedicated to revolutionizing cardiac diagnostics through cutting-edge technology. As one of the 
              distributor of PhysioSign's groundbreaking saahECG technology, we bridge the gap between 
              traditional non-invasive ECG limitations and the precision of invasive electrophysiology &mdash; 
              making world-class cardiac assessment accessible to every healthcare facility.
            </p>

            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Backed by over 21 years of research, validation on millions of clinical cases, and supported 
              by pioneers in electrophysiology from Columbia University and Harvard, our technology 
              represents a once-in-a-century breakthrough in cardiac science.
            </p>

            {/* Values */}
            <div className="space-y-5">
              {[
                {
                  icon: Target,
                  title: 'Precision Diagnostics',
                  desc: 'Millisecond-level accuracy with 2,700+ automated data parameters per test.',
                },
                {
                  icon: Beaker,
                  title: 'Science-Backed Innovation',
                  desc: '96 patents protecting proprietary signal processing and AI technology.',
                },
                {
                  icon: Globe,
                  title: 'Global Healthcare Impact',
                  desc: 'Validated across 6 countries with a 15-million-case electrophysiology database.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group" data-testid={`about-value-${i}`}>
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{item.title}</h4>
                    <p className="text-slate-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
