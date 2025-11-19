import { Award, Building, CheckCircle, Star } from 'lucide-react';

export default function SocialProof() {
  const caseStudies = [
    {
      industry: 'Metalmeccanica',
      location: 'Brescia',
      size: '180 kW',
      saving: '-60%',
      payback: '5 anni',
      production: '220 MWh/anno',
      testimonial: "Finalmente è finito l'incubo delle bollette fuori controllo. Adesso la spesa è sostenibile e non abbiamo più paura dei mercati."
    },
    {
      industry: 'Logistica',
      location: 'Bologna',
      size: '350 kW',
      saving: '-55%',
      payback: '6 anni',
      production: '430 MWh/anno',
      testimonial: "L'investimento si è ripagato prima del previsto. Ora produciamo energia a costo fisso per i prossimi 30 anni."
    },
    {
      industry: 'Agroalimentare',
      location: 'Parma',
      size: '280 kW',
      saving: '-65%',
      payback: '4.5 anni',
      production: '350 MWh/anno',
      testimonial: "Abbiamo deciso di passare al fotovoltaico per ridurre e controllare i costi energetici e per contribuire al benessere del pianeta."
    }
  ];

  const partners = [
    'Huawei',
    'SunPower',
    'SMA',
    'Fronius',
    'Zucchetti ZCS',
    'Jinko Solar'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Risultati Concreti per <span className="text-green-600">Imprese Come la Tua</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oltre 1500 aziende italiane hanno già fatto il passo. Ecco alcuni esempi dei risultati ottenuti.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{study.industry}</h3>
              <p className="text-gray-600 mb-6">{study.location}</p>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Potenza installata:</span>
                  <span className="font-bold text-gray-900">{study.size}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Risparmio costi:</span>
                  <span className="font-bold text-green-600 text-xl">{study.saving}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-600">Payback period:</span>
                  <span className="font-bold text-gray-900">{study.payback}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Produzione annua:</span>
                  <span className="font-bold text-gray-900">{study.production}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">"{study.testimonial}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 border border-gray-200">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Partner Certificati
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Lavoriamo Solo con i Migliori Brand Mondiali
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Componentistica di prima qualità da produttori certificati Tier-1. Nessun compromesso sulla qualità.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center border border-gray-200 hover:border-green-600 transition-colors">
                <span className="text-gray-700 font-bold text-lg">{partner}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">Tier-1</p>
              <p className="text-gray-600">Solo produttori certificati Bloomberg</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">25+ Anni</p>
              <p className="text-gray-600">Garanzia su tutti i moduli</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-gray-900 mb-2">ISO 9001</p>
              <p className="text-gray-600">Certificazione qualità aziendale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
