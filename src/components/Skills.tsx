import { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { skills } from '../data/portfolio-data';
import Reveal from './Reveal';

/* ── Animated SVG progress circle ── */
const ProgressCircle = ({ percent, label, size = 44 }: { percent: number; label: string; size?: number }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const target = circ - (percent / 100) * circ;

  useEffect(() => {
    const el = wrapRef.current;
    const circle = circleRef.current;
    if (!el || !circle) return;
    circle.style.strokeDasharray = `${circ}`;
    circle.style.strokeDashoffset = `${circ}`;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => {
            circle.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
            circle.style.strokeDashoffset = `${target}`;
          }, 200);
          obs.unobserve(el);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [circ, target]);

  return (
    <div ref={wrapRef} className="flex items-center gap-3">
      <svg width={size} height={size} className="shrink-0 -rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={3} className="stroke-gray-200 dark:stroke-white/10" />
        <circle ref={circleRef} cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={3} strokeLinecap="round" className="stroke-[#D4AF37]" />
      </svg>
      <div className="flex-1 min-w-0">
        <span className="text-[13px] text-gray-600 dark:text-gray-300 block leading-tight">{label}</span>
        <span className="text-[10px] text-[#D4AF37] font-semibold">{percent}%</span>
      </div>
    </div>
  );
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
                {cat.showProgress
                  ? cat.items.map((item, j) => (
                      <ProgressCircle key={j} label={item.name} percent={item.percent ?? 50} />
                    ))
                  : cat.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <ChevronRight
                          size={11}
                          className={`text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 stagger-delay-${j}`}
                        />
                        <span className={`text-[13px] text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-400 stagger-delay-${j}`}>
                          {item.name}
                        </span>
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
