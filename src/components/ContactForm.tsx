import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  variant?: 'hero' | 'inline';
}

export default function ContactForm({ variant = 'inline' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    referentName: '',
    email: '',
    phone: '',
    consumption: '',
    privacyAccepted: false
  });
  const [consumptionError, setConsumptionError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Richiesta analisi fotovoltaico - ${formData.companyName || 'Azienda'}`;
    const bodyLines = [
      `Nome Azienda: ${formData.companyName}`,
      `Nome Referente: ${formData.referentName}`,
      `Email: ${formData.email}`,
      `Telefono: ${formData.phone}`,
      `Consumo annuo stimato: ${formData.consumption}`,
      `Privacy: ${formData.privacyAccepted ? 'Consenso fornito' : 'Non fornito'}`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailto = `mailto:maurizio.lenergy@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailto;
  };

  const isHero = variant === 'hero';

  const formatCurrency = (value: string) => {
    const digits = value.replace(/[^\d]/g, '');
    if (!digits) return '';
    let number = Number(digits);
    if (number > 999999) {
      number = 999999;
    }
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id={isHero ? 'contact-form' : undefined}>
      {isHero && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Richiedi Analisi Gratuita</h3>
          <p className="text-green-100">Risposta entro 24 ore lavorative</p>
        </div>
      )}

      <div>
        <input
          type="text"
          placeholder="Nome Azienda *"
          required
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            isHero
              ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-600'
          } focus:outline-none focus:ring-2 focus:ring-green-600/20`}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Nome Referente *"
          required
          value={formData.referentName}
          onChange={(e) => setFormData({ ...formData, referentName: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            isHero
              ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-600'
          } focus:outline-none focus:ring-2 focus:ring-green-600/20`}
        />
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Aziendale *"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            isHero
              ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-600'
          } focus:outline-none focus:ring-2 focus:ring-green-600/20`}
        />
      </div>

      <div>
        <input
          type="tel"
          placeholder="Telefono *"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={`w-full px-4 py-3 rounded-lg border ${
            isHero
              ? 'bg-white/10 border-white/20 text-white placeholder-white/60 focus:border-white'
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-green-600'
          } focus:outline-none focus:ring-2 focus:ring-green-600/20`}
        />
      </div>

      <div>
        <input
          type="text"
          inputMode="numeric"
          placeholder="Consumo annuo stimato in € *"
          required
          value={formData.consumption}
          onChange={(e) => {
            const raw = e.target.value;
            const hasInvalidChars = /[^\d\s.,€]/.test(raw);
            const digits = raw.replace(/[^\d]/g, '');
            let error = '';
            if (hasInvalidChars) {
              error = 'Inserisci solo numeri';
            }
            if (digits) {
              const n = Number(digits);
              if (n > 999999) {
                error = 'Importo massimo 999.999€';
              }
            }
            setConsumptionError(error);
            setFormData({ ...formData, consumption: formatCurrency(raw) });
          }}
          className={`w-full px-4 py-3 rounded-lg border ${
            isHero
              ? `bg-white/10 ${consumptionError ? 'border-red-500' : 'border-white/20'} text-white placeholder-white/60 focus:border-white`
              : `bg-white ${consumptionError ? 'border-red-500' : 'border-gray-300'} text-gray-900 placeholder-gray-500 focus:border-green-600`
          } focus:outline-none focus:ring-2 focus:ring-green-600/20`}
        />
        {consumptionError && (
          <p className={`${isHero ? 'text-red-300' : 'text-red-600'} text-xs mt-2`}>{consumptionError}</p>
        )}
      </div>

      <div className={`flex items-center gap-3 ${isHero ? 'text-white' : 'text-gray-700'}`}>
        <input
          type="checkbox"
          required
          checked={formData.privacyAccepted}
          onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
          className={`w-5 h-5 rounded border ${
            isHero ? 'border-white/30 bg-white/10' : 'border-gray-300 bg-white'
          }`}
        />
        <label className="text-sm">
          Acconsento al trattamento dei dati personali
        </label>
      </div>

      <button
        type="submit"
        className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
          isHero
            ? 'bg-white text-green-600 hover:bg-green-50'
            : 'bg-green-600 text-white hover:bg-green-700'
        } hover:shadow-lg`}
      >
        <Send className="w-5 h-5" />
        Richiedi Analisi Gratuita
      </button>

      <p className={`text-xs text-center ${isHero ? 'text-white/70' : 'text-gray-500'}`}>
        I tuoi dati sono protetti e non verranno condivisi con terze parti
      </p>
    </form>
  );
}
