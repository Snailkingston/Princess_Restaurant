import { Phone, MapPin, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function Hero() {
  const { language, t } = useLanguage();
  const whatsappNumber = '670899104';
  const whatsappMessage = encodeURIComponent(
    language === 'en' 
      ? `Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you.`
      : `Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const phoneLink = `tel:+237${whatsappNumber}`;
  const mapsLink = 'https://maps.google.com/?q=Jouvence+Yaounde+Jerry+Residence';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1567600175325-3573c56bee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2NzA5NzQ4NXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Cake Princess Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
        <h1 className="mb-4">{t('hero.title')}</h1>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="text-xl">4.6</span>
          </div>
          <span className="text-gray-300">•</span>
          <span className="text-gray-200">{t('hero.location')}</span>
        </div>

        <p className="mb-6 max-w-2xl mx-auto text-lg text-gray-200">
          {t('hero.description')}
        </p>

        <div className="flex items-center justify-center gap-2 mb-8 text-gray-200">
          <Clock className="w-5 h-5" />
          <span>{t('hero.openHours')}</span>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <span className="text-xl">🟢</span>
            {t('nav.orderWhatsApp')}
          </a>
          <a
            href={phoneLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            {t('nav.callNow')}: 670 899 104
          </a>
        </div>

        {/* Secondary CTA */}
        <div>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg transition-colors"
          >
            <MapPin className="w-5 h-5" />
            {t('hero.viewMaps')}
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400">⭐</span>
              <span>4.6 {t('hero.ratingGoogle')}</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div>{t('hero.trustedBy')}</div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div>{t('hero.services')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}