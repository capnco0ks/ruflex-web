import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Palette, Award, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCatalog: () => void;
  onExploreVisualizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenConsultation,
  onExploreCatalog,
}) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#F5F5F7] via-[#FAFAFA] to-white">
      {/* Background Architectural Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] roof-shingle-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Minimal Sub-tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-black text-xs font-bold tracking-wider uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              Официальный дистрибьютор RUFLEX в Астане
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-black tracking-tight leading-[1.08]">
                Гибкая черепица <br />
                <span className="text-gray-700 font-normal">для современной кровли</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 max-w-xl font-normal leading-relaxed">
                Премиальные кровельные материалы в Астане с официальной заводской гарантией до 50 лет. СБС-модифицированный битум, базальтовая керамика и идеальная защита дома в климате Казахстана.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreCatalog}
                className="px-7 py-4 rounded-md bg-black text-white text-xs sm:text-sm font-bold tracking-wider uppercase hover:bg-brand-accent transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 group"
              >
                <span>Смотреть каталог</span>
                <ArrowDown className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-6 py-4 rounded-md bg-white border border-gray-300 text-black text-xs sm:text-sm font-bold tracking-wider uppercase hover:border-black hover:bg-gray-50 transition-all duration-300 flex items-center gap-2 shadow-sm"
              >
                <PhoneCall className="w-4 h-4 text-brand-accent" />
                <span>Получить консультацию</span>
              </button>
            </motion.div>

            {/* Trust Indicators Pill Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="pt-6 border-t border-black/[0.08] grid grid-cols-3 gap-4 sm:gap-6"
            >
              <div className="space-y-0.5">
                <span className="text-xl sm:text-2xl font-bold font-display text-black block">
                  {COMPANY_INFO.experienceYears}+ лет
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 block leading-tight font-medium">
                  опыта поставок в РК
                </span>
              </div>

              <div className="space-y-0.5 border-l border-black/[0.08] pl-4 sm:pl-6">
                <span className="text-xl sm:text-2xl font-bold font-display text-black block">
                  1 500+
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 block leading-tight font-medium">
                  объектов в Казахстане
                </span>
              </div>

              <div className="space-y-0.5 border-l border-black/[0.08] pl-4 sm:pl-6">
                <span className="text-xl sm:text-2xl font-bold font-display text-brand-accent block">
                  Пожизненная
                </span>
                <span className="text-[11px] sm:text-xs text-gray-600 block leading-tight font-medium">
                  гарантия RUFLEX
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Architectural Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-elevated bg-gray-900 border border-black/10 group"
            >
              <img
                src="/assets/products/runa-baltika.jpg"
                alt="Современный коттедж с гибкой черепицей RUFLEX Runa"
                className="w-full h-[460px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Floating Architectural Badge */}
              <div className="absolute top-4 right-4 px-3.5 py-1.5 rounded-md glass-dark text-white text-[11px] font-medium tracking-wide flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-accent" />
                <span>Премиум-класс</span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-brand-accent text-white">
                    RUFLEX RUNA
                  </span>
                  <span className="text-xs text-white/90">Цвет: Балтика</span>
                </div>
                <h3 className="text-lg font-bold font-display leading-snug">
                  Фактурная рельефная кровля для загородного дома
                </h3>
                <p className="text-xs text-white/80 line-clamp-2">
                  Устойчивость к суровым ветрам Астаны, бесшумность во время осадков и сохранность цвета на 50+ лет.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={onExploreCatalog}
                    className="text-xs font-bold text-white hover:text-brand-accent transition-colors flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>Выбрать цвет в каталоге</span>
                    <span>→</span>
                  </button>
                  <span className="text-[11px] text-white/60">Астана, 2024</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
