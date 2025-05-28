import React from "react";
import { ChevronDown, ChevronUp, Clock, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ServiceItem {
  title: string;
  basePrice: number;
  description: string;
  duration: string;
  maintenance: string;
}

interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

interface ServicesProps {
  services: ServiceCategory[];
  expandedCategory: string | null;
  setExpandedCategory: (category: string | null) => void;
  expandedService: string | null;
  setExpandedService: (service: string | null) => void;
  location: "East Towne" | "Park Street";
}

export function Services({
  services,
  expandedCategory,
  setExpandedCategory,
  expandedService,
  setExpandedService,
  location,
}: ServicesProps) {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
      <div className="px-4 max-w-4xl mx-auto space-y-4">
        {services.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-[#f7f3ea] hover:bg-[#f0e6d5] transition-colors"
              onClick={() =>
                setExpandedCategory(
                  expandedCategory === category.category
                    ? null
                    : category.category
                )
              }
            >
              <h3 className="text-xl font-semibold text-theme-text">
                {category.category}
              </h3>
              {expandedCategory === category.category ? (
                <ChevronUp className="w-6 h-6 text-theme-primary" />
              ) : (
                <ChevronDown className="w-6 h-6 text-theme-primary" />
              )}
            </button>

            {expandedCategory === category.category && (
              <div className="divide-y divide-theme-secondary">
                {category.items.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="px-6 py-4">
                    <div
                      className="cursor-pointer"
                      onClick={() =>
                        setExpandedService(
                          expandedService === service.title
                            ? null
                            : service.title
                        )
                      }
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium text-gray-800">
                          {service.title}
                        </h4>
                        <div className="flex items-center space-x-4">
                          <span className="font-bold text-theme-primary">
                            ${service.basePrice}
                          </span>
                          {expandedService === service.title ? (
                            <ChevronUp className="w-5 h-5 text-theme-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-theme-primary" />
                          )}
                        </div>
                      </div>

                      {expandedService === service.title && (
                        <div className="mt-4 space-y-4">
                          <p className="text-gray-600">{service.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-4 h-4 text-theme-primary" />
                              <span className="text-gray-600">
                                {service.duration}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-theme-primary" />
                              <span className="text-gray-600">
                                Maintenance: {service.maintenance}
                              </span>
                            </div>
                          </div>
                          <button
                            onClick={() => {}}
                            className="w-full bg-theme-primary text-white py-2 rounded-full hover:bg-theme-primary-hover transition-colors mt-4"
                          >
                            Book Now
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}