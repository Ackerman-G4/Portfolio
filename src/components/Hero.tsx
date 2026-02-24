import { ArrowRight } from 'lucide-react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { roles, socials } from '../data/portfolio-data';
import Reveal from './Reveal';

const Hero = () => {
  const typedText = useTypingEffect(roles);

  return (
    <section className="min-h-[92vh] flex items-center px-5 lg:px-8 pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 dark:opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#006039]/3 dark:from-emerald-900/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-8 items-center relative z-10">
        {/* Left col (3/5) */}
        <div className="lg:col-span-3 space-y-5">
          <Reveal className="reveal">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-[#D4AF37] rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37] flex items-center gap-1">
                {typedText}<span className="typing-cursor" />
              </span>
            </div>
          </Reveal>

          <Reveal className="reveal" delay={100}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-tight">
              <span className="text-[#006039] dark:text-emerald-400">EMMAN ROMEL</span>
              <br />
              <span className="text-gray-900 dark:text-white">ANGELES</span>
            </h1>
          </Reveal>

          <Reveal className="reveal" delay={200}>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-lg">
              BSIT student at STI College Ortigas-Cainta with a strong focus on front-end
              development and UI/UX design. Experienced in React, TailwindCSS, C#, MySQL,
              and Firebase, with a growing understanding of back-end systems. Passionate
              about crafting clean, intuitive interfaces that deliver seamless user
              experiences.
            </p>
          </Reveal>

          <Reveal className="reveal" delay={300}>
            <div className="flex items-center gap-4 pt-1 flex-wrap">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-[#006039] text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-[#004d2d] hover:shadow-lg transition-all duration-300"
              >
                View Projects
                <ArrowRight size={15} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-wider hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all duration-300"
              >
                Get in Touch
              </a>
              <div className="flex items-center gap-2 ml-1">
                {socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-9 h-9 rounded-lg bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#006039] dark:hover:text-emerald-400 hover:border-[#006039] dark:hover:border-emerald-400 hover:shadow-md transition-all duration-300 social-stagger-${i}`}
                  >
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right col (2/5) — Stats panel */}
        <Reveal className="reveal-right lg:col-span-2" delay={200}>
          <div className="glass-panel rounded-2xl p-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#006039]/5 dark:bg-emerald-500/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#006039] dark:text-emerald-400">2+</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mt-1">Projects Built</p>
              </div>
              <div className="bg-[#D4AF37]/10 dark:bg-amber-500/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#D4AF37]">5+</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mt-1">Technologies</p>
              </div>
              <div className="bg-gray-900/5 dark:bg-white/5 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">SAP</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mt-1">Certified</p>
              </div>
              <div className="bg-[#006039]/5 dark:bg-emerald-500/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold text-[#006039] dark:text-emerald-400">7</p>
                <p className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mt-1">Medals Won</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'TailwindCSS', 'TypeScript', 'C#', 'MySQL', 'Firebase'].map(t => (
                <span
                  key={t}
                  className="text-[10px] font-semibold uppercase tracking-[1.5px] px-3 py-1.5 rounded-md bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-gray-600 dark:text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
