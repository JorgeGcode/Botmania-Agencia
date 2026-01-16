import React, { useState } from 'react';
import { Bot, Zap, Clock, MessageSquare, ArrowRight, Sparkles, Send } from 'lucide-react';
import { agenciaData, companyInfo } from '../../data/mock';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';

const AgenciaPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  const features = [
    {
      icon: Clock,
      title: "24/7 Disponible",
      description: "Tu asistente nunca duerme. Atención instantánea a cualquier hora."
    },
    {
      icon: Zap,
      title: "Respuestas Instantáneas",
      description: "Cero espera. Tu bot responde en milisegundos."
    },
    {
      icon: MessageSquare,
      title: "Conversaciones Naturales",
      description: "IA entrenada para hablar como humano. Sin respuestas robóticas."
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section - Futuristic Style */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-8">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-mono font-medium tracking-wider">
                  COMING SOON
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {agenciaData.headline.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  {agenciaData.headline.split(' ').slice(2).join(' ')}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0">
                {agenciaData.subheadline}
              </p>

              {/* Waitlist Form */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-14 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-emerald-500 focus:ring-emerald-500/20"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-14 px-8 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold rounded-xl transition-all duration-300"
                  >
                    <span>Unirme</span>
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              ) : (
                <div className="max-w-md mx-auto lg:mx-0 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <p className="text-emerald-400 font-medium flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    ¡Genial! Te avisamos cuando esté listo.
                  </p>
                </div>
              )}
              
              <p className="mt-4 text-gray-500 text-sm">
                Sé el primero en probar nuestros chatbots con IA.
              </p>
            </div>

            {/* Robot Image */}
            <div className="relative">
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl scale-90" />
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 shadow-2xl shadow-emerald-500/10">
                  <img
                    src={agenciaData.robotImage}
                    alt="AI Chatbot"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3 p-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-emerald-500/30">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                        <Bot className="w-5 h-5 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-white font-medium">BotMania AI</p>
                        <p className="text-emerald-400 text-sm">En desarrollo...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 p-3 bg-gray-800 border border-gray-700 rounded-xl shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 text-sm font-mono">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Lo que viene...
            </h2>
            <p className="text-gray-400 text-lg">
              Chatbots que realmente entienden a tus clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gray-800/30 hover:bg-gray-800/50 rounded-2xl border border-gray-700/50 hover:border-emerald-500/30 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-emerald-500/10 group-hover:bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">Mientras tanto...</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            ¿Necesitás una web ahora?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Mientras desarrollamos nuestros chatbots, podés arrancar con tu sitio web profesional.
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold text-lg rounded-xl transition-all duration-300 shadow-xl shadow-emerald-500/25"
          >
            VER PLANES WEB
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AgenciaPage;
