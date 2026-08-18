import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CtaSectionProps {
  onOpenConsultation: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 sm:py-28 bg-brand-dark text-white relative overflow-hidden text-left">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none roof-shingle-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-brand-accent text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Инженерное сопровождение объекта
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-tight">
            Подберём черепицу <br />
            <span className="text-brand-accent font-normal">под архитектуру вашего дома</span>
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto font-normal leading-relaxed">
            Поможем выбрать коллекцию, цвет и оптимальное решение для вашей кровли. Предоставим физические образцы черепицы в Астане и выполним точный 3D-расчёт скатов.
          </p>

          {/* Key Free Inclusions */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 pt-2">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Бесплатный выезд с каталогом и образцами
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Точный расчёт без переплат за излишки
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Официальный гарантийный сертификат
            </span>
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-md bg-white text-brand-dark hover:bg-brand-accent hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-elevated flex items-center gap-2"
            >
              <span>Получить консультацию</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-md bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300"
            >
              Написать в WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
