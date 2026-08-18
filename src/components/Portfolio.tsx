import React, { useState } from 'react';
import { Camera, MapPin, Maximize2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS, PortfolioProject } from '../data/portfolio';
import { Lightbox } from './Lightbox';

export const Portfolio: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const styles = [
    { id: 'all', label: 'Все объекты' },
    { id: 'Шале', label: 'Шале' },
    { id: 'Хай-тек / Барнхаус', label: 'Хай-тек & Барнхаус' },
    { id: 'Скандинавский', label: 'Скандинавский' },
    { id: 'Классика', label: 'Классика' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    return selectedStyle === 'all' || p.style === selectedStyle;
  });

  const handleOpenLightbox = (project: PortfolioProject) => {
    setActiveProject(project);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((prev) => (prev + 1) % activeProject.gallery.length);
  };

  const handlePrevImage = () => {
    if (!activeProject) return;
    setActiveImageIndex((prev) => (prev - 1 + activeProject.gallery.length) % activeProject.gallery.length);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAFAFA] border-b border-black/[0.04] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.05] text-brand-dark text-xs font-bold tracking-widest uppercase">
              <Camera className="w-3.5 h-3.5 text-brand-accent" />
              Галерея объектов
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-brand-dark tracking-tight leading-tight">
              Реализованные проекты в Казахстане
            </h2>
            <p className="text-base text-brand-muted leading-relaxed">
              Коттеджи, загородные виллы и резиденции в Астане и Акмолинской области с гибкой черепицей RUFLEX.
            </p>
          </div>

          {/* Style Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {styles.map((style) => {
              const isActive = selectedStyle === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-brand-dark text-white shadow-sm'
                      : 'bg-white border border-gray-200 text-brand-dark/75 hover:bg-gray-50'
                  }`}
                >
                  {style.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Grid with Centered Lower Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenLightbox(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-900 border border-black/[0.06] shadow-sm hover:shadow-elevated transition-all duration-400 flex flex-col relative aspect-[4/3] w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] flex-shrink-0"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Top Tags */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded glass-dark text-white text-[10px] uppercase font-bold tracking-wider">
                  {project.style}
                </span>
                <span className="px-2.5 py-1 rounded glass-dark text-white/90 text-xs font-semibold">
                  {project.roofArea} м²
                </span>
              </div>

              {/* Center Zoom Hover Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="p-3 rounded-full glass-dark text-white shadow-lg">
                  <Maximize2 className="w-5 h-5 text-brand-accent" />
                </div>
              </div>

              {/* Bottom Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-1.5 pointer-events-none">
                <span className="text-[11px] text-brand-accent font-bold uppercase tracking-wider block">
                  {project.collection} • {project.color}
                </span>
                <h3 className="text-base font-bold font-display leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-white/50" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Lightbox
          project={activeProject}
          currentImageIndex={activeImageIndex}
          onClose={() => setActiveProject(null)}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />

      </div>
    </section>
  );
};
