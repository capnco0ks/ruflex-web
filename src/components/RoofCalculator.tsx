import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle, Send } from 'lucide-react';
import { COLLECTIONS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface RoofCalculatorProps {
  onOpenConsultation: (details: string) => void;
}

export const RoofCalculator: React.FC<RoofCalculatorProps> = ({ onOpenConsultation }) => {
  const [area, setArea] = useState<number>(220);
  const [complexity, setComplexity] = useState<'simple' | 'medium' | 'complex'>('medium');
  const [selectedColId, setSelectedColId] = useState<string>('runa');

  const selectedCol = COLLECTIONS.find(c => c.id === selectedColId) || COLLECTIONS[0];

  // Complexity waste factor
  const wasteFactor = complexity === 'simple' ? 1.05 : complexity === 'medium' ? 1.08 : 1.12;
  const effectiveArea = Math.round(area * wasteFactor);

  // Packages of shingles
  const packagesNeeded = Math.ceil(effectiveArea / selectedCol.packageArea);

  // Underlayment rolls (RUFLEX Ultra, 15 m2 / roll)
  const underlaymentRolls = Math.ceil(area / 14);

  // Ridge-eaves elements (approx 1 package per 12-15 m2 of roof)
  const ridgeEavesPackages = Math.ceil(area / 20);

  // Mastic cartridges (approx 1 per 25 m2)
  const masticUnits = Math.ceil(area / 25);

  // Roofing nails (approx 0.1 kg per m2)
  const nailsKg = Math.ceil(area * 0.1);

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Здравствуйте! Я рассчитал смету на сайте dianaastana.kz:\n` +
      `• Коллекция: ${selectedCol.name}\n` +
      `• Площадь кровли: ${area} м²\n` +
      `• Сложность кровли: ${complexity === 'simple' ? 'Простая 2-скатная' : complexity === 'medium' ? 'Вальмовая / 4-скатная' : 'Сложная многоскатная'}\n` +
      `• Потребуется черепицы: ${packagesNeeded} упак. (~${effectiveArea} м² с запасом)\n` +
      `• Подкладочный ковер: ${underlaymentRolls} рул.\n` +
      `Пожалуйста, уточните точную стоимость и наличие на складе в Астане.`
    );
    window.open(`https://wa.me/77078620461?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 sm:py-28 bg-white border-b border-black/[0.04] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Инженерный калькулятор
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-dark tracking-tight leading-tight">
            Экспресс-расчёт объёма кровли
          </h2>
          <p className="mt-4 text-base text-brand-muted leading-relaxed">
            Рассчитайте необходимое количество гибкой черепицы RUFLEX и комплектующих для вашего дома с учетом геометрии скатов и коэффициента запаса на подрезку.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-6 space-y-6 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-black/[0.06]">
            
            {/* Area Slider & Input */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                  Площадь кровли (скатов)
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min={30}
                    max={1200}
                    value={area}
                    onChange={(e) => setArea(Math.max(10, parseInt(e.target.value) || 0))}
                    className="w-20 px-2.5 py-1 text-right text-sm font-bold text-brand-dark bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-dark"
                  />
                  <span className="text-xs font-semibold text-brand-muted">м²</span>
                </div>
              </div>

              <input
                type="range"
                min={50}
                max={600}
                step={5}
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-dark"
              />

              <div className="flex justify-between text-[11px] text-brand-muted">
                <span>50 м²</span>
                <span>200 м² (средний коттедж)</span>
                <span>600 м²</span>
              </div>
            </div>

            {/* Roof Complexity */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                Форма и сложность крыши
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setComplexity('simple')}
                  className={`py-3 px-2 rounded-lg text-xs font-semibold tracking-tight text-center transition-all ${
                    complexity === 'simple'
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-brand-dark hover:bg-gray-100'
                  }`}
                >
                  <span className="block">Простая</span>
                  <span className="text-[10px] opacity-70 font-normal">Двускатная (+5%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setComplexity('medium')}
                  className={`py-3 px-2 rounded-lg text-xs font-semibold tracking-tight text-center transition-all ${
                    complexity === 'medium'
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-brand-dark hover:bg-gray-100'
                  }`}
                >
                  <span className="block">Вальмовая</span>
                  <span className="text-[10px] opacity-70 font-normal">Четырехскатная (+8%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setComplexity('complex')}
                  className={`py-3 px-2 rounded-lg text-xs font-semibold tracking-tight text-center transition-all ${
                    complexity === 'complex'
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-brand-dark hover:bg-gray-100'
                  }`}
                >
                  <span className="block">Сложная</span>
                  <span className="text-[10px] opacity-70 font-normal">Многоскатная (+12%)</span>
                </button>
              </div>
            </div>

            {/* Collection Selection */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                Выбор коллекции
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COLLECTIONS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setSelectedColId(c.id)}
                    className={`py-2 px-3 rounded-md text-xs font-semibold transition-all text-left ${
                      c.id === selectedColId
                        ? 'bg-brand-dark text-white'
                        : 'bg-white border border-gray-200 text-brand-dark hover:bg-gray-100'
                    }`}
                  >
                    <span className="block truncate">{c.name.replace('RUFLEX ', '')}</span>
                    <span className="text-[10px] opacity-70 block font-normal">{c.series}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 text-xs text-brand-muted flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
              <span>Расчёт формируется по официальным нормативам монтажа RUFLEX</span>
            </div>

          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-dark text-white space-y-6 shadow-elevated">
              
              <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold block">
                    Результат расчёта
                  </span>
                  <h3 className="text-xl font-bold font-display">
                    {selectedCol.name}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full glass-dark text-xs text-white/80">
                  {area} м² (+{Math.round((wasteFactor - 1) * 100)}% запас)
                </span>
              </div>

              {/* Items Breakdown */}
              <div className="space-y-3.5 text-xs">
                
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/75">Черепица {selectedCol.name}:</span>
                  <span className="font-bold text-white text-sm">{packagesNeeded} упак. (~{effectiveArea} м²)</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/75">Подкладочный ковер RUFLEX Ultra:</span>
                  <span className="font-bold text-white text-sm">{underlaymentRolls} рул. (по 15 м²)</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/75">Коньково-карнизная черепица:</span>
                  <span className="font-bold text-white text-sm">{ridgeEavesPackages} упак.</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/75">Битумная мастика/клей RUFLEX:</span>
                  <span className="font-bold text-white text-sm">{masticUnits} шт.</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-white/75">Ершеные кровельные гвозди (30 мм):</span>
                  <span className="font-bold text-white text-sm">~{nailsKg} кг</span>
                </div>

              </div>

              {/* Notice */}
              <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/70 leading-relaxed">
                * Расчёт является предварительным. Для точного раскроя скатов и спецификации доборных элементов (планки примыкания, капельники, вентиляционные выходы) инженер выполнит детальную 3D-раскладку.
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full py-3.5 px-4 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Отправить смету в WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenConsultation(`Расчёт: ${selectedCol.name}, ${area} м²`)}
                  className="w-full py-3 px-4 rounded-md bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
                >
                  Получить детальное коммерческое предложение
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
