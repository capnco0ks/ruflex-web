import React from 'react';
import { BRAND_PARTNERS } from '../data/company';

export const Brands: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-brand-muted">
            Прямые партнёры и производители
          </span>
        </div>

        {/* Monochrome Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {BRAND_PARTNERS.map((brand) => (
            <div
              key={brand.name}
              className="p-4 rounded-xl bg-gray-50/60 border border-black/[0.04] hover:border-black/15 transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default"
            >
              <span className="text-base font-extrabold font-display tracking-wider text-brand-dark/75 group-hover:text-brand-dark transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-brand-muted tracking-tight mt-0.5">
                {brand.badge}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
