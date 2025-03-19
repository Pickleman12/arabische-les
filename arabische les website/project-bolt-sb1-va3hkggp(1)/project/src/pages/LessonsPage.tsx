import React from 'react';
import { Book, Users, Clock, MapPin, Video } from 'lucide-react';

export default function LessonsPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Onze Lessen</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Of je nu wilt leren lezen, spreken of de Koran wilt begrijpen —
            wij bieden lessen aan die bij jou passen.
          </p>
        </div>

        {/* Lesson Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Children's Lessons */}
          <div className="bg-emerald-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-semibold">Voor Kinderen</h2>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Kleine groepen (maximaal 6 kinderen)</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Arabisch lezen en schrijven</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Koran en tajweed</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Verhalen uit de islam</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Spelenderwijs leren</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Lessen worden gegeven door moeder en zoon samen
            </p>
          </div>

          {/* Women's Lessons */}
          <div className="bg-emerald-50 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Book className="w-8 h-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-semibold">Voor Vrouwen</h2>
            </div>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>1-op-1 of kleine groepen</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Arabisch lezen en spreken</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Koran begrip en uitleg</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Geloofskennis</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-2">✓</span>
                <span>Persoonlijke begeleiding</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Lessen worden gegeven door Najat
            </p>
          </div>
        </div>

        {/* Location & Times */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Lestijden & Locatie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold">Flexibele Tijden</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Wij bieden flexibele lestijden aan die passen bij jouw schema:
              </p>
              <ul className="space-y-2">
                <li>• Doordeweeks en weekenden beschikbaar</li>
                <li>• Ochtend, middag of avond</li>
                <li>• Lesfrequentie in overleg</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-emerald-600 mr-2" />
                <h3 className="text-xl font-semibold">Locatie</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Je kunt bij ons terecht voor:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>Fysieke lessen: Zuidlarenstraat 52, Den Haag</span>
                </li>
                <li className="flex items-center">
                  <Video className="w-5 h-5 text-emerald-600 mr-2" />
                  <span>Online lessen via WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-emerald-800 text-white rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Klaar om te beginnen?
          </h2>
          <p className="mb-6">
            Neem contact met ons op voor een vrijblijvend gesprek over de mogelijkheden
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-emerald-900 bg-white hover:bg-emerald-50 transition-colors"
          >
            Contact opnemen
          </a>
        </div>
      </div>
    </div>
  );
}