import { Truck, ShoppingBag, Utensils, Beer, Dessert, Zap, Sun, Moon, Users, User } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';


export function Features() {
  const { t } = useLanguage();

  const services = [
    { icon: Truck, labelKey: 'features.delivery' },
    { icon: ShoppingBag, labelKey: 'features.takeaway' },
    { icon: Utensils, labelKey: 'features.dineIn' },
  ];

  const highlights = [
    { icon: Beer, labelKey: 'features.beerSelection' },
    { icon: Dessert, labelKey: 'features.desserts' },
    { icon: Zap, labelKey: 'features.quickBites' },
    { icon: Sun, labelKey: 'features.lunch' },
    { icon: Moon, labelKey: 'features.dinner' },
  ];

  const popularFor = [
    { icon: Sun, labelKey: 'features.lunchTime' },
    { icon: Moon, labelKey: 'features.dinnerTime' },
    { icon: User, labelKey: 'features.soloDining' },
    { icon: Users, labelKey: 'features.groupDining' },
  ];

  const offerings = [
    'features.alcohol',
    'features.beer',
    'features.wine',
    'features.smallPlates',
    'features.quickMeals',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Services */}
        <div className="mb-16">
          <h2 className="text-center mb-8 dark:text-white">{t('features.servicesTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                  </div>
                  <h3 className="dark:text-white">{t(service.labelKey)}</h3>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Highlights & Specialties */}
        <div className="mb-16">
          <h2 className="text-center mb-8 dark:text-white">{t('features.highlightsTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                  <Icon className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
                  <p className="text-sm dark:text-gray-300">{t(highlight.labelKey)}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Popular For */}
        <div className="mb-16">
          <h2 className="text-center mb-8 dark:text-white">{t('features.popularTitle')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularFor.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                  <Icon className="w-8 h-8 text-pink-600 dark:text-pink-400 mx-auto mb-3" />
                  <p className="dark:text-white">{t(item.labelKey)}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Offerings */}
        <div>
          <h2 className="text-center mb-8 dark:text-white">{t('features.offeringsTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white dark:bg-gray-700 border border-pink-200 dark:border-pink-800 rounded-full hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors dark:text-white"
              >
                {t(offering)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
