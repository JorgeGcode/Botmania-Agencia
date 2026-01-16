import React from 'react';
import { Check, Star, Palette, Layout, Sparkles } from 'lucide-react';
import { disenoHeroData, logoPacks, portfolioLogos, companyInfo } from '../../data/mock';

const DisenoPage = () => {
  return (
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Diseño Gráfico Profesional
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {disenoHeroData.headline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {disenoHeroData.headline.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
              {disenoHeroData.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Logo Packs Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Packs de Diseño
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Elegí el que mejor se adapte a tu necesidad. Todos incluyen archivos en alta calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {logoPacks.map((pack) => (
              <div
                key={pack.id}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  pack.popular
                    ? 'bg-gradient-to-b from-purple-900/50 to-slate-800/50 border-purple-500/50 shadow-xl shadow-purple-500/10'
                    : 'bg-slate-800/50 border-slate-700 hover:border-purple-500/30'
                }`}
              >
                {/* Popular Badge */}
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      RECOMENDADO
                    </div>
                  </div>
                )}

                {/* Pack Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  pack.popular ? 'bg-purple-500/20' : 'bg-slate-700'
                }`}>
                  {pack.id === 1 && <Sparkles className={`w-7 h-7 ${pack.popular ? 'text-purple-400' : 'text-slate-400'}`} />}
                  {pack.id === 2 && <Palette className={`w-7 h-7 ${pack.popular ? 'text-purple-400' : 'text-slate-400'}`} />}
                  {pack.id === 3 && <Layout className={`w-7 h-7 ${pack.popular ? 'text-purple-400' : 'text-slate-400'}`} />}
                </div>

                {/* Pack Name & Price */}
                <h3 className="text-xl font-bold text-white mb-2">{pack.name}</h3>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                  {pack.price}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pack.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        pack.popular ? 'bg-purple-500/20' : 'bg-slate-700'
                      }`}>
                        <Check className={`w-3 h-3 ${pack.popular ? 'text-purple-400' : 'text-slate-400'}`} />
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 font-bold text-center rounded-xl transition-all duration-300 ${
                    pack.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Consultar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Nuestros Trabajos
            </h2>
            <p className="text-slate-400 text-lg">
              Algunos ejemplos de identidades visuales que creamos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioLogos.map((logo) => (
              <div
                key={logo.id}
                className="group relative aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Necesitás una identidad única?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Creamos el logo perfecto para tu marca. Contá tu idea y empezamos.
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25"
          >
            QUIERO MI LOGO
          </a>
        </div>
      </section>
    </div>
  );
};

export default DisenoPage;
