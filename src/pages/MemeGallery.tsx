import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, Share2, Upload, TrendingUp, Eye, MessageCircle, Clock, User, Download, Flag, MoreHorizontal } from 'lucide-react';

const MemeGallery = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('trending');
  const [selectedMeme, setSelectedMeme] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [title, setTitle] = useState('');
  const [memes, setMemes] = useState([
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop',
      title: { en: 'When you finally understand coding', bn: 'যখন তুমি শেষে কোডিং বুঝতে পারো' },
      author: { en: 'CodeMaster', bn: 'কোডমাস্টার' },
      likes: 1234,
      views: 5678,
      comments: 89,
      shares: 45,
      uploadDate: '2 hours ago',
      trending: true,
      tags: ['coding', 'programming']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop',
      title: { en: 'Me trying to fix my laptop', bn: 'আমি আমার ল্যাপটপ ঠিক করার চেষ্টা করছি' },
      author: { en: 'TechGuy', bn: 'টেকগাই' },
      likes: 987,
      views: 3456,
      comments: 67,
      shares: 23,
      uploadDate: '5 hours ago',
      trending: true,
      tags: ['tech', 'funny']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      title: { en: 'Online classes be like...', bn: 'অনলাইন ক্লাস এরকম...' },
      author: { en: 'StudentLife', bn: 'স্টুডেন্টলাইফ' },
      likes: 2345,
      views: 7890,
      comments: 123,
      shares: 78,
      uploadDate: '1 day ago',
      trending: true,
      tags: ['student', 'online']
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop',
      title: { en: 'When the code works on first try', bn: 'যখন কোড প্রথমবারেই কাজ করে' },
      author: { en: 'DevPro', bn: 'ডেভপ্রো' },
      likes: 3456,
      views: 9876,
      comments: 234,
      shares: 112,
      uploadDate: '2 days ago',
      trending: false,
      tags: ['coding', 'success']
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      title: { en: 'My brain during exams', bn: 'পরীক্ষার সময় আমার মস্তিষ্ক' },
      author: { en: 'ExamStruggles', bn: 'এক্সামস্ট্রাগলস' },
      likes: 1876,
      views: 4321,
      comments: 156,
      shares: 89,
      uploadDate: '3 days ago',
      trending: false,
      tags: ['exam', 'student']
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=400&fit=crop',
      title: { en: 'Weekend mood', bn: 'সপ্তাহান্তের মুড' },
      author: { en: 'WeekendVibes', bn: 'উইকেন্ডভাইবস' },
      likes: 2987,
      views: 6543,
      comments: 198,
      shares: 134,
      uploadDate: '4 days ago',
      trending: false,
      tags: ['weekend', 'fun']
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=400&fit=crop',
      title: { en: 'Debugging be like...', bn: 'ডিবাগিং এরকম...' },
      author: { en: 'DebugKing', bn: 'ডিবাগকিং' },
      likes: 3210,
      views: 7654,
      comments: 210,
      shares: 98,
      uploadDate: '5 days ago',
      trending: false,
      tags: ['coding', 'debug']
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop',
      title: { en: 'Tech support reality', bn: 'টেক সাপোর্টের বাস্তবতা' },
      author: { en: 'ITSupport', bn: 'আইটিসাপোর্ট' },
      likes: 2789,
      views: 5432,
      comments: 176,
      shares: 87,
      uploadDate: '1 week ago',
      trending: false,
      tags: ['tech', 'support']
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=400&fit=crop',
      title: { en: 'Monday mornings', bn: 'সোমবার সকাল' },
      author: { en: 'MondayBlues', bn: 'মান্ডেব্লুজ' },
      likes: 3456,
      views: 8765,
      comments: 234,
      shares: 145,
      uploadDate: '1 week ago',
      trending: false,
      tags: ['monday', 'work']
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=400&h=400&fit=crop',
      title: { en: 'Me vs the guy she told me not to worry about', bn: 'আমি vs সেই লোক যে সম্পর্কে সে আমাকে চিন্তা করতে বলে নি' },
      author: { en: 'MemeLord', bn: 'মিমলর্ড' },
      likes: 4321,
      views: 9876,
      comments: 321,
      shares: 210,
      uploadDate: '2 weeks ago',
      trending: false,
      tags: ['funny', 'comparison']
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=400&fit=crop',
      title: { en: 'How I see myself vs how I actually code', bn: 'আমি নিজেকে যেমন দেখি vs আমি আসলে যেমন কোড করি' },
      author: { en: 'CodeReality', bn: 'কোডরিয়েলিটি' },
      likes: 3876,
      views: 8765,
      comments: 287,
      shares: 154,
      uploadDate: '2 weeks ago',
      trending: false,
      tags: ['coding', 'reality']
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop',
      title: { en: 'When the wifi disconnects', bn: 'যখন ওয়াইফাই সংযোগ বিচ্ছিন্ন হয়' },
      author: { en: 'WifiProblems', bn: 'ওয়াইফাইপ্রব্লেমস' },
      likes: 2987,
      views: 6543,
      comments: 198,
      shares: 132,
      uploadDate: '3 weeks ago',
      trending: false,
      tags: ['wifi', 'internet']
    }
  ]);
  
  const fileInputRef = useRef(null);

  const filteredMemes = activeTab === 'trending' 
    ? memes.filter(meme => meme.trending)
    : memes.sort((a, b) => b.likes - a.likes);

  const tabs = [
    { id: 'trending', label: { en: 'Trending', bn: 'ট্রেন্ডিং' }, icon: TrendingUp },
    { id: 'popular', label: { en: 'Most Voted', bn: 'সর্বাধিক ভোটপ্রাপ্ত' }, icon: Heart },
    { id: 'upload', label: { en: 'Upload', bn: 'আপলোড' }, icon: Upload }
  ];

  const categories = [
    { id: 'all', label: { en: 'All', bn: 'সব' } },
    { id: 'coding', label: { en: 'Coding', bn: 'কোডিং' } },
    { id: 'funny', label: { en: 'Funny', bn: 'মজার' } },
    { id: 'student', label: { en: 'Student', bn: 'ছাত্র' } },
    { id: 'tech', label: { en: 'Tech', bn: 'টেক' } },
    { id: 'reaction', label: { en: 'Reaction', bn: 'প্রতিক্রিয়া' } }
  ];

  const handleLike = (memeId) => {
    setMemes(memes.map(meme => 
      meme.id === memeId ? { ...meme, likes: meme.likes + 1 } : meme
    ));
  };

  const handleShare = (memeId) => {
    const meme = memes.find(m => m.id === memeId);
    if (navigator.share) {
      navigator.share({
        title: meme.title[language],
        text: meme.title[language],
        url: meme.image,
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(language === 'bn' ? 'শেয়ার লিঙ্ক কপি হয়েছে!' : 'Share link copied!');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!uploadedImage || !title.trim()) {
      alert(language === 'bn' ? 'একটি ছবি এবং টাইটেল প্রয়োজন' : 'An image and title are required');
      return;
    }

    const newMeme = {
      id: memes.length + 1,
      image: uploadedImage,
      title: { en: title, bn: title },
      author: { en: 'You', bn: 'তুমি' },
      likes: 0,
      views: 0,
      comments: 0,
      shares: 0,
      uploadDate: 'Just now',
      trending: false,
      tags: []
    };

    setMemes([newMeme, ...memes]);
    setUploadedImage(null);
    setTitle('');
    setActiveTab('popular');
    alert(language === 'bn' ? 'মিম আপলোড হয়েছে!' : 'Meme uploaded successfully!');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    if (file && file.type.match('image.*')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {language === 'bn' ? '📸 মিম গ্যালারি' : '📸 Meme Gallery'}
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

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              className="px-4 py-2 bg-white rounded-full text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors duration-200"
            >
              {category.label[language]}
            </button>
          ))}
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
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                
                <div 
                  className={`border-2 border-dashed rounded-xl p-8 mb-6 transition-colors duration-200 cursor-pointer ${
                    uploadedImage 
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-300 hover:border-purple-400'
                  }`}
                  onClick={triggerFileInput}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {uploadedImage ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded meme" 
                        className="max-h-48 rounded-lg mb-4"
                      />
                      <button 
                        className="text-sm text-red-500 hover:text-red-600"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedImage(null);
                        }}
                      >
                        {language === 'bn' ? 'ছবি পরিবর্তন করুন' : 'Change image'}
                      </button>
                    </div>
                  ) : (
                    <>
                      <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                      <p className="text-gray-600 mb-2">
                        {language === 'bn' ? 'ছবি টেনে আনো বা ক্লিক করো' : 'Drag and drop or click to upload'}
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </>
                  )}
                </div>
                
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'মিমের টাইটেল লেখো...' : 'Add a funny title...'}
                  className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                
                <div className="mb-4">
                  <label className="block text-left text-sm font-medium text-gray-700 mb-2">
                    {language === 'bn' ? 'ট্যাগস (ঐচ্ছিক)' : 'Tags (optional)'}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['funny', 'coding', 'reaction', 'meme'].map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={handleUpload}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                >
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
                      🔥 {language === 'bn' ? 'ট্রেন্ডিং' : 'Trending'}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Eye size={14} />
                    <span>{meme.views}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                    {meme.title[language]}
                  </h3>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User size={14} className="mr-1" />
                    <span>{meme.author[language]}</span>
                    <span className="mx-2">•</span>
                    <Clock size={14} className="mr-1" />
                    <span>{meme.uploadDate}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(meme.id);
                        }}
                        className="flex items-center space-x-1 text-red-500 hover:text-red-600 transition-colors duration-200"
                      >
                        <Heart size={18} />
                        <span className="text-sm font-medium">{meme.likes}</span>
                      </button>
                      
                      <button 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
                      >
                        <MessageCircle size={18} />
                        <span className="text-sm font-medium">{meme.comments}</span>
                      </button>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(meme.id);
                      }}
                      className="flex items-center space-x-1 text-green-500 hover:text-green-600 transition-colors duration-200"
                    >
                      <Share2 size={18} />
                      <span className="text-sm font-medium">{language === 'bn' ? 'শেয়ার' : 'Share'}</span>
                    </button>
                  </div>
                  
                  {/* Tags */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {meme.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
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
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
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
                  className="w-full h-auto max-h-[60vh] object-contain rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {selectedMeme.title[language]}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <User size={14} className="mr-1" />
                      <span>{selectedMeme.author[language]}</span>
                      <span className="mx-2">•</span>
                      <Clock size={14} className="mr-1" />
                      <span>{selectedMeme.uploadDate}</span>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(selectedMeme.id)}
                      className="flex items-center space-x-2 text-red-500 hover:text-red-600"
                    >
                      <Heart size={20} />
                      <span className="font-medium">{selectedMeme.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-600">
                      <MessageCircle size={20} />
                      <span className="font-medium">{selectedMeme.comments}</span>
                    </button>
                    <button
                      onClick={() => handleShare(selectedMeme.id)}
                      className="flex items-center space-x-2 text-green-500 hover:text-green-600"
                    >
                      <Share2 size={20} />
                      <span className="font-medium">{selectedMeme.shares}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-gray-600">
                      <Download size={20} />
                    </button>
                  </div>
                  <button className="text-gray-500 hover:text-gray-600">
                    <Flag size={20} />
                  </button>
                </div>
                
                {/* Tags */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {selectedMeme.tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Comment Section */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-4">
                    {language === 'bn' ? 'মন্তব্যসমূহ' : 'Comments'}
                  </h4>
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder={language === 'bn' ? 'মন্তব্য করুন...' : 'Add a comment...'}
                        className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        author: 'MemeLover', 
                        text: language === 'bn' ? 'এটা খুব মজার! 😂' : 'This is so funny! 😂',
                        time: '2m ago'
                      },
                      { 
                        author: 'LaughMaster', 
                        text: language === 'bn' ? 'আমি সম্পর্কে জানি!' : 'I can relate!',
                        time: '15m ago'
                      },
                      { 
                        author: 'HumorKing', 
                        text: language === 'bn' ? 'একদম সত্যি!' : 'So true!',
                        time: '1h ago'
                      }
                    ].map((comment, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold">
                          {comment.author.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="bg-gray-100 p-3 rounded-lg">
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium text-sm">{comment.author}</span>
                              <span className="text-xs text-gray-500">{comment.time}</span>
                            </div>
                            <p className="text-sm">{comment.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'bn' ? '📊 মিম স্ট্যাটস' : '📊 Meme Stats'}
              </h2>
              <p className="text-gray-600">
                {language === 'bn' 
                  ? 'আমাদের সম্প্রদায়ের দ্বারা তৈরি করা মিমগুলির পরিসংখ্যান' 
                  : 'Statistics about memes created by our community'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl text-center">
                <div className="text-4xl text-purple-600 mb-2">{memes.length}</div>
                <h3 className="font-medium text-gray-800 mb-1">
                  {language === 'bn' ? 'মোট মিম' : 'Total Memes'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'bn' 
                    ? 'আমাদের ডাটাবেসে' 
                    : 'In our database'
                  }
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl text-center">
                <div className="text-4xl text-blue-600 mb-2">
                  {memes.reduce((sum, meme) => sum + meme.likes, 0).toLocaleString()}
                </div>
                <h3 className="font-medium text-gray-800 mb-1">
                  {language === 'bn' ? 'মোট লাইক' : 'Total Likes'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'bn' 
                    ? 'সব মিমে' 
                    : 'Across all memes'
                  }
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl text-center">
                <div className="text-4xl text-green-600 mb-2">
                  {memes.filter(m => m.trending).length}
                </div>
                <h3 className="font-medium text-gray-800 mb-1">
                  {language === 'bn' ? 'ট্রেন্ডিং মিম' : 'Trending Memes'}
                </h3>
                <p className="text-sm text-gray-600">
                  {language === 'bn' 
                    ? 'বর্তমানে জনপ্রিয়' 
                    : 'Currently popular'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'bn' ? '❓ কিভাবে কাজ করে' : '❓ How It Works'}
              </h2>
              <p className="text-gray-600">
                {language === 'bn' 
                  ? 'মিম গ্যালারি ব্যবহার করার সহজ ধাপগুলি' 
                  : 'Simple steps to use the Meme Gallery'
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '📤',
                  title: { en: 'Upload', bn: 'আপলোড' },
                  description: { 
                    en: 'Upload your funny meme image', 
                    bn: 'আপনার মজার মিম ছবি আপলোড করুন' 
                  }
                },
                {
                  icon: '👍',
                  title: { en: 'Engage', bn: 'এনগেজ' },
                  description: { 
                    en: 'Like, comment and share memes', 
                    bn: 'মিমগুলো লাইক করুন, কমেন্ট করুন এবং শেয়ার করুন' 
                  }
                },
                {
                  icon: '🏆',
                  title: { en: 'Go Viral', bn: 'ভাইরাল হোন' },
                  description: { 
                    en: 'Get your meme trending on the platform', 
                    bn: 'প্ল্যাটফর্মে আপনার মিম ট্রেন্ডিং করুন' 
                  }
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="font-medium text-gray-800 mb-2">
                    {step.title[language]}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeGallery;