import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Users as UsersIcon, Volume2, TrendingUp, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Atmosphere() {
  const { t } = useLanguage();

  const atmosphereItems = [
    { icon: Volume2, labelKey: 'atmosphere.casual', descKey: 'atmosphere.casualDesc' },
    { icon: Volume2, labelKey: 'atmosphere.quiet', descKey: 'atmosphere.quietDesc' },
    { icon: TrendingUp, labelKey: 'atmosphere.trendy', descKey: 'atmosphere.trendyDesc' },
    { icon: Heart, labelKey: 'atmosphere.cozy', descKey: 'atmosphere.cozyDesc' },
    { icon: Heart, labelKey: 'atmosphere.romantic', descKey: 'atmosphere.romanticDesc' },
    { icon: UsersIcon, labelKey: 'atmosphere.groupFriendly', descKey: 'atmosphere.groupFriendlyDesc' },
    { icon: Globe, labelKey: 'atmosphere.touristFriendly', descKey: 'atmosphere.touristFriendlyDesc' },
  ];

  const diningOptions = [
    'atmosphere.lunchOption',
    'atmosphere.dinnerOption',
    'atmosphere.dessertOption',
    'atmosphere.catering',
    'atmosphere.tableService',
  ];

  const amenities = [
    'atmosphere.barOnSite',
    'atmosphere.toiletAvailable',
  ];

  const planning = [
    'atmosphere.acceptsReservations',
    'atmosphere.goodForChildren',
    'atmosphere.freeParking',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Atmosphere */}
        <div className="mb-16">
          <h2 className="text-center mb-8 dark:text-white">{t('atmosphere.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atmosphereItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="mb-1 dark:text-white">{t(item.labelKey)}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t(item.descKey)}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1567596045677-50ea5cdf2ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBmb29kfGVufDF8fHx8MTc2NzE2MzAwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Traditional African dishes"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzY3MDg0NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pizza at Cake Princess"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Dining Options, Amenities, Planning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-4 dark:text-white">{t('atmosphere.diningOptionsTitle')}</h3>
            <ul className="space-y-2">
              {diningOptions.map((option, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="dark:text-gray-300">{t(option)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-4 dark:text-white">{t('atmosphere.amenitiesTitle')}</h3>
            <ul className="space-y-2">
              {amenities.map((amenity, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="dark:text-gray-300">{t(amenity)}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 dark:bg-gray-800 dark:border-gray-700">
            <h3 className="mb-4 dark:text-white">{t('atmosphere.planningTitle')}</h3>
            <ul className="space-y-2">
              {planning.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="dark:text-gray-300">{t(item)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
