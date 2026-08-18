import React from 'react';
import { ShieldCheck, Award, Sparkles, Wind, VolumeX, ThermometerSnowflake } from 'lucide-react';
import { ADVANTAGES } from '../data/company';

export const Advantages: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'sbs':
        return <ThermometerSnowflake className="w-5 h-5 text-brand-accent" />;
      case 'granulate':
        return <Sparkles className="w-5 h-5 text-brand-accent" />;
      case 'acoustic':
        return <VolumeX className="w-5 h-5 text-brand-accent" />;
      case 'lifetime':
        return <Award className="w-5 h-5 text-brand-accent" />;
      case 'climate':
        return <Wind className="w-5 h-5 text-brand-accent" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="advantages" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/[0.04] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] text-brand-dark text-xs font-bold tracking-widest uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
            Надежность и технологии
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-dark tracking-tight leading-tight">
            Преимущества мягкой кровли RUFLEX
          </h2>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            Инженерные решения и стандарты ISO 9001, созданные специально для сурового резкоконтинентального климата Казахстана с перепадами температур от -50°C зимой до +45°C летом.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-black/[0.06] hover:border-black/20 transition-all duration-300 shadow-sm hover:shadow-soft flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-black/[0.04] flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-2xl font-bold font-display text-gray-300 group-hover:text-brand-accent transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-brand-dark">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.04]">
                <p className="text-[11px] text-brand-muted/80 leading-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
