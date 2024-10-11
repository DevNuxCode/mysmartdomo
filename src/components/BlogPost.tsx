import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
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

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const { theme } = useTheme();

  const post = blogPosts[Number(id) - 1];

  if (!post) {
    return <div>Post not found</div>;
  }

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
        <Link to="/blog" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          &larr; {t('blog.backToBlog')}
        </Link>
        <article className="prose lg:prose-xl mx-auto">
          <img src={post.attributes.image} alt={post.attributes.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <h1>{post.attributes.title}</h1>
          <p className="text-gray-600">
            {t('blog.publishedOn')} {post.attributes.date} {t('blog.by')} {post.attributes.author}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.attributes.tags.map((tag: string, index: number) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;