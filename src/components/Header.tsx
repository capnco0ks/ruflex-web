import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenConsultation: (collectionName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'Каталог', href: '#catalog' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'О компании', href: '#about' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'Контакты', href: '#contacts' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-sm border-b border-black/[0.06]'
            : 'bg-white py-3.5 border-b border-black/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-11">
            
            {/* Left: Clean Circular Logo without text */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center flex-shrink-0 group"
              title="Диана Трейд — На главную"
            >
              <Logo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform group-hover:scale-105" />
            </a>

            {/* Center: Perfectly aligned single-line navigation */}
            <nav className="hidden lg:flex items-center justify-center gap-7 xl:gap-9 flex-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-xs xl:text-sm font-bold uppercase tracking-wider text-black hover:text-brand-accent transition-colors whitespace-nowrap py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Clean Single CTA Button */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => onOpenConsultation()}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-black text-white text-xs font-bold tracking-wider uppercase hover:bg-brand-accent transition-colors shadow-sm whitespace-nowrap"
              >
                Консультация
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
                className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu with Solid High-Contrast White Background & Black Text */}
      <div
        className={`fixed inset-0 z-50 bg-white lg:hidden transition-all duration-300 flex flex-col justify-between pt-20 pb-8 px-6 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <Logo className="w-9 h-9" />
              <span className="text-sm font-bold uppercase tracking-wider text-black">
                Меню сайта
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-black hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-bold text-black hover:text-brand-accent flex items-center justify-between py-3 border-b border-gray-100 whitespace-nowrap"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </a>
            ))}
          </nav>
        </div>

        {/* High-Contrast Bottom Block with Black Text */}
        <div className="space-y-4 pt-6 border-t border-gray-200 mt-6 bg-gray-50 -mx-6 -mb-8 p-6">
          <div className="space-y-1 text-left">
            <p className="text-xs font-bold uppercase tracking-wider text-black">
              Отдел продаж в Астане:
            </p>
            <a
              href={`tel:${COMPANY_INFO.phones.primaryClean}`}
              className="text-base font-bold text-black block hover:text-brand-accent"
            >
              {COMPANY_INFO.phones.primary} ({COMPANY_INFO.phones.primaryName})
            </a>
            <a
              href={`tel:${COMPANY_INFO.phones.secondaryClean}`}
              className="text-base font-bold text-black block hover:text-brand-accent"
            >
              {COMPANY_INFO.phones.secondary} ({COMPANY_INFO.phones.secondaryName})
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={COMPANY_INFO.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="py-3 px-4 rounded-md bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-accent transition-colors shadow-sm"
            >
              Заявка
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
