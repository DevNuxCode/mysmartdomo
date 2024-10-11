import React from 'react'
import { ChevronRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800 text-white';
      case 'lilac':
        return 'bg-purple-600 text-white';
      case 'red':
        return 'bg-red-600 text-white';
      case 'blue':
        return 'bg-blue-600 text-white';
      default:
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white';
    }
  };

  return (
    <div className={`${getThemeClasses()} py-20`}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center">
          {t('hero.cta')}
          <ChevronRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default Hero