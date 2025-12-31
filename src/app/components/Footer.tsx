import { Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const whatsappMessage = language === 'en' 
    ? 'Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you.'
    : 'Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.';

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="mb-4">Cake Princess</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              <span>4.6 {t('hero.ratingGoogle')}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  {t('nav.menu')}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t('nav.location')}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/670899104?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('nav.orderWhatsApp')}
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Jouvence+Yaounde+Jerry+Residence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {t('location.getDirections')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('location.address')}, {t('location.city')}</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href="tel:+237670899104" className="hover:text-white transition-colors">
                  +237 670 899 104
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{t('location.hoursText')}: {t('location.hoursTime')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Cake Princess. {t('footer.allRights')}
            </p>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2">
              <p className="text-yellow-400 text-sm text-center">
                <span className="font-semibold">{t('footer.demoTitle')}</span> — {t('footer.demoText')}
                <br />
                <span className="text-xs">{t('footer.demoSubtext')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
