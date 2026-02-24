import { useRef, useEffect } from 'react';
import { BookOpen } from 'lucide-react';
import { learningItems } from '../data/portfolio-data';
import Reveal from './Reveal';

/* ── Animated progress bar ── */
const ProgressBar = ({ percent }: { percent: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    const bar = barRef.current;
    if (!el || !bar) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          requestAnimationFrame(() => {
            bar.style.width = `${percent}%`;
          });
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [percent]);

  return (
    <div ref={wrapRef} className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
      <div
        ref={barRef}
        className="h-full rounded-full bg-linear-to-r from-[#006039] to-[#D4AF37] w-0 transition-[width] duration-1000 ease-out"
      />
    </div>
  );
};

/* ── Learning & Growth Section ── */
const LearningGrowth = () => (
  <section className="py-16 px-5 lg:px-8 bg-gray-50 dark:bg-gray-900/30">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Growth</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#006039] dark:text-emerald-400 mb-10 leading-tight">
          Learning &amp; Growth
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-5">
        {learningItems.map((item, i) => (
          <Reveal key={i} className="reveal-scale" delay={i === 1 ? 100 : i === 2 ? 200 : 0}>
            <div className="glass-panel rounded-2xl p-6 group hover:border-[#D4AF37]/30 hover:shadow-md transition-all duration-400">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#006039]/10 dark:bg-emerald-500/10 flex items-center justify-center">
                  <BookOpen size={18} className="text-[#006039] dark:text-emerald-400" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-[1.5px]">{item.title}</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] uppercase tracking-[1.5px] text-gray-400 font-semibold">Progress</span>
                <span className="text-[10px] font-bold text-[#D4AF37]">{item.progress}%</span>
              </div>
              <ProgressBar percent={item.progress} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default LearningGrowth;
