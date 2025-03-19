import React from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Wil je meer weten of direct een les plannen? Neem contact met ons op!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Neem Contact Op</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Telefoon & WhatsApp</h3>
                  <p className="text-gray-600">Najat: [Telefoonnummer]</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Locatie</h3>
                  <p className="text-gray-600">
                    Zuidlarenstraat 52<br />
                    Den Haag
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageSquare className="w-6 h-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Online Lessen</h3>
                  <p className="text-gray-600">
                    Beschikbaar via WhatsApp video
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Goed om te weten</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Flexibele lestijden in overleg</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Zowel doordeweeks als in het weekend mogelijk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Eerste kennismakingsgesprek is vrijblijvend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Direct starten mogelijk</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map and Hours */}
          <div>
            <div className="bg-gray-100 rounded-lg p-4 mb-8">
              <iframe
                title="Locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.2475766278384!2d4.2982893!3d52.0647837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b1e8d5c19b7d%3A0x8b1b3f9e3c7b0e0f!2sZuidlarenstraat%2052%2C%202545%20VX%20Den%20Haag!5e0!3m2!1sen!2snl!4v1635789012345!5m2!1sen!2snl"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Beschikbaarheid</h3>
              <p className="text-gray-600 mb-6">
                Onze lessen worden gegeven op flexibele tijden, in overleg met jou.
                Zowel doordeweeks als in het weekend mogelijk.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Maandag - Vrijdag</span>
                  <span className="text-gray-600">In overleg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Zaterdag</span>
                  <span className="text-gray-600">In overleg</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Zondag</span>
                  <span className="text-gray-600">In overleg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}