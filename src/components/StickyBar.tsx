import { Phone, Calculator } from 'lucide-react';

export default function StickyBar() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="flex items-center justify-between p-4">
        <a
          href="tel:+393391860201"
          className="flex items-center gap-2 text-sm font-medium text-gray-900"
        >
          <Phone className="w-5 h-5 text-green-600" />
          <span>+39 339 186 0201</span>
        </a>
        <button
          onClick={scrollToForm}
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Calculator className="w-4 h-4" />
          Analisi Gratuita
        </button>
      </div>
    </div>
  );
}
