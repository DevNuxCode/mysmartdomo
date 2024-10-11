import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

// Import all blog posts
import post1 from '../data/blog-posts/post1.md';
import post2 from '../data/blog-posts/post2.md';
import post3 from '../data/blog-posts/post3.md';
import post4 from '../data/blog-posts/post4.md';
import post5 from '../data/blog-posts/post5.md';
import post6 from '../data/blog-posts/post6.md';

const blogPosts = [post1, post2, post3, post4, post5, post6];

const Blog: React.FC = () => {
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

  return (
    <div className={`${getThemeClasses()} min-h-screen py-12`}>
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">{t('blog.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.attributes.image} alt={post.attributes.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.attributes.title}</h2>
                <p className="text-gray-600 mb-4">{post.attributes.date}</p>
                <Link 
                  to={`/blog/${index + 1}`} 
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  {t('blog.readMore')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;