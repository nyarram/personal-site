'use client'

import { useTheme } from '@/context/ThemeContext';

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-xl font-bold dark:text-white">NY</a>
          <div className="flex items-center space-x-8">
            <a href="#experience" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Skills</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
            >
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 