import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Heart, Star, Eye, Clock, Trophy, Users, Gift, Zap, BookOpen, Award } from 'lucide-react';

const CartoonComics = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('comics');

  const tabs = [
    { id: 'comics', label: { en: 'Comics Strip', bn: 'কমিক্স স্ট্রিপ' }, icon: '📚' },
    { id: 'gifs', label: { en: 'Animated GIFs', bn: 'অ্যানিমেটেড জিআইএফ' }, icon: '🎬' },
    { id: 'characters', label: { en: 'Characters', bn: 'চরিত্র' }, icon: '🎭' },
    { id: 'cartoons', label: { en: 'Watch Cartoons', bn: 'কার্টুন দেখো' }, icon: '📺' }
  ];

  const comics = [
    {
      id: 1,
      title: { en: 'The Adventures of Chhoto Raja', bn: 'ছোট রাজার অ্যাডভেঞ্চার' },
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop',
      panels: 4,
      likes: 1234,
      views: 5678,
      featured: true
    },
    {
      id: 2,
      title: { en: 'Funny School Days', bn: 'মজার স্কুল জীবন' },
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      panels: 3,
      likes: 987,
      views: 3456,
      featured: false
    },
    {
      id: 3,
      title: { en: 'Village Tales', bn: 'গ্রামের গল্প' },
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      panels: 6,
      likes: 2345,
      views: 7890,
      featured: true
    }
  ];

  const gifs = [
    {
      id: 1,
      title: { en: 'Dancing Cat', bn: 'নাচতে থাকা বিড়াল' },
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=300&fit=crop',
      duration: '3s',
      likes: 3456,
      category: 'animals'
    },
    {
      id: 2,
      title: { en: 'Funny Reaction', bn: 'মজার রিঅ্যাকশন' },
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop',
      duration: '2s',
      likes: 2345,
      category: 'reactions'
    },
    {
      id: 3,
      title: { en: 'Epic Fail', bn: 'এপিক ফেইল' },
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop',
      duration: '4s',
      likes: 4567,
      category: 'funny'
    }
  ];

  const characters = [
    {
      id: 1,
      name: { en: 'Chhoto Raja', bn: 'ছোট রাজা' },
      description: { en: 'A brave little prince who loves adventures', bn: 'একজন সাহসী ছোট রাজপুত্র যে অ্যাডভেঞ্চার ভালোবাসে' },
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=200&fit=crop',
      popularity: 95
    },
    {
      id: 2,
      name: { en: 'Clever Fox', bn: 'চালাক শিয়াল' },
      description: { en: 'The smartest animal in the forest', bn: 'জঙ্গলের সবচেয়ে বুদ্ধিমান প্রাণী' },
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop',
      popularity: 88
    },
    {
      id: 3,
      name: { en: 'Magical Bird', bn: 'জাদুকরী পাখি' },
      description: { en: 'A colorful bird with special powers', bn: 'বিশেষ ক্ষমতাসম্পন্ন একটি রঙিন পাখি' },
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=200&fit=crop',
      popularity: 92
    }
  ];

  const cartoons = [
    {
      id: 1,
      title: { en: 'Bengali Folk Tales', bn: 'বাংলা লোকগল্প' },
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      duration: '10:30',
      views: 45678,
      rating: 4.8,
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 2,
      title: { en: 'Funny Animal Stories', bn: 'মজার প্রাণীর গল্প' },
      thumbnail: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=225&fit=crop',
      duration: '8:45',
      views: 32145,
      rating: 4.6,
      youtubeId: 'dQw4w9WgXcQ'
    },
    {
      id: 3,
      title: { en: 'Adventure Time', bn: 'অ্যাডভেঞ্চার টাইম' },
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop',
      duration: '15:20',
      views: 67890,
      rating: 4.9,
      youtubeId: 'dQw4w9WgXcQ'
    }
  ];

  const contests = [
    {
      id: 1,
      title: { en: 'Draw Your Hero', bn: 'তোমার হিরো আঁকো' },
      prize: { en: '1000 TK Prize', bn: '১০০০ টাকা পুরস্কার' },
      deadline: '2024-01-15',
      participants: 234,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: { en: 'Best Meme Comic', bn: 'সেরা মিম কমিক' },
      prize: { en: '500 TK Prize', bn: '৫০০ টাকা পুরস্কার' },
      deadline: '2024-01-20',
      participants: 156,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
    }
  ];

  const tutorials = [
    {
      id: 1,
      title: { en: 'How to Draw Cartoon Eyes', bn: 'কার্টুন চোখ আঁকার পদ্ধতি' },
      level: { en: 'Beginner', bn: 'শিক্ষানবিস' },
      duration: '10 min',
      views: 15420,
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: { en: 'Creating Funny Expressions', bn: 'মজার অভিব্যক্তি তৈরি' },
      level: { en: 'Intermediate', bn: 'মধ্যম' },
      duration: '15 min',
      views: 12850,
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: { en: 'Color Theory for Comics', bn: 'কমিক্সের জন্য রঙের তত্ত্ব' },
      level: { en: 'Advanced', bn: 'উন্নত' },
      duration: '25 min',
      views: 9340,
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'
    }
  ];

  const creators = [
    {
      id: 1,
      name: 'অমিত দাস',
      speciality: { en: 'Comedy Comics', bn: 'কমেডি কমিক্স' },
      followers: 45200,
      comics: 128,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      verified: true
    },
    {
      id: 2,
      name: 'সারা আক্তার',
      speciality: { en: 'Animated Stories', bn: 'অ্যানিমেটেড গল্প' },
      followers: 38900,
      comics: 95,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c96ff8ae?w=100&h=100&fit=crop',
      verified: true
    },
    {
      id: 3,
      name: 'রাহুল রহমান',
      speciality: { en: 'Adventure Comics', bn: 'অ্যাডভেঞ্চার কমিক্স' },
      followers: 32100,
      comics: 87,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      verified: false
    }
  ];

  const weeklySchedule = [
    { day: { en: 'Monday', bn: 'সোমবার' }, show: { en: 'Funny Friends', bn: 'মজার বন্ধুরা' }, time: '6:00 PM' },
    { day: { en: 'Tuesday', bn: 'মঙ্গলবার' }, show: { en: 'Adventure Time', bn: 'অ্যাডভেঞ্চার টাইম' }, time: '7:00 PM' },
    { day: { en: 'Wednesday', bn: 'বুধবার' }, show: { en: 'Magic Stories', bn: 'জাদুর গল্প' }, time: '6:30 PM' },
    { day: { en: 'Thursday', bn: 'বৃহস্পতিবার' }, show: { en: 'Animal Tales', bn: 'প্রাণীর গল্প' }, time: '6:00 PM' },
    { day: { en: 'Friday', bn: 'শুক্রবার' }, show: { en: 'Space Adventures', bn: 'মহাকাশ অ্যাডভেঞ্চার' }, time: '7:30 PM' }
  ];

  const renderComics = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {comics.map((comic) => (
        <div
          key={comic.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          {comic.featured && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 text-center text-sm font-semibold">
              ⭐ Featured Comic
            </div>
          )}
          <div className="relative">
            <img
              src={comic.image}
              alt={comic.title[language]}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 right-3 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
              {comic.panels} panels
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {comic.title[language]}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Heart size={16} className="text-red-500" />
                  <span>{comic.likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye size={16} className="text-blue-500" />
                  <span>{comic.views}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
              {language === 'bn' ? 'পড়ো' : 'Read Comic'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderGifs = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {gifs.map((gif) => (
        <div
          key={gif.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
        >
          <div className="relative">
            <img
              src={gif.image}
              alt={gif.title[language]}
              className="w-full h-48 object-cover cursor-pointer"
            />
            <div className="absolute top-3 left-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <Play size={12} />
              <span>{gif.duration}</span>
            </div>
            <div className="absolute bottom-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
              <Heart size={12} />
              <span>{gif.likes}</span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="font-semibold text-gray-800 text-sm">
              {gif.title[language]}
            </h4>
            <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {gif.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCharacters = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {characters.map((character) => (
        <div
          key={character.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <div className="text-center p-8">
            <div className="relative inline-block mb-4">
              <img
                src={character.image}
                alt={character.name[language]}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yellow-300"
              />
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                {character.popularity}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {character.name[language]}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              {character.description[language]}
            </p>
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-1">Popularity</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                  style={{ width: `${character.popularity}%` }}
                ></div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200">
              {language === 'bn' ? 'আরও দেখো' : 'Learn More'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCartoons = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cartoons.map((cartoon) => (
        <div
          key={cartoon.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <div className="relative">
            <img
              src={cartoon.thumbnail}
              alt={cartoon.title[language]}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
              <button className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Play size={24} />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
              <Clock size={12} />
              <span>{cartoon.duration}</span>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {cartoon.title[language]}
            </h3>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Eye size={16} />
                  <span>{cartoon.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-500" />
                  <span>{cartoon.rating}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2">
              <Play size={18} />
              <span>{language === 'bn' ? 'দেখো' : 'Watch Now'}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'comics': return renderComics();
      case 'gifs': return renderGifs();
      case 'characters': return renderCharacters();
      case 'cartoons': return renderCartoons();
      default: return renderComics();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Section 1: Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🎨 Cartoon & Comics
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার কার্টুন, কমিক্স আর চরিত্র - বিনোদনের জগতে স্বাগতম!' 
              : 'Fun cartoons, comics and characters - welcome to the world of entertainment!'
            }
          </p>
        </div>

        {/* Section 2: Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Section 3: Main Content */}
        <div className="max-w-7xl mx-auto mb-16">
          {renderContent()}
        </div>

        {/* Section 4: Featured Contests */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Trophy className="text-yellow-500" size={32} />
              <span>{language === 'bn' ? '🏆 চলমান প্রতিযোগিতা' : '🏆 Active Contests'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'তোমার সৃজনশীলতা দেখিয়ে পুরস্কার জিতো!'
                : 'Show your creativity and win amazing prizes!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contests.map((contest) => (
              <div key={contest.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img src={contest.image} alt={contest.title[language]} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                    {contest.prize[language]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{contest.title[language]}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{contest.participants} {language === 'bn' ? 'অংশগ্রহণকারী' : 'participants'}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{language === 'bn' ? 'শেষ:' : 'Ends:'} {contest.deadline}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200">
                    {language === 'bn' ? 'অংশগ্রহণ করো' : 'Join Contest'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Drawing Tutorials */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <BookOpen className="text-blue-500" size={32} />
              <span>{language === 'bn' ? '📖 আঁকার টিউটোরিয়াল' : '📖 Drawing Tutorials'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'ধাপে ধাপে শিখো কীভাবে দারুণ কার্টুন আঁকতে হয়!'
                : 'Learn step by step how to draw amazing cartoons!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img src={tutorial.image} alt={tutorial.title[language]} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-sm">
                    {tutorial.level[language]}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tutorial.title[language]}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <Eye size={16} className="mr-1" />
                    <span>{tutorial.views.toLocaleString()} {language === 'bn' ? 'দর্শক' : 'views'}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <Play size={18} />
                    <span>{language === 'bn' ? 'শুরু করো' : 'Start Learning'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Featured Creators */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Award className="text-purple-500" size={32} />
              <span>{language === 'bn' ? '⭐ জনপ্রিয় স্রষ্টা' : '⭐ Popular Creators'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'যারা অসাধারণ কন্টেন্ট তৈরি করে তাদের সাথে পরিচয় হও!'
                : 'Meet the creators who make amazing content!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {creators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative inline-block mb-4">
                  <img src={creator.avatar} alt={creator.name} className="w-20 h-20 rounded-full object-cover border-4 border-purple-300" />
                  {creator.verified && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-1">
                      <Star size={12} fill="currentColor" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{creator.name}</h3>
                <p className="text-purple-600 font-medium mb-3">{creator.speciality[language]}</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{creator.followers.toLocaleString()}</div>
                    <div>{language === 'bn' ? 'ফলোয়ার' : 'Followers'}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{creator.comics}</div>
                    <div>{language === 'bn' ? 'কমিক্স' : 'Comics'}</div>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
                  {language === 'bn' ? 'ফলো করো' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: Weekly Schedule */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Clock className="text-green-500" size={32} />
              <span>{language === 'bn' ? '📅 সাপ্তাহিক সময়সূচী' : '📅 Weekly Schedule'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'প্রতিদিন নতুন এপিসোড - মিস করো না!'
                : 'New episodes every day - don\'t miss out!'
              }
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {weeklySchedule.map((schedule, index) => (
              <div key={index} className={`p-4 border-b border-gray-100 last:border-b-0 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-purple-50' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {schedule.day[language].charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{schedule.show[language]}</div>
                    <div className="text-gray-600 text-sm">{schedule.day[language]}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-purple-600">{schedule.time}</div>
                  <div className="text-gray-500 text-sm">{language === 'bn' ? 'বাংলা সময়' : 'BD Time'}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl p-8 text-white">
            <div className="text-6xl mb-4">🎨</div>
            <h2 className="text-3xl font-bold mb-4">
              {language === 'bn' ? 'তুমিও একজন শিল্পী!' : 'You Are An Artist Too!'}
            </h2>
            <p className="text-xl mb-6 opacity-90">
              {language === 'bn' 
                ? 'তোমার নিজের কমিক্স তৈরি করো এবং লাখো মানুষের মন ছুঁয়ে দাও'
                : 'Create your own comics and touch millions of hearts'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center space-x-2">
                <Zap size={20} />
                <span>{language === 'bn' ? 'আঁকা শুরু করো' : 'Start Drawing'}</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <Gift size={20} />
                <span>{language === 'bn' ? 'প্রতিযোগিতায় অংশ নাও' : 'Join Contest'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonComics;
