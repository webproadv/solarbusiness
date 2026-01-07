import { X, Shield } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      <div className="relative bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Shield className="w-6 h-6 text-green-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Informativa sulla Privacy</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-gray-600 text-sm md:text-base leading-relaxed">
          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">1. Titolare del Trattamento</h3>
            <p>
              Il Titolare del trattamento dei dati è <strong>L'Energy S.p.A.</strong>, con sede legale in Italia.
              Il trattamento dei dati personali avviene nel rispetto del Regolamento UE 2016/679 (GDPR) e della normativa italiana vigente in materia di protezione dei dati personali.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">2. Tipologia di Dati Raccolti</h3>
            <p className="mb-2">Raccogliamo i seguenti dati personali attraverso i moduli di contatto presenti sul sito:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dati anagrafici (Nome, Cognome, Ragione Sociale)</li>
              <li>Dati di contatto (Email, Numero di telefono)</li>
              <li>Dati relativi ai consumi energetici (Consumo annuo, importi bolletta)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">3. Finalità del Trattamento</h3>
            <p className="mb-2">I dati raccolti vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Effettuare analisi preliminari di fattibilità per impianti fotovoltaici</li>
              <li>Inviare comunicazioni commerciali e newsletter (previo consenso specifico)</li>
              <li>Adempiere agli obblighi di legge, contabili e fiscali</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">4. Base Giuridica del Trattamento</h3>
            <p>
              Il trattamento dei dati si basa sul consenso dell'interessato (art. 6.1.a GDPR) per le finalità di marketing e sull'esecuzione di misure precontrattuali (art. 6.1.b GDPR) per la gestione delle richieste di preventivo.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">5. Modalità di Trattamento e Conservazione</h3>
            <p>
              I dati sono trattati con strumenti informatici e telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi. I dati saranno conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">6. Comunicazione dei Dati</h3>
            <p>
              I dati non saranno diffusi. Potranno essere comunicati a soggetti terzi (es. fornitori di servizi tecnici, hosting provider, società informatiche) che agiscono in qualità di Responsabili del trattamento per conto di L'Energy S.p.A.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3">7. Diritti dell'Interessato</h3>
            <p className="mb-2">In ogni momento, l'interessato può esercitare i diritti previsti dagli artt. 15-22 del GDPR, tra cui:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Chiedere l'accesso ai propri dati personali</li>
              <li>Chiedere la rettifica o la cancellazione degli stessi</li>
              <li>Chiedere la limitazione del trattamento</li>
              <li>Opporsi al trattamento</li>
              <li>Richiedere la portabilità dei dati</li>
            </ul>
            <p className="mt-2">
              Per esercitare tali diritti, è possibile scrivere all'indirizzo email: <strong>maurizio.lenergy@gmail.com</strong>
            </p>
          </section>
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
