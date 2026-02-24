import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio-data';
import Reveal from './Reveal';

const Projects = () => (
  <section id="projects" className="py-16 px-5 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Work</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006039] dark:text-emerald-400 mb-10 leading-tight">
          Featured Projects
        </h2>
      </Reveal>

      <div className="grid lg:grid-cols-2 gap-5">
        {projects.map((proj, i) => (
          <Reveal key={i} className="reveal-scale" delay={i === 1 ? 150 : 0}>
            <div className="card-shine group glass-panel rounded-2xl p-6 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#D4AF37]">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[#006039] dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {proj.title}
                  </h3>
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:rotate-12 transition-all duration-400 shrink-0 ml-4"
                >
                  <ExternalLink size={13} className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" />
                </a>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map(t => (
                  <span
                    key={t}
                    className="text-[10px] font-semibold uppercase tracking-[1.5px] px-3 py-1 rounded-md bg-[#006039]/5 dark:bg-emerald-500/10 text-[#006039] dark:text-emerald-400 group-hover:bg-[#006039]/10 transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="space-y-2 mb-5">
                {proj.objectives.map((obj, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#006039] dark:bg-emerald-600 text-white text-xs font-semibold uppercase tracking-[1.5px] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] hover:scale-105 transition-all duration-300 shadow-sm"
              >
                <Github size={14} />
                <span>View on GitHub</span>
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
