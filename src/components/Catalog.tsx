import React, { useState } from 'react';
import { Layers, Sparkles, Filter, Check } from 'lucide-react';
import { COLLECTIONS, Collection } from '../data/products';
import { ProductCard } from './ProductCard';

interface CatalogProps {
  onOpenDetails: (collection: Collection) => void;
  onRequestPrice: (collectionName: string, colorName: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  onOpenDetails,
  onRequestPrice,
}) => {
  const [selectedSeries, setSelectedSeries] = useState<string>('all');
  const [selectedShape, setSelectedShape] = useState<string>('all');

  const seriesList = [
    { id: 'all', label: 'Все коллекции' },
    { id: 'Премиум', label: 'Премиум' },
    { id: 'Архитектурная', label: 'Архитектурная' },
    { id: 'Стандарт', label: 'Стандарт' },
  ];

  const shapesList = [
    { id: 'all', label: 'Все формы' },
    { id: 'гонтовая', label: 'Гонтовая' },
    { id: 'соты', label: 'Соты / Шестигранник' },
    { id: 'дранка', label: 'Дранка' },
    { id: 'кирпич', label: 'Кирпичная' },
    { id: 'бобровый', label: 'Чешуя' },
    { id: 'ромб', label: 'Ромбовидная' },
  ];

  const filteredCollections = COLLECTIONS.filter((col) => {
    const matchesSeries = selectedSeries === 'all' || col.series === selectedSeries;
    const matchesShape = selectedShape === 'all' || col.shapeName.toLowerCase().includes(selectedShape.toLowerCase());
    return matchesSeries && matchesShape;
  });

  return (
    <section id="catalog" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 text-left">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] text-brand-dark text-xs font-bold tracking-widest uppercase">
              <Layers className="w-3.5 h-3.5 text-brand-accent" />
              Каталог RUFLEX
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-dark tracking-tight leading-tight">
              Коллекции гибкой черепицы
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              Оригинальная продукция завода RUFLEX. СБС-модифицированный битум нового поколения, базальтовая керамизация гранул и пожизненная заводская гарантия.
            </p>
          </div>

          <div className="text-xs text-brand-muted">
            Показано коллекций: <strong className="text-brand-dark font-bold">{filteredCollections.length}</strong> из {COLLECTIONS.length}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="mb-10 space-y-4">
          
          {/* Series Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {seriesList.map((tab) => {
              const isActive = selectedSeries === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedSeries(tab.id)}
                  className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-brand-dark/75 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Shape Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <span className="text-xs text-brand-muted uppercase font-semibold whitespace-nowrap mr-1">
              Форма гонта:
            </span>
            {shapesList.map((shape) => {
              const isActive = selectedShape === shape.id;
              return (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape.id)}
                  className={`px-3 py-1.5 rounded-md text-[11px] font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-brand-accent text-white'
                      : 'bg-gray-100 text-brand-dark/70 hover:bg-gray-200'
                  }`}
                >
                  {shape.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <ProductCard
              key={collection.id}
              collection={collection}
              onOpenDetails={onOpenDetails}
              onRequestPrice={onRequestPrice}
            />
          ))}
        </div>

        {/* Guarantee Banner inside Catalog */}
        <div className="mt-16 p-8 rounded-2xl bg-white border border-black/[0.06] shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1.5">
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-accent">
              Официальный сервис
            </span>
            <h4 className="text-lg font-bold font-display text-brand-dark">
              Именной гарантийный сертификат RUFLEX
            </h4>
            <p className="text-xs text-brand-muted max-w-xl">
              При покупке кровельной системы RUFLEX с оригинальными комплектующими выдается сертификат пожизненной заводской гарантии, зарегистрированный в единой базе производителя.
            </p>
          </div>

          <button
            onClick={() => onRequestPrice('RUFLEX', 'Сертификат')}
            className="whitespace-nowrap px-6 py-3 rounded-md bg-gray-100 hover:bg-brand-dark hover:text-white text-brand-dark text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Узнать условия гарантии
          </button>
        </div>

      </div>
    </section>
  );
};
