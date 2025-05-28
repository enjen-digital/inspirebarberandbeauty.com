import React, { useEffect, useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPaused = useRef(false);
  const scrollSpeed = 0.3; // Reduced speed for smoother scrolling
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!scrollContainer) return;

      if (!isPaused.current) {
        // Reset scroll position smoothly when reaching the end
        if (scrollContainer.scrollLeft >= (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2) {
          scrollContainer.scrollLeft = 0;
          lastScrollPos.current = 0;
        } else {
          scrollContainer.scrollLeft = lastScrollPos.current + scrollSpeed;
          lastScrollPos.current = scrollContainer.scrollLeft;
        }
      }

      animationRef.current = requestAnimationFrame(scroll);
    };

    // Initialize the scroll position
    lastScrollPos.current = scrollContainer.scrollLeft;

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section id="photos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Experience our dedication to excellence through our portfolio of transformative styles</p>
        <div className="relative overflow-hidden select-none">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden"
          >
            {photos.map((photo, index) => (
              [...Array(2)].map((_, dupIndex) => (
              <div 
                key={index}
                onMouseEnter={() => isPaused.current = true}
                onMouseLeave={() => isPaused.current = false}
                className="flex-none w-80 h-96 relative rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
              >
                <img
                  src={photo}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ))}
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}