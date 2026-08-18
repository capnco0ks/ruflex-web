import React from 'react';
import { Building2, CheckCircle2, Award, MapPin, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface AboutCompanyProps {
  onOpenConsultation: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-black/[0.04] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase">
                <Building2 className="w-3.5 h-3.5" />
                О компании
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
                Опыт. Качество. <br />
                <span className="text-gray-500 font-normal">Кровельные решения в Астане</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="text-black font-bold">ТОО «Диана Астана Трейд»</strong> — один из ведущих и наиболее авторитетных независимых поставщиков премиальных кровельных материалов в Казахстане с более чем 23-летним стажем работы на рынке.
              </p>
              <p>
                Мы специализируемся на комплексных инженерных поставках гибкой черепицы от заводов-производителей первого эшелона — <strong className="text-black font-bold">RUFLEX</strong>, <strong className="text-black font-bold">KATEPAL</strong>, <strong className="text-black font-bold">Завод Металл Профиль</strong>. Каждая партия материалов проходит жесткий входной контроль и имеет 100% заводскую сертификацию.
              </p>
              <p className="text-xs sm:text-sm text-gray-600">
                Наша цель — предоставить заказчикам, архитекторам и подрядчикам долговечные кровельные системы, которые сохраняют безупречный внешний вид и герметичность даже в климатических условиях Акмолинской области.
              </p>
            </div>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-black font-semibold">Прямые поставки с заводов без посредников</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-black font-semibold">Собственный складской запас в Астане</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-black font-semibold">Бесплатный инженерный расчёт геометрии</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span className="text-xs text-black font-semibold">Официальная пожизненная гарантия</span>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2">
              <a
                href={COMPANY_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-md bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Запись в WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right: Architectural Fact Grid */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-8 rounded-2xl bg-black text-white space-y-6 shadow-elevated">
              <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold block">
                Диана Астана Трейд в цифрах
              </span>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-white block">
                    23+
                  </span>
                  <span className="text-xs text-gray-300 block leading-tight">
                    года успешной работы на строительном рынке РК
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-brand-accent block">
                    1 540+
                  </span>
                  <span className="text-xs text-gray-300 block leading-tight">
                    смонтированных кровель коттеджей и резиденций
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-white block">
                    50 лет
                  </span>
                  <span className="text-xs text-gray-300 block leading-tight">
                    максимальная заводская гарантия на коллекции
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-3xl sm:text-4xl font-bold font-display text-white block">
                    100%
                  </span>
                  <span className="text-xs text-gray-300 block leading-tight">
                    оригинальная продукция с паспортами качества
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-gray-300">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>г. Астана, ул. Жубанова, 31, офис 202</span>
              </div>
            </div>

            {/* Certificate badge */}
            <div className="p-5 rounded-xl bg-gray-50 border border-black/[0.08] flex items-center gap-4">
              <Award className="w-8 h-8 text-brand-accent flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-black uppercase tracking-wider">
                  Сертифицированный дистрибьютор
                </h4>
                <p className="text-[11px] text-gray-600 mt-0.5 font-medium">
                  Прямые дистрибьюторские соглашения с производителями кровельных систем.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
