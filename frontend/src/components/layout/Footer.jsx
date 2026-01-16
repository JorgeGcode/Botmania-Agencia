import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Mail, Phone, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { companyInfo, navLinks } from '../../data/mock';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-slate-900" />
              </div>
              <span className="text-xl font-bold text-white">
                Bot<span className="text-emerald-400">mania</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Agencia digital especializada en diseño web rápido y efectivo. Tu presencia online, sin vueltas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Diseño Web Express</li>
              <li>Diseño de Logos</li>
              <li>SEO Local</li>
              <li>Chatbots IA</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone}
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 hover:bg-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Botmania. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm">
            Hecho con 💚 en Argentina
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
