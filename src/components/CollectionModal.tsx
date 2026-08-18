import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Check, FileText } from 'lucide-react';
import { Collection, ColorOption } from '../data/products';

interface CollectionModalProps {
  collection: Collection | null;
  onClose: () => void;
  onOpenConsultation: (collectionName: string, colorName?: string) => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  collection,
  onClose,
  onOpenConsultation,
}) => {
  if (!collection) return null;

  const [activeColor, setActiveColor] = useState<ColorOption>(collection.colors[0]);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10">
        
        {/* Backdrop click to close */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col text-left"
        >
          
          {/* Top Bar with Close */}
          <div className="px-6 py-4 border-b border-black/[0.08] flex items-center justify-between bg-gray-50">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded text-[10px] uppercase font-bold tracking-widest bg-black text-white">
                {collection.series}
              </span>
              {collection.shapeImage && (
                <div className="h-6 w-10 flex items-center justify-center">
                  <img
                    src={collection.shapeImage}
                    alt={collection.shapeName}
                    className="max-h-full max-w-full object-contain brightness-0 opacity-80"
                  />
                </div>
              )}
              <span className="text-base font-bold text-black">
                {collection.name}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Top Grid: Shingle Hero & Color Configurator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left: Main Large Visualization */}
              <div className="lg:col-span-7 space-y-3">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-900 shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeColor.id}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0.4 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={activeColor.image}
                        alt={`${collection.name} ${activeColor.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Active Color Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/60"
                        style={{ backgroundColor: activeColor.hex }}
                      />
                      <span className="text-sm font-bold">{activeColor.name}</span>
                    </div>
                    <span className="text-xs text-white/80">{collection.shapeName}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-700 px-1 font-medium">
                  <span>Текстура: 100% керамизированный базальт RUFLEX</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {collection.warranty} гарантия
                  </span>
                </div>
              </div>

              {/* Right: Color Selector & Quick Actions */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold font-display text-black">
                      {collection.name}
                    </h2>
                    {collection.shapeImage && (
                      <div className="h-8 w-14 flex items-center justify-center p-1 bg-gray-100 rounded-md">
                        <img
                          src={collection.shapeImage}
                          alt={collection.shapeName}
                          className="max-h-full max-w-full object-contain brightness-0 opacity-80"
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 mt-1 font-medium">
                    {collection.tagline}
                  </p>
                </div>

                {/* Available Colors */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-black block">
                    Доступные цвета ({collection.colors.length}):
                  </span>
                  <div className="grid grid-cols-4 gap-2.5">
                    {collection.colors.map((color) => {
                      const isActive = color.id === activeColor.id;
                      return (
                        <button
                          key={color.id}
                          onClick={() => setActiveColor(color)}
                          className="group flex flex-col items-center gap-1 focus:outline-none"
                        >
                          <div
                            className={`w-10 h-10 rounded-full relative transition-all duration-200 flex items-center justify-center ${
                              isActive
                                ? 'ring-2 ring-black ring-offset-2 scale-105 shadow-sm'
                                : 'opacity-80 hover:opacity-100'
                            }`}
                            style={{
                              background: color.secondaryHex
                                ? `linear-gradient(135deg, ${color.hex} 0%, ${color.secondaryHex} 100%)`
                                : color.hex
                            }}
                          >
                            {isActive && <Check className="w-3.5 h-3.5 text-white drop-shadow" />}
                          </div>
                          <span className={`text-[10px] text-center leading-tight ${
                            isActive ? 'font-bold text-black' : 'text-gray-600'
                          }`}>
                            {color.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Color description */}
                <div className="p-3.5 rounded-lg bg-gray-50 border border-black/[0.06] text-xs text-gray-700 space-y-1">
                  <span className="font-bold text-black block">О цвете «{activeColor.name}»:</span>
                  <p>{activeColor.description}</p>
                </div>

                {/* CTA buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation(collection.name, activeColor.name);
                    }}
                    className="w-full py-3 px-4 rounded-md bg-black hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm text-center"
                  >
                    Запросить расчёт цены ({activeColor.name})
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenConsultation(collection.name, `Заказ образцов: ${collection.name} ${activeColor.name}`);
                    }}
                    className="w-full py-2.5 px-4 rounded-md bg-white border border-gray-300 hover:bg-gray-50 text-black text-xs font-bold uppercase tracking-wider transition-colors text-center"
                  >
                    Заказать бесплатные образцы в Астане
                  </button>
                </div>

              </div>

            </div>

            {/* Middle: Complete Specifications Table */}
            <div className="pt-6 border-t border-black/[0.08] space-y-4">
              <h3 className="text-base font-bold font-display text-black uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-accent" />
                Технические характеристики коллекции
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Основа</span>
                  <span className="text-xs font-bold text-black block">{collection.baseMaterial}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Тип битума</span>
                  <span className="text-xs font-bold text-black block">{collection.bitumenType}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Толщина / Вес</span>
                  <span className="text-xs font-bold text-black block">{collection.thickness} / {collection.weightPerM2}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">В упаковке</span>
                  <span className="text-xs font-bold text-black block">{collection.packageArea} м² ({collection.packageWeight} кг)</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Температурный диапазон</span>
                  <span className="text-xs font-bold text-black block">{collection.tempRange}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Пожарная безопасность</span>
                  <span className="text-xs font-bold text-black block">{collection.fireRating}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Ветроустойчивость</span>
                  <span className="text-xs font-bold text-black block">{collection.windResistance}</span>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-black/[0.06] space-y-1">
                  <span className="text-[11px] text-gray-600 uppercase tracking-wider font-semibold block">Официальная гарантия</span>
                  <span className="text-xs font-bold text-brand-accent block">{collection.warranty}</span>
                </div>
              </div>
            </div>

            {/* Description & Advantages */}
            <div className="pt-6 border-t border-black/[0.08] space-y-3">
              <h3 className="text-base font-bold font-display text-black">
                Описание и архитектурные особенности
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {collection.description}
              </p>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-black/[0.08] bg-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-gray-700 font-medium">
              Официальный поставщик: <strong className="text-black">ТОО «Диана Астана Трейд»</strong>, г. Астана
            </span>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation(collection.name, activeColor.name);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-md bg-black hover:bg-brand-accent text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Получить консультацию инженера
            </button>
          </div>

        </motion.div>

      </div>
    </AnimatePresence>
  );
};
