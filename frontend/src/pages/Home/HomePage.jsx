import React from 'react';
import { ArrowRight, Rocket, Check, Settings, Search, Headphones } from 'lucide-react';
import { heroData, pricingPlan, detailedFeatures, faqData, companyInfo } from '../../data/mock';
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
    <div className="bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-slate-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Lanzamiento Express
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {heroData.headline.split(' ').map((word, i) => (
                  <span key={i}>
                    {word === '48' ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{word} </span>
                    ) : (
                      word + ' '
                    )}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
                {heroData.subheadline}
              </p>
              
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-1"
              >
                {heroData.ctaText}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Laptop Mockup */}
            <div className="relative">
              <div className="relative z-10">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-slate-700">
                  <img
                    src={heroData.laptopImage}
                    alt="Web design mockup"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Un Solo Plan. Todo Incluido.
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Sin sorpresas, sin costos ocultos. Tu web profesional a un precio justo.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto">
            <div className="relative bg-gradient-to-b from-slate-800 to-slate-800/50 rounded-3xl p-8 border border-slate-700 shadow-2xl">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="px-4 py-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-900 font-bold text-sm rounded-full">
                  MÁS POPULAR
                </div>
              </div>

              {/* Plan Name */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pricingPlan.name} {pricingPlan.emoji}
                </h3>
                
                {/* Price */}
                <div className="mt-4">
                  <span className="text-slate-500 line-through text-lg">
                    Antes {pricingPlan.originalPrice}
                  </span>
                  <div className="flex items-baseline justify-center gap-2 mt-2">
                    <span className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      {pricingPlan.currentPrice}
                    </span>
                    <span className="text-slate-400 text-lg">{pricingPlan.currency}</span>
                  </div>
                  <div className="mt-2 inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm rounded-full">
                    {pricingPlan.tag}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {pricingPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-center rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25"
              >
                QUIERO MI WEB YA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              ¿Qué más incluye?
            </h2>
            <p className="text-slate-400 text-lg">
              Todo lo que necesitás para arrancar con el pie derecho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {detailedFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div
                  key={feature.id}
                  className="group p-8 bg-slate-800/50 hover:bg-slate-800 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 group-hover:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <IconComponent className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-slate-400 text-lg">
              Resolvemos tus dudas antes de que las tengas.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={`item-${faq.id}`}
                className="bg-slate-800/50 border border-slate-700 rounded-xl px-6 data-[state=open]:border-emerald-500/50"
              >
                <AccordionTrigger className="text-white hover:text-emerald-400 text-left py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Listo para despegar?
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            En 48 horas podés tener tu web online. Contactanos ahora y arrancá a vender.
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25"
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
