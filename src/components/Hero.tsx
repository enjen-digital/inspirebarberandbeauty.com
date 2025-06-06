import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../utils/api_url';

interface LocationContent {
  title: string;
  subtitle: string;
}

const locationContent: Record<'East Towne' | 'Park Street', LocationContent> = {
  'East Towne': {
    title: 'Come Catch This Fade',
    subtitle: 'Madison\'s premier destination for professional cuts and styling at East Towne Mall',
  },
  'Park Street': {
    title: 'Elevate Your Style',
    subtitle: 'Visit our Park Street location for trendsetting cuts and expert grooming',
  }
};

interface HeroProps {
  location: 'East Towne' | 'Park Street';
  scrollToSection: (id: string) => void;
}

export function Hero({ location, scrollToSection }: HeroProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location);

  const backgroundImage = location === 'East Towne' ? '/images/inspirestorefront.jpeg' : '/images/the hub.jpg';

  useEffect(() => {
    if (prevLocation !== location) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
    setPrevLocation(location);
  }, [location]);

  const animationClass = isAnimating ? 'fade-exit' : 'fade-enter';

  return (
    <section id="home" className="relative h-screen">
      <img 
        src={backgroundImage}
        alt={`${location} location`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 grayscale filter blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
        <div className={`container mx-auto px-4 h-full flex items-center ${location === 'East Towne' ? 'justify-start' : 'justify-end'}`}>
          <div className={`text-white max-w-2xl overflow-hidden ${location === 'East Towne' ? 'text-left' : 'text-right'}`}>
            <div className={animationClass}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                {locationContent[location].title}
              </h1>
              <p className="text-xl mb-8 text-theme-accent drop-shadow-md">
                {locationContent[location].subtitle}
              </p>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-theme-primary text-white px-8 py-3 rounded-full hover:bg-theme-primary-hover transition-colors"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}