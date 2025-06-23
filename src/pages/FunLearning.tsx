
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Play, Eye, Star, Clock, Brain, Heart } from 'lucide-react';

const FunLearning = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('facts');

  const tabs = [
    { id: 'facts', label: { en: 'Fun Facts', bn: 'মজার তথ্য' }, icon: '🧠' },
    { id: 'videos', label: { en: 'Learning Videos', bn: 'শিক্ষামূলক ভিডিও' }, icon: '📺' },
    { id: 'rhymes', label: { en: 'Bangla Rhymes', bn: 'বাংলা ছড়া' }, icon: '🎵' },
    { id: 'trivia', label: { en: 'Did You Know?', bn: 'তুমি কি জানো?' }, icon: '❓' }
  ];

  const funFacts = [
    {
      id: 1,
      title: { en: 'Amazing Ocean Facts', bn: 'সমুদ্রের অবাক করা তথ্য' },
      content: { 
        en: 'The ocean contains 99% of Earth\'s living space! More people have been to space than to the deepest part of the ocean.',
        bn: 'সমুদ্রে পৃথিবীর ৯৯% জীবনযাত্রার স্থান রয়েছে! সমুদ্রের গভীরতম অংশে যাওয়ার চেয়ে বেশি মানুষ মহাকাশে গিয়েছে।'
      },
      icon: '🌊',
      color: 'from-blue-400 to-cyan-500',
      likes: 245,
      category: 'Nature'
    },
    {
      id: 2,
      title: { en: 'Incredible Animal Facts', bn: 'প্রাণীদের অবিশ্বাস্য তথ্য' },
      content: { 
        en: 'A shrimp\'s heart is in its head! And octopuses have three hearts and blue blood.',
        bn: 'চিংড়ির হৃদয় তার মাথায় থাকে! আর অক্টোপাসের তিনটি হৃদয় এবং নীল রক্ত আছে।'
      },
      icon: '🦐',
      color: 'from-orange-400 to-red-500',
      likes: 189,
      category: 'Animals'
    },
    {
      id: 3,
      title: { en: 'Space Wonders', bn: 'মহাকাশের বিস্ময়' },
      content: { 
        en: 'One day on Venus is longer than one year on Venus! It takes 243 Earth days to rotate once.',
        bn: 'শুক্র গ্রহে একদিন এক বছরের চেয়ে বেশি! একবার ঘুরতে ২৪ৃ পৃথিবী দিন লাগে।'
      },
      icon: '🪐',
      color: 'from-purple-400 to-pink-500',
      likes: 312,
      category: 'Space'
    },
    {
      id: 4,
      title: { en: 'Human Body Mysteries', bn: 'মানবদেহের রহস্য' },
      content: { 
        en: 'Your brain uses 20% of your body\'s energy! And you have about 37 trillion cells in your body.',
        bn: 'তোমার মস্তিষ্ক শরীরের ২০% শক্তি ব্যবহার করে! আর তোমার শরীরে প্রায় ৩৭ ট্রিলিয়ন কোষ আছে।'
      },
      icon: '🧠',
      color: 'from-green-400 to-teal-500',
      likes: 198,
      category: 'Science'
    },
    {
      id: 5,
      title: { en: 'Food Fun Facts', bn: 'খাবারের মজার তথ্য' },
      content: { 
        en: 'Honey never spoils! Archaeologists have found 3000-year-old honey that\'s still edible.',
        bn: 'মধু কখনো নষ্ট হয় না! প্রত্নতাত্ত্বিকরা ৩০০০ বছরের পুরনো মধু পেয়েছেন যা এখনো খাওয়া যায়।'
      },
      icon: '🍯',
      color: 'from-yellow-400 to-orange-500',
      likes: 267,
      category: 'Food'
    }
  ];

  const videos = [
    {
      id: 1,
      title: { en: 'How Butterflies Transform', bn: 'প্রজাপতি কীভাবে রূপান্তরিত হয়' },
      duration: '3:45',
      views: 12500,
      thumbnail: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=225&fit=crop',
      description: { en: 'Amazing metamorphosis process explained simply', bn: 'অসাধারণ রূপান্তর প্রক্রিয়া সহজভাবে ব্যাখ্যা' },
      rating: 4.8
    },
    {
      id: 2,
      title: { en: 'Why Sky is Blue?', bn: 'আকাশ নীল কেন?' },
      duration: '2:30',
      views: 8750,
      thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=225&fit=crop',
      description: { en: 'Science behind the blue sky explained for kids', bn: 'শিশুদের জন্য নীল আকাশের বিজ্ঞান' },
      rating: 4.9
    },
    {
      id: 3,
      title: { en: 'Amazing Plants', bn: 'আশ্চর্য উদ্ভিদ' },
      duration: '4:20',
      views: 15200,
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop',
      description: { en: 'Discover the secret world of plants', bn: 'উদ্ভিদের গোপন জগৎ আবিষ্কার করো' },
      rating: 4.7
    }
  ];

  const rhymes = [
    {
      id: 1,
      title: 'আলু পটল কুমড়া',
      content: `আলু পটল কুমড়া,
খাও তুমি হয়ে যাও বড়,
ভালো করে হাত মুখ ধোও,
মায়ের কথা সব শোনো।`,
      tune: 'Traditional Bengali',
      category: 'খাবার',
      animation: '🥔🥒🎃'
    },
    {
      id: 2,
      title: 'চাঁদমামা আসো',
      content: `চাঁদমামা আসো আমাদের বাড়ি,
খেজুর গুড় দিবো সাদা চালের ভাত,
পান দিয়ে মুখ ভরে,
মিষ্টি হাসি হেসে।`,
      tune: 'Classical',
      category: 'রাত্রি',
      animation: '🌙✨🍯'
    },
    {
      id: 3,
      title: 'পাখি ওড়ে',
      content: `নীল আকাশে পাখি ওড়ে,
মেঘের পরে মেঘ জমে,
বৃষ্টি হবে অল্প পরে,
ছাতা নাও তাড়াতাড়ি।`,
      tune: 'Modern',
      category: 'প্রকৃতি',
      animation: '🐦☁️🌧️'
    }
  ];

  const triviaQuestions = [
    {
      id: 1,
      question: { en: 'Did you know that penguins can jump 6 feet high?', bn: 'তুমি কি জানো পেঙ্গুইন ৬ ফুট উঁচুতে লাফ দিতে পারে?' },
      explanation: { 
        en: 'Penguins are amazing jumpers! They use this skill to hop onto ice floes and escape predators.',
        bn: 'পেঙ্গুইনরা অসাধারণ লাফানো! তারা এই দক্ষতা ব্যবহার করে বরফের উপর ওঠে এবং শত্রুদের থেকে পালায়।'
      },
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=200&fit=crop',
      category: 'Animals',
      funLevel: 5
    },
    {
      id: 2,
      question: { en: 'Did you know that bananas are berries but strawberries aren\'t?', bn: 'তুমি কি জানো কলা বেরি কিন্তু স্ট্রবেরি নয়?' },
      explanation: { 
        en: 'Botanically speaking, bananas qualify as berries because they come from a single flower with one ovary.',
        bn: 'উদ্ভিদবিজ্ঞানের দিক থেকে, কলা বেরি হিসেবে গণ্য হয় কারণ এটি একটি ফুল থেকে আসে যার একটি ডিম্বাশয় আছে।'
      },
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&h=200&fit=crop',
      category: 'Science',
      funLevel: 4
    },
    {
      id: 3,
      question: { en: 'Did you know that cats have 32 muscles in each ear?', bn: 'তুমি কি জানো বিড়ালের প্রতিটি কানে ৩২টি পেশী আছে?' },
      explanation: { 
        en: 'This is why cats can rotate their ears 180 degrees and hear sounds from many directions!',
        bn: 'এই কারণেই বিড়াল তাদের কান ১৮০ ডিগ্রি ঘুরাতে পারে এবং অনেক দিক থেকে শব্দ শুনতে পায়!'
      },
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=200&fit=crop',
      category: 'Animals',
      funLevel: 5
    }
  ];

  const renderFacts = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {funFacts.map((fact) => (
        <div
          key={fact.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <div className={`h-2 bg-gradient-to-r ${fact.color}`}></div>
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="text-4xl">{fact.icon}</div>
              <div className="flex items-center space-x-1">
                <Heart className="text-red-500" size={16} />
                <span className="text-sm text-gray-600">{fact.likes}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {fact.title[language]}
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-4">
              {fact.content[language]}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                {fact.category}
              </span>
              <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                <BookOpen size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderVideos = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => (
        <div
          key={video.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title[language]}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
              <button className="bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center hover:bg-red-600 transition-colors duration-200">
                <Play size={24} />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
              <Clock size={12} />
              <span>{video.duration}</span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              {video.title[language]}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              {video.description[language]}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <Eye size={14} />
                  <span>{video.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star size={14} className="text-yellow-500" />
                  <span>{video.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderRhymes = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {rhymes.map((rhyme) => (
        <div
          key={rhyme.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-pink-400 to-purple-500 p-4 text-white text-center">
            <div className="text-3xl mb-2">{rhyme.animation}</div>
            <h3 className="text-lg font-bold">{rhyme.title}</h3>
          </div>
          
          <div className="p-6">
            <div className="bg-yellow-50 rounded-lg p-4 mb-4">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line font-bengali">
                {rhyme.content}
              </p>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                {rhyme.category}
              </span>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-1">
                <Play size={14} />
                <span>শোনো</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTrivia = () => (
    <div className="space-y-6">
      {triviaQuestions.map((trivia) => (
        <div
          key={trivia.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src={trivia.image}
                alt={trivia.question[language]}
                className="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 leading-tight">
                  {trivia.question[language]}
                </h3>
                <div className="flex items-center space-x-1 ml-4">
                  {[...Array(trivia.funLevel)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {trivia.explanation[language]}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                  {trivia.category}
                </span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <BookOpen size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'facts': return renderFacts();
      case 'videos': return renderVideos();
      case 'rhymes': return renderRhymes();
      case 'trivia': return renderTrivia();
      default: return renderFacts();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            📚 Fun Learning Zone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার তথ্য, শিক্ষামূলক ভিডিও, বাংলা ছড়া - শিখো আনন্দের সাথে!' 
              : 'Fun facts, educational videos, Bengali rhymes - learn with joy!'
            }
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label[language]}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto">
          {renderContent()}
        </div>

        {/* Learning Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              📊 {language === 'bn' ? 'শেখার পরিসংখ্যান' : 'Learning Stats'}
            </h2>
            <p className="text-purple-100">
              {language === 'bn' 
                ? 'দেখো তুমি কতটা শিখেছো এবং অন্যদের সাথে তুলনা করো!'
                : 'See how much you\'ve learned and compare with others!'
              }
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🧠', number: '150+', label: { en: 'Facts Learned', bn: 'তথ্য শিখেছো' } },
              { icon: '📺', number: '25+', label: { en: 'Videos Watched', bn: 'ভিডিও দেখেছো' } },
              { icon: '🎵', number: '30+', label: { en: 'Rhymes Learned', bn: 'ছড়া শিখেছো' } },
              { icon: '❓', number: '75+', label: { en: 'Trivia Known', bn: 'ট্রিভিয়া জানো' } }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1">{stat.number}</div>
                <div className="text-purple-100 text-sm">{stat.label[language]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunLearning;
