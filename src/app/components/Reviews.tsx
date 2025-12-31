import { Star } from 'lucide-react';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export function Reviews() {
  const { t } = useLanguage();

  const reviews = [
    {
      textKey: 'reviews.review1',
      authorKey: 'reviews.customerReview',
    },
    {
      textKey: 'reviews.review2',
      authorKey: 'reviews.customerReview',
    },
    {
      textKey: 'reviews.review3',
      authorKey: 'reviews.customerReview',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 ${
                    star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-yellow-400/50 text-yellow-400/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <h2 className="mb-2 dark:text-white">{t('reviews.title')}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">4.6 / 5 {t('reviews.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
              <div className="flex mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300 italic">"{t(review.textKey)}"</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">— {t(review.authorKey)}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">{t('reviews.whatCustomersSay')}</p>
          <a
            href="https://maps.google.com/?q=Jouvence+Yaounde+Jerry+Residence"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 transition-colors"
          >
            {t('reviews.viewAll')} →
          </a>
        </div>
      </div>
    </section>
  );
}
