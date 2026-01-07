import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import OrderButton from "./OrderButton";

interface MenuItem {
  nameKey: string;
  price: string;
  image: string;
}

const menuByDay: Record<string, MenuItem[]> = {
  Monday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },

    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "1,500 FCFA",
      image: "/images/eru1.jpg",
    },
    {
      nameKey: "menu.achu",
      price: "2,000 FCFA",
      image: "/images/achu.jpg",
    },
    {
      nameKey: "menu.achuEgusi",
      price: "2,500 FCFA",
      image: "/images/taro.jpg",
    },
    {
      nameKey: "menu.kati",
      price: "2500FCFA",
      image: "/images/kati.jpg",
    },
    {
      nameKey: "menu.tripe",
      price: "3000FCFA",
      image: "/images/tripe.jpg",
    },
  ],
  Tuesday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.achu",
      price: "2,000 FCFA",
      image: "/images/achu.jpg",
    },
    {
      nameKey: "menu.achuEgusi",
      price: "2,500 FCFA",
      image: "/images/taro.jpg",
    },
    {
      nameKey: "menu.ekwang",
      price: "3000FCFA",
      image: "/images/ekwang.jpg",
    },
    {
      nameKey: "menu.pouletdj",
      price: "2500FCFA",
      image: "/images/pouletdg.jpg",
    },
    {
      nameKey: "menu.snail",
      price: "3000FCFA",
      image: "/images/snail.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "1500FCFA",
      image: "/images/eru1.jpg",
    },
  ],
  Wednesday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.egusiokro",
      price: "2000FCFA",
      image: "/images/egusisoup.jpg",
    },
    {
      nameKey: "menu.kwacoco",
      price: "2500FCFA",
      image: "/images/kwa.jpg",
    },
    {
      nameKey: "menu.ndole",
      price: "2500FCFA",
      image: "/images/ndole.jpg",
    },
    {
      nameKey: "menu.whitebeans",
      price: "2000FCFA",
      image: "/images/rice.jpg",
    },
  ],
  Thursday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.kati",
      price: "2500fcfa",
      image: "/images/kati.jpg",
    },
    {
      nameKey: "menu.pouletdj",
      price: "2500FCFA",
      image: "/images/pouletdg2.jpg",
    },
    {
      nameKey: "menu.tripe",
      price: "3000FCFA",
      image: "/images/tripe.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "2500FCFA",
      image: "/images/eru1.jpg",
    },
  ],
  Friday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "1500 FCFA",
      image: "/images/eru1.jpg",
    },
    {
      nameKey: "menu.achu",
      price: "200 FCFA",
      image: "/images/achu.jpg",
    },
    {
      nameKey: "menu.achuEgusi",
      price: "2,500 FCFA",
      image: "/images/taro.jpg",
    },
    {
      nameKey: "menu.ekwang",
      price: "3000FCFA",
      image: "/images/ekwang.jpg",
    },
    {
      nameKey: "menu.whitebeans",
      price: "2000FCA",
      image: "/images/rice.jpg",
    },
  ],
  Saturday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice.jpg",
    },
    {
      nameKey: "menu.snail",
      price: "3000FCFA",
      image: "/images/snail.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "1,500 FCFA",
      image: "/images/eru1.jpg",
    },
    {
      nameKey: "menu.achu",
      price: "2,000 FCFA",
      image: "/images/achu.jpg",
    },
    {
      nameKey: "menu.achuEgusi",
      price: "2,500 FCFA",
      image: "/images/taro.jpg",
    },
    {
      nameKey: "menu.ndole,",
      price: "2500FCFA",
      image: "/images/ndole.jpg",
    },
  ],
  Sunday: [
    {
      nameKey: "menu.pizzaMeat",
      price: "4,500 FCFA",
      image: "/images/pizzameat.jpg",
    },
    {
      nameKey: "menu.pizzaChicken",
      price: "5,500 FCFA",
      image: "/images/pizzapoulet.jpg",
    },
    {
      nameKey: "menu.eruGarri",
      price: "1,500 FCFA",
      image: "/images/eru.jpg",
    },
    {
      nameKey: "menu.achu",
      price: "2,000 FCFA",
      image: "/images/achu.jpg",
    },
    {
      nameKey: "menu.achuEgusi",
      price: "2,500 FCFA",
      image: "/images/taro.jpg",
    },
    {
      nameKey: "menu.FriedRice",
      price: "2000FCFA",
      image: "/images/friedrice1.jpg",
    },
    {
      nameKey: "menu.fish",
      price: "3500FCFA",
      image: "/images/fish.jpg",
    },
    {
      nameKey: "menu.pouletPane",
      price: "3500FCFA",
      image: "/images/pane.jpg",
    },
    {
      nameKey: "menu.pepper",
      price: "3000FCFA",
      image: "/images/goat.jpg",
    },
  ],
};

export function Menu() {
  const { language, t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState("Monday");
  const days = Object.keys(menuByDay);

  const whatsappMessage =
    language === "en"
      ? "Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you."
      : "Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.";

  return (
    <section
      id="menu"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 dark:text-white">{t("menu.title")}</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("menu.subtitle")}
          </p>
        </div>

        <Tabs
          value={selectedDay}
          onValueChange={setSelectedDay}
          className="w-full"
        >
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
                  <Card
                    key={index}
                    className="relative overflow-hidden h-64 group dark:bg-gray-700"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={t(item.nameKey)}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col items-start justify-end p-4">
                      <h3 className="text-white text-lg font-semibold">
                        {t(item.nameKey)}
                      </h3>

                      <p className="text-pink-300 font-medium">{item.price}</p>
                      <OrderButton dishName={t(item.nameKey)} />

                    </div>
                    
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
