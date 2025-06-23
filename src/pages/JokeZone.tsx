
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shuffle, Heart, Share2, Copy } from 'lucide-react';

const JokeZone = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('kids');
  const [currentJoke, setCurrentJoke] = useState(0);

  const jokeSections = [
    { id: 'kids', name: 'Kids Jokes', icon: '👶', color: 'bg-yellow-400' },
    { id: 'dad', name: 'Dad Jokes', icon: '👨', color: 'bg-blue-400' },
    { id: 'bangla', name: 'Bangla Hasir Golpo', icon: '🇧🇩', color: 'bg-green-400' },
    { id: 'ai', name: 'AI Joke Generator', icon: '🤖', color: 'bg-purple-400' }
  ];

  const jokes = {
    kids: [
      {
        en: "Why don't scientists trust atoms? Because they make up everything!",
        bn: "কেন বিজ্ঞানীরা পরমাণুর উপর ভরসা করেন না? কারণ তারা সবকিছু বানিয়ে বলে!"
      },
      {
        en: "What do you call a sleeping bull? A bulldozer!",
        bn: "ঘুমিয়ে থাকা ষাঁড়কে কী বলে? বুলডোজার!"
      },
      {
        en: "Why did the math book look so sad? Because it had too many problems!",
        bn: "গণিতের বইটি কেন এত দুঃখিত দেখাচ্ছিল? কারণ এতে অনেক সমস্যা ছিল!"
      }
    ],
    dad: [
      {
        en: "I'm reading a book about anti-gravity. It's impossible to put down!",
        bn: "আমি মাধ্যাকর্ষণ বিরোধী একটি বই পড়ছি। এটা নামানো অসম্ভব!"
      },
      {
        en: "Why don't eggs tell jokes? They'd crack each other up!",
        bn: "ডিম কেন জোকস বলে না? তারা একে অপরকে ফাটিয়ে দেবে!"
      },
      {
        en: "I used to hate facial hair, but then it grew on me.",
        bn: "আমি আগে মুখের চুল অপছন্দ করতাম, কিন্তু পরে এটা আমার উপর গজিয়ে গেল।"
      }
    ],
    bangla: [
      {
        en: "একবার এক লোক দোকানে গেল। দোকানদার জিজ্ঞেস করল, 'কী চান?' লোকটি বলল, 'আমি কিছু চাই না, শুধু দেখতে এসেছি।' দোকানদার বলল, 'তাহলে আয়না কিনে নিন!'",
        bn: "একবার এক লোক দোকানে গেল। দোকানদার জিজ্ঞেস করল, 'কী চান?' লোকটি বলল, 'আমি কিছু চাই না, শুধু দেখতে এসেছি।' দোকানদার বলল, 'তাহলে আয়না কিনে নিন!'"
      },
      {
        en: "ছেলে: মা, আমি কী খাব? মা: যা আছে খাও। ছেলে: কিন্তু কিছুই তো নেই। মা: তাহলে কিছুই খাও!",
        bn: "ছেলে: মা, আমি কী খাব? মা: যা আছে খাও। ছেলে: কিন্তু কিছুই তো নেই। মা: তাহলে কিছুই খাও!"
      }
    ],
    ai: [
      {
        en: "Why did the AI go to therapy? It had too many deep learning issues!",
        bn: "এআই কেন থেরাপিতে গেল? এর অনেক গভীর শেখার সমস্যা ছিল!"
      }
    ]
  };

  const generateRandomJoke = () => {
    const sectionJokes = jokes[activeSection as keyof typeof jokes];
    const randomIndex = Math.floor(Math.random() * sectionJokes.length);
    setCurrentJoke(randomIndex);
  };

  const copyJoke = () => {
    const joke = jokes[activeSection as keyof typeof jokes][currentJoke];
    navigator.clipboard.writeText(joke[language]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
            😂 Joke Zone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'হাসির গল্প, জোকস আর মজার কথা - সবার জন্য!' 
              : 'Funny stories, jokes and hilarious content for everyone!'
            }
          </p>
        </div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {jokeSections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                setCurrentJoke(0);
              }}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                activeSection === section.id
                  ? `${section.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span>{section.name}</span>
            </button>
          ))}
        </div>

        {/* Joke Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <div className="text-center">
              <div className="text-6xl mb-6">😄</div>
              <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                {jokes[activeSection as keyof typeof jokes][currentJoke][language]}
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={generateRandomJoke}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Shuffle size={20} />
                  <span>New Joke</span>
                </button>
                
                <button
                  onClick={copyJoke}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Copy size={20} />
                  <span>Copy</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105">
                  <Heart size={20} />
                  <span>Like</span>
                </button>
                
                <button className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  <Share2 size={20} />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Joke Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jokes[activeSection as keyof typeof jokes].map((joke, index) => (
              <div
                key={index}
                onClick={() => setCurrentJoke(index)}
                className={`bg-white rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-xl ${
                  currentJoke === index ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                }`}
              >
                <div className="text-3xl mb-3">😊</div>
                <p className="text-gray-700 text-sm line-clamp-3">
                  {joke[language]}
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">Joke #{index + 1}</span>
                  <div className="flex space-x-1">
                    <button className="text-red-500 hover:text-red-600">
                      <Heart size={16} />
                    </button>
                    <button className="text-blue-500 hover:text-blue-600">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeZone;
