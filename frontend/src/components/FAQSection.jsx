import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Plus,
  Cpu,
  Monitor,
  ShieldCheck,
  Stethoscope,
  IndianRupee,
  Wrench,
} from 'lucide-react';

/* ─── FAQ Data ─── */
const faqCategories = [
  {
    id: 'technology',
    label: 'About the Technology',
    icon: Cpu,
    color: 'cyan',
    items: [
      {
        q: 'What is saahECG technology?',
        tag: 'Technology',
        a: 'saahECG (SAN–Atrial–AVN–His Electrocardiogram) is a groundbreaking non-invasive cardiac diagnostic technology developed by PhysioSign Laboratory, USA. Using a proprietary Adaptive Mixture Technology (AMT), it separates the heart\'s electrical signal into up to 32 distinct waveforms — each covering only 4.7 Hz of bandwidth — to capture signals from every part of the cardiac conduction system: the Sinoatrial Node, Atrium, AV Node, His Bundle, Bundle Branches, and Purkinje fibres. All of this is achieved in a single 12-second test using the same electrode placement as a standard ECG.',
      },
      {
        q: 'How does saahECG differ from a conventional ECG?',
        tag: 'Technology',
        a: 'A conventional 12-lead ECG captures only aggregate surface signals — primarily from the epicardium — missing up to 83% of critical cardiac events. It detects Acute MI (AMI) at only 50% and Acute Coronary Syndrome (ACS) at 0%. saahECG operates at the ionic signal level (10²² ion levels vs. 10⁸ for conventional ECG), scanning 10 myocardial layers from endocardium to epicardium at 12,000 data points per second. It auto-measures 2,700+ parameters per test including PA, AH, and HV intervals — data that previously required invasive intracardiac catheterisation. Detection rates: CAD 93%, AMI 95%, Heart Failure 75% — compared to 17%, 50%, and 0% on conventional ECG.',
      },
      {
        q: 'What cardiac conditions can saahECG detect?',
        tag: 'Clinical',
        a: null,
        list: [
          'Coronary Artery Disease before MI occurs (93% vs. 17%)',
          'Acute MI / ACS (95% vs. 50%)',
          'Early-stage Heart Failure (75% vs. 0%)',
          'Pre-onset AVNRT / AVRT (arrhythmias, even without active episodes)',
          'Hypertensive heart disease with plaque',
          'Diabetes with diffuse vascular obstruction',
          'COPD cardiac impact (85%)',
          'Stroke risk prediction (75%)',
          'Paroxysmal Atrial Fibrillation (during symptom-free intervals)',
          'Complete / partial AV block localisation (PA, AH, HV intervals)',
          'Non-ST elevation MI with mixed atrial disease',
        ],
        listIntro:
          'saahECG can detect a wide range of conditions that conventional ECG routinely misses:',
      },
      {
        q: 'What is the ChatEPS-iDx AI engine?',
        tag: 'Technology',
        a: "ChatEPS-iDx is saahECG's integrated artificial intelligence analysis system. Unlike traditional database-driven AI, it functions as a real-time, patient-specific intelligent system that automatically identifies, analyses, and reports all 2,700+ parameters per test — generating both qualitative and quantitative diagnostic output. It operates without dependency on cloud databases, working on a 1-on-1 basis for each patient. For every heartbeat, it measures over 25 parameters including Heart Rate, PR interval, PA interval, AH interval, HV interval, QRS duration, QT interval, and flags abnormalities requiring clinical follow-up.",
      },
    ],
  },
  {
    id: 'hardware',
    label: 'Device & Hardware',
    icon: Monitor,
    color: 'emerald',
    items: [
      {
        q: 'What hardware does saahECG use?',
        tag: 'Hardware',
        a: null,
        listIntro:
          'saahECG runs on the PhysioSign PHS-U10 Multi-channel Electrocardiograph — a portable, desktop, non-invasive medical device. Key specs:',
        list: [
          '10.4-inch colour LCD touchscreen (800×600 resolution)',
          'Standard 12-lead ECG configuration',
          'Sampling rate: 1,000–5,000 Hz (SAAH mode)',
          '28 GB solid-state internal storage (tens of thousands of records)',
          'Connectivity: USB, SD card, Wi-Fi, LAN, 3G',
          'Built-in rechargeable lithium-ion battery (11.1V, 2,200 mAh)',
          'Dimensions: 420 × 300 × 100 mm, ~4 kg',
          'Safety class: CF Type, Class I, Defibrillation Protected',
          'Operates on AC 100–240V, 50/60Hz',
        ],
        listFooter:
          'The device simultaneously records both conventional 12-lead ECG and saahECG in every test.',
      },
      {
        q: 'Does saahECG require special electrodes or consumables?',
        tag: 'Hardware',
        a: 'Yes. saahECG uses proprietary patented PhysioSign electrodes with a non-cytotoxic silver/silver chloride substrate, specifically engineered to capture ionic-level micro-signals that standard ECG electrodes cannot detect. These are the only electrodes validated for use with the saahECG system. The cost per test is approximately US$30-50 in electrode consumables — far lower than invasive EP (US$500-8000 per procedure). Use of non-recommended electrodes may compromise signal quality and diagnostic accuracy.',
      },
      {
        q: 'Who operates the saahECG device? Does it require special training?',
        tag: 'Hardware',
        a: "The saahECG device is intended for use by trained operators under the supervision of a licensed healthcare practitioner, in a hospital or medical professional's facility. Because electrode placement follows the standard 12-lead ECG configuration — identical to what any ECG technician already knows — no additional procedural training is required for the acquisition step. The ChatEPS-iDx AI handles all 2,700+ parameter measurements automatically, eliminating the need for specialist-level manual ECG reading. Initial device onboarding and training is provided by ECPW.",
      },
    ],
  },
  {
    id: 'certification',
    label: 'Certification & Validation',
    icon: ShieldCheck,
    color: 'amber',
    items: [
      {
        q: 'Is saahECG clinically validated?',
        tag: 'Regulatory',
        a: null,
        listIntro: 'Yes. saahECG has been validated in multiple published studies:',
        list: [
          'Foundational study (2016): 1,500 normal subjects + 110 invasive EP-controlled patients. ANOVA confirmed no statistically significant difference vs. invasive EP (P > 0.05). Published in the International Journal of Cardiology.',
          'Pig AMI model (2018): saahECG detected MI 12 seconds faster than conventional ECG. Published in Medical Science Monitor.',
          'Clinical case (2025): Non-invasive third-degree AV block diagnosis at a doctor\'s office. Published in the International Journal of Family & Community Medicine.',
          'Ongoing India trial: Active study under Dr. C.B. Meena at SMS Hospital, Jaipur.',
        ],
      },
      {
        q: 'What regulatory certifications does saahECG hold?',
        tag: 'Regulatory',
        a: null,
        list: [
          'CE MDR Certification (EU Regulation 2017/745) — Risk Class IIa, issued by Bureau Veritas Italia S.p.A. (Notified Body #1370). Certificate No. IT347897, valid until December 2030.',
          'CDSCO Manufacturing Licence (India) — Licence No. MFG/MD/2025/000262, issued to ECPW under India\'s Medical Devices Rules, 2017, for the SAAH ECG machine with ChatEPS as a Class B medical device.',
          '96 US & International Patents — covering hardware architecture, signal processing, frequency separation, electrode design, adaptive mixture technology, and AI diagnostic algorithms.',
          'Compliant with IEC 60601-1 and IEC 60601-1-2 electromagnetic compatibility standards.',
        ],
        listIntro:
          'The saahECG system carries the following certifications and approvals:',
      },
      {
        q: 'Are there peer-reviewed publications supporting saahECG?',
        tag: 'Research',
        a: null,
        listIntro: 'Yes. Key peer-reviewed publications include:',
        list: [
          'Chen G et al. Int J Cardiol. 2016;222:499–503 — foundational EPCG validation study.',
          'Zhao W et al. Med Sci Monit. 2018;24:1303–1309 — AMI detection in pig model.',
          'Ortigoza DV et al. Int J Fam Commun Med. 2025;9(6):154–156 — AV block at doctor\'s office.',
          'Chang Q et al. Anatol J Cardiol. 2017;18:110–114 — His bundle beat-by-beat detection.',
          'Liu R et al. Med Hypotheses. 2015;85(4):475–479 — novel microwave signal recording.',
        ],
        listFooter: 'For full publication list, visit our Research Publications page.',
      },
    ],
  },
  {
    id: 'clinical',
    label: 'Clinical Use & Integration',
    icon: Stethoscope,
    color: 'cyan',
    items: [
      {
        q: 'How does a saahECG test work, step by step?',
        tag: 'Clinical',
        a: null,
        listIntro:
          'The saahECG test is simple, painless, and non-invasive:',
        list: [
          'Patient arrives — no additional preparation beyond a standard ECG visit',
          'Electrodes are placed in the standard 12-lead configuration (same as conventional ECG)',
          'A 12-second automated test is performed — no X-ray, no catheter, no sedation',
          'The ChatEPS-iDx AI automatically measures 2,700+ parameters across every heartbeat',
          'A complete qualitative and quantitative diagnostic report is generated immediately',
          'Reports include the full saahECG trace, conventional 12-lead ECG, bsBHE (non-invasive Bundle of His electrogram), and a parameter data table',
        ],
        listFooter:
          'Results can be printed, exported as PDF to USB, or stored internally for pre/post-surgery comparison.',
        ordered: true,
      },
      {
        q: 'Can saahECG be used before and after cardiac surgery?',
        tag: 'Clinical',
        a: "Yes — this is one of saahECG's key clinical advantages over invasive electrophysiology. Invasive EP can only be performed during surgery; saahECG can be performed before surgery (baseline assessment, conduction system mapping, pre-RFA or pre-pacemaker evaluation), immediately after surgery (conduction restoration verification), and at any follow-up visit (stent restenosis, post-PCI prognosis, pacemaker function). The device can be used in any clinic or hospital room — no catheterisation lab or operating theatre is needed.",
      },
      {
        q: 'Can saahECG be used with patients who have pacemakers or defibrillators?',
        tag: 'Clinical',
        a: 'Yes. The PHS-U10 device is designed for use with patients who have implanted pacemakers or defibrillators. The device carries CF Type defibrillation protection and recovers normal function within 5 seconds after exposure to a defibrillation voltage. Always ensure that defibrillation electrodes do not contact saahECG electrodes during simultaneous use.',
      },
      {
        q: 'How is patient data stored and reported?',
        tag: 'Clinical',
        a: "The PHS-U10 has a 28 GB solid-state drive that can store tens of thousands of patient records. Each record includes patient information (name, ID, age, gender, height, weight), test date and time, all diagnostic parameter tables, saahECG waveform traces, conventional ECG traces, and AI-generated diagnostic suggestions. Reports can be exported as PDF files to USB drive or SD card, printed directly from the device, or accessed via Wi-Fi/LAN network connection. Patient records can be deleted, edited, or retrieved at any time through the device's touchscreen interface.",
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Access',
    icon: IndianRupee,
    color: 'emerald',
    items: [
      {
        q: 'How does saahECG compare in cost to invasive electrophysiology?',
        tag: 'Pricing',
        a: null,
        listIntro: 'saahECG offers a substantial economic advantage:',
        list: [
          'Device cost: US$130,000 - 140,000 vs. US$280,000 - 400,000 for an invasive EP system',
          'Consumable cost per test: US$30-50 vs. US$500-8000 for invasive EP',
          'No catheterisation lab infrastructure required',
          'A single device can perform 40–80+ tests per day (12 seconds each) vs. 2–4 invasive EP procedures per day',
          'No physician radiation exposure',
          'Minimal specialist training requirement',
        ],
        listFooter:
          'Contact ECPW for detailed pricing and procurement information for your institution.',
      },
      {
        q: 'How can our hospital get started with saahECG?',
        tag: 'Pricing',
        a: 'To procure or evaluate saahECG for your hospital or clinic, contact ECPW — the authorised Indian manufacturer and distributor of PhysioSign\'s saahECG technology:\n\nECPW — Eastern Chemical & Pharmaceutical Works\n12, Rajsarovar, Pal Road, Jodhpur, Rajasthan — 342001\nPhone: 9828013726\n\nECPW holds the CDSCO manufacturing licence (MFG/MD/2025/000262) for India. Our team will guide you through device demonstration, staff orientation, and clinical onboarding.',
      },
    ],
  },
  {
    id: 'safety',
    label: 'Safety & Maintenance',
    icon: Wrench,
    color: 'amber',
    items: [
      {
        q: 'What are the device maintenance requirements?',
        tag: 'Safety',
        a: null,
        listIntro:
          'The PHS-U10 requires routine maintenance to ensure performance and patient safety:',
        list: [
          'Scheduled maintenance at least every 6 months, with annual recalibration as required by regulatory standards',
          'Clean the LCD screen with a damp cloth and mild solution; clean patient cables with 75% alcohol',
          'Do not immerse device, cables, or battery in liquid',
          'Inspect patient cables regularly; replace if damaged or aged',
          'Battery should be replaced if operating time falls below 30 minutes',
          'Fuse model: T2AH, 250V — replace only with same specification',
          'All maintenance and repair must be performed by qualified personnel; do not open the device case without disconnecting from power.',
        ],
      },
      {
        q: 'What is the device warranty?',
        tag: 'Safety',
        a: "The PhysioSign PHS-U10 is warranted by ECPW against manufacturing and internal component defects for a period of one year from the date of purchase. This warranty is limited to defects arising under normal use and covers repair or replacement of defective internal parts. ECPW is not responsible for any damage resulting from improper handling, unauthorised modifications, misuse, or external factors such as water or fire. Consumable items, including electrodes and batteries, are not covered under this warranty. For any warranty claims, please contact ECPW or an authorised dealer.",
      },
    ],
  },
];

/* ─── Tag colour utility ─── */
const tagColors = {
  Technology: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  Clinical: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
  Hardware: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  Regulatory: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Research: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Pricing: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  Safety: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/20',
};

const categoryAccent = {
  cyan: { dot: 'bg-cyan-400', ring: 'ring-cyan-500/20', text: 'text-cyan-400' },
  emerald: { dot: 'bg-emerald-400', ring: 'ring-emerald-500/20', text: 'text-emerald-400' },
  amber: { dot: 'bg-amber-400', ring: 'ring-amber-500/20', text: 'text-amber-400' },
};

/* ─── Single FAQ Item ─── */
const FAQItem = ({ item, isOpen, onToggle, itemIndex }) => (
  <div
    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
      isOpen
        ? 'border-white/[0.12] bg-white/[0.03]'
        : 'border-white/[0.06] bg-transparent hover:border-white/[0.10] hover:bg-white/[0.02]'
    }`}
    data-testid={`faq-item-${itemIndex}`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start gap-3 px-5 py-4 text-left cursor-pointer group"
      aria-expanded={isOpen}
    >
      {/* Icon toggle */}
      <span
        className={`mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'border-cyan-500/40 bg-cyan-500/10 rotate-45'
            : 'border-white/10 bg-transparent group-hover:border-white/20'
        }`}
      >
        <Plus className={`w-3.5 h-3.5 transition-colors duration-300 ${isOpen ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
      </span>

      <span
        className={`text-sm lg:text-[15px] font-medium leading-relaxed transition-colors duration-300 ${
          isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
        }`}
      >
        {item.q}
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 pl-14">
            {/* Tag */}
            <span
              className={`inline-block text-[11px] font-medium px-2.5 py-0.5 rounded-full border mb-3 ${
                tagColors[item.tag] || tagColors.Technology
              }`}
            >
              {item.tag}
            </span>

            {/* Paragraph text */}
            {item.a && (
              <p className="text-[13.5px] text-slate-400 leading-[1.75] whitespace-pre-line">
                {item.a}
              </p>
            )}

            {/* List intro */}
            {item.listIntro && (
              <p className="text-[13.5px] text-slate-400 leading-[1.75] mb-2">
                {item.listIntro}
              </p>
            )}

            {/* List items */}
            {item.list && (
              <ul className={`space-y-1.5 mb-2 ${item.ordered ? 'list-decimal' : 'list-none'} pl-0`}>
                {item.list.map((li, i) => (
                  <li
                    key={i}
                    className="text-[13.5px] text-slate-400 leading-[1.75] flex items-start gap-2"
                  >
                    <span className="text-cyan-500/60 mt-[2px] flex-shrink-0">
                      {item.ordered ? '' : '•'}
                    </span>
                    <span>
                      {item.ordered && (
                        <span className="text-cyan-400/70 font-mono text-xs mr-1.5">
                          {i + 1}.
                        </span>
                      )}
                      {li}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* List footer */}
            {item.listFooter && (
              <p className="text-[13.5px] text-slate-400 leading-[1.75] mt-2">
                {item.listFooter}
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

/* ─── Category Section ─── */
const CategorySection = ({ category, globalIndex }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = category.icon;
  const accent = categoryAccent[category.color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="mb-10"
      data-testid={`faq-category-${category.id}`}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${accent.ring} ring-1`}
        >
          <Icon className={`w-4 h-4 ${accent.text}`} />
        </div>
        <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-500 font-medium">
          {category.label}
        </h3>
      </div>

      {/* Items */}
      <div className="space-y-2">
        {category.items.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            itemIndex={`${globalIndex}-${i}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

/* ─── Main FAQ Page ─── */
const FAQSection = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <section
      id="faqs"
      data-testid="faq-section"
      className="relative min-h-screen"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-500/[0.025] blur-[100px]" />

      {/* Hero / Header */}
      <div ref={heroRef} className="relative z-10 pt-28 lg:pt-36 pb-12 lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Breadcrumb */}
            <div className="inline-flex items-center gap-2 mb-6">
              <a
                href="/"
                className="text-xs text-slate-500 hover:text-cyan-400 transition-colors font-mono uppercase tracking-[0.15em]"
              >
                Home
              </a>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              <span className="text-xs text-cyan-400 font-mono uppercase tracking-[0.15em]">
                FAQs
              </span>
            </div>

            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              data-testid="faq-heading"
            >
              Frequently Asked{' '}
              <span className="text-cyan-400 glow-text">Questions</span>
            </h1>

            <p className="mt-5 text-slate-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about saahECG technology, device specifications, clinical
              use, certifications, and pricing.
            </p>

            {/* Quick stat badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                { value: '16', label: 'Questions answered' },
                { value: '6', label: 'Categories' },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.08] text-xs text-slate-300 font-medium"
                >
                  <span className="font-mono text-cyan-400 font-bold">{value}</span>
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Divider */}
      <div className="section-divider mx-auto max-w-4xl" />

      {/* FAQ Content */}
      <div className="relative z-10 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((cat, i) => (
            <CategorySection key={cat.id} category={cat} globalIndex={i} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 pb-24 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-2xl border border-white/[0.08] p-8 lg:p-10 text-center"
          >
            <h2 className="font-heading text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight">
              Still have questions?
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              Our team is ready to answer any specific queries about saahECG for your practice.
            </p>
            <a
              href="/#contact"
              data-testid="faq-cta-contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 glow-cyan"
            >
              Contact Us
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ECG Line SVG */}
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

export default FAQSection;
