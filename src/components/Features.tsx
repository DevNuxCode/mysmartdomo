import React from 'react'
import { Smartphone, Shield, Settings } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'

const Features = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const features = [
    {
      icon: <Smartphone className="h-12 w-12 text-blue-600" />,
      title: t('features.mobileControl'),
      description: t('features.mobileControlDesc')
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-600" />,
      title: t('features.security'),
      description: t('features.securityDesc')
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-600" />,
      title: t('features.energy'),
      description: t('features.energyDesc')
    }
  ]

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'lilac':
        return 'bg-purple-100 text-purple-900';
      case 'red':
        return 'bg-red-100 text-red-900';
      case 'blue':
        return 'bg-blue-100 text-blue-900';
      default:
        return 'bg-gray-50 text-gray-800';
    }
  };

  return (
    <section className={`py-20 ${getThemeClasses()}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features