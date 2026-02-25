import { ChevronRight } from 'lucide-react';
import { skills } from '../data/portfolio-data';
import Reveal from './Reveal';

const levelClass = {
  'Daily Use': 'bg-[#006039]/10 dark:bg-emerald-500/15 text-[#006039] dark:text-emerald-400',
  Familiar: 'bg-[#D4AF37]/10 text-[#D4AF37]',
  Learning: 'bg-gray-200 dark:bg-white/10 text-gray-600 dark:text-gray-300',
};

/* ── Skills Section ── */
const Skills = () => (
  <section id="skills" className="py-16 px-5 lg:px-8 section-bg-alt relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] bg-grid-gold" />
    <div className="max-w-6xl mx-auto relative z-10">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Expertise</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006039] dark:text-white section-alt-heading mb-10 leading-tight">Technical Proficiencies</h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {skills.map((cat, i) => (
          <Reveal key={i} className="reveal-scale" delay={i === 1 ? 100 : i === 2 ? 200 : 0}>
            <div className="group glass-panel rounded-2xl p-6 hover:border-[#D4AF37]/40 transition-all duration-500">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-400">
                  <cat.icon size={18} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-[1.5px]">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2.5 justify-between">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <ChevronRight
                        size={11}
                        className={`text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 stagger-delay-${j}`}
                      />
                      <span className={`text-[13px] text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-400 stagger-delay-${j}`}>
                        {item.name}
                      </span>
                    </div>
                    {item.level && (
                      <span className={`text-[10px] font-semibold uppercase tracking-[1.3px] px-2.5 py-1 rounded-md ${levelClass[item.level]}`}>
                        {item.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
