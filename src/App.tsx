import { LanguageProvider } from './contexts/LanguageContext';
import Hero from './components/Hero';
import Features from './components/Features';
import Boat from './components/Boat';
import Experience from './components/Experience';
import Destinations from './components/Destinations';
import Inclusions from './components/Inclusions';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Hero />
        <Boat />
        <Features />
        <Experience />
        <Destinations />
        <Inclusions />
        <Pricing />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
