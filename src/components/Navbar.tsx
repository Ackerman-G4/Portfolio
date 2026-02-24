import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { navLinks } from '../data/portfolio-data';

const Navbar = () => {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl shadow-[0_1px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-0.5 group">
          <span className="text-xl font-extrabold tracking-tight text-[#006039] dark:text-emerald-400">E</span>
          <span className="w-0.5 h-5 bg-[#D4AF37] rounded-full mx-0.5 group-hover:h-6 transition-all duration-300" />
          <span className="text-xl font-extrabold tracking-tight text-gray-900 dark:text-white">A</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              className={`nav-link text-[11px] font-semibold uppercase tracking-[2px] transition-colors duration-300 ${
                activeSection === l.href.slice(1)
                  ? 'text-[#006039] dark:text-emerald-400 active'
                  : 'text-gray-500 dark:text-gray-400 hover:text-[#006039] dark:hover:text-emerald-400'
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-[#D4AF37] transition-colors duration-300"
          >
            {dark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a
            href="#contact"
            className="text-[11px] font-semibold uppercase tracking-[2px] px-5 py-2 rounded-lg bg-[#006039] text-white hover:bg-[#004d2d] transition-colors duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`absolute block w-5 h-0.5 bg-gray-800 dark:bg-white transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 px-5 py-4 flex flex-col gap-3">
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-semibold uppercase tracking-[2px] text-gray-600 dark:text-gray-300 hover:text-[#006039] dark:hover:text-emerald-400 transition-colors duration-300 nav-stagger-${i}`}
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
