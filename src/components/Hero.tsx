import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../utils/api_url';

interface HeroProps {
  location: 'East Towne' | 'Park Street';
  scrollToSection: (id: string) => void;
}

interface HeroApiResponse {
  status: boolean;
  data: {
    id: number;
    file: string;
    created_at: string;
    updated_at: string;
  }[];
}

export function Hero({ location, scrollToSection }: HeroProps) {
  const [heroImage, setHeroImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const backgroundImage = location === 'East Towne' ? '/images/east towne.jpg' : '/images/the hub.jpg';

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

  const heroContent = location === 'Waunakee' ? {
    title: "Transform Your Look With Perfect Brows",
    subtitle: "Experience the art of microblading and permanent makeup"
  } : {
    title: "Elevate Your Beauty With Perfect Lashes",
    subtitle: "Experience luxury lash treatments that enhance your natural beauty!"
  };

  return (
    <section id="home" className="relative h-screen">
      <img 
        src={backgroundImage}
        alt={`${location} location`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 grayscale"
      />
      <div className="absolute inset-0 bg-black/60">
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          <div className="text-white max-w-2xl text-right">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Professional Hair Care & Styling</h1>
            <p className="text-xl mb-8 text-theme-accent">Experience exceptional service at our {location} location</p>
            <button
              onClick={() => handleButtonClickTemp()}
              className="bg-theme-primary text-white px-8 py-3 rounded-full hover:bg-theme-primary-hover transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}