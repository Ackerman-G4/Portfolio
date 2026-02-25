import { navLinks, socials } from '../data/portfolio-data';

const Footer = () => (
  <footer className="relative footer-bg py-10 px-5 lg:px-8 overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 bg-grid-footer opacity-[0.04]" />
    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative w-9 h-9 rounded-lg border-2 border-[#006039] dark:border-emerald-400 flex items-center justify-center overflow-hidden">
              <span className="text-sm font-black tracking-tighter text-[#006039] dark:text-emerald-400">EA</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-[#D4AF37]" />
            </div>
            <div className="flex flex-col -space-y-0.5">
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-gray-900 dark:text-white">Emman</span>
              <span className="text-[9px] font-medium uppercase tracking-[3px] text-gray-400 dark:text-gray-500">Angeles</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed max-w-xs">
            Junior front-end developer focused on creating clean, professional
            interfaces with modern web technologies.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[2px] text-[#D4AF37] font-semibold mb-3">Navigation</h4>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-gray-500 dark:text-gray-500 hover:text-[#006039] dark:hover:text-white transition-colors duration-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[2px] text-[#D4AF37] font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-2">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="btn-footer-icon w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37]/30"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[10px] text-gray-500 dark:text-gray-600">&copy; 2026 Emman Romel C Angeles. All rights reserved.</span>
        <span className="text-[10px] text-gray-500 dark:text-gray-600">Built with React &amp; TailwindCSS</span>
      </div>
    </div>
  </footer>
);

export default Footer;
