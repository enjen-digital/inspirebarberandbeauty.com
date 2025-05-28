import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import API_BASE_URL from '../utils/api_url';

interface FooterProps {
  location: "East Towne" | "Park Street";
}

export function Footer({ location }: FooterProps) {
  const year = new Date().getFullYear;

  return (
    <footer id="contact" className="bg-theme-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img
                src="/images/inspire logo.png"
                alt="Inspire Barber & Beauty Salon Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-theme-accent">
              Providing exceptional hair care and beauty services.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-theme-accent">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="tel:6089573140"
                className="flex items-center text-theme-accent hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" /> (608) 555-0123
              </a>
              <a
                href="mailto:info@inspiresalon.com"
                className="flex items-center text-theme-accent hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" /> info@inspiresalon.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-theme-accent">
              Locations
            </h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-theme-accent mb-1">
                  East Towne
                </h5>
                <a
                  href="https://maps.google.com/?q=89+East+Towne+Mall,+Madison,+WI+53704"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-theme-accent hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    89 East Towne Mall<br />
                    Madison, WI 53704
                  </span>
                </a>
              </div>
              <div>
                <h5 className="font-semibold text-theme-accent mb-1">
                  Park Street
                </h5>
                <a
                  href="https://maps.google.com/?q=1402+S+Park+St,+Madison,+WI+53715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start text-theme-accent hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    1402 S Park St
                    <br />
                    Madison, WI 53715
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4 text-theme-accent">Hours</h4>
            <ul className="space-y-2 text-theme-accent">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 9am - 6pm</li>
              <li>Sunday: 10am - 5pm</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-theme-accent/20 mt-8 pt-8 text-center">
          <p className="text-theme-accent">
            &copy; {new Date().getFullYear()} Inspire Barber & Beauty Salon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}