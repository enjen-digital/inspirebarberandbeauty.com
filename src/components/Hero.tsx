import React, { useEffect, useState } from 'react';
import API_BASE_URL from '../utils/api_url';

interface HeroProps {
  location: 'East Towne' | 'Park Street';
  scrollToSection: (id: string) => void;
}

export function Hero({ location, scrollToSection }: HeroProps) {
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [prevLocation, setPrevLocation] = useState(location);

  const backgroundImage = location === 'East Towne' ? '/images/east towne.jpg' : '/images/the hub.jpg';

  useEffect(() => {
    setSlideDirection(location === 'East Towne' ? 'right' : 'left');
    setPrevLocation(location);
  }, [location]);

  const handleButtonClickTemp = () => {
    console.log(location);
  
    if (location.includes("East Towne")) {
      window.open("https://www.vagaro.com/inspiresalon-easttowne/book-now", "_blank");
    } else if (location.includes("Park Street")) {
      window.open("https://www.vagaro.com/inspiresalon-parkst/book-now", "_blank");
    } else {
      window.location.href = "/";
    }
  };

  const slideClass = `transform transition-transform duration-500 ${
    slideDirection === 'right' ? 'translate-x-0' : '-translate-x-0'
  }`;

  return (
    <section id="home" className="relative h-screen">
      <img 
        src={backgroundImage}
        alt={`${location} location`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 grayscale filter blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          <div className="text-white max-w-2xl text-right overflow-hidden">
            <div className={slideClass}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Professional Hair Care & Styling
              </h1>
              <p className="text-xl mb-8 text-theme-accent drop-shadow-md">
                Experience exceptional service at our {location} location
              </p>
              <button
                onClick={() => handleButtonClickTemp()}
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

const styles = {
  slideIn: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  slideOutLeft: {
    opacity: 0,
    transform: 'translateX(-100%)',
  },
  slideOutRight: {
    opacity: 0,
    transform: 'translateX(100%)',
  },
};