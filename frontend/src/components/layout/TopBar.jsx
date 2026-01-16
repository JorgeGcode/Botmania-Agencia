import React from 'react';
import { Facebook, Instagram, Linkedin, Phone } from 'lucide-react';
import { companyInfo } from '../../data/mock';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          {/* WhatsApp Contact */}
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp: {companyInfo.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
