
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: '😂',
      title: t('featuredJokes'),
      description: 'Hilarious jokes for everyone',
      link: '/jokes',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🧠',
      title: t('featuredQuiz'),
      description: 'Brain teasers and fun quizzes',
      link: '/quiz',
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: '🕹️',
      title: t('featuredGames'),
      description: 'Exciting mini games to play',
      link: '/games',
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: '📸',
      title: t('featuredMemes'),
      description: 'Trending memes and funny content',
      link: '/memes',
      color: 'from-pink-400 to-red-500'
    },
    {
      icon: '✨',
      title: t('featuredTools'),
      description: 'AI-powered fun tools',
      link: '/ai-tools',
      color: 'from-purple-400 to-indigo-500'
    },
    {
      icon: '📚',
      title: 'Fun Learning',
      description: 'Learn while having fun',
      link: '/learning',
      color: 'from-emerald-400 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-bounce">
            <span className="text-8xl">🌟</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {t('welcomeTitle')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('welcomeSubtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/jokes"
              className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>{t('startFun')}</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
            
            <Link
              to="/quiz"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <span>{t('exploreCategories')}</span>
              <Sparkles className="group-hover:rotate-12 transition-transform duration-200" size={20} />
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-16 h-16 bg-yellow-300 rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-100">
          <div className="w-12 h-12 bg-pink-300 rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-20 left-20 animate-pulse delay-200">
          <div className="w-20 h-20 bg-blue-300 rounded-full opacity-50"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🎉 Explore Our Amazing Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover a world of entertainment, learning, and fun activities designed for everyone!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    <span>Explore Now</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="container mx-auto">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚀 Join Our Growing Community
            </h2>
            <p className="text-xl opacity-90">
              Thousands of people are already having fun with us!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '😂', number: '10K+', label: 'Jokes Shared' },
              { icon: '🎮', number: '25K+', label: 'Games Played' },
              { icon: '🧠', number: '15K+', label: 'Quizzes Taken' },
              { icon: '❤️', number: '50K+', label: 'Happy Users' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Start Your Fun Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join millions of users who are already enjoying our amazing collection of games, jokes, quizzes, and more!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jokes"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Start Laughing</span>
                <span>😄</span>
              </Link>
              <Link
                to="/games"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center space-x-2"
              >
                <span>Play Games</span>
                <span>🎮</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
