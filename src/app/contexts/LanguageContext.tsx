import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {

   
    // Navigation
    'nav.menu': 'Menu',
    'nav.location': 'Location',
    'nav.callNow': 'Call Now',
    'nav.orderWhatsApp': 'Order on WhatsApp',

    // Hero
    'hero.title': 'Cake Princess Restaurant',
    'hero.location': 'Jouvence, Yaoundé',
    'hero.description': 'Local restaurant serving pizza, traditional dishes, and desserts in a calm and cozy environment.',
    'hero.openHours': 'Open: Monday – Sunday | 6:00 AM – 10:00 PM',
    'hero.viewMaps': 'View on Google Maps',
    'hero.ratingGoogle': 'rating on Google Maps',
    'hero.trustedBy': 'Trusted by local customers in Jouvence',
    'hero.services': 'Delivery • Takeaway • Dine-in available',

    // Menu
    'menu.title': 'Our Menu',
    'menu.subtitle': 'Menu may vary by day. Availability confirmed via WhatsApp.',
    'menu.orderNow': 'Order Now on WhatsApp',
    'menu.orderbutton' : 'Order',
    'menu.monday': 'Monday',
    'menu.tuesday': 'Tuesday',
    'menu.wednesday': 'Wednesday',
    'menu.thursday': 'Thursday',
    'menu.friday': 'Friday',
    'menu.saturday': 'Saturday',
    'menu.sunday': 'Sunday',

    // Menu Items
    'menu.pizzaMeat': 'Pizza Meat',
    'menu.pizzaChicken': 'Pizza Chicken',
    'menu.FriedRice' :'Fried Rice and Chicken',
    'menu.eruGarri': 'Eru + Garri / Water Fufu',
    'menu.achu': 'Achu',
    'menu.achuEgusi': 'Achu + Egusi',
    'menu.ekwang' : 'Ekwang',
    'menu.kati' : 'Kati Kati and Fufu Corn',
    'menu.tripe' : 'Tripe sauce and White rice/Dodo',
    'menu.pouletdj' : 'Poulet DJ',
    'menu.snail' : 'Snail sauce and dodo/rice',
    'menu.egusiokro' : 'Egusi okro soup and garri',
    'menu.kwacoco' : 'Kwa coco and kanda soup',
    'menu.ndole' : 'Ndole Plaintain',
    'menu.whitebeans' : 'White beans and rice/dodo',
    'menu.katifufu' : 'Kati Kati and fufu',
    'menu.garieru' : 'Garri and Eru',
    'menu.pepper' : 'Pepper soup  Goat meat',
    'menu.fish' : 'Backed Fish',
    'menu.pouletPane' : 'Poulet Pane',

    // Ordering Experience
    'ordering.title': 'How to Order',
    'ordering.subtitle': 'Simple and fast ordering process through WhatsApp',
    'ordering.step1Title': 'Browse the menu',
    'ordering.step1Desc': 'Choose from our selection of pizzas and traditional dishes',
    'ordering.step2Title': 'Click Order on WhatsApp',
    'ordering.step2Desc': 'Get connected directly to our WhatsApp for quick ordering',
    'ordering.step3Title': 'Confirm details',
    'ordering.step3Desc': 'Specify your dish, quantity, and delivery location',
    'ordering.step4Title': 'Receive confirmation',
    'ordering.step4Desc': 'Get your order confirmed and estimated delivery time',
    'ordering.messageTitle': 'Pre-filled WhatsApp Message',
    'ordering.messageTemplate': 'Hello Cake Princess,\n\nI would like to order:\nDish(s): ___\nQuantity: ___\nLocation: ___\n\nThank you.',

    // Features
    'features.servicesTitle': 'Our Services',
    'features.delivery': 'Delivery',
    'features.takeaway': 'Takeaway',
    'features.dineIn': 'Dine-in',
    'features.highlightsTitle': 'Highlights & Specialties',
    'features.beerSelection': 'Great beer selection',
    'features.desserts': 'Excellent desserts',
    'features.quickBites': 'Quick bites available',
    'features.lunch': 'Ideal for lunch',
    'features.dinner': 'Perfect for dinner',
    'features.popularTitle': 'Popular For',
    'features.lunchTime': 'Lunch',
    'features.dinnerTime': 'Dinner',
    'features.soloDining': 'Solo dining',
    'features.groupDining': 'Group dining',
    'features.offeringsTitle': 'Offerings',
    'features.alcohol': 'Alcohol',
    'features.beer': 'Beer',
    'features.wine': 'Wine',
    'features.smallPlates': 'Small plates',
    'features.quickMeals': 'Quick meals',

    // Atmosphere
    'atmosphere.title': 'Atmosphere',
    'atmosphere.casual': 'Casual',
    'atmosphere.casualDesc': 'Relaxed and comfortable setting',
    'atmosphere.quiet': 'Quiet',
    'atmosphere.quietDesc': 'Peaceful dining experience',
    'atmosphere.trendy': 'Trendy',
    'atmosphere.trendyDesc': 'Modern and stylish ambiance',
    'atmosphere.cozy': 'Cozy',
    'atmosphere.cozyDesc': 'Warm and inviting atmosphere',
    'atmosphere.romantic': 'Romantic',
    'atmosphere.romanticDesc': 'Perfect for special moments',
    'atmosphere.groupFriendly': 'Group-friendly',
    'atmosphere.groupFriendlyDesc': 'Great for gatherings',
    'atmosphere.touristFriendly': 'Tourist-friendly',
    'atmosphere.touristFriendlyDesc': 'Welcoming to visitors',
    'atmosphere.diningOptionsTitle': 'Dining Options',
    'atmosphere.amenitiesTitle': 'Amenities',
    'atmosphere.planningTitle': 'Planning & Accessibility',
    'atmosphere.lunchOption': 'Lunch',
    'atmosphere.dinnerOption': 'Dinner',
    'atmosphere.dessertOption': 'Dessert',
    'atmosphere.catering': 'Catering',
    'atmosphere.tableService': 'Table service',
    'atmosphere.barOnSite': 'Bar on site',
    'atmosphere.toiletAvailable': 'Toilet available',
    'atmosphere.acceptsReservations': 'Accepts reservations',
    'atmosphere.goodForChildren': 'Good for children',
    'atmosphere.freeParking': 'Free street parking available',

    // Reviews
    'reviews.title': 'Customer Reviews',
    'reviews.subtitle': 'from Google Reviews',
    'reviews.whatCustomersSay': 'What customers say about us',
    'reviews.viewAll': 'View all reviews on Google Maps',
    'reviews.review1': 'Great food and friendly service.',
    'reviews.review2': 'One of the best places to eat in Jouvence.',
    'reviews.review3': 'Clean, calm, and delicious meals.',
    'reviews.customerReview': 'Customer Review',

    // Location
    'location.title': 'Visit Us',
    'location.subtitle': 'Find us in Jouvence, Yaoundé',
    'location.addressTitle': 'Address',
    'location.address': "Jerry's Residence",
    'location.city': 'Jouvence, Yaoundé',
    'location.country': 'Cameroon',
    'location.getDirections': 'Get Directions',
    'location.contactTitle': 'Contact',
    'location.whatsappUs': 'WhatsApp Us',
    'location.hoursTitle': 'Opening Hours',
    'location.hoursText': 'Monday – Sunday',
    'location.hoursTime': '6:00 AM – 10:00 PM',

    // Footer
    'footer.description': 'Local restaurant serving pizza, traditional dishes, and desserts in a calm and cozy environment.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.allRights': 'All rights reserved.',
    'footer.demoTitle': 'Demo Website',
    'footer.demoText': 'Not the official website',
    'footer.demoSubtext': 'Built to showcase online ordering and customer visibility',
  },
  fr: {

     
    // Navigation
    'nav.menu': 'Menu',
    'nav.location': 'Localisation',
    'nav.callNow': 'Appelez maintenant',
    'nav.orderWhatsApp': 'Commander sur WhatsApp',

    // Hero
    'hero.title': 'Restaurant Cake Princess',
    'hero.location': 'Jouvence, Yaoundé',
    'hero.description': 'Restaurant local servant des pizzas, des plats traditionnels et des desserts dans un environnement calme et confortable.',
    'hero.openHours': 'Ouvert : Lundi – Dimanche | 6h00 – 22h00',
    'hero.viewMaps': 'Voir sur Google Maps',
    'hero.ratingGoogle': 'note sur Google Maps',
    'hero.trustedBy': 'Approuvé par les clients locaux de Jouvence',
    'hero.services': 'Livraison • À emporter • Sur place disponible',

    // Menu
    'menu.title': 'Notre Menu',
    'menu.subtitle': 'Le menu peut varier selon les jours. Disponibilité confirmée via WhatsApp.',
    'menu.orderNow': 'Commander maintenant sur WhatsApp',
    'menu.orderbutton' : 'Commander',
    'menu.monday': 'Lundi',
    'menu.tuesday': 'Mardi',
    'menu.wednesday': 'Mercredi',
    'menu.thursday': 'Jeudi',
    'menu.friday': 'Vendredi',
    'menu.saturday': 'Samedi',
    'menu.sunday': 'Dimanche',

    // Menu Items
    'menu.pizzaMeat': 'Pizza Viande',
    'menu.pizzaChicken': 'Pizza Poulet',
    'menu.FriedRice' :'Fried Rice avec poulet',
    'menu.eruGarri': 'Eru + Garri / Water Fufu',
    'menu.achu': 'Taro',
    'menu.achuEgusi': 'Taro + Pitache',
    'menu.egusipudding' : 'Achu with Egusi pudding',
    'menu.ekwang' : 'Ekwang',
    'menu.kati' : 'Kati Kati and foufou de mais',
    'menu.tripe' : 'Tripe sauce and riz blanc/Dodo',
    'menu.pouletdj' : 'Poulet DJ',
    'menu.snail' : 'Snail sauce and dodo/riz',
    'menu.egusiokro' : 'sauce pistache gombo et fufu',
    'menu.kwacoco' : 'Kwa coco and kanda soup',
    'menu.ndole' : 'Ndole Plaintain',
    'menu.whitebeans' : 'haricot blanc et riz/dodo',
    'menu.katifufu' : 'Kati Kati et fufu',
    'menu.garieru' : 'water fufu/ gari et Eru',
    'menu.pepper' : 'Bouillion de chevre',
    'menu.fish' : 'poison breezee',
    'menu.pouletPane' : 'Poulet Pane',
    // Ordering Experience
    'ordering.title': 'Comment Commander',
    'ordering.subtitle': 'Processus de commande simple et rapide via WhatsApp',
    'ordering.step1Title': 'Parcourir le menu',
    'ordering.step1Desc': 'Choisissez parmi notre sélection de pizzas et plats traditionnels',
    'ordering.step2Title': 'Cliquez sur Commander sur WhatsApp',
    'ordering.step2Desc': 'Connectez-vous directement à notre WhatsApp pour une commande rapide',
    'ordering.step3Title': 'Confirmer les détails',
    'ordering.step3Desc': 'Spécifiez votre plat, quantité et lieu de livraison',
    'ordering.step4Title': 'Recevoir la confirmation',
    'ordering.step4Desc': 'Obtenez la confirmation de votre commande et le délai de livraison',
    'ordering.messageTitle': 'Message WhatsApp',
    'ordering.messageTemplate': 'Bonjour Cake Princess,\n\nJe voudrais commander :\nPlat(s) : ___\nQuantité : ___\nLocalisation : ___\n\nMerci.',

    // Features
    'features.servicesTitle': 'Nos Services',
    'features.delivery': 'Livraisons',
    'features.takeaway': 'À emporterr',
    'features.dineIn': 'Sur place',
    'features.highlightsTitle': 'Points forts et Spécialités',
    'features.beerSelection': 'Excellente sélection de bières',
    'features.desserts': 'Excellents dessert',
    'features.quickBites': 'Repas rapides disponibles',
    'features.lunch': 'Idéal pour le déjeuner',
    'features.dinner': 'Parfait pour le dînerr',
    'features.popularTitle': 'Populaire pour',
    'features.lunchTime': 'Déjeuner',
    'features.dinnerTime': 'Dîner',
    'features.soloDining': 'Repas en solo',
    'features.groupDining': 'Repas de groupe',
    'features.offeringsTitle': 'Offres',
    'features.alcohol': 'Alcool',
    'features.beer': 'Bière',
    'features.wine': 'Vin',
    'features.smallPlates': 'Petites assiettes',
    'features.quickMeals': 'Repas rapides',

    // Atmosphere
    'atmosphere.title': 'Ambiance',
    'atmosphere.casual': 'Décontracté',
    'atmosphere.casualDesc': 'Cadre détendu et confortable',
    'atmosphere.quiet': 'Calme',
    'atmosphere.quietDesc': 'Expérience culinaire paisible',
    'atmosphere.trendy': 'Branché',
    'atmosphere.trendyDesc': 'Ambiance moderne et élégante',
    'atmosphere.cozy': 'Confortable',
    'atmosphere.cozyDesc': 'Atmosphère chaleureuse et accueillante',
    'atmosphere.romantic': 'Romantique',
    'atmosphere.romanticDesc': 'Parfait pour les moments spéciaux',
    'atmosphere.groupFriendly': 'Convivial pour groupes',
    'atmosphere.groupFriendlyDesc': 'Idéal pour les rassemblements',
    'atmosphere.touristFriendly': 'Accueillant aux touristes',
    'atmosphere.touristFriendlyDesc': 'Accueil chaleureux aux visiteurs',
    'atmosphere.diningOptionsTitle': 'Options de restauration',
    'atmosphere.amenitiesTitle': 'Commodités',
    'atmosphere.planningTitle': 'Planification et Accessibilité',
    'atmosphere.lunchOption': 'Déjeuner',
    'atmosphere.dinnerOption': 'Dîner',
    'atmosphere.dessertOption': 'Dessert',
    'atmosphere.catering': 'Traiteur',
    'atmosphere.tableService': 'Service à table',
    'atmosphere.barOnSite': 'Bar sur place',
    'atmosphere.toiletAvailable': 'Toilettes disponibles',
    'atmosphere.acceptsReservations': 'Accepte les réservations',
    'atmosphere.goodForChildren': 'Adapté aux enfants',
    'atmosphere.freeParking': 'Parking gratuit dans la rue',

    // Reviews
    'reviews.title': 'Avis des clients',
    'reviews.subtitle': 'depuis Google Reviews',
    'reviews.whatCustomersSay': 'Ce que disent nos clients',
    'reviews.viewAll': 'Voir tous les avis sur Google Maps',
    'reviews.review1': 'Excellente nourriture et service amical.',
    'reviews.review2': "L'un des meilleurs endroits pour manger à Jouvence.",
    'reviews.review3': 'Propre, calme et repas délicieux.',
    'reviews.customerReview': 'Avis client',

    // Location
    'location.title': 'Nous visiter',
    'location.subtitle': 'Trouvez-nous à Jouvence, Yaoundé',
    'location.addressTitle': 'Adresse',
    'location.address': 'Résidence Jerry',
    'location.city': 'Jouvence, Yaoundé',
    'location.country': 'Cameroun',
    'location.getDirections': 'Obtenir l\'itinéraire',
    'location.contactTitle': 'Contact',
    'location.whatsappUs': 'WhatsApp nous',
    'location.hoursTitle': 'Heures d\'ouverture',
    'location.hoursText': 'Lundi – Dimanche',
    'location.hoursTime': '6h00 – 22h00',

    // Footer
    'footer.description': 'Restaurant local servant des pizzas, des plats traditionnels et des desserts dans un environnement calme et confortable.',
    'footer.quickLinks': 'Liens rapides',
    'footer.contactUs': 'Nous contacter',
    'footer.allRights': 'Tous droits réservés.',
    'footer.demoTitle': 'Site Web de démonstration',
    'footer.demoText': 'Pas le site officiel',
    'footer.demoSubtext': 'Construit pour présenter la commande en ligne et la visibilité client',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
