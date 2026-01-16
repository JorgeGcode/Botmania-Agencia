import React from 'react';
import { clientLogos } from '../../data/mock';

const ClientsCarousel = () => {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-sm mb-8">
          A ellos les diseñamos la pag web:
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

        {/* Scrolling Logos */}
        <div className="flex animate-marquee">
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 mx-8"
            >
              <div className="w-32 h-16 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{client.initial}</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium max-w-[80px] leading-tight">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
