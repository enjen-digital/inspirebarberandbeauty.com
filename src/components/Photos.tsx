import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',
  '/images/gallery9.jpg',
  '/images/gallery10.jpg',
  '/images/gallery11.jpg'
];

export function Photos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Auto advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px]">
            <img
              src={photos[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-500 ${
                isAnimating ? 'opacity-80' : 'opacity-100'
              }`}
            />
            
            {/* Next Image Preview */}
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-32 h-32 overflow-hidden rounded-lg shadow-md opacity-50 hover:opacity-100 transition-opacity">
              <img
                src={photos[(currentIndex + 1) % photos.length]}
                alt="Next image preview"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-4 flex justify-center gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-theme-primary w-4'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}