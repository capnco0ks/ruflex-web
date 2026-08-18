import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-white/15 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo className="w-11 h-11 bg-white rounded-full p-0.5" />
              <div>
                <span className="text-base font-bold tracking-wider uppercase font-display block leading-none text-white">
                  ДИАНА АСТАНА ТРЕЙД
                </span>
                <span className="text-[10px] tracking-widest text-gray-300 uppercase block font-semibold mt-0.5">
                  Кровельные системы в Казахстане
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 max-w-sm leading-relaxed font-normal">
              Официальный поставщик гибкой черепицы RUFLEX и KATEPAL в Республике Казахстан. Профессиональный подбор, расчёт и поставка кровельных систем с 2013 года.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-brand-accent pt-1 font-semibold">
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span>Официальная пожизненная гарантия производителя</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block">
              Разделы сайта
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-gray-200">
              <li>
                <a href="#visualizer" className="hover:text-white hover:underline transition-colors">
                  Интерактивный выбор цвета
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-white hover:underline transition-colors">
                  Каталог гибкой черепицы RUFLEX
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white hover:underline transition-colors">
                  Калькулятор сметы
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-white hover:underline transition-colors">
                  Преимущества СБС-битума
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white hover:underline transition-colors">
                  Реализованные объекты
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors">
                  О компании
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-brand-accent block">
              Контакты в Астане
            </span>
            <div className="space-y-2.5 text-xs text-gray-200">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones.primaryClean}`} className="hover:text-white font-bold transition-colors">
                  {COMPANY_INFO.phones.primary} ({COMPANY_INFO.phones.primaryName})
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones.secondaryClean}`} className="hover:text-white font-bold transition-colors">
                  {COMPANY_INFO.phones.secondary} ({COMPANY_INFO.phones.secondaryName})
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-300 gap-4">
          <p>© 2013–2026 ТОО «Диана Астана Трейд». Все права защищены.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white hover:text-brand-accent transition-colors uppercase tracking-wider text-[11px] font-bold"
          >
            <span>Наверх</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
