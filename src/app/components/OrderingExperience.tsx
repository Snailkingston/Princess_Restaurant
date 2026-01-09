import { MessageSquare, CheckCircle2, MapPin, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function OrderingExperience() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      titleKey: 'ordering.step1Title',
      descKey: 'ordering.step1Desc',
    },
    {
      icon: CheckCircle2,
      titleKey: 'ordering.step2Title',
      descKey: 'ordering.step2Desc',
    },
    {
      icon: MapPin,
      titleKey: 'ordering.step3Title',
      descKey: 'ordering.step3Desc',
    },
    {
      icon: Clock,
      titleKey: 'ordering.step4Title',
      descKey: 'ordering.step4Desc',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">{t('ordering.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('ordering.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-pink-600 dark:text-pink-400" />
                </div>
                <div className="text-sm text-pink-600 dark:text-pink-400 mb-2">Step {index + 1}</div>
                <h3 className="mb-2 dark:text-white">{t(step.titleKey)}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t(step.descKey)}</p>
              </Card>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}