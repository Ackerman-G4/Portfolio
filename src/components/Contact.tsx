import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { socials, companyAddress } from '../data/portfolio-data';
import Reveal from './Reveal';

const Contact = () => (
  <section id="contact" className="py-16 px-5 lg:px-8 section-bg-alt">
    <div className="max-w-6xl mx-auto">
      <Reveal className="reveal">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-0.5 bg-[#D4AF37] rounded-full" />
          <span className="text-xs font-semibold uppercase tracking-[3px] text-[#D4AF37]">Connect</span>
        </div>
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Left (3/5) — Contact info */}
        <Reveal className="reveal-left lg:col-span-3">
          <div className="glass-panel rounded-2xl p-7 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
                <span className="text-[#006039] dark:text-emerald-400">Let&apos;s Collaborate</span>{' '}
                <span className="text-gray-900 dark:text-white">Today</span>
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 max-w-md">
                I&apos;m open to internship opportunities, freelance work, and collaborative
                projects. Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'emmanangeles.04@gmail.com',
                  href: 'mailto:emmanangeles.04@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Emman%2C%0A%0A',
                },
                { icon: Phone, label: 'Phone', value: '+63 920 551 5499', href: 'tel:+639205515499' },
                { icon: MapPin, label: 'Company', value: companyAddress, href: null as string | null },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className={`flex items-center gap-4 group/c social-stagger-${i}`}>
                    <div className="w-10 h-10 rounded-lg bg-[#006039]/5 dark:bg-emerald-500/10 border border-[#006039]/10 dark:border-emerald-500/20 flex items-center justify-center shrink-0 group-hover/c:bg-[#006039]/10 dark:group-hover/c:bg-emerald-500/20 transition-colors duration-300">
                      <Icon size={16} className="text-[#006039] dark:text-emerald-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[1.5px] text-gray-400 font-semibold">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-[#006039] dark:hover:text-emerald-400 transition-colors duration-300 break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200 leading-snug block">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Right (2/5) — Map + Socials */}
        <div className="lg:col-span-2 space-y-5">
          {/* Map */}
          <Reveal className="reveal-right" delay={100}>
            <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-sm">
              <iframe
                title="Office Location"
                src="https://maps.google.com/maps?q=Roblou+Town+Center+A+Bonifacio+Ave+Cainta+Rizal&t=&z=16&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                className="w-full h-48 border-0"
              />
            </div>
          </Reveal>

          {/* Socials card */}
          <Reveal className="reveal-right" delay={200}>
            <div className="bg-[#006039] dark:bg-emerald-900 rounded-2xl p-5 shadow-sm">
              <h3 className="text-base font-bold text-white mb-3">Follow Me</h3>
              <div className="space-y-2.5">
                {socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-social-row flex items-center gap-3 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/40 group/s social-stagger-${i}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover/s:bg-[#D4AF37]/20 transition-colors duration-300">
                      <s.icon size={14} className="text-white group-hover/s:text-[#D4AF37] transition-colors duration-300" />
                    </div>
                    <span className="text-sm font-semibold text-white">{s.label}</span>
                    <ArrowRight size={12} className="ml-auto text-white/20 group-hover/s:text-[#D4AF37] group-hover/s:translate-x-1 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
