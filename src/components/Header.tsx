import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  location: 'East Towne' | 'Park Street';
  setLocation: (location: 'East Towne' | 'Park Street') => void;
  scrollToSection: (id: string) => void;
}

const LocationToggle = ({ location, setLocation, className = '' }: {
  location: 'East Towne' | 'Park Street';
  setLocation: (location: 'East Towne' | 'Park Street') => void;
  className?: string;
}) => (
  <div className="flex flex-col items-center scale-90">
    <div className={`flex items-center space-x-1 text-xs ${className}`}>
      <button
        onClick={() => setLocation('East Towne')}
        className={`px-2 py-1 rounded-l-full whitespace-nowrap transition-colors ${
          location === 'East Towne'
            ? 'bg-theme-primary text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        East Towne
      </button>
      <button
        onClick={() => setLocation('Park Street')}
        className={`px-2 py-1 rounded-r-full transition-colors ${
          location === 'Park Street'
            ? 'bg-theme-primary text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Park Street
      </button>
    </div>
    <div className="text-theme-primary text-xs font-medium animate-[pulse-opacity_2s_ease-in-out_infinite] mt-1 hidden md:block">
      Booking for {location}
    </div>
  </div>
);

export function Header({ isMenuOpen, setIsMenuOpen, location, setLocation, scrollToSection }: HeaderProps) {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <img 
              src="/images/inspire logo.png" 
              alt="Inspire Barber & Beauty Salon Logo" 
              className="h-24 w-auto object-contain cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection('home')}
            />
            <LocationToggle 
              location={location} 
              setLocation={setLocation} 
              className="hidden md:flex" 
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-theme-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('stylists')} className="text-gray-700 hover:text-theme-primary transition-colors">Stylists</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-theme-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('photos')} className="text-gray-700 hover:text-theme-primary transition-colors">Photos</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-theme-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-theme-primary transition-colors">Contact</button>
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-theme-primary text-white px-6 py-2 rounded-full hover:bg-theme-primary-hover transition-colors"
            >
              Book Now
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <LocationToggle 
              location={location} 
              setLocation={setLocation} 
            />
            <button 
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div 
              className="text-theme-primary text-sm font-medium mb-4 animate-[pulse-opacity_2s_ease-in-out_infinite]"
            >
              Booking for {location}
            </div>
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('stylists')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">Stylists</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">Services</button>
              <button onClick={() => scrollToSection('photos')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">Photos</button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-theme-primary transition-colors py-2">Contact</button>
              <button
                onClick={() => scrollToSection('services')}
                className="w-full bg-theme-primary text-white px-6 py-2 rounded-full hover:bg-theme-primary-hover transition-colors mt-2"
              >
                Book Now
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}