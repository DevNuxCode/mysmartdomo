import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-white rounded-full shadow-md p-2">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
        className="appearance-none bg-transparent pr-8 pl-2 py-1 rounded-full focus:outline-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      <Globe className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" size={16} />
    </div>
  );
};

export default LanguageToggle;