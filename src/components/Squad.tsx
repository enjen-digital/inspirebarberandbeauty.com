import React from 'react';

interface SquadMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const squadMembers: SquadMember[] = [
  {
    name: "Brian",
    role: "Owner & Barber",
    image: "/images/frog.jpeg",
    description: "With over a decade of experience in the industry, Brian brings unmatched expertise and creativity to every cut. As both owner and master barber, his passion for the craft and dedication to client satisfaction has made Inspire Barber & Beauty Salon a premier destination for exceptional grooming services."
  },
  {
    name: "Khalil",
    role: "Senior Barber",
    image: "/images/khalil.jpeg",
    description: "Khalil's precision and attention to detail have earned him a reputation as one of Madison's top barbers. Specializing in modern cuts and classic styles, he brings creativity and technical excellence to every client's experience. His expertise in fade techniques and beard grooming makes him a sought-after professional in the industry."
  }
];

export function Squad() {
  return (
    <section id="squad" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Meet the Squad</h2>
        <p className="text-theme-text text-center mb-12 max-w-2xl mx-auto">
          Our talented team of professionals is dedicated to helping you look and feel your best.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {squadMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-theme-accent font-medium">{member.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}