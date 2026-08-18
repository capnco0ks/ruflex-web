import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Layers } from 'lucide-react';
import { PortfolioProject } from '../data/portfolio';

interface LightboxProps {
  project: PortfolioProject | null;
  currentImageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  project,
  currentImageIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const currentImage = project.gallery[currentImageIndex] || project.imageUrl;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between text-white z-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold block">
              {project.collection} — Цвет: {project.color}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Stage with Prev/Next buttons */}
        <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
          
          {/* Previous Button */}
          {project.gallery.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Current Photo */}
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            src={currentImage}
            alt={project.title}
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
          />

          {/* Next Button */}
          {project.gallery.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors border border-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

        </div>

        {/* Bottom Details Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-white/80 text-xs gap-3 border-t border-white/10 pt-4 z-10">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              {project.location}
            </span>
            <span>Площадь: <strong>{project.roofArea} м²</strong></span>
            <span>Год: <strong>{project.year}</strong></span>
          </div>

          <div className="text-white/50">
            Фото {currentImageIndex + 1} из {project.gallery.length}
          </div>
        </div>

      </div>
    </AnimatePresence>
  );
};
