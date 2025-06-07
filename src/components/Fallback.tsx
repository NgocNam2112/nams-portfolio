import { Theme } from '@/stores/themeStore';
import React from 'react';

interface IFallbackProps {
  currentTheme: Theme;
}

const Fallback: React.FC<IFallbackProps> = ({ currentTheme }) => {
  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden theme-transition-bg ${currentTheme.colors.hero}`}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float theme-transition-colors"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6 relative z-10">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-600 rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 w-16 h-16 border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full animate-spin"
            style={{ animationDuration: '0.8s' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-light text-gray-300 animate-pulse tracking-wide">
            Loading
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div
              className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fallback;
