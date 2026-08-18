import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Collection, ColorOption } from '../data/products';

interface ProductCardProps {
  collection: Collection;
  onOpenDetails: (collection: Collection) => void;
  onRequestPrice: (collectionName: string, colorName: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  collection,
  onOpenDetails,
  onRequestPrice,
}) => {
  const [activeColor, setActiveColor] = useState<ColorOption>(collection.colors[0]);

  return (
    <div className="group rounded-2xl bg-white border border-black/[0.06] overflow-hidden hover:shadow-elevated transition-all duration-400 flex flex-col justify-between text-left">
      {/* Visual Header / Image Container */}
      <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden">
        {/* Shingle Texture Preview */}
        <img
          src={activeColor.image}
          alt={`${collection.name} ${activeColor.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Color Tint Blend */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-color opacity-30 transition-colors duration-500"
          style={{ backgroundColor: activeColor.hex }}
        />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-1 rounded-md glass-dark text-white text-[10px] font-bold uppercase tracking-widest">
            {collection.series}
          </span>
          <div className="px-2.5 py-1 rounded-md glass-dark text-white/90 text-[10px] font-medium flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-brand-accent" />
            <span>{collection.warranty}</span>
          </div>
        </div>

        {/* Active Color Name Tag */}
        <div className="absolute bottom-3 left-3 px-3 py-1 rounded-md glass-dark text-white text-xs font-semibold flex items-center gap-2">
          <span
            className="w-2.5 h-2.5 rounded-full border border-white/40"
            style={{ backgroundColor: activeColor.hex }}
          />
          <span>Цвет: {activeColor.name}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
        
        <div className="space-y-3">
          {/* Title & Shape */}
          <div>
            <h3 className="text-xl font-bold font-display text-brand-dark group-hover:text-brand-accent transition-colors">
              {collection.name}
            </h3>
            <p className="text-xs text-brand-muted font-medium mt-0.5">
              Форма: {collection.shapeName}
            </p>
          </div>

          <p className="text-xs text-brand-muted/90 line-clamp-2 leading-relaxed">
            {collection.tagline}
          </p>

          {/* Interactive Swatches on Card */}
          <div className="pt-2">
            <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold block mb-2">
              Доступные цвета ({collection.colors.length}):
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {collection.colors.slice(0, 7).map((color) => {
                const isCurrent = color.id === activeColor.id;
                return (
                  <button
                    key={color.id}
                    title={color.name}
                    onClick={() => setActiveColor(color)}
                    className={`w-6 h-6 rounded-full transition-all duration-200 ${
                      isCurrent
                        ? 'ring-2 ring-brand-dark ring-offset-1 scale-110 shadow-sm'
                        : 'opacity-75 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{
                      background: color.secondaryHex
                        ? `linear-gradient(135deg, ${color.hex} 0%, ${color.secondaryHex} 100%)`
                        : color.hex
                    }}
                  />
                );
              })}
              {collection.colors.length > 7 && (
                <button
                  onClick={() => onOpenDetails(collection)}
                  className="text-[10px] text-brand-muted hover:text-brand-dark font-semibold ml-1"
                >
                  +{collection.colors.length - 7}
                </button>
              )}
            </div>
          </div>

          {/* Minimal Specs Strip */}
          <div className="pt-3 border-t border-black/[0.04] grid grid-cols-2 gap-2 text-[11px] text-brand-muted">
            <div>
              <span className="text-gray-400 block">Толщина:</span>
              <span className="font-semibold text-brand-dark">{collection.thickness}</span>
            </div>
            <div>
              <span className="text-gray-400 block">В упаковке:</span>
              <span className="font-semibold text-brand-dark">{collection.packageArea} м²</span>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-black/[0.04] grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenDetails(collection)}
            className="py-2.5 px-3 rounded-md bg-gray-100 hover:bg-gray-200 text-brand-dark text-xs font-semibold uppercase tracking-wider transition-colors text-center"
          >
            Подробнее
          </button>
          
          <button
            onClick={() => onRequestPrice(collection.name, activeColor.name)}
            className="py-2.5 px-3 rounded-md bg-brand-dark hover:bg-brand-accent text-white text-xs font-semibold uppercase tracking-wider transition-colors text-center"
          >
            Запросить цену
          </button>
        </div>

      </div>
    </div>
  );
};
