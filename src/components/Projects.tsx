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
          <Reveal key={proj.title} className="reveal-scale" delay={i * 80}>
            <div className="card-shine group glass-panel rounded-2xl p-6 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
              {(() => {
                const openLink = proj.liveLink ?? proj.link;
                return (
                  <>
              <div className="mb-5 overflow-hidden rounded-xl border border-gray-200/70 dark:border-white/10">
                <img
                  src={proj.previewImage}
                  alt={proj.previewAlt}
                  className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#D4AF37]">
                    {proj.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 group-hover:text-[#006039] dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {proj.title}
                  </h3>
                </div>
                {proj.hasGithub && (
                  <a
                    href={openLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${proj.title} project link`}
                    title={`Open ${proj.title}`}
                    className="btn-icon w-9 h-9 rounded-lg border border-gray-200 dark:border-white/10 flex items-center justify-center hover:border-[#D4AF37] shrink-0 ml-4"
                  >
                    <ExternalLink size={13} className="text-gray-400 group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </a>
                )}
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
                {proj.objectives.slice(0, 3).map((obj, j) => (
                  <div key={j} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                    <span className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{obj}</span>
                  </div>
                ))}
              </div>

              {proj.hasGithub && (
                <a
                  href={openLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#006039] dark:bg-emerald-600 text-white text-xs font-bold uppercase tracking-[1.5px] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] shadow-sm"
                >
                  {proj.liveLink ? <ExternalLink size={14} /> : <Github size={14} />}
                  <span>{proj.liveLink ? 'View Live Site' : 'View on GitHub'}</span>
                </a>
              )}
                  </>
                );
              })()}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
