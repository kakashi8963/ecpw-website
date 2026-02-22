import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="footer" className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[#030308]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img src="/logo.png" alt="ECPW Logo" className="h-9 w-9 rounded-lg object-contain" />
            <div>
              <span className="font-heading font-bold text-sm text-white tracking-tight">
                Eastern Chemical<span className="text-cyan-400">.</span>
              </span>
              <div className="text-[10px] text-slate-600">& Pharmaceutical Works</div>
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-slate-600 text-xs">
              Advancing Healthcare Through Science & Precision
            </p>
          </div>

          {/* Right */}
          <div className="text-right">
            <p className="text-slate-600 text-xs" data-testid="footer-copyright">
              &copy; {currentYear} Eastern Chemical & Pharmaceutical Works. All rights reserved.
            </p>
            <p className="text-slate-700 text-[10px] mt-1">
              saahECG & vistaECG are technologies developed by PhysioSign.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
