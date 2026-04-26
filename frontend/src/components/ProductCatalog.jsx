import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, Zap, Droplets, Layers, ChevronRight, Activity, Shield, Award } from 'lucide-react';

const products = [
  {
    id: 'diagnostic-device',
    number: '01',
    category: 'CORE UNIT',
    categoryColor: 'text-cyan-400',
    name: 'saahECG Diagnostic Device',
    description:
      'A compact tabletop unit with a high-resolution touchscreen, WiFi connectivity, and a precision navigation dial. Captures up to 12,000 data points per second — 12× more than conventional ECG — and auto-generates a full diagnostic report in 12 seconds.',
    image: '/catalog/catalog_img_3.jpeg',
    icon: Box,
    tags: ['12,000 pts/sec sampling', '12-second test', 'WiFi + data export', 'Built-in AI (ChatEPS-iDx™)'],
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_40px_rgba(14,165,233,0.15)]',
  },
  {
    id: 'patented-electrodes',
    number: '02',
    category: 'CONSUMABLE · PATENTED',
    categoryColor: 'text-violet-400',
    name: 'saahECG Patented Electrodes',
    description:
      "The world's only US-patented ECG electrode — engineered to capture ion-level cardiac signals across 10 layers of heart muscle. Applied identically to standard 12-lead ECG placement. No special skin preparation required beyond supplied sandpaper.",
    image: '/catalog/catalog_img_4.png',
    icon: Zap,
    tags: ['US Patented', 'Ion-signal capture', 'Standard 12-lead placement', '~₹750 / test'],
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]',
  },
  {
    id: 'ecg-gel',
    number: '03',
    category: 'CONSUMABLE',
    categoryColor: 'text-emerald-400',
    name: 'PhysioSign ECG Gel',
    description:
      "A specially formulated conductive gel optimised for saahECG's ion-signal acquisition. Ensures low-impedance skin contact for maximum signal clarity. A small quantity per test maintains pristine conductivity without mess.",
    image: '/catalog/catalog_img_5.png',
    icon: Droplets,
    tags: ['Ion-optimised formula', 'Low impedance', 'Hypoallergenic'],
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]',
  },
  {
    id: 'skin-prep-strips',
    number: '04',
    category: 'CONSUMABLE',
    categoryColor: 'text-amber-400',
    name: 'Skin Prep Abrasive Strips',
    description:
      "Micro-abrasive strips that gently remove the outermost skin layer at electrode sites, reducing skin-electrode impedance for cleaner, artifact-free signal acquisition — a critical step in achieving saahECG's ultra-high signal resolution.",
    image: '/catalog/catalog_img_6.png',
    icon: Layers,
    tags: ['Signal clarity prep', 'Single-use', 'Gentle micro-abrasion'],
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
    borderGlow: 'group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

const ProductCard = ({ product, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = product.icon;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className={`group relative`}
      data-testid={`product-card-${product.id}`}
    >
      {/* Large background number */}
      <div className="absolute -right-2 lg:right-4 top-0 font-heading text-[120px] lg:text-[180px] font-black text-white/[0.03] leading-none select-none pointer-events-none z-0">
        {product.number}
      </div>

      <div
        className={`relative z-10 glass rounded-2xl lg:rounded-3xl border border-white/[0.08] overflow-hidden transition-all duration-500 ${product.borderGlow}`}
      >
        {/* Top gradient accent */}
        <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${product.gradient}`} />

        <div
          className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-stretch`}
        >
          {/* Image section */}
          <div className="relative lg:w-2/5 flex-shrink-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-50`} />
            <div className="relative p-6 lg:p-8 flex items-center justify-center min-h-[260px] lg:min-h-[360px]">
              <div className="relative">
                <div
                  className={`absolute -inset-6 rounded-full bg-gradient-to-br ${product.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-64 h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  data-testid={`product-image-${product.id}`}
                />
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className={`h-[2px] w-5 ${product.categoryColor} bg-current`} />
              <span className={`text-xs font-mono uppercase tracking-[0.2em] ${product.categoryColor}`}>
                {product.category}
              </span>
            </div>

            {/* Product name */}
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm lg:text-base leading-relaxed mb-6 max-w-xl">
              {product.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/[0.05] border border-white/[0.08] text-slate-300 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCatalog = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      id="product-catalog"
      data-testid="product-catalog-section"
      className="relative min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-cyan-500/[0.03] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/[0.03] blur-[100px]" />

      {/* Hero / Header */}
      <div ref={heroRef} className="relative z-10 pt-28 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Breadcrumb-like label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <a
                href="/"
                className="text-xs text-slate-500 hover:text-cyan-400 transition-colors font-mono uppercase tracking-[0.15em]"
              >
                Home
              </a>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-xs text-cyan-400 font-mono uppercase tracking-[0.15em]">
                Product Catalog
              </span>
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              data-testid="catalog-heading"
            >
              Complete{' '}
              <span className="text-cyan-400 glow-text">Diagnostic Kit</span>
            </h1>

            <p className="mt-5 text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Everything needed for a 12-second cardiac scan. Non-invasive electrophysiological
              technology with patented electrode design.
            </p>

            {/* Kit summary badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { icon: Box, label: '4 Components' },
                { icon: Shield, label: 'Standard Configuration' },
                { icon: Award, label: 'Patented Electrode Technology' },
              ].map(({ icon: BadgeIcon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] text-xs text-slate-300 font-medium"
                >
                  <BadgeIcon className="w-3.5 h-3.5 text-cyan-400" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-7xl" />

      {/* Product Cards */}
      <div className="relative z-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 lg:space-y-16">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl lg:rounded-3xl border border-white/[0.08] p-8 lg:p-12 text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">
                Get Started
              </span>
            </div>
            <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-3 tracking-tight">
              Ready to transform your cardiac diagnostics?
            </h2>
            <p className="text-slate-400 text-sm lg:text-base max-w-lg mx-auto mb-8">
              Contact us for pricing, demonstrations, and to learn how saahECG integrates into your practice.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                data-testid="catalog-cta-contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 glow-cyan"
              >
                Request a Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#technology"
                data-testid="catalog-cta-learn"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-slate-300 font-medium text-sm hover:border-cyan-500/40 hover:text-white transition-all duration-300"
              >
                Learn About the Technology
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ECG Line SVG at bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 opacity-10"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 L200,30 L220,30 L240,10 L260,50 L280,5 L300,55 L320,30 L340,30 L500,30 L520,30 L540,10 L560,50 L580,5 L600,55 L620,30 L640,30 L800,30 L820,30 L840,10 L860,50 L880,5 L900,55 L920,30 L940,30 L1100,30 L1120,30 L1140,10 L1160,50 L1180,5 L1200,55 L1220,30 L1240,30 L1440,30"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="1.5"
          className="ecg-animate"
        />
      </svg>
    </section>
  );
};

export default ProductCatalog;
