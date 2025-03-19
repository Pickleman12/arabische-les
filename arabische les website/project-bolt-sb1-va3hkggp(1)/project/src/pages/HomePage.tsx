import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Heart, Star, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&q=80&w=2000")',
            filter: 'blur(4px) brightness(0.3)',
          }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container-custom"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6">
              Ontdek de schoonheid van de Arabische taal
            </h1>
            <p className="text-xl text-cream/90 mb-12 leading-relaxed">
              Een persoonlijke reis naar kennis en begrip, in een warme en respectvolle omgeving.
              Voor kinderen en vrouwen, op jouw tempo en niveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn btn-primary text-lg px-8 py-4"
              >
                Start jouw reis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/over-de-lessen"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                Ontdek onze lessen
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-900 mb-4">Waarom kiezen voor ons?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Wij bieden een unieke leerervaring die perfect aansluit bij jouw wensen en mogelijkheden
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Persoonlijke Aandacht",
                description: "Kleine groepen van maximaal 6 personen voor optimale begeleiding"
              },
              {
                icon: <Book className="w-10 h-10" />,
                title: "Op Maat Gemaakt",
                description: "Lesprogramma's afgestemd op jouw niveau en leerdoelen"
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: "Flexibel Leren",
                description: "Kies tussen online of fysieke lessen, op tijden die jou uitkomen"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-cream hover:shadow-lg transition-all duration-300"
              >
                <div className="text-primary-600 mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-900 text-cream">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Begin vandaag nog</h2>
            <p className="text-lg mb-8 text-cream/90">
              Ontdek hoe wij jou of je kind kunnen helpen met het leren van de Arabische taal
              en het verdiepen van je kennis.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary bg-accent-400 hover:bg-accent-500 text-primary-900 text-lg px-8 py-4"
            >
              Plan een kennismaking
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}