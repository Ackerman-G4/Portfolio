import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { aboutParagraphs, education } from '../data/portfolio-data';
import Reveal from './Reveal';

const About = () => (
  <section id="about" className="py-16 px-5 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Background</span>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* About panel (3/5) */}
        <Reveal className="reveal-left lg:col-span-3">
          <div className="glass-panel rounded-2xl p-7 h-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#006039] dark:text-emerald-400 mb-4 leading-tight">
              Foundation &amp; Growth
            </h2>
            <div className="space-y-4 mb-5">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              {['Front-End Development', 'UI/UX Design', 'Product Thinking', 'Continuous Learning'].map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold uppercase tracking-[1.5px] px-4 py-2 rounded-lg bg-[#006039]/5 dark:bg-emerald-500/10 text-[#006039] dark:text-emerald-400 border border-[#006039]/10 dark:border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Education panel (2/5) */}
        <div className="lg:col-span-2 space-y-4">
          {education.map((edu, i) => (
            <Reveal key={i} className="reveal" delay={i === 0 ? 100 : 200}>
              <div className="card-shine glass-panel rounded-2xl p-5 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-400 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#006039]/10 dark:bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <GraduationCap size={16} className="text-[#006039] dark:text-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#006039] dark:group-hover:text-emerald-400 transition-colors duration-300 truncate">
                      {edu.school}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[10px] text-[#D4AF37] uppercase tracking-[1.5px] font-semibold">
                      <Calendar size={10} />
                      {edu.period}
                    </div>
                  </div>
                </div>
                <p className="text-xs font-semibold text-[#006039] dark:text-emerald-400 mb-1">{edu.degree}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{edu.details}</p>
                {edu.address && (
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-400">
                    <MapPin size={10} />
                    <span>{edu.address}</span>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
