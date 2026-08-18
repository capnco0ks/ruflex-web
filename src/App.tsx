import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ColorVisualizer } from './components/ColorVisualizer';
import { CollectionModal } from './components/CollectionModal';
import { RoofCalculator } from './components/RoofCalculator';
import { Advantages } from './components/Advantages';
import { AboutCompany } from './components/AboutCompany';
import { Brands } from './components/Brands';
import { Portfolio } from './components/Portfolio';
import { CtaSection } from './components/CtaSection';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { Collection } from './data/products';

export function App() {
  // Modal states
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);
  const [initialCollection, setInitialCollection] = useState<string>('RUFLEX Runa');
  const [initialColor, setInitialColor] = useState<string>('');
  const [activeCollectionModal, setActiveCollectionModal] = useState<Collection | null>(null);

  const handleOpenConsultation = (collectionName?: string, colorName?: string) => {
    if (collectionName) setInitialCollection(collectionName);
    if (colorName) setInitialColor(colorName);
    setConsultationOpen(true);
  };

  const handleOpenCollectionModal = (collection: Collection) => {
    setActiveCollectionModal(collection);
  };

  const handleExploreCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-brand-dark flex flex-col selection:bg-brand-accent/20 selection:text-brand-dark">
      {/* Header */}
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onExploreCatalog={handleExploreCatalog}
          onExploreVisualizer={handleExploreCatalog}
        />

        {/* 2. Brand Partners Bar */}
        <Brands />

        {/* 3. Unified Interactive Shingle Catalog */}
        <ColorVisualizer
          onSelectColorForQuote={(colName, colorName) => handleOpenConsultation(colName, colorName)}
          onOpenCollectionModal={handleOpenCollectionModal}
        />

        {/* 4. Roof Calculator */}
        <RoofCalculator
          onOpenConsultation={(details) => handleOpenConsultation(undefined, details)}
        />

        {/* 5. Technological Advantages */}
        <Advantages />

        {/* 6. About Diana Astana Trade */}
        <AboutCompany onOpenConsultation={() => handleOpenConsultation()} />

        {/* 7. Portfolio & Gallery of Completed Roofs */}
        <Portfolio />

        {/* 8. Architectural CTA */}
        <CtaSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* 9. Contacts & Astana Map */}
        <Contacts onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Collection Detail Modal */}
      <CollectionModal
        collection={activeCollectionModal}
        onClose={() => setActiveCollectionModal(null)}
        onOpenConsultation={(col, color) => handleOpenConsultation(col, color)}
      />

      {/* Consultation & Quote Request Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        initialCollection={initialCollection}
        initialColor={initialColor}
      />
    </div>
  );
}

export default App;
