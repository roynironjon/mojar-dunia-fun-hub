
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Sparkles, Heart, Star, Trophy, Users, Clock, Gift, Zap, BookOpen, Play } from 'lucide-react';

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

  const achievements = [
    { icon: '🎉', count: '50K+', label: 'Happy Users', color: 'text-blue-500' },
    { icon: '🏆', count: '100+', label: 'Awards Won', color: 'text-yellow-500' },
    { icon: '🎮', count: '25+', label: 'Games Available', color: 'text-green-500' },
    { icon: '😂', count: '1000+', label: 'Jokes Shared', color: 'text-purple-500' }
  ];

  const testimonials = [
    {
      name: 'রাহুল আহমেদ',
      role: 'Student',
      comment: 'এই সাইটটি সত্যিই অসাধারণ! প্রতিদিন নতুন কিছু শিখছি।',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop',
      rating: 5
    },
    {
      name: 'সারা খান',
      role: 'Teacher',
      comment: 'My students love the educational games here!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c96ff8ae?w=80&h=80&fit=crop',
      rating: 5
    },
    {
      name: 'আর্নব রায়',
      role: 'Parent',
      comment: 'Perfect platform for kids entertainment and learning.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
      rating: 5
    }
  ];

  const popularContent = [
    {
      type: 'Joke',
      title: 'Why did the programmer quit?',
      engagement: '2.5K likes',
      thumbnail: '😂',
      link: '/jokes'
    },
    {
      type: 'Game',
      title: 'Memory Challenge',
      engagement: '1.8K plays',
      thumbnail: '🧠',
      link: '/games'
    },
    {
      type: 'Quiz',
      title: 'General Knowledge',
      engagement: '3.2K attempts',
      thumbnail: '🎯',
      link: '/quiz'
    },
    {
      type: 'Meme',
      title: 'Study Life Memes',
      engagement: '4.1K shares',
      thumbnail: '📚',
      link: '/memes'
    }
  ];

  const weeklyHighlights = [
    { day: 'Monday', event: 'New Jokes Added', icon: '😄', color: 'bg-yellow-100 text-yellow-600' },
    { day: 'Wednesday', event: 'Quiz Competition', icon: '🧠', color: 'bg-blue-100 text-blue-600' },
    { day: 'Friday', event: 'Meme Friday', icon: '🎭', color: 'bg-purple-100 text-purple-600' },
    { day: 'Sunday', event: 'Family Game Day', icon: '🎮', color: 'bg-green-100 text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Section 1: Hero Section */}
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

      {/* Section 2: Features Grid */}
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

      {/* Section 3: Achievements & Stats */}
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
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl mb-2">{achievement.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{achievement.count}</div>
                <div className="text-purple-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Popular Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              🔥 Trending This Week
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what everyone is enjoying right now!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularContent.map((content, index) => (
              <Link
                key={index}
                to={content.link}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3">{content.thumbnail}</div>
                  <span className="inline-block bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-semibold mb-2">
                    {content.type}
                  </span>
                  <h3 className="font-bold text-gray-800 mb-2">{content.title}</h3>
                  <p className="text-gray-600 text-sm">{content.engagement}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: User Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              💖 What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from our amazing community members!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Weekly Highlights */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              📅 This Week's Special Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these exciting weekly events!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weeklyHighlights.map((highlight, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${highlight.color} text-2xl mb-4`}>
                    {highlight.icon}
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{highlight.day}</h3>
                  <p className="text-gray-600 text-sm">{highlight.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Interactive Features */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎮 Interactive Entertainment Hub
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Experience the future of online entertainment with our cutting-edge features!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Fun</h3>
              <p className="opacity-90">Get personalized jokes and games tailored just for you!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2">Competitions</h3>
              <p className="opacity-90">Join weekly contests and win amazing prizes!</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="opacity-90">Connect with fellow fun-lovers from around the world!</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-tools"
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Zap size={20} />
              <span>Try AI Tools</span>
            </Link>
            <Link
              to="/games"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 inline-flex items-center justify-center space-x-2"
            >
              <Play size={20} />
              <span>Play Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Call to Action */}
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
