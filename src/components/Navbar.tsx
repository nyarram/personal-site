'use client'

import { useTheme } from '@/context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const navLinks = ['experience', 'projects', 'skills', 'contact'] as const;

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/80 dark:bg-gray-950/70 border-b border-gray-200/50 dark:border-white/[0.06] z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
          >
            NY
          </a>
          <div className="flex items-center space-x-8">
            {navLinks.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="text-sm tracking-wide capitalize text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {darkMode ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
