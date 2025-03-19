import React, { useState } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import { Book, Menu, X, MessageCircle } from 'lucide-react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonsPage from './pages/LessonsPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: () => void }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-emerald-100 text-emerald-800'
          : 'hover:bg-emerald-50 text-gray-600 hover:text-emerald-700'
      }`}
    >
      {children}
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Book className="w-6 h-6 text-emerald-600" />
                <span className="text-xl font-semibold text-emerald-800">
                  Arabische Lessen
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/over-ons">Over Ons</NavLink>
              <NavLink to="/lessen">Onze Lessen</NavLink>
              <NavLink to="/tarieven">Tarieven</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-emerald-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink to="/" onClick={closeMenu}>Home</NavLink>
              <NavLink to="/over-ons" onClick={closeMenu}>Over Ons</NavLink>
              <NavLink to="/lessen" onClick={closeMenu}>Onze Lessen</NavLink>
              <NavLink to="/tarieven" onClick={closeMenu}>Tarieven</NavLink>
              <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/over-ons" element={<AboutPage />} />
          <Route path="/lessen" element={<LessonsPage />} />
          <Route path="/tarieven" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+31612345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-emerald-600 text-white p-4 rounded-full shadow-lg hover:bg-emerald-700 transition-colors z-50 flex items-center gap-2"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline">WhatsApp ons</span>
      </a>

      {/* Footer */}
      <footer className="bg-emerald-900 text-emerald-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  Zuidlarenstraat 52, Den Haag
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📱</span>
                  WhatsApp beschikbaar
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Lessen</h3>
              <ul className="space-y-2">
                <li>✓ Arabisch lezen</li>
                <li>✓ Arabisch spreken</li>
                <li>✓ Koran & Tajweed</li>
                <li>✓ Geloofskennis</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Openingstijden</h3>
              <p>Flexibele lestijden in overleg</p>
              <p className="mt-2">Zowel fysiek als online mogelijk</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-emerald-800 text-center">
            <p>© {new Date().getFullYear()} Arabische Lessen door Najat & Zoon</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;