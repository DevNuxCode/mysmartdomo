import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'hero.title': 'Transform Your Home with SmartHaven',
    'hero.subtitle': 'Experience the future of living with our cutting-edge smart home solutions',
    'hero.cta': 'Explore Products',
    'features.title': 'Why Choose SmartHaven?',
    'features.mobileControl': 'Mobile Control',
    'features.mobileControlDesc': 'Control your entire home from your smartphone, anywhere, anytime.',
    'features.security': 'Enhanced Security',
    'features.securityDesc': 'Advanced security systems to keep your home and family safe.',
    'features.energy': 'Energy Efficiency',
    'features.energyDesc': 'Smart solutions to optimize energy usage and reduce costs.',
    'products.title': 'Featured Products',
    'products.addToCart': 'Add to Cart',
    'cart.title': 'Cart',
    'cart.empty': 'Your cart is empty',
    'cart.subtotal': 'Subtotal',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'testimonials.title': 'Success Stories & Testimonials',
    'testimonials.successStories': 'Success Stories',
    'testimonials.clientSay': 'What Our Clients Say',
    'testimonials.story1': 'SmartHaven transformed our home into a tech paradise. The kids love controlling lights with voice commands, and I feel safer with the smart security system.',
    'testimonials.story2': 'Energy bills dropped by 30% after installing SmartHaven\'s system. The smart thermostat learns our preferences, keeping us comfortable while saving money.',
    'testimonials.story3': 'As a busy professional, SmartHaven has been a game-changer. I can monitor and control my home from anywhere, giving me peace of mind and saving time.',
    'testimonials.testimonial1': 'SmartHaven\'s products are top-notch! The integration was seamless, and now our home feels like it\'s from the future. Highly recommend!',
    'testimonials.testimonial2': 'The customer service is exceptional. They guided us through every step of the installation and were always available for questions. Our smart home is a dream come true!',
    'testimonials.testimonial3': 'I was hesitant about smart home technology, but SmartHaven made it so user-friendly. Now I can\'t imagine life without it. Thank you for simplifying our lives!',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    'hero.title': 'Transforma tu hogar con SmartHaven',
    'hero.subtitle': 'Experimenta el futuro de la vida con nuestras soluciones inteligentes de vanguardia',
    'hero.cta': 'Explorar Productos',
    'features.title': '¿Por qué elegir SmartHaven?',
    'features.mobileControl': 'Control Móvil',
    'features.mobileControlDesc': 'Controla toda tu casa desde tu smartphone, en cualquier lugar y momento.',
    'features.security': 'Seguridad Mejorada',
    'features.securityDesc': 'Sistemas de seguridad avanzados para mantener seguros tu hogar y familia.',
    'features.energy': 'Eficiencia Energética',
    'features.energyDesc': 'Soluciones inteligentes para optimizar el uso de energía y reducir costos.',
    'products.title': 'Productos Destacados',
    'products.addToCart': 'Añadir al Carrito',
    'cart.title': 'Carrito',
    'cart.empty': 'Tu carrito está vacío',
    'cart.subtotal': 'Subtotal',
    'cart.total': 'Total',
    'cart.checkout': 'Pagar',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'testimonials.title': 'Historias de Éxito y Testimonios',
    'testimonials.successStories': 'Historias de Éxito',
    'testimonials.clientSay': 'Lo que Dicen Nuestros Clientes',
    'testimonials.story1': 'SmartHaven transformó nuestro hogar en un paraíso tecnológico. A los niños les encanta controlar las luces con comandos de voz, y yo me siento más segura con el sistema de seguridad inteligente.',
    'testimonials.story2': 'Las facturas de energía se redujeron un 30% después de instalar el sistema de SmartHaven. El termostato inteligente aprende nuestras preferencias, manteniéndonos cómodos mientras ahorramos dinero.',
    'testimonials.story3': 'Como profesional ocupada, SmartHaven ha sido un cambio de juego. Puedo monitorear y controlar mi casa desde cualquier lugar, dándome tranquilidad y ahorrando tiempo.',
    'testimonials.testimonial1': '¡Los productos de SmartHaven son de primera! La integración fue perfecta y ahora nuestra casa se siente como si fuera del futuro. ¡Altamente recomendado!',
    'testimonials.testimonial2': 'El servicio al cliente es excepcional. Nos guiaron en cada paso de la instalación y siempre estuvieron disponibles para preguntas. ¡Nuestra casa inteligente es un sueño hecho realidad!',
    'testimonials.testimonial3': 'Estaba dudoso sobre la tecnología de hogar inteligente, pero SmartHaven lo hizo muy fácil de usar. Ahora no puedo imaginar la vida sin ella. ¡Gracias por simplificar nuestras vidas!',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};