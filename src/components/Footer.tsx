import { navLinks, socials } from '../data/portfolio-data';

const Footer = () => (
  <footer className="relative bg-gray-950 py-10 px-5 lg:px-8 overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 bg-grid-footer opacity-[0.04]" />
    <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-0.5 mb-3">
            <span className="text-xl font-extrabold text-emerald-400">E</span>
            <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full mx-0.5" />
            <span className="text-xl font-extrabold text-white">A</span>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
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
                className="text-xs text-gray-500 hover:text-white transition-colors duration-300"
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
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
              >
                <s.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-[10px] text-gray-600">&copy; 2026 Emman Romel C Angeles. All rights reserved.</span>
        <span className="text-[10px] text-gray-600">Built with React &amp; TailwindCSS</span>
      </div>
    </div>
  </footer>
);

export default Footer;
