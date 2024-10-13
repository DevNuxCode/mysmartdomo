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
    //nav
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',
    'nav.blog': "Blog",
    //hero
    'hero.title': 'Transform Your Home with SmartDomo',
    'hero.subtitle': 'Experience the future of living with our cutting-edge smart home solutions',
    'hero.cta': 'Explore Products',
    //features
    'features.title': 'Why Choose SmartDomo?',
    'features.mobileControl': 'Mobile Control',
    'features.mobileControlDesc': 'Control your entire home from your smartphone, anywhere, anytime.',
    'features.security': 'Enhanced Security',
    'features.securityDesc': 'Advanced security systems to keep your home and family safe.',
    'features.energy': 'Energy Efficiency',
    'features.energyDesc': 'Smart solutions to optimize energy usage and reduce costs.',
    //product
    'products.title': 'Featured Products',
    'products.addToCart': 'Add to Cart',
    //cart
    'cart.title': 'Cart',
    'cart.empty': 'Your cart is empty',
    'cart.subtotal': 'Subtotal',
    'cart.total': 'Total',
    'cart.checkout': 'Checkout',
    //footer
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
    'footer.t2': 'Transforming homes with smart technology',
    //testimonials
    'testimonials.title': 'Success Stories & Testimonials',
    'testimonials.successStories': 'Success Stories',
    'testimonials.clientSay': 'What Our Clients Say',
    'testimonials.story1': 'SmartDomo transformed our home into a tech paradise. The kids love controlling lights with voice commands, and I feel safer with the smart security system.',
    'testimonials.story2': 'Energy bills dropped by 30% after installing SmartDomo\'s system. The smart thermostat learns our preferences, keeping us comfortable while saving money.',
    'testimonials.story3': 'As a busy professional, SmartDomo has been a game-changer. I can monitor and control my home from anywhere, giving me peace of mind and saving time.',
    'testimonials.testimonial1': 'SmartDomo\'s products are top-notch! The integration was seamless, and now our home feels like it\'s from the future. Highly recommend!',
    'testimonials.testimonial2': 'The customer service is exceptional. They guided us through every step of the installation and were always available for questions. Our smart home is a dream come true!',
    'testimonials.testimonial3': 'I was hesitant about smart home technology, but SmartDomo made it so user-friendly. Now I can\'t imagine life without it. Thank you for simplifying our lives!',
    // ABOUT
    'about.title': 'About SmartDomo',
    'about.ourStory': 'Our Story',
    'about.storyPart1': 'SmartDomo was founded in 2015 by a group of tech enthusiasts who believed that smart home technology should be accessible to everyone. What started as a small startup in a garage has now grown into a leading smart home solutions provider.',
    'about.storyPart2': 'Our journey has been driven by a passion for innovation and a commitment to improving people\'s lives through technology. We\'ve faced challenges, celebrated victories, and learned valuable lessons along the way. Today, we\'re proud to be at the forefront of the smart home revolution, constantly pushing the boundaries of what\'s possible.',
    'about.ourMission': 'Our Mission',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'We strive to create cutting-edge smart home solutions that simplify and enhance everyday life.',
    'about.community': 'Community',
    'about.communityDesc': 'We aim to build a community of smart home enthusiasts and provide excellent support to our customers.',
    'about.sustainability': 'Sustainability',
    'about.sustainabilityDesc': 'We are committed to developing eco-friendly products that help reduce energy consumption and promote sustainability.',
    'about.ourTeam': 'Our Team',
    'about.ceoRole': 'CEO & Co-founder',
    'about.ctoRole': 'CTO & Co-founder',
    'about.designRole': 'Head of Design',
    //contact
    'contact.title': 'Request a Quote',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone Number',
    'contact.address': 'Address',
    'contact.message': 'Message',
    'contact.submit': 'Submit Request',
    'contact.submitSuccess': 'Your request has been submitted successfully. We\'ll get back to you soon!',
    //blog
    'blog.title': 'SmartHaven Blog',
    'blog.readMore': 'Read More',
    'blog.backToBlog': 'Back to Blog',
    'blog.publishedOn': 'Published on',
    'blog.by': 'by',
  },
  es: {
    //nav
    'nav.home': 'Inicio',
    'nav.products': 'Productos',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca de',
    'nav.contact': 'Contacto',
    'nav.getStarted': 'Comenzar',
    'nav.blog': "Articulos",
    //Cabecera
    'hero.title': 'Transforma tu hogar con SmartDomo',
    'hero.subtitle': 'Experimenta el futuro de la vida con nuestras soluciones inteligentes de vanguardia',
    'hero.cta': 'Explorar Productos',
    //Novedades
    'features.title': '¿Por qué elegir SmartDomo?',
    'features.mobileControl': 'Control Móvil',
    'features.mobileControlDesc': 'Controla toda tu casa desde tu smartphone, en cualquier lugar y momento.',
    'features.security': 'Seguridad Mejorada',
    'features.securityDesc': 'Sistemas de seguridad avanzados para mantener seguros tu hogar y familia.',
    'features.energy': 'Eficiencia Energética',
    'features.energyDesc': 'Soluciones inteligentes para optimizar el uso de energía y reducir costos.',
    //producto
    'products.title': 'Productos Destacados',
    'products.addToCart': 'Añadir al Carro',
    //Carro
    'cart.title': 'Carro',
    'cart.empty': 'Su Carro está vacío',
    'cart.subtotal': 'Subtotal',
    'cart.total': 'Total',
    'cart.checkout': 'Pagar',
    //Pied de Pagina
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contact': 'Contacto',
    'footer.followUs': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.t2': 'Transformando hogares con tecnologia inteligente',
    //testimonios
    'testimonials.title': 'Historias de Éxito y Testimonios',
    'testimonials.successStories': 'Historias de Éxito',
    'testimonials.clientSay': 'Lo que Dicen Nuestros Clientes',
    'testimonials.story1': 'SmartDomo transformó nuestro hogar en un paraíso tecnológico. A los niños les encanta controlar las luces con comandos de voz, y yo me siento más segura con el sistema de seguridad inteligente.',
    'testimonials.story2': 'Las facturas de energía se redujeron un 30% después de instalar el sistema de SmartDomo. El termostato inteligente aprende nuestras preferencias, manteniéndonos cómodos mientras ahorramos dinero.',
    'testimonials.story3': 'Como profesional ocupada, SmartDomo ha sido un cambio de juego. Puedo monitorear y controlar mi casa desde cualquier lugar, dándome tranquilidad y ahorrando tiempo.',
    'testimonials.testimonial1': '¡Los productos de SmartDomo son de primera! La integración fue perfecta y ahora nuestra casa se siente como si fuera del futuro. ¡Altamente recomendado!',
    'testimonials.testimonial2': 'El servicio al cliente es excepcional. Nos guiaron en cada paso de la instalación y siempre estuvieron disponibles para preguntas. ¡Nuestra casa inteligente es un sueño hecho realidad!',
    'testimonials.testimonial3': 'Estaba dudoso sobre la tecnología de hogar inteligente, pero SmartDomo lo hizo muy fácil de usar. Ahora no puedo imaginar la vida sin ella. ¡Gracias por simplificar nuestras vidas!',
    //about
    'about.title': 'Acerca de SmartDomo',
    'about.ourStory': 'Nuestra Historia',
    'about.storyPart1': 'SmartDomo fue fundada en 2015 por un grupo de entusiastas de la tecnología que creían que la tecnología de hogar inteligente debería ser accesible para todos. Lo que comenzó como una pequeña startup en un garaje ahora se ha convertido en un proveedor líder de soluciones para hogares inteligentes.',
    'about.storyPart2': 'Nuestro viaje ha sido impulsado por una pasión por la innovación y un compromiso de mejorar la vida de las personas a través de la tecnología. Hemos enfrentado desafíos, celebrado victorias y aprendido valiosas lecciones en el camino. Hoy, estamos orgullosos de estar a la vanguardia de la revolución del hogar inteligente, empujando constantemente los límites de lo posible.',
    'about.ourMission': 'Nuestra Misión',
    'about.innovation': 'Innovación',
    'about.innovationDesc': 'Nos esforzamos por crear soluciones de hogar inteligente de vanguardia que simplifiquen y mejoren la vida cotidiana.',
    'about.community': 'Comunidad',
    'about.communityDesc': 'Nuestro objetivo es construir una comunidad de entusiastas del hogar inteligente y proporcionar un excelente soporte a nuestros clientes.',
    'about.sustainability': 'Sostenibilidad',
    'about.sustainabilityDesc': 'Estamos comprometidos a desarrollar productos ecológicos que ayuden a reducir el consumo de energía y promuevan la sostenibilidad.',
    'about.ourTeam': 'Nuestro Equipo',
    'about.ceoRole': 'CEO y Cofundadora',
    'about.ctoRole': 'CTO y Cofundador',
    'about.designRole': 'Jefa de Diseño',
    //contact
    'contact.title': 'Solicitar una Cotización',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.phone': 'Número de Teléfono',
    'contact.address': 'Dirección',
    'contact.message': 'Mensaje',
    'contact.submit': 'Enviar Solicitud',
    'contact.submitSuccess': '¡Tu solicitud ha sido enviada con éxito. Nos pondremos en contacto contigo pronto!',
    //blog
    'blog.title': 'Blog de SmartHaven',
    'blog.readMore': 'Leer Más',
    'blog.backToBlog': 'Volver al Blog',
    'blog.publishedOn': 'Publicado el',
    'blog.by': 'por',
    

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