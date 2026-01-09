import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.menu'), href: '#menu' },
    { label: t('nav.location'), href: '#location' },
  ];

  const whatsappMessage = language === 'en' 
    ? 'Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you.'
    : 'Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl"></span>
              <span className="text-pink-600 dark:text-pink-400">CakePrincessResto</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="inline-flex items-center gap-1 p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title={language === 'en' ? 'Français' : 'English'}
            >
              <Languages className="w-5 h-5" />
              <span className="text-sm">{language === 'en' ? 'FR' : 'EN'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              title={theme === 'light' ? 'Dark mode' : 'Light mode'}
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            <a
              href="tel:+237670899104"
              className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t('nav.callNow')}
            </a>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Theme and Language Toggles */}
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  <Languages className="w-4 h-4" />
                  {language === 'en' ? 'FR' : 'EN'}
                </button>
                <button
                  onClick={toggleTheme}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                >
                  {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  {theme === 'light' ? 'Dark' : 'Light'}
                </button>
              </div>

              <a
                href="tel:+237670899104"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                {t('nav.callNow')}
              </a>
              <a
                href={`https://wa.me/670899104?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
              >
                <span>🟢</span>
                {t('nav.orderWhatsApp')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}