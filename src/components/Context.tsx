import { TrendingUp, Target, AlertTriangle, Award } from 'lucide-react';

export default function Context() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Il Mercato dell'Energia è Cambiato.<br />
            Chi Non si Adegua <span className="text-green-600">Perde Competitività</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I dati parlano chiaro: l'energia solare non è più un'opzione, è una necessità strategica per il business moderno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
            <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-7 h-7 text-white" />
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-3">+111%</p>
            <p className="text-gray-600 font-medium">
              Crescita installazioni fotovoltaiche per le imprese in Italia
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
            <div className="bg-blue-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-3">80%</p>
            <p className="text-gray-600 font-medium">
              Obiettivo rinnovabili entro il 2030 secondo il PNIEC italiano
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-2xl border border-red-100">
            <div className="bg-red-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <AlertTriangle className="w-7 h-7 text-white" />
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-3">+340%</p>
            <p className="text-gray-600 font-medium">
              Aumento medio dei costi energetici per le imprese negli ultimi 3 anni
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
            <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-white" />
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-3">180%</p>
            <p className="text-gray-600 font-medium">
              Iperammortamento disponibile per impianti idonei
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center">La Volatilità Energetica è il Nuovo Rischio d'Impresa</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-sm text-gray-400 mb-2">2021</p>
                <p className="text-3xl font-bold text-green-400">€0.18/kWh</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">2025</p>
                <p className="text-3xl font-bold text-red-400">€0.30/kWh</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Con Fotovoltaico</p>
                <p className="text-3xl font-bold text-green-400">€0.04/kWh</p>
              </div>
            </div>
            <p className="text-center mt-8 text-gray-300">
              Blocca oggi il costo della tua energia per i prossimi 30 anni. L'indipendenza energetica è il vero vantaggio competitivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
