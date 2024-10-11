import React from 'react';
import { Users, Lightbulb, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-900 text-white';
      case 'lilac':
        return 'bg-purple-50 text-purple-900';
      case 'red':
        return 'bg-red-50 text-red-900';
      case 'blue':
        return 'bg-blue-50 text-blue-900';
      default:
        return 'bg-white text-gray-800';
    }
  };

  const teamMembers = [
    { name: 'Emma Johnson', role: t('about.ceoRole'), image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { name: 'Michael Chen', role: t('about.ctoRole'), image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
    { name: 'Sarah Patel', role: t('about.designRole'), image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className={`${getThemeClasses()} min-h-screen`}>
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">{t('about.title')}</h1>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{t('about.ourStory')}</h2>
          <p className="mb-4">{t('about.storyPart1')}</p>
          <p>{t('about.storyPart2')}</p>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">{t('about.ourMission')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Lightbulb className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('about.innovation')}</h3>
              <p>{t('about.innovationDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('about.community')}</h3>
              <p>{t('about.communityDesc')}</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t('about.sustainability')}</h3>
              <p>{t('about.sustainabilityDesc')}</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-8">{t('about.ourTeam')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;