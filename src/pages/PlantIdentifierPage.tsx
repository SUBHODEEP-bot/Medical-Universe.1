import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import PlantIdentifier from '@/components/plant/PlantIdentifier';
import { useTitle } from '@/hooks/use-title';
const PlantIdentifierPage = () => {
  useTitle("Ayurvedic Plant Identifier");
  return <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-white to-medical-green">
        <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 bg-yellow-100">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              🌿 Ayurvedic Plant Identifier
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-2">
              Upload a photo of any plant, leaf, bark, or tree to discover its identity and learn about its traditional Ayurvedic uses and healing properties.
            </p>
          </div>
          
          <PlantIdentifier />
        </div>
      </div>
    </PageLayout>;
};
export default PlantIdentifierPage;