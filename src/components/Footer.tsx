import { Mail, Phone, ExternalLink, ArrowRight, Zap, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">L'Energy Business</h3>
            </div>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Non Aspettare il Prossimo Aumento dell'Energia.<br />
              <span className="text-green-400">Blocca il Valore della Tua Elettricità Oggi.</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Ogni giorno che passa senza un impianto fotovoltaico è denaro sprecato in bollette sempre più alte. Il momento di agire è adesso.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:maurizio.lenergy@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">maurizio.lenergy@gmail.com</span>
              </a>

              <a
                href="tel:+393391860201"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">+39 339 186 0201</span>
              </a>

              <a
                href="https://wa.me/393391860201"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <MessageSquare className="w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">WhatsApp</span>
              </a>

              <a
                href="https://business.lenergyspa.it/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 flex-shrink-0" />
                <span className="group-hover:underline">business.lenergyspa.it</span>
              </a>
            </div>

            <div className="bg-green-600/10 border border-green-600/20 rounded-xl p-6 backdrop-blur-sm">
              <p className="text-green-400 font-semibold mb-2">Disponibilità immediata per consulenze</p>
              <p className="text-gray-300 text-sm">
                Rispondiamo entro 24 ore lavorative. Per urgenze, contattaci direttamente al telefono.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Entra nel futuro con noi</h3>
              <p className="text-gray-400">
                Compila il form per ricevere un'analisi personalizzata del potenziale fotovoltaico della tua azienda.
              </p>
            </div>
            <ContactForm variant="inline" />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-lg">Perché Sceglierci</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sopralluoghi e preventivi gratuiti</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Gestione completa pratiche e incentivi</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Installazione chiavi in mano</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Manutenzione e monitoraggio 24/7</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">I Nostri Servizi</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Impianti fotovoltaici industriali</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Sistemi di accumulo energia</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Colonnine ricarica elettrica</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Efficientamento energetico</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-lg">Settori</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Industria manifatturiera</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Logistica e magazzini</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Agroalimentare</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>GDO e retail</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>© 2026 L'Energy S.p.A. - Partita IVA IT12345678901</p>
            <p className="mt-2">Soluzioni energetiche professionali per l'industria italiana</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
