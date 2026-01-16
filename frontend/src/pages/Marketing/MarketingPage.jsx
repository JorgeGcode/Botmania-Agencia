import React from 'react';
import { MapPin, Building, Key, BarChart3, Target, TrendingUp, Globe, Users } from 'lucide-react';
import { marketingHeroData, seoServices, companyInfo } from '../../data/mock';

const iconMap = {
  MapPin: MapPin,
  Building: Building,
  Key: Key,
  BarChart3: BarChart3,
};

const MarketingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
                <Target className="w-4 h-4" />
                SEO & Marketing Digital
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Aparece en Google{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  o No Existes.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl">
                {marketingHeroData.subheadline}
              </p>
              
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                QUIERO APARECER EN GOOGLE
              </a>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src={marketingHeroData.image}
                  alt="Analytics dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-gray-200 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">+250%</p>
                    <p className="text-xs text-gray-500">Más visitas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios SEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Estrategias probadas para que tu negocio domine las búsquedas locales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoServices.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group p-6 bg-white hover:bg-blue-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <Globe className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-1">93%</p>
                <p className="text-gray-600 text-sm">De las experiencias online empiezan con una búsqueda</p>
              </div>
              <div className="p-6 bg-cyan-50 rounded-2xl border border-cyan-100">
                <Users className="w-8 h-8 text-cyan-600 mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-1">75%</p>
                <p className="text-gray-600 text-sm">No pasa de la primera página de Google</p>
              </div>
              <div className="p-6 bg-green-50 rounded-2xl border border-green-100 col-span-2">
                <Target className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-1">46%</p>
                <p className="text-gray-600 text-sm">De todas las búsquedas en Google tienen intención local</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                ¿Por qué necesitás{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  SEO Local?
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Cuando alguien busca tu servicio en tu zona, tu negocio tiene que aparecer. Si no estás en Google, estás perdiendo clientes todos los días.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Aparés cuando te buscan en tu ciudad</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Más llamadas, más mensajes, más ventas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  </div>
                  <span className="text-gray-700">Superior a tu competencia que aún no invierte en esto</span>
                </li>
              </ul>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg"
              >
                Empezar ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Querés que te encuentren?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Analizamos tu situación actual y te damos un plan de acción. Sin compromiso.
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold text-lg rounded-xl transition-all duration-300 shadow-xl"
          >
            PEDIR ANÁLISIS GRATIS
          </a>
        </div>
      </section>
    </div>
  );
};

export default MarketingPage;
