import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { COLLECTIONS, Collection, ColorOption } from '../data/products';

interface ColorVisualizerProps {
  onSelectColorForQuote: (collectionName: string, colorName: string) => void;
  onOpenCollectionModal: (collection: Collection) => void;
}

export const ColorVisualizer: React.FC<ColorVisualizerProps> = ({
  onSelectColorForQuote,
  onOpenCollectionModal,
}) => {
  // Default to RUFLEX Runa
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('runa');
  
  const currentCollection = COLLECTIONS.find(c => c.id === selectedCollectionId) || COLLECTIONS[0];
  const [selectedColorId, setSelectedColorId] = useState<string>(currentCollection.colors[0]?.id || 'baltika');

  const activeColor: ColorOption = currentCollection.colors.find(c => c.id === selectedColorId) || currentCollection.colors[0];

  const handleCollectionChange = (colId: string) => {
    setSelectedCollectionId(colId);
    const newCol = COLLECTIONS.find(c => c.id === colId);
    if (newCol && newCol.colors.length > 0) {
      const hasSameColor = newCol.colors.find(c => c.id === selectedColorId);
      setSelectedColorId(hasSameColor ? hasSameColor.id : newCol.colors[0].id);
    }
  };

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-white border-b border-black/[0.04] relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold tracking-widest uppercase mb-3">
            <Palette className="w-3.5 h-3.5" />
            Каталог гибкой черепицы RUFLEX
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
            Примерка цвета кровли <br />
            <span className="text-gray-500 font-normal">на архитектурном объекте</span>
          </h2>
          <p className="mt-4 text-base text-gray-700 leading-relaxed font-normal">
            Выберите коллекцию и оттенок базальтового гранулята RUFLEX, чтобы оценить, как будет выглядеть кровля при различном освещении и архитектурном стиле.
          </p>
        </div>

        {/* Collection Selector Tabs with Prominent Shape Cutouts */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <span className="text-xs font-bold text-black uppercase tracking-wider whitespace-nowrap mr-1">
            КОЛЛЕКЦИЯ:
          </span>
          {COLLECTIONS.map((col) => {
            const isSelected = col.id === selectedCollectionId;
            return (
              <button
                key={col.id}
                onClick={() => handleCollectionChange(col.id)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-3 whitespace-nowrap shadow-sm ${
                  isSelected
                    ? 'bg-black text-white shadow-md scale-[1.02]'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-black'
                }`}
              >
                {col.shapeImage && (
                  <div className="h-6 sm:h-7 w-9 sm:w-11 flex items-center justify-center flex-shrink-0">
                    <img
                      src={col.shapeImage}
                      alt={col.name}
                      loading="eager"
                      className={`max-h-full max-w-full object-contain transition-all ${
                        isSelected
                          ? 'brightness-0 invert opacity-100 drop-shadow-sm'
                          : 'brightness-0 opacity-80 hover:opacity-100'
                      }`}
                    />
                  </div>
                )}
                <span>{col.name.replace('RUFLEX ', '')}</span>
              </button>
            );
          })}
        </div>

        {/* Main Visualizer Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left / Top: Interactive House Viewport with Real User Photos */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-elevated bg-[#121316] border border-black/10">
              
              {/* House Render with Dynamic Smooth Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentCollection.id}-${activeColor.id}`}
                  initial={{ opacity: 0.35, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.35, scale: 0.99 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeColor.image}
                    alt={`${currentCollection.name} ${activeColor.name}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Gradient Vignette for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>
                </motion.div>
              </AnimatePresence>

              {/* Live Overlay Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="px-3.5 py-1.5 rounded-lg glass-dark text-white text-xs font-semibold flex items-center gap-2 shadow-sm">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-inner"
                    style={{ backgroundColor: activeColor.hex }}
                  />
                  <span>{currentCollection.name} — {activeColor.name}</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg glass-dark text-white/90 text-xs shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-accent" />
                  <span>Пожизненная гарантия</span>
                </div>
              </div>

              {/* Bottom Quick Specs inside Viewport */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white text-xs pointer-events-none">
                <div className="glass-dark px-4 py-2.5 rounded-lg space-x-3 flex items-center gap-3 shadow-sm">
                  {currentCollection.shapeImage && (
                    <div className="h-6 w-10 flex items-center justify-center">
                      <img
                        src={currentCollection.shapeImage}
                        alt={currentCollection.shapeName}
                        className="max-h-full max-w-full object-contain brightness-0 invert opacity-95"
                      />
                    </div>
                  )}
                  <div>
                    <span className="text-white/70 block text-[10px]">Форма гонта:</span>
                    <span className="font-bold text-xs">{currentCollection.shapeName}</span>
                  </div>
                </div>
                <div className="glass-dark px-4 py-2.5 rounded-lg space-x-2 shadow-sm flex items-center">
                  <div>
                    <span className="text-white/70 block text-[10px]">Посыпка:</span>
                    <span className="font-bold text-xs text-brand-accent">100% Базальт</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Hint Under Visualizer */}
            <div className="flex items-center justify-between text-xs text-gray-600 px-1 font-medium">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-brand-accent flex-shrink-0" />
                Нажмите на цвет в палитре справа для моментальной смены оттенка крыши
              </span>
              <span className="hidden sm:inline">СБС-модифицированный битум RUFLEX</span>
            </div>
          </div>

          {/* Right: Color Swatches & Details Card */}
          <div className="lg:col-span-4 space-y-6 text-left">
            
            {/* Color Swatch Picker */}
            <div className="p-6 rounded-2xl bg-gray-50 border border-black/[0.08] space-y-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-black">
                  ПАЛИТРА ОТТЕНКОВ ({currentCollection.colors.length})
                </h3>
                <span className="text-xs text-gray-500 font-semibold">
                  {currentCollection.name.replace('RUFLEX ', '')}
                </span>
              </div>

              {/* Swatches Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-4 gap-3">
                {currentCollection.colors.map((color) => {
                  const isActive = color.id === activeColor.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColorId(color.id)}
                      className="group flex flex-col items-center gap-1.5 focus:outline-none"
                    >
                      <div
                        className={`w-12 h-12 rounded-full relative transition-all duration-200 flex items-center justify-center shadow-md ${
                          isActive
                            ? 'ring-2 ring-black ring-offset-2 scale-110'
                            : 'hover:scale-105 opacity-85 hover:opacity-100'
                        }`}
                        style={{
                          background: color.secondaryHex
                            ? `linear-gradient(135deg, ${color.hex} 0%, ${color.secondaryHex} 100%)`
                            : color.hex
                        }}
                      >
                        {isActive && (
                          <Check className="w-4 h-4 text-white drop-shadow" />
                        )}
                      </div>
                      <span className={`text-[11px] leading-tight text-center transition-colors ${
                        isActive ? 'font-bold text-black' : 'text-gray-600 group-hover:text-black font-medium'
                      }`}>
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Color Info Box */}
              <div className="pt-4 border-t border-black/[0.08] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold block">
                      ВЫБРАННЫЙ ЦВЕТ:
                    </span>
                    <span className="text-base font-bold text-black block">
                      {activeColor.name}
                    </span>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full border border-black/15 shadow-sm"
                    style={{ backgroundColor: activeColor.hex }}
                  />
                </div>

                <p className="text-xs text-gray-700 leading-relaxed font-normal">
                  {activeColor.description}
                </p>

                <div className="bg-white p-3 rounded-lg border border-black/[0.06] space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">УФ-стойкость:</span>
                    <span className="font-bold text-black">{activeColor.uvProtection}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ориентир. цена:</span>
                    <span className="font-bold text-black">{currentCollection.pricePerM2Approx} / м²</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onSelectColorForQuote(currentCollection.name, activeColor.name)}
                  className="w-full py-3.5 px-4 rounded-md bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>ЗАКАЗАТЬ РАСЧЁТ В ЭТОМ ЦВЕТЕ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onOpenCollectionModal(currentCollection)}
                  className="w-full py-2.5 px-4 rounded-md bg-white border border-gray-300 text-black text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors"
                >
                  ПОДРОБНЕЕ О КОЛЛЕКЦИИ {currentCollection.name.replace('RUFLEX ', '')}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
