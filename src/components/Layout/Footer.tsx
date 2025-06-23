
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('home'), icon: '🏠' },
    { path: '/jokes', label: t('jokeZone'), icon: '😂' },
    { path: '/quiz', label: t('quizPuzzle'), icon: '🧠' },
    { path: '/games', label: t('miniGames'), icon: '🕹️' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'YouTube', icon: '📺', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
    { name: 'TikTok', icon: '🎵', url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🌟</span>
              </div>
              <span className="font-bold text-xl">Mojar Dunia</span>
            </div>
            <p className="text-purple-100">
              {t('language') === 'bn' 
                ? 'সবার জন্য মজা, হাসি আর শেখার সেরা জায়গা। এখানে আছে গেমস, জোকস, কুইজ আর আরও অনেক কিছু!'
                : 'The best place for fun, laughter and learning for everyone. Games, jokes, quizzes and so much more!'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center space-x-2 text-purple-100 hover:text-white transition-colors duration-200"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Fun Stats 📊</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                <span>😂 Jokes Shared</span>
                <span className="font-bold">1,234+</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                <span>🧠 Quizzes Taken</span>
                <span className="font-bold">5,678+</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white/10 rounded-lg">
                <span>🎮 Games Played</span>
                <span className="font-bold">9,876+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-purple-100">
              © 2024 Mojar Dunia. Made with ❤️ for fun and learning!
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/contact" className="text-purple-100 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-purple-100 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-purple-100 hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
