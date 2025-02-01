"use client"

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { DialogTitle } from '@radix-ui/react-dialog';

// Extended amenity type with multiple images
const amenities = [
  {
    name: 'Gym',
    mainImage: '/hero1.jpg',
    images: ['/hero1.jpg', '/hero1.jpg', '/hero1.jpg'],
    gridSpan: false
  },
  {
    name: 'Dining',
    mainImage: '/mandvi1.jpg',
    images: ['/mandvi1.jpg', '/mandvi2.jpg', '/mandvi3.jpg'],
    gridSpan: false
  },
  {
    name: 'Lobby',
    mainImage: '/lobby1.jpg',
    images: ['/lobby1.jpg', '/hero2.jpg'],
    gridSpan: false
  },
  {
    name: 'Conference Hall',
    mainImage: '/banquet1.jpg',
    images: ['/banquet1.jpg', '/banquet2.jpg', '/banquet3.jpg', 'banquet4.jpg','banquet5.jpg'],
    gridSpan: true
  },
  {
    name: 'Rooms',
    mainImage: '/room1.jpg',
    images: ['/room1.jpg', '/room2.jpg', '/room3.jpg'],
    gridSpan: false
  },
];

const AmenitiesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAmenity, setSelectedAmenity] = useState<typeof amenities[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (amenity: typeof amenities[0]) => {
    setSelectedAmenity(amenity);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    if (selectedAmenity) {
      setCurrentImageIndex((prev) => 
        prev === selectedAmenity.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevious = () => {
    if (selectedAmenity) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedAmenity.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-medium mb-2">Other Amenities</h2>
          <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold">
            To Enhance Your Stay at StayLuxury
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {amenities.map((amenity) => (
            <div 
              key={amenity.name}
              className={`relative rounded-xl overflow-hidden h-64 cursor-pointer group ${
                amenity.gridSpan ? 'lg:col-span-2' : ''
              }`}
              onClick={() => handleImageClick(amenity)}
            >
              <Image
                src={amenity.mainImage}
                alt={amenity.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={amenity.name === 'Gym' || amenity.name === 'Lounge'}
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 rounded-full text-gray-800 text-sm font-medium">
                  {amenity.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal with Carousel */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-5xl h-[80vh] p-0">
      
          <DialogTitle className="sr-only">
            {selectedAmenity ? `${selectedAmenity.name} Images` : 'Amenity Images'}
          </DialogTitle>
     
            <div className="relative w-full h-full">
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 top-4 z-50 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Carousel */}
              <div className="relative w-full h-full">
                {selectedAmenity && (
                  <Image
                    src={selectedAmenity.images[currentImageIndex]}
                    alt={selectedAmenity.name}
                    fill
                    className="object-contain"
                  />
                )}

                {/* Navigation buttons */}
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm">
                  {selectedAmenity && `${currentImageIndex + 1} / ${selectedAmenity.images.length}`}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default AmenitiesSection;