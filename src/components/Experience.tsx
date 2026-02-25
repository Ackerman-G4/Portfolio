import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio-data';
import Reveal from './Reveal';

const Experience = () => (
  <section id="experience" className="py-16 px-5 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Experience</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006039] dark:text-emerald-400 mb-10 leading-tight">
          Work & Academic Practice
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5">
        {experiences.map((item, index) => (
          <Reveal key={item.role} className="reveal-scale" delay={index * 100}>
            <article className="glass-panel rounded-2xl p-6 card-shine hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{item.role}</h3>
                  <p className="text-sm text-[#006039] dark:text-emerald-400 font-semibold mt-1">{item.company}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-[#006039]/10 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Briefcase size={16} className="text-[#006039] dark:text-emerald-400" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-[#D4AF37] uppercase tracking-[1.5px] font-semibold mb-4">
                <Calendar size={10} />
                {item.period}
              </div>

              <div className="space-y-2">
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
