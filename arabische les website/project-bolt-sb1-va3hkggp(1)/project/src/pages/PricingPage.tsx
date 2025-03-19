import React from 'react';
import { Shield, Clock, Users, Star } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tarieven</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wij geloven in eerlijke en transparante prijzen die passen bij jouw situatie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Pricing Philosophy */}
          <div className="bg-emerald-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Onze Aanpak</h2>
            <p className="text-gray-600 mb-8">
              Onze prijzen worden altijd samen met jou besproken. Zo zorgen we ervoor
              dat het past bij jouw situatie en wensen. We kijken naar:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Users className="w-5 h-5 text-emerald-600 mr-3" />
                <span>Individueel of groepsles</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 text-emerald-600 mr-3" />
                <span>Frequentie van de lessen</span>
              </li>
              <li className="flex items-center">
                <Shield className="w-5 h-5 text-emerald-600 mr-3" />
                <span>Online of fysieke lessen</span>
              </li>
              <li className="flex items-center">
                <Star className="w-5 h-5 text-emerald-600 mr-3" />
                <span>Specifieke leerwensen</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="bg-emerald-800 text-white rounded-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-6">
              Vrijblijvend Kennismaken
            </h2>
            <p className="mb-8">
              Wil je meer weten over de mogelijkheden en tarieven? Neem contact met
              ons op voor een vrijblijvend gesprek. We bespreken graag:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Jouw leerwensen en doelen</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Beschikbare lestijden</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Passende tarieven</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Mogelijke startdatum</span>
              </li>
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50 transition-colors"
            >
              Neem contact op
            </a>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Kinderen</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Kleine groepen (max. 6)</li>
              <li>• Flexibele lestijden</li>
              <li>• Persoonlijke aandacht</li>
              <li>• Prijs op maat</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Vrouwen</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• 1-op-1 begeleiding</li>
              <li>• Kleine groepen mogelijk</li>
              <li>• Flexibele planning</li>
              <li>• Prijs in overleg</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Locatie</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Fysiek in Den Haag</li>
              <li>• Online via WhatsApp</li>
              <li>• Keuze is aan jou</li>
              <li>• Prijs afhankelijk van keuze</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}