import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { OrderingExperience } from './components/OrderingExperience';
import { Features } from './components/Features';
import { Atmosphere } from './components/Atmosphere';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Navigation />
          <Hero />
          <Menu />
          <OrderingExperience />
          <Features />
          <Atmosphere />
          <Reviews />
          <Location />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
