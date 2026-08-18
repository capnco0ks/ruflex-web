import React from 'react';
import { BRAND_PARTNERS } from '../data/company';

export const Brands: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
            Прямые партнёры и производители
          </span>
        </div>

        {/* Monochrome Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
          {BRAND_PARTNERS.map((brand) => (
            <div
              key={brand.name}
              className="p-4 rounded-xl bg-gray-50/80 border border-black/[0.06] hover:border-black/20 hover:bg-gray-100/80 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default shadow-2xs"
            >
              <span className="text-sm sm:text-base font-extrabold font-display tracking-wider text-black group-hover:text-brand-accent transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-gray-600 font-medium tracking-tight mt-0.5">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
