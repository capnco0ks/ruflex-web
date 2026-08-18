import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, Send, Phone, MessageSquare } from 'lucide-react';
import { COLLECTIONS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCollection?: string;
  initialColor?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialCollection,
  initialColor,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+7 ');
  const [selectedCollection, setSelectedCollection] = useState(initialCollection || 'RUFLEX Runa');
  const [colorComment, setColorComment] = useState(initialColor || '');
  const [area, setArea] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCollection) setSelectedCollection(initialCollection);
    if (initialColor) setColorComment(initialColor);
  }, [initialCollection, initialColor]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('+7 ');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 text-left">
        
        {/* Backdrop */}
        <div className="fixed inset-0" onClick={handleReset} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
        >
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-black/[0.06] flex items-center justify-between bg-gray-50/80">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent block">
                Диана Астана Трейд
              </span>
              <h3 className="text-lg font-bold font-display text-brand-dark">
                {isSubmitted ? 'Заявка принята' : 'Консультация и расчёт сметы'}
              </h3>
            </div>

            <button
              onClick={handleReset}
              className="p-2 rounded-full hover:bg-gray-200 text-brand-dark/70 hover:text-brand-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h4 className="text-xl font-bold font-display text-brand-dark">
                  Спасибо, {name || 'уважаемый клиент'}!
                </h4>

                <p className="text-xs sm:text-sm text-brand-muted max-w-xs mx-auto leading-relaxed">
                  Ваша заявка передана инженеру отдела продаж <strong>ТОО «Диана Астана Трейд»</strong>. Мы перезвоним вам в течение 15 минут в рабочее время.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="w-full py-3 px-4 rounded-md bg-brand-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors"
                  >
                    Закрыть окно
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Например, Арман"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                    Телефон в Казахстане *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (7XX) XXX-XX-XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs sm:text-sm text-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark transition-all"
                  />
                </div>

                {/* Collection & Color */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                      Коллекция
                    </label>
                    <select
                      value={selectedCollection}
                      onChange={(e) => setSelectedCollection(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark"
                    >
                      {COLLECTIONS.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                      Цвет / Комментарий
                    </label>
                    <input
                      type="text"
                      placeholder="Например, Балтика"
                      value={colorComment}
                      onChange={(e) => setColorComment(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark"
                    />
                  </div>
                </div>

                {/* Roof Area */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                    Ориентировочная площадь кровли (м²), если известна
                  </label>
                  <input
                    type="text"
                    placeholder="Например, 250 м²"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-brand-dark focus:bg-white focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                </div>

                {/* Guarantee Note */}
                <div className="p-3 rounded-lg bg-gray-50 border border-black/[0.04] text-[11px] text-brand-muted flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                  <span>
                    Консультация бесплатна и ни к чему вас не обязывает. Мы поможем составить точную смету без переплат.
                  </span>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-md bg-brand-dark hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Отправка данных...</span>
                    ) : (
                      <>
                        <span>Отправить заявку инженеру</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* WhatsApp Alternative */}
                <div className="pt-2 text-center">
                  <span className="text-[11px] text-brand-muted block mb-2">или напишите нам напрямую:</span>
                  <a
                    href={COMPANY_INFO.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Быстрый чат в WhatsApp (+7 707 862-04-61)</span>
                  </a>
                </div>

              </form>
            )}
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
