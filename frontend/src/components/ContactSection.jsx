import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', phone: '', organization: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.details || data.error || 'Request failed');
      }
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', organization: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setErrorMessage(err.message || 'Unable to send message right now.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.2em]">Get In Touch</span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-4 tracking-tight" data-testid="contact-heading">
            Ready to <span className="text-cyan-400">Transform</span> Your Practice?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-base lg:text-lg">
            Schedule a demonstration and discover how saahECG can revolutionize cardiac diagnostics in your facility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-xl p-6 space-y-6">
              <h3 className="text-white font-semibold text-lg font-heading">ECPW</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach out to learn how we can bring advanced cardiac diagnostics to your institution.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3" data-testid="contact-info-location">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Location</div>
                    <div className="text-slate-500 text-xs mt-0.5">Delhi, India</div>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-info-email">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Email</div>
                    <div className="text-slate-500 text-xs mt-0.5">info@ecpw.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-testid="contact-info-phone">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">Phone</div>
                    <div className="text-slate-500 text-xs mt-0.5">+91 9828013726</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick fact */}
            <div className="glass rounded-xl p-5 border-cyan-500/10">
              <div className="font-mono text-3xl font-bold text-cyan-400 mb-1">98%</div>
              <div className="text-white text-sm font-medium">AMI Detection Rate</div>
              <div className="text-slate-500 text-xs mt-1">vs ~50% with traditional ECG. saahECG dramatically improves early detection of critical cardiac conditions.</div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-6 lg:p-8 space-y-5" data-testid="contact-form">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    data-testid="contact-input-name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    data-testid="contact-input-email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                    placeholder="doctor@hospital.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    data-testid="contact-input-phone"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 font-medium mb-1.5 block">Organization</label>
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => setForm({ ...form, organization: e.target.value })}
                    data-testid="contact-input-org"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                    placeholder="Hospital / Clinic name"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-400 font-medium mb-1.5 block">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  data-testid="contact-input-message"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                  placeholder="I'm interested in scheduling a demo of the saahECG system..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                data-testid="contact-submit-button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 glow-cyan disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'sent' ? (
                  'Message Sent!'
                ) : status === 'error' ? (
                  'Error - Try Again'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
              {status === 'error' && errorMessage ? (
                <p className="text-rose-400 text-xs mt-3 max-w-xl" data-testid="contact-submit-error">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
