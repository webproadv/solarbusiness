import { Battery, TrendingUp, Leaf, Shield, Zap, Target } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Perché l'Autoconsumo Fotovoltaico è una <span className="text-green-600">Scelta Strategica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non si tratta solo di pannelli solari. È un investimento che trasforma il modo in cui la tua azienda gestisce le risorse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Battery className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Indipendenza Energetica</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Produci internamente il tuo "carburante aziendale". Libera il tuo business dalla volatilità dei mercati energetici e dai continui aumenti dei fornitori tradizionali.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Produzione garantita per 25+ anni</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Zero dipendenza dalle fluttuazioni di mercato</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Autosufficienza energetica fino all'80%</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ottimizzazione Risorse</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Taglio bollette = liquidità extra da reinvestire in crescita. Macchinari, personale qualificato, ricerca e sviluppo: trasforma i costi fissi in capitale operativo.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700">ROI medio in 4-7 anni</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Risparmio fino a 60% sui costi energetici</span>
              </li>
              <li className="flex items-start gap-3">
                <Target className="w-5 h-5 text-blue-900 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Bilancio prevedibile e pianificabile</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">ESG & Responsabilità Sociale</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Riduzione CO₂ = asset di marketing. Il posizionamento Green non è più opzionale: è ciò che i clienti, gli investitori e i partner si aspettano da te.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Certificazioni ambientali e reporting ESG</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Differenziazione competitiva sul mercato</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">Accesso a bandi e finanziamenti green</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <ContactForm variant="inline" />
        </div>
      </div>
    </section>
  );
}
