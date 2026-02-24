import { Award } from 'lucide-react';
import { sapModules } from '../data/portfolio-data';
import Reveal from './Reveal';

const Certifications = () => (
  <section id="certifications" className="py-16 px-5 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Certification</span>
        </div>
      </Reveal>

      <Reveal className="reveal-scale">
        <div className="relative bg-gray-950 dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-800 dark:border-gray-700 overflow-hidden">
          {/* Gradient top bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#D4AF37] via-[#006039] to-[#D4AF37]" />
          <div className="absolute inset-0 opacity-5 bg-dots-gold" />

          <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
            {/* Icon */}
            <div className="relative w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center pulse-ring mx-auto md:mx-0">
              <Award size={28} className="text-[#D4AF37]" />
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">SAP S/4HANA Certified Training</h3>
              <p className="text-white/50 text-xs uppercase tracking-[2px]">STI College Philippines — 2024</p>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed max-w-lg">
                Comprehensive training covering enterprise resource planning modules for
                real-world business process management and optimization.
              </p>
            </div>

            {/* Module badges */}
            <div className="flex flex-wrap justify-center md:justify-end gap-2">
              {sapModules.map((mod, i) => (
                <span
                  key={mod}
                  className={`text-[10px] font-semibold uppercase tracking-[1.5px] px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300 sap-stagger-${i}`}
                >
                  {mod}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Certifications;
