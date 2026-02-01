import { DollarSign, TrendingUp, FileText, Sparkles, ArrowRight } from 'lucide-react';

export default function Investment() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Zero Impegno sul Capitale Operativo.<br />
            <span className="text-green-600">L'Impianto si Autofinanzia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Non serve bloccare liquidità. Accedi a formule di finanziamento agevolato che ti permettono di iniziare a risparmiare dal primo giorno.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all">
            <div className="bg-gradient-to-br from-green-600 to-green-700 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <DollarSign className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-4">Noleggio Operativo</h3>
            <p className="text-lg text-gray-600 mb-8">
              La soluzione più flessibile per le imprese che vogliono beneficiare subito dell'energia solare senza immobilizzare capitale.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">L'impianto si ripaga con il risparmio</h4>
                  <p className="text-gray-600">Il canone mensile è inferiore al risparmio in bolletta. Inizi a guadagnare dal primo mese.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Canone 100% deducibile</h4>
                  <p className="text-gray-600">Vantaggio fiscale immediato: il canone è interamente deducibile come costo operativo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Zero impatto sulla Centrale Rischi</h4>
                  <p className="text-gray-600">Non viene registrato come debito. Mantieni intatta la tua capacità di credito.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Esempio concreto:</p>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Spesa mensile bolletta:</span>
                  <span className="text-2xl font-bold text-gray-900">4500€</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Risparmio mensile in bolletta per autoconsumo:</span>
                  <span className="text-2xl font-bold text-green-600">3000€</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700">Canone Noleggio operativo:</span>
                  <span className="text-2xl font-bold text-gray-900">1500€</span>
                </div>
                <div className="border-t-2 border-green-600 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">Beneficio netto mensile:</span>
                    <span className="text-3xl font-bold text-green-600">1500€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-10 shadow-lg text-white">
            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
              <FileText className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-3xl font-bold mb-4">Finanza Agevolata & Incentivi</h3>
            <p className="text-lg text-blue-100 mb-8">
              Accedi ai bandi pubblici e alle agevolazioni fiscali disponibili. Ti accompagniamo in tutto l'iter burocratico.
            </p>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Iperammortamento 180%</h4>
                <p className="text-blue-100 mb-4">Dedicuzione fiscale maggiorata per investimenti in beni strumentali nuovi e idonei.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Recupero fiscale su impianti idonei</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Legge Sabatini</h4>
                <p className="text-blue-100 mb-4">Contributo in conto interessi per l'acquisto di nuovi macchinari e impianti produttivi.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Accesso al credito agevolato</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Noleggio Operativo</h4>
                <p className="text-blue-100 mb-4">Canone mensile interamente deducibile senza esposizione finanziaria.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Liquidità aziendale preservata</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Conto Termico 3.0</h4>
                <p className="text-blue-100 mb-4">Incentivi per l'incremento dell'efficienza energetica e la produzione di energia termica.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Riqualificazione energetica agevolata</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Parco Agrisolare</h4>
                <p className="text-blue-100 mb-4">Contributi a fondo perduto per aziende agricole e agroindustriali.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Fino al 80% dell'investimento coperto</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="font-bold text-xl mb-3">Bandi Regionali</h4>
                <p className="text-blue-100 mb-4">Finanziamenti agevolati e contributi specifici per ogni regione italiana.</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <span>Consulenza gratuita per massimizzare gli incentivi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Il Tuo Impianto Si Autofinanzia dal Primo Giorno
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Non è magia. È matematica finanziaria applicata all'energia. Scopri quanto puoi risparmiare con una simulazione personalizzata gratuita.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-xl text-lg font-bold hover:bg-green-50 transition-all hover:shadow-2xl"
          >
            Richiedi Simulazione Economica Gratuita
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
