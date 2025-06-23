
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Wand2, Heart, MessageSquare, Lightbulb, Copy, Share2, RefreshCw, Trophy, Users, Star, Zap, BookOpen, Award } from 'lucide-react';

const AITools = () => {
  const { language } = useLanguage();
  const [activeTool, setActiveTool] = useState('joke');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const tools = [
    {
      id: 'joke',
      title: { en: 'AI Joke Writer', bn: 'এআই জোক রাইটার' },
      description: { en: 'Generate hilarious jokes on any topic', bn: 'যেকোনো বিষয়ে মজার জোকস তৈরি করো' },
      icon: '😂',
      color: 'from-yellow-400 to-orange-500',
      placeholder: { en: 'Enter a topic (e.g., cats, school, food)', bn: 'একটি বিষয় লিখো (যেমন: বিড়াল, স্কুল, খাবার)' }
    },
    {
      id: 'caption',
      title: { en: 'Caption Maker', bn: 'ক্যাপশন মেকার' },
      description: { en: 'Create catchy captions for social media', bn: 'সোশ্যাল মিডিয়ার জন্য আকর্ষণীয় ক্যাপশন তৈরি করো' },
      icon: '📱',
      color: 'from-blue-400 to-purple-500',
      placeholder: { en: 'Describe your photo or moment', bn: 'তোমার ছবি বা মুহূর্তের বর্ণনা দাও' }
    },
    {
      id: 'love',
      title: { en: 'Love Letter Generator', bn: 'প্রেমপত্র জেনারেটর' },
      description: { en: 'Write romantic letters and messages', bn: 'রোমান্টিক চিঠি ও বার্তা লেখো' },
      icon: '💕',
      color: 'from-pink-400 to-red-500',
      placeholder: { en: 'Tell us about your special someone', bn: 'তোমার বিশেষ কারো সম্পর্কে বলো' }
    },
    {
      id: 'prompt',
      title: { en: 'Funny Prompt Generator', bn: 'মজার প্রম্পট জেনারেটর' },
      description: { en: 'Get creative and funny writing prompts', bn: 'সৃজনশীল ও মজার লেখার প্রম্পট পাও' },
      icon: '🎭',
      color: 'from-green-400 to-teal-500',
      placeholder: { en: 'Choose a theme (adventure, comedy, mystery)', bn: 'একটি থিম বেছে নাও (অ্যাডভেঞ্চার, কমেডি, রহস্য)' }
    }
  ];

  const topCreations = [
    {
      type: 'Joke',
      content: 'Why do programmers prefer dark mode? Because light attracts bugs!',
      likes: 1250,
      author: 'AI Assistant',
      time: '2 hours ago'
    },
    {
      type: 'Caption',
      content: 'Living my best life, one coffee at a time ☕ #MondayMotivation',
      likes: 890,
      author: 'Caption Master',
      time: '5 hours ago'
    },
    {
      type: 'Love Letter',
      content: 'Your smile brightens my day like sunshine through clouds...',
      likes: 2100,
      author: 'Romantic AI',
      time: '1 day ago'
    }
  ];

  const aiStats = [
    { icon: '🎯', count: '25K+', label: 'Content Generated', color: 'text-blue-500' },
    { icon: '😊', count: '98%', label: 'Happy Users', color: 'text-green-500' },
    { icon: '⚡', count: '2.5s', label: 'Avg Response Time', color: 'text-yellow-500' },
    { icon: '🌟', count: '4.9', label: 'User Rating', color: 'text-purple-500' }
  ];

  const tutorials = [
    {
      title: { en: 'Getting Started with AI Tools', bn: 'এআই টুলস দিয়ে শুরু করা' },
      duration: '5 min',
      difficulty: { en: 'Beginner', bn: 'শিক্ষানবিস' },
      views: 5400,
      thumbnail: '🎯'
    },
    {
      title: { en: 'Advanced Prompt Writing', bn: 'উন্নত প্রম্পট লেখা' },
      duration: '12 min',
      difficulty: { en: 'Advanced', bn: 'উন্নত' },
      views: 3200,
      thumbnail: '🧠'
    },
    {
      title: { en: 'Creative Writing Tips', bn: 'সৃজনশীল লেখার টিপস' },
      duration: '8 min',
      difficulty: { en: 'Intermediate', bn: 'মধ্যম' },
      views: 4100,
      thumbnail: '✍️'
    }
  ];

  const userShowcase = [
    {
      name: 'Ahmed Khan',
      creation: 'Funny School Joke',
      likes: 450,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
      badge: 'Top Creator'
    },
    {
      name: 'Fatima Ali',
      creation: 'Love Poem',
      likes: 680,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c96ff8ae?w=50&h=50&fit=crop',
      badge: 'Rising Star'
    },
    {
      name: 'Rafiq Hassan',
      creation: 'Travel Caption',
      likes: 320,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop',
      badge: 'Creative Mind'
    }
  ];

  const generateContent = async () => {
    if (!input.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      let result = '';
      
      switch (activeTool) {
        case 'joke':
          const jokes = language === 'bn' ? [
            `${input} নিয়ে একটি মজার জোকস: একবার এক ${input} দোকানে গেল... বাকিটা তুমি নিজেই বুঝে নাও! 😄`,
            `কেন ${input} রোজ হাসে? কারণ এটা জানে যে জীবনটা একটা বড় জোকস! 😂`,
            `${input} এর সাথে কী মিল আছে আমার জীবনের? দুটোই অপ্রত্যাশিত! 🤣`
          ] : [
            `Here's a joke about ${input}: Why did the ${input} go to therapy? Because it had too many issues to deal with! 😄`,
            `What do you call a ${input} that tells jokes? A stand-up ${input}! 😂`,
            `Why don't ${input} ever get bored? Because they always find something amusing! 🤣`
          ];
          result = jokes[Math.floor(Math.random() * jokes.length)];
          break;
          
        case 'caption':
          const captions = language === 'bn' ? [
            `"${input}" - জীবনের এই সুন্দর মুহূর্তগুলোই আসল সম্পদ ✨ #blessed #memories`,
            `${input} এর মতো মুহূর্তগুলো জীবনকে মধুর করে তোলে 🌟 #grateful #happiness`,
            `"${input}" - কিছু মুহূর্ত কখনো ভোলা যায় না 💕 #unforgettable #love`
          ] : [
            `"${input}" - These are the moments that make life beautiful ✨ #blessed #memories`,
            `Living for moments like "${input}" 🌟 #grateful #happiness`,
            `"${input}" - Some moments are just perfect 💕 #unforgettable #love`
          ];
          result = captions[Math.floor(Math.random() * captions.length)];
          break;
          
        case 'love':
          result = language === 'bn' ? 
            `প্রিয় ${input},\n\nতোমার চোখের মতো সুন্দর আর কিছু দেখিনি এই পৃথিবীতে। তুমি আমার জীবনে এসে সবকিছু বদলে দিয়েছো। তোমার হাসি আমার দিন আলোকিত করে, তোমার কথা আমার মনে শান্তি আনে।\n\nভালোবাসায়,\nতোমার প্রিয়জন 💕` :
            `My Dearest ${input},\n\nYou are the sunshine that brightens my darkest days and the melody that makes my heart sing. Every moment with you feels like a beautiful dream that I never want to wake up from. You have filled my life with colors I never knew existed.\n\nWith all my love,\nYour devoted admirer 💕`;
          break;
          
        case 'prompt':
          const prompts = language === 'bn' ? [
            `"${input}" থিমে একটি গল্প লেখো: একটি জাদুকরী ${input} যেটা শুধু সত্য কথা বলে, কিন্তু সবাই ভাবে এটা মিথ্যা বলছে!`,
            `"${input}" নিয়ে মজার কাহিনী: যদি ${input} হঠাৎ কথা বলতে পারতো, তাহলে প্রথম যে কথাটি বলতো সেটা কী হতো?`,
            `"${input}" অ্যাডভেঞ্চার: একজন সুপারহিরো যার একমাত্র ক্ষমতা হলো ${input} সম্পর্কিত যেকোনো সমস্যা সমাধান করা!`
          ] : [
            `Write a story about "${input}": A magical ${input} that only tells the truth, but everyone thinks it's lying!`,
            `Fun prompt about "${input}": What if ${input} could suddenly talk? What would be the first thing it would say?`,
            `"${input}" adventure: A superhero whose only power is solving any problem related to ${input}!`
          ];
          result = prompts[Math.floor(Math.random() * prompts.length)];
          break;
          
        default:
          result = language === 'bn' ? 'কিছু একটা ভুল হয়েছে!' : 'Something went wrong!';
      }
      
      setOutput(result);
      setIsGenerating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  const currentTool = tools.find(tool => tool.id === activeTool);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Section 1: Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            ✨ Magic AI Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'কৃত্রিম বুদ্ধিমত্তার সাহায্যে মজার কন্টেন্ট তৈরি করো - জোকস, ক্যাপশন, প্রেমপত্র আর আরো কিছু!' 
              : 'Create amazing content with AI - jokes, captions, love letters and more!'
            }
          </p>
        </div>

        {/* Section 2: AI Statistics */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aiStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.count}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Tool Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-6xl mx-auto">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => {
                setActiveTool(tool.id);
                setOutput('');
                setInput('');
              }}
              className={`p-6 rounded-2xl transition-all duration-200 transform hover:scale-105 ${
                activeTool === tool.id
                  ? `bg-gradient-to-r ${tool.color} text-white shadow-lg`
                  : 'bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="font-bold mb-2">{tool.title[language]}</h3>
              <p className={`text-sm ${activeTool === tool.id ? 'text-white/90' : 'text-gray-600'}`}>
                {tool.description[language]}
              </p>
            </button>
          ))}
        </div>

        {/* Section 4: AI Tool Interface */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Tool Header */}
            <div className={`bg-gradient-to-r ${currentTool?.color} p-6`}>
              <div className="flex items-center space-x-4">
                <div className="text-5xl">{currentTool?.icon}</div>
                <div className="text-white">
                  <h2 className="text-2xl font-bold">{currentTool?.title[language]}</h2>
                  <p className="opacity-90">{currentTool?.description[language]}</p>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="p-6 border-b border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'তোমার ইনপুট:' : 'Your Input:'}
              </label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={currentTool?.placeholder[language]}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  onKeyPress={(e) => e.key === 'Enter' && generateContent()}
                />
                <button
                  onClick={generateContent}
                  disabled={!input.trim() || isGenerating}
                  className={`px-6 py-3 bg-gradient-to-r ${currentTool?.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2`}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="animate-spin" size={18} />
                      <span>{language === 'bn' ? 'তৈরি হচ্ছে...' : 'Generating...'}</span>
                    </>
                  ) : (
                    <>
                      <Wand2 size={18} />
                      <span>{language === 'bn' ? 'তৈরি করো' : 'Generate'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Output Section */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-medium text-gray-700">
                  {language === 'bn' ? 'এআই এর ফলাফল:' : 'AI Generated Result:'}
                </label>
                {output && (
                  <div className="flex space-x-2">
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center space-x-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition-colors duration-200"
                    >
                      <Copy size={14} />
                      <span>{language === 'bn' ? 'কপি' : 'Copy'}</span>
                    </button>
                    <button className="flex items-center space-x-1 px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-sm transition-colors duration-200">
                      <Share2 size={14} />
                      <span>{language === 'bn' ? 'শেয়ার' : 'Share'}</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className="min-h-[200px] p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <div className="animate-spin text-4xl">🤖</div>
                    <p className="text-gray-600 text-center">
                      {language === 'bn' 
                        ? 'এআই তোমার জন্য কিছু মজার তৈরি করছে...'
                        : 'AI is creating something amazing for you...'
                      }
                    </p>
                    <div className="w-32 bg-gray-300 rounded-full h-1">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-1 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                ) : output ? (
                  <div className="space-y-4">
                    <div className="text-gray-800 whitespace-pre-wrap leading-relaxed">
                      {output}
                    </div>
                    <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                      <button
                        onClick={generateContent}
                        className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                      >
                        <RefreshCw size={16} />
                        <span>{language === 'bn' ? 'আবার তৈরি করো' : 'Generate Again'}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors duration-200">
                        <Heart size={16} />
                        <span>{language === 'bn' ? 'পছন্দ' : 'Like'}</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-gray-500">
                    <div className="text-4xl mb-4">✨</div>
                    <p className="text-center">
                      {language === 'bn' 
                        ? 'উপরে তোমার ইনপুট লিখো এবং জাদু দেখো!'
                        : 'Enter your input above and watch the magic happen!'
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Top AI Creations */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Trophy className="text-yellow-500" size={32} />
              <span>{language === 'bn' ? '🏆 সেরা সৃষ্টি' : '🏆 Top AI Creations'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'কমিউনিটির সবচেয়ে জনপ্রিয় এআই তৈরি কন্টেন্ট!'
                : 'Most popular AI-generated content from our community!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topCreations.map((creation, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-semibold">
                    {creation.type}
                  </span>
                  <div className="flex items-center space-x-1 text-red-500">
                    <Heart size={16} />
                    <span className="text-sm">{creation.likes}</span>
                  </div>
                </div>
                <p className="text-gray-800 mb-4 italic">"{creation.content}"</p>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>by {creation.author}</span>
                  <span>{creation.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 6: Learning Tutorials */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <BookOpen className="text-blue-500" size={32} />
              <span>{language === 'bn' ? '📚 শেখার টিউটোরিয়াল' : '📚 Learning Tutorials'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'এআই টুলস আরো ভালোভাবে ব্যবহার করার উপায় শেখো!'
                : 'Learn how to use AI tools more effectively!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{tutorial.thumbnail}</div>
                  <h3 className="font-bold text-gray-800 mb-2">{tutorial.title[language]}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{tutorial.duration}</span>
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">{tutorial.difficulty[language]}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 text-sm mb-4">
                    <Users size={16} className="mr-1" />
                    <span>{tutorial.views} {language === 'bn' ? 'দর্শক' : 'views'}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200">
                    {language === 'bn' ? 'দেখো' : 'Watch Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 7: User Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-2">
              <Award className="text-green-500" size={32} />
              <span>{language === 'bn' ? '🌟 ব্যবহারকারী শো-কেস' : '🌟 User Showcase'}</span>
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'আমাদের প্রতিভাবান ব্যবহারকারীদের সেরা সৃষ্টি!'
                : 'Amazing creations from our talented users!'
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userShowcase.map((user, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-4 border-4 border-purple-300"
                />
                <h3 className="font-bold text-gray-800 mb-1">{user.name}</h3>
                <div className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full text-xs font-semibold mb-3">
                  {user.badge}
                </div>
                <p className="text-gray-700 mb-3">"{user.creation}"</p>
                <div className="flex items-center justify-center text-red-500">
                  <Heart size={16} className="mr-1" />
                  <span>{user.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 8: Usage Tips */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Lightbulb className="text-yellow-500" size={20} />
              <span>{language === 'bn' ? 'ব্যবহারের টিপস' : 'Usage Tips'}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="space-y-2">
                <p className="font-medium">
                  {language === 'bn' ? '✨ সেরা ফলাফলের জন্য:' : '✨ For best results:'}
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• {language === 'bn' ? 'স্পষ্ট ও সংক্ষিপ্ত ইনপুট দাও' : 'Be clear and specific'}</li>
                  <li>• {language === 'bn' ? 'বিভিন্ন বিষয় নিয়ে পরীক্ষা করো' : 'Try different topics'}</li>
                  <li>• {language === 'bn' ? 'সৃজনশীল হও' : 'Be creative'}</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium">
                  {language === 'bn' ? '🎨 মজার আইডিয়া:' : '🎨 Fun ideas:'}
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• {language === 'bn' ? 'তোমার পোষা প্রাণী নিয়ে জোকস' : 'Jokes about your pets'}</li>
                  <li>• {language === 'bn' ? 'বিশেষ দিনের ক্যাপশন' : 'Captions for special days'}</li>
                  <li>• {language === 'bn' ? 'বন্ধুদের জন্য প্রেমপত্র' : 'Letters for friends'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITools;
