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

  const ANIMATION_DURATION = 800; // Increased from 500ms to 800ms
  const AUTO_ADVANCE_DELAY = 8000; // Increased from 5000ms to 8000ms

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, AUTO_ADVANCE_DELAY);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Experience our dedication to excellence through our portfolio of transformative styles</p>
        <div className="relative max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.1)] border border-gray-100">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-xl h-[400px] bg-[#f7f3ea]">
            <img
              src={photos[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className={`w-full h-full object-contain transition-opacity duration-800 ${
                isAnimating ? 'opacity-80' : 'opacity-100'
              } p-2`}
            />
            
            {/* Previous Image Preview - Right Side */}
            <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 w-32 h-32 overflow-hidden rounded-xl shadow-lg opacity-50 hover:opacity-100 transition-opacity border-2 border-white bg-white">
              <img
                src={photos[(currentIndex - 1 + photos.length) % photos.length]}
                alt="Previous image preview"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-theme-primary hover:bg-theme-primary-hover text-white p-2.5 rounded-full transition-colors shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-theme-primary hover:bg-theme-primary-hover text-white p-2.5 rounded-full transition-colors shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex justify-center gap-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), ANIMATION_DURATION);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-theme-primary scale-125 shadow-md'
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