import React from 'react';
import { ArrowRight, Rocket, Check, Settings, Search, Headphones } from 'lucide-react';
import { heroData, pricingPlan, detailedFeatures, faqData, companyInfo } from '../../data/mock';
import ClientsCarousel from '../../components/home/ClientsCarousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';

const iconMap = {
  Settings: Settings,
  Search: Search,
  Headphones: Headphones,
};

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Lanzamiento Express
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {heroData.headline}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse">
                  {heroData.highlightText}
                </span>
              </h1>
              
              <h2 className="text-lg sm:text-xl text-gray-600 mb-4">
                {heroData.subheadline}
              </h2>
              
              <p className="text-gray-500 mb-8 max-w-xl mx-auto lg:mx-0">
                {heroData.subtext}
              </p>
              
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-pulse-glow"
              >
                {heroData.ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src={heroData.heroImage}
                    alt="Profesional trabajando en diseño web"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Carousel */}
      <ClientsCarousel />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Un Solo Plan. Todo Incluido.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Sin sorpresas, sin costos ocultos. Tu web profesional a un precio justo.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="relative bg-white rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm rounded-full">
                  MÁS POPULAR
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pricingPlan.name} {pricingPlan.emoji}
                </h3>
                
                {/* Price */}
                <div className="mt-4">
                  <span className="text-gray-400 line-through text-lg">
                    Antes {pricingPlan.originalPrice}
                  </span>
                  <div className="flex items-baseline justify-center gap-2 mt-2">
                    <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                      {pricingPlan.currentPrice}
                    </span>
                    <span className="text-gray-500 text-lg">{pricingPlan.currency}</span>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                    {pricingPlan.tag}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pricingPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-center rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                QUIERO MI WEB YA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué más incluye?
            </h2>
            <p className="text-gray-600 text-lg">
              Todo lo que necesitás para arrancar con el pie derecho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {detailedFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="group p-8 bg-white hover:bg-blue-50 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <IconComponent className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 text-lg">
              Resolvemos tus dudas antes de que las tengas.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 data-[state=open]:border-blue-300 data-[state=open]:bg-blue-50"
              >
                <AccordionTrigger className="text-gray-900 hover:text-blue-600 text-left py-5 hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para despegar?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            En 48 horas podés tener tu web online. Contactanos ahora y arrancá a vender.
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-bold text-lg rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            EMPEZAR AHORA
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
