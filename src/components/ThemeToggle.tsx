import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { [key: string]: string } = {
    light: 'Light',
    dark: 'Dark',
    lilac: 'Lilac',
    red: 'Red',
    blue: 'Blue',
  };

  return (
    <div className="inline-block">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as any)}
        className="bg-gray-700 text-white rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.entries(themes).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeToggle;