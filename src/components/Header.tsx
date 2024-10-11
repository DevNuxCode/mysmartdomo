import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ShoppingCart, Globe } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

interface HeaderProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setIsCartOpen }) => {
  const { cart } = useCart();
  const { t, language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'lilac':
        return 'bg-purple-200 text-purple-900';
      case 'red':
        return 'bg-red-200 text-red-900';
      case 'blue':
        return 'bg-blue-200 text-blue-900';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className={`${getThemeClasses()} shadow-sm sticky top-0 z-50`}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Home className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold">SmartHaven</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">{t('nav.home')}</Link>
          <Link to="/" className="hover:text-blue-600">{t('nav.products')}</Link>
          <Link to="/" className="hover:text-blue-600">{t('nav.services')}</Link>
          <Link to="/about" className="hover:text-blue-600">{t('nav.about')}</Link>
          <Link to="/contact" className="hover:text-blue-600">{t('nav.contact')}</Link>
          <Link to="/blog" className="hover:text-blue-600">{t('nav.blog')}</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-full hover:bg-gray-200 transition duration-300"
            aria-label="Toggle Language"
          >
            <Globe className="h-6 w-6" />
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            {t('nav.getStarted')}
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <ShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemsCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header