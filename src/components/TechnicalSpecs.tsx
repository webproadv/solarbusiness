import { useState } from 'react';
import { ChevronDown, Sun, Cpu, Battery, Wrench, CheckCircle } from 'lucide-react';

export default function TechnicalSpecs() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const specs = [
    {
      icon: Sun,
      title: 'Moduli Fotovoltaici di Ultima Generazione',
      items: [
        'Tecnologia monocristallina PERC/TOPCon ad alta efficienza (>21%)',
        'Moduli Tier-1 certificati da produttori leader mondiali',
        'Garanzia sulla produzione 30 anni',
        'Resistenza garantita a condizioni atmosferiche estreme',
        'Degradazione <0,5% annuo per performance costanti nel tempo'
      ]
    },
    {
      icon: Cpu,
      title: 'Inverter Intelligenti e Monitoraggio Remoto',
      items: [
        'Inverter di stringa o centrale con efficienza >98%',
        'Sistema di monitoraggio in tempo reale 24/7',
        'Ottimizzatori di potenza per massimizzare la produzione',
        'Diagnostica predittiva e manutenzione preventiva',
        'Connessione cloud per controllo da qualsiasi dispositivo'
      ]
    },
    {
      icon: Battery,
      title: 'Sistemi di Accumulo Industriale',
      items: [
        'Batterie al litio LFP ad alta sicurezza e longevità',
        'Gestione intelligente dell\'energia per autoconsumo notturno',
        'Backup automatico in caso di blackout',
        'Cicli di vita >6000 cicli con capacità residua >80%',
        'Integrazione completa con l\'impianto fotovoltaico'
      ]
    },
    {
      icon: Wrench,
      title: 'Strutture di Montaggio Certificate',
      items: [
        'Alluminio anodizzato o acciaio inox per massima durabilità',
        'Calcoli statici certificati per carichi vento e neve',
        'Soluzioni personalizzate per ogni tipo di copertura',
        'Installazione non invasiva con rispetto dell\'impermeabilizzazione',
        'Conformità a tutte le normative tecniche nazionali ed europee'
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tecnologia <span className="text-green-600">Enterprise-Grade</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lavoriamo solo con componentistica di primissima qualità. Ogni elemento è selezionato per garantire performance, affidabilità e durata nel tempo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              const isOpen = openAccordion === index;

              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:border-green-600 transition-colors"
                >
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{spec.title}</h3>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6">
                      <ul className="space-y-3 pt-4 border-t border-gray-200">
                        {spec.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Competenza Ingegneristica. Affidabilità Garantita.</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Ogni impianto è progettato su misura da ingegneri certificati. Realizziamo analisi preliminari dettagliate, simulazioni di produzione, e studi di fattibilità completi prima di ogni installazione.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold text-green-400 mb-2">1500+</p>
                <p className="text-gray-300">Impianti Installati</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold text-green-400 mb-2">100%</p>
                <p className="text-gray-300">Certificazioni Conformi</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold text-green-400 mb-2">30+</p>
                <p className="text-gray-300">Anni Garanzia Produzione</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold text-green-400 mb-2">24/7</p>
                <p className="text-gray-300">Supporto Tecnico</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
