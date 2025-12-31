import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItem {
  nameKey: string;
  price: string;
}

const menuByDay: Record<string, MenuItem[]> = {
  Monday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Tuesday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Wednesday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Thursday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Friday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Saturday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
  Sunday: [
    { nameKey: 'menu.pizzaMeat', price: '4,500 FCFA' },
    { nameKey: 'menu.pizzaChicken', price: '5,500 FCFA' },
    { nameKey: 'menu.eruGarri', price: '1,500 FCFA' },
    { nameKey: 'menu.achu', price: '2,000 FCFA' },
    { nameKey: 'menu.achuEgusi', price: '2,500 FCFA' },
  ],
};

export function Menu() {
  const { language, t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState('Monday');
  const days = Object.keys(menuByDay);

  const whatsappMessage = language === 'en' 
    ? 'Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you.'
    : 'Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.';

  return (
    <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">{t('menu.title')}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        <Tabs value={selectedDay} onValueChange={setSelectedDay} className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center mb-8 h-auto p-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
            {days.map((day) => (
              <TabsTrigger
                key={day}
                value={day}
                className="px-4 py-2 data-[state=active]:bg-pink-500 data-[state=active]:text-white dark:text-gray-300"
              >
                {t(`menu.${day.toLowerCase()}`)}
              </TabsTrigger>
            ))}
          </TabsList>

          {days.map((day) => (
            <TabsContent key={day} value={day}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuByDay[day].map((item, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="mb-2 dark:text-white">{t(item.nameKey)}</h3>
                        <p className="text-pink-600 dark:text-pink-400">{item.price}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/670899104?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <span className="text-xl">🟢</span>
            {t('menu.orderNow')}
          </a>
        </div>
      </div>
    </section>
  );
}