import React from 'react';
import { Heart, BookOpen, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Over Ons</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij zijn Najat en haar zoon, en samen helpen wij kinderen en vrouwen om de
            Arabische taal en het geloof beter te leren begrijpen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="aspect-w-3 aspect-h-2 mb-8">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000"
                alt="Arabische les"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Voor Kinderen</h2>
            <p className="text-gray-600 mb-6">
              Wij geven les in kleine groepen tot 6 kinderen. Iedere les besteden we
              aandacht aan wat jouw kind nodig heeft: lezen, spreken, Koran, tajweed
              en verhalen over het geloof.
            </p>
            <ul className="space-y-3">
              {[
                'Kleine groepen (max. 6 kinderen)',
                'Persoonlijke aandacht',
                'Spelenderwijs leren',
                'Positieve leeromgeving',
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="aspect-w-3 aspect-h-2 mb-8">
              <img
                src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=1000"
                alt="Individuele les"
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Voor Vrouwen</h2>
            <p className="text-gray-600 mb-6">
              Mijn moeder geeft persoonlijke, rustige lessen. Helemaal op maat: of je
              nu Arabisch wilt leren lezen, spreken, of de Koran wilt begrijpen —
              alles kan.
            </p>
            <ul className="space-y-3">
              {[
                'Individuele aandacht',
                'Flexibele lestijden',
                'Op eigen tempo leren',
                'Warme, respectvolle omgeving',
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Onze Aanpak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-emerald-600" />,
                title: 'Persoonlijke Aandacht',
                description:
                  'Wij geloven in maatwerk en persoonlijke aandacht voor iedere leerling.',
              },
              {
                icon: <BookOpen className="w-12 h-12 text-emerald-600" />,
                title: 'Complete Leermethode',
                description:
                  'Van basis tot gevorderd niveau, met aandacht voor alle aspecten van de taal.',
              },
              {
                icon: <Heart className="w-12 h-12 text-emerald-600" />,
                title: 'Warme Sfeer',
                description:
                  'Een veilige en prettige leeromgeving waar iedereen zich thuis voelt.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}