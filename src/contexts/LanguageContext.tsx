
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'bn' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    bn: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  home: { bn: "হোম", en: "Home" },
  jokeZone: { bn: "হাসির জোন", en: "Joke Zone" },
  quizPuzzle: { bn: "কুইজ ও পাজল", en: "Quiz & Puzzle" },
  memeGallery: { bn: "মিম গ্যালারি", en: "Meme Gallery" },
  cartoonComics: { bn: "কার্টুন ও কমিক্স", en: "Cartoon & Comics" },
  miniGames: { bn: "মিনি গেমস", en: "Mini Games" },
  aiTools: { bn: "এআই টুলস", en: "AI Tools" },
  funLearning: { bn: "মজার শিক্ষা", en: "Fun Learning" },
  contact: { bn: "যোগাযোগ", en: "Contact" },
  
  // Common
  startFun: { bn: "মজা শুরু করুন", en: "Start Fun" },
  exploreCategories: { bn: "বিভাগ দেখুন", en: "Explore Categories" },
  playNow: { bn: "এখনই খেলুন", en: "Play Now" },
  readMore: { bn: "আরও পড়ুন", en: "Read More" },
  
  // Homepage
  welcomeTitle: { bn: "মজার দুনিয়ায় স্বাগতম!", en: "Welcome to Mojar Dunia!" },
  welcomeSubtitle: { bn: "সবার জন্য মজা, হাসি আর শেখার জায়গা", en: "Fun, laughter and learning for everyone" },
  
  // Features
  featuredJokes: { bn: "বিশেষ হাসির গল্প", en: "Featured Jokes" },
  featuredQuiz: { bn: "মজার কুইজ", en: "Fun Quiz" },
  featuredGames: { bn: "মিনি গেমস", en: "Mini Games" },
  featuredMemes: { bn: "ট্রেন্ডিং মিম", en: "Trending Memes" },
  featuredTools: { bn: "এআই টুলস", en: "AI Tools" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'bn' | 'en'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
