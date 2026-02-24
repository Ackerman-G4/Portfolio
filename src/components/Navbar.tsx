import { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Droplets, ChevronDown } from 'lucide-react';
import { useTheme, type ThemeMode } from '../context/ThemeContext';
import { navLinks } from '../data/portfolio-data';

const themeOptions: { value: ThemeMode; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark',  label: 'Dark',  icon: Moon },
  { value: 'glass', label: 'Glass', icon: Droplets },
];

const Navbar = () => {
  const { mode, setMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const current = themeOptions.find(t => t.value === mode)!;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = ['contact', 'projects', 'skills', 'about'];
      let found = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 180 >= el.offsetTop) { found = id; break; }
      }
      setActiveSection(window.scrollY < 180 ? '' : found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        desktopDropdownRef.current?.contains(target) ||
        mobileDropdownRef.current?.contains(target)
      ) return;
      setThemeOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSetMode = (m: ThemeMode) => {
    setMode(m);
    setThemeOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'nav-scrolled backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-lg border-2 border-[#006039] dark:border-emerald-400 flex items-center justify-center overflow-hidden group-hover:border-[#D4AF37] transition-colors duration-300">
            <span className="text-sm font-black tracking-tighter text-[#006039] dark:text-emerald-400 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>EA</span>
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#D4AF37]" />
          </div>
          <div className="hidden sm:flex flex-col -space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-gray-900 dark:text-white">Emman</span>
            <span className="text-[9px] font-medium uppercase tracking-[3px] text-gray-400 dark:text-gray-500">Angeles</span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`nav-link text-[11px] font-semibold uppercase tracking-[2px] transition-colors duration-300 ${
                activeSection === l.href.slice(1)
                  ? 'text-[#006039] dark:text-emerald-400 glass-text-green active'
                  : 'text-gray-500 dark:text-gray-400 glass-text-secondary hover:text-[#006039] dark:hover:text-emerald-400'
              }`}
            >
              {l.label}
            </a>
          ))}

          {/* Theme dropdown — desktop */}
          <div ref={desktopDropdownRef} className="relative">
            <button
              aria-label="Change theme"
              onClick={() => setThemeOpen(o => !o)}
              className="btn-outline flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-white/10 glass-bg-control text-gray-600 dark:text-gray-300 glass-text-secondary hover:text-[#D4AF37] text-[11px] font-bold uppercase tracking-[1.5px]"
            >
              <current.icon size={14} />
              <span className="hidden lg:inline">{current.label}</span>
              <ChevronDown size={12} className={`transition-transform duration-200 ${themeOpen ? 'rotate-180' : ''}`} />
            </button>
            {themeOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 rounded-xl theme-dropdown-panel shadow-xl overflow-hidden animate-dropdown">
                {themeOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleSetMode(opt.value)}
                    className={`theme-option w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors duration-200 ${
                      mode === opt.value
                        ? 'text-[#006039] dark:text-emerald-400 bg-[#006039]/5 dark:bg-emerald-400/10'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <opt.icon size={14} />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="btn-primary text-[11px] font-bold uppercase tracking-[2px] px-5 py-2 rounded-lg bg-[#006039] text-white"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme dropdown — mobile */}
          <div ref={mobileDropdownRef} className="relative">
            <button
              aria-label="Change theme"
              onClick={() => setThemeOpen(o => !o)}
              className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 glass-bg-control flex items-center justify-center text-gray-600 dark:text-gray-300 glass-text-secondary"
            >
              <current.icon size={14} />
            </button>
            {themeOpen && (
              <div className="absolute right-0 top-full mt-2 w-36 rounded-xl theme-dropdown-panel shadow-xl overflow-hidden animate-dropdown">
                {themeOptions.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => handleSetMode(opt.value)}
                    className={`theme-option w-full flex items-center gap-2.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[1.5px] transition-colors duration-200 ${
                      mode === opt.value
                        ? 'text-[#006039] dark:text-emerald-400 bg-[#006039]/5 dark:bg-emerald-400/10'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <opt.icon size={14} />
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white glass-bg-bar transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white glass-bg-bar transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white glass-bg-bar transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mobile-menu-bg backdrop-blur-xl border-t border-gray-100 dark:border-white/10 px-5 py-4 flex flex-col gap-3">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-[2px] text-gray-600 dark:text-gray-300 glass-text-secondary hover:text-[#006039] dark:hover:text-emerald-400 transition-colors duration-300 nav-stagger-${i}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
