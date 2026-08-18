import React from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ContactsProps {
  onOpenConsultation: () => void;
}

export const Contacts: React.FC<ContactsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contacts" className="py-20 sm:py-28 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Контакты
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
            Офис и склад в Астане
          </h2>
          <p className="mt-4 text-base text-gray-800 leading-relaxed font-medium">
            Приезжайте в наш офис для подбора коллекций черепицы на образцах и стендах, или свяжитесь с отделом продаж для консультации.
          </p>
        </div>

        {/* Contacts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Address */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-black/[0.08] space-y-2">
                <div className="flex items-center gap-2.5 text-xs uppercase font-bold tracking-wider text-black">
                  <MapPin className="w-4 h-4 text-brand-accent" />
                  <span>Адрес офиса</span>
                </div>
                <p className="text-base font-bold text-black">
                  {COMPANY_INFO.fullAddress}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://2gis.kz/astana/search/%D1%83%D0%BB.%20%D0%96%D1%83%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2C%2031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                  >
                    <span>Открыть в 2GIS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-gray-400">•</span>
                  <a
                    href="https://yandex.kz/maps/?text=%D0%90%D1%81%D1%82%D0%B0%D0%BD%D0%B0%20%D0%96%D1%83%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0%2031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1"
                  >
                    <span>Яндекс Карты</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="p-6 rounded-2xl bg-gray-50 border border-black/[0.08] space-y-3">
                <div className="flex items-center gap-2.5 text-xs uppercase font-bold tracking-wider text-black">
                  <Phone className="w-4 h-4 text-brand-accent" />
                  <span>Телефоны отдела продаж</span>
                </div>
                <div className="space-y-3">
                  <div className="border-b border-gray-200 pb-2">
                    <a
                      href={`tel:${COMPANY_INFO.phones.primaryClean}`}
                      className="text-base sm:text-lg font-bold text-black hover:text-brand-accent transition-colors block"
                    >
                      {COMPANY_INFO.phones.primary}
                    </a>
                    <span className="text-xs text-gray-800 font-medium">
                      Менеджер: <strong>{COMPANY_INFO.phones.primaryName}</strong>
                    </span>
                  </div>
                  <div>
                    <a
                      href={`tel:${COMPANY_INFO.phones.secondaryClean}`}
                      className="text-base sm:text-lg font-bold text-black hover:text-brand-accent transition-colors block"
                    >
                      {COMPANY_INFO.phones.secondary}
                    </a>
                    <span className="text-xs text-gray-800 font-medium">
                      Менеджер: <strong>{COMPANY_INFO.phones.secondaryName}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gray-50 border border-black/[0.08] space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-black">
                    <Clock className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Режим работы</span>
                  </div>
                  <p className="text-xs font-bold text-black pt-1">
                    Пн–Пт: {COMPANY_INFO.workingHours.weekdays}
                  </p>
                  <p className="text-[11px] text-gray-700 font-medium">
                    Сб–Вс: {COMPANY_INFO.workingHours.weekend}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 border border-black/[0.08] space-y-1">
                  <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-black">
                    <Mail className="w-3.5 h-3.5 text-brand-accent" />
                    <span>Электронная почта</span>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs font-bold text-black hover:text-brand-accent transition-colors block pt-1 break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Messengers Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={COMPANY_INFO.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="py-3.5 px-4 rounded-lg bg-black hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Заказать звонок</span>
              </button>
            </div>

          </div>

          {/* Right: Interactive Map Container */}
          <div className="lg:col-span-7 h-[420px] sm:h-[480px] lg:h-auto rounded-2xl overflow-hidden border border-black/[0.08] shadow-soft relative bg-gray-100 flex flex-col">
            <iframe
              title="Диана Астана Трейд на карте Астаны"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.626775618423!2d71.46822237691882!3d51.15783397173516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424581458e0a81cb%3A0x6a2dfa0eefaa0dc6!2z0YPQu9C40YbQsCDQltGD0LHQsNC90L7QstCwIDMxLCDQkNGB0YLQsNC90LAgMDEwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2skz!4v1710000000000!5m2!1sru!2skz"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlay Card */}
            <div className="absolute top-4 left-4 p-4 rounded-xl bg-black/90 text-white max-w-xs shadow-lg space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent block">
                Главный офис продаж
              </span>
              <h4 className="text-xs font-bold text-white">ТОО «Диана Астана Трейд»</h4>
              <p className="text-[11px] text-gray-200">
                ул. Жубанова, 31, офис 202 (2 этаж)
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
