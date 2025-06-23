
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Share2, Upload, TrendingUp, Eye, MessageCircle } from 'lucide-react';

const MemeGallery = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedMeme, setSelectedMeme] = useState(null);

  const memes = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      title: { en: 'When you finally understand coding', bn: 'যখন তুমি শেষে কোডিং বুঝতে পারো' },
      likes: 1234,
      views: 5678,
      comments: 89,
      trending: true
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
      title: { en: 'Me trying to fix my laptop', bn: 'আমি আমার ল্যাপটপ ঠিক করার চেষ্টা করছি' },
      likes: 987,
      views: 3456,
      comments: 67,
      trending: true
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      title: { en: 'Online classes be like...', bn: 'অনলাইন ক্লাস এরকম...' },
      likes: 2345,
      views: 7890,
      comments: 123,
      trending: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
      title: { en: 'When the code works on first try', bn: 'যখন কোড প্রথমবারেই কাজ করে' },
      likes: 3456,
      views: 9876,
      comments: 234,
      trending: false
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      title: { en: 'My brain during exams', bn: 'পরীক্ষার সময় আমার মস্তিষ্ক' },
      likes: 1876,
      views: 4321,
      comments: 156,
      trending: false
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop',
      title: { en: 'Weekend mood', bn: 'সপ্তাহান্তের মুড' },
      likes: 2987,
      views: 6543,
      comments: 198,
      trending: false
    }
  ];

  const filteredMemes = activeTab === 'trending' 
    ? memes.filter(meme => meme.trending)
    : memes.sort((a, b) => b.likes - a.likes);

  const tabs = [
    { id: 'trending', label: { en: 'Trending', bn: 'ট্রেন্ডিং' }, icon: TrendingUp },
    { id: 'popular', label: { en: 'Most Voted', bn: 'সর্বাধিক ভোটপ্রাপ্ত' }, icon: Heart },
    { id: 'upload', label: { en: 'Upload', bn: 'আপলোড' }, icon: Upload }
  ];

  const handleLike = (memeId) => {
    console.log('Liked meme:', memeId);
  };

  const handleShare = (memeId) => {
    console.log('Shared meme:', memeId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📸 Meme Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার মিম, ফানি ছবি আর হাসির কন্টেন্ট - সবার সাথে শেয়ার করো!' 
              : 'Funny memes, hilarious images and entertaining content - share the laughter!'
            }
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <IconComponent size={20} />
                <span>{tab.label[language]}</span>
              </button>
            );
          })}
        </div>

        {/* Upload Section */}
        {activeTab === 'upload' && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center">
                <div className="text-5xl mb-6">📤</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {language === 'bn' ? 'তোমার মিম আপলোড করো' : 'Upload Your Meme'}
                </h3>
                <p className="text-gray-600 mb-6">
                  {language === 'bn' 
                    ? 'নিজের বানানো মজার মিম শেয়ার করো এবং অন্যদের হাসাও!'
                    : 'Share your funny creations and make others laugh!'
                  }
                </p>
                
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 mb-6 hover:border-purple-400 transition-colors duration-200">
                  <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                  <p className="text-gray-600 mb-2">
                    {language === 'bn' ? 'ছবি টেনে আনো বা ক্লিক করো' : 'Drag and drop or click to upload'}
                  </p>
                  <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'মিমের টাইটেল লেখো...' : 'Add a funny title...'}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                  {language === 'bn' ? 'আপলোড করো' : 'Upload Meme'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Meme Grid */}
        {activeTab !== 'upload' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredMemes.map((meme) => (
              <div
                key={meme.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={meme.image}
                    alt={meme.title[language]}
                    className="w-full h-64 object-cover cursor-pointer"
                    onClick={() => setSelectedMeme(meme)}
                  />
                  {meme.trending && (
                    <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      🔥 Trending
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{meme.views}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-4 line-clamp-2">
                    {meme.title[language]}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(meme.id)}
                        className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors duration-200"
                      >
                        <Heart size={18} />
                        <span className="text-sm font-medium">{meme.likes}</span>
                      </button>
                      
                      <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors duration-200">
                        <MessageCircle size={18} />
                        <span className="text-sm font-medium">{meme.comments}</span>
                      </button>
                    </div>
                    
                    <button
                      onClick={() => handleShare(meme.id)}
                      className="flex items-center space-x-1 text-green-500 hover:text-green-600 transition-colors duration-200"
                    >
                      <Share2 size={18} />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                  
                  {/* Emoji Reactions */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {['😂', '❤️', '😮', '😢', '😠'].map((emoji, index) => (
                          <button
                            key={index}
                            className="text-2xl hover:scale-125 transition-transform duration-200"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">React with emoji</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Meme Modal */}
        {selectedMeme && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <button
                  onClick={() => setSelectedMeme(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-200"
                >
                  ✕
                </button>
                <img
                  src={selectedMeme.image}
                  alt={selectedMeme.title[language]}
                  className="w-full h-96 object-cover rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {selectedMeme.title[language]}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-1">
                      <Heart className="text-red-500" size={18} />
                      <span>{selectedMeme.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="text-blue-500" size={18} />
                      <span>{selectedMeme.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="text-green-500" size={18} />
                      <span>{selectedMeme.comments}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                    Share
                  </button>
                </div>
                <div className="flex space-x-2">
                  {['😂', '❤️', '😮', '😢', '😠'].map((emoji, index) => (
                    <button
                      key={index}
                      className="text-3xl hover:scale-125 transition-transform duration-200 p-2"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemeGallery;
