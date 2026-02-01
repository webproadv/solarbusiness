import { ArrowRight, TrendingDown, Shield, Leaf, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <Leaf className="w-4 h-4" />
              Incentivi Statali 2025/2026 Disponibili
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Trasforma il Tetto della tua Azienda in un <span className="text-green-600">Asset Strategico</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Riduci i costi fissi, proteggi il tuo business dalla volatilità dei mercati e accedi agli incentivi statali. L'investimento sicuro per l'indipendenza energetica.
            </p>

            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingDown className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">-60%</p>
                <p className="text-sm text-gray-600">Costi Energetici</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6 text-blue-900" />
                </div>
                <p className="text-2xl font-bold text-gray-900">30 Anni</p>
                <p className="text-sm text-gray-600">Garanzia Produzione</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-600">Emissioni CO₂</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-all hover:shadow-lg"
              >
                Calcola il Ritorno sull'Investimento
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+393391860201"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
              >
                Chiama Ora
              </a>
              <a
                href="https://wa.me/393391860201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-50 text-green-700 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-700 hover:bg-green-100 transition-all"
              >
                WhatsApp
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-green-600 to-blue-900 rounded-2xl p-8 shadow-2xl">
              <ContactForm variant="hero" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 -z-10 opacity-10">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="2" className="text-green-600" />
          <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="2" className="text-blue-900" />
          <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="2" className="text-green-600" />
        </svg>
      </div>
    </section>
  );
}
