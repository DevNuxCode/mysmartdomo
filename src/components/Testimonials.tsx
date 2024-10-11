import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();

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
        return 'bg-gray-100 text-gray-800';
    }
  };

  const successStories = [
    {
      name: "Aisha Patel",
      community: "Harmony Heights",
      story: t('testimonials.story1'),
    },
    {
      name: "Jørgen Larsen",
      community: "Fjord View Estates",
      story: t('testimonials.story2'),
    },
    {
      name: "Zoe Chen",
      community: "Tranquil Meadows",
      story: t('testimonials.story3'),
    },
  ];

  const clientTestimonials = [
    {
      name: "Liam O'Connor",
      community: "Emerald Valley",
      testimonial: t('testimonials.testimonial1'),
      rating: 5,
    },
    {
      name: "Sofia Rodriguez",
      community: "Sunflower Fields",
      testimonial: t('testimonials.testimonial2'),
      rating: 5,
    },
    {
      name: "Yuki Tanaka",
      community: "Cherry Blossom Gardens",
      testimonial: t('testimonials.testimonial3'),
      rating: 5,
    },
  ];

  return (
    <section className={`py-20 ${getThemeClasses()}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('testimonials.title')}</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">{t('testimonials.successStories')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="mb-4">{story.story}</p>
                <p className="font-semibold">{story.name}</p>
                <p className="text-sm text-gray-600">{story.community}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">{t('testimonials.clientSay')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="mb-4">{testimonial.testimonial}</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.community}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;