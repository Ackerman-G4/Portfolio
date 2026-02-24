import { Trophy, Award } from 'lucide-react';
import Reveal from './Reveal';

const medals = [
  { type: 'Gold', count: 4, bg: 'bg-amber-500/10 dark:bg-amber-500/15', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-500/20', glow: 'stat-glow-gold' },
  { type: 'Silver', count: 2, bg: 'bg-gray-400/10 dark:bg-gray-400/15', text: 'text-gray-500 dark:text-gray-300', border: 'border-gray-400/20', glow: 'stat-glow-neutral' },
  { type: 'Bronze', count: 1, bg: 'bg-orange-600/10 dark:bg-orange-500/15', text: 'text-orange-700 dark:text-orange-400', border: 'border-orange-600/20', glow: 'stat-glow-gold' },
];

const Achievements = () => (
  <section className="py-16 px-5 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Achievements</span>
        </div>
      </Reveal>

      <Reveal className="reveal-scale">
        <div className="glass-panel rounded-2xl p-6 md:p-8 border-l-4 border-l-[#D4AF37]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center medal-shimmer">
              <Trophy size={22} className="text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Taekwondo</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Competitive Martial Arts</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {medals.map((m, i) => (
              <Reveal key={m.type} className="reveal-scale" delay={i * 150}>
                <div className={`medal-card ${m.glow} ${m.bg} rounded-xl p-4 text-center border ${m.border}`}>
                  <div className={`medal-float ${i > 0 ? `medal-float-delay-${i}` : ''}`}>
                    <Award size={20} className={`medal-icon ${m.text} mx-auto mb-2`} />
                  </div>
                  <p className={`text-2xl font-extrabold ${m.text}`}>{m.count}×</p>
                  <p className="text-[10px] uppercase tracking-[2px] text-gray-500 dark:text-gray-400 mt-1">{m.type}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default Achievements;
