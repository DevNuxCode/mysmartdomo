import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Footer = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'lilac':
        return 'bg-purple-800 text-white';
      case 'red':
        return 'bg-red-800 text-white';
      case 'blue':
        return 'bg-blue-800 text-white';
      default:
        return 'bg-gray-800 text-white';
    }
  };

  return (
    <footer className={`${getThemeClasses()} py-12`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">SmartHaven</h3>
            <p className="text-gray-400">Transforming homes with smart technology</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">{t('nav.home')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('nav.products')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('nav.services')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">{t('nav.about')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <p className="text-gray-400">1234 Smart Street</p>
            <p className="text-gray-400">Techville, TX 12345</p>
            <p className="text-gray-400">contact@smarthaven.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin /></a>
            </div>
            <ThemeToggle />
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 SmartHaven. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer