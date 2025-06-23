
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Play, Trophy, Clock, Star, Users, Gamepad2 } from 'lucide-react';

const MiniGames = () => {
  const { language } = useLanguage();
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    {
      id: 1,
      title: { en: 'Catch the Lathi', bn: 'লাঠি ধরো' },
      description: { en: 'A funny Bengali game where you catch the stick!', bn: 'একটি মজার বাংলা গেম যেখানে তুমি লাঠি ধরবে!' },
      icon: '🥖',
      difficulty: 'Easy',
      players: '1 Player',
      time: '2-5 min',
      rating: 4.8,
      plays: 15420,
      color: 'from-yellow-400 to-orange-500',
      category: 'Action'
    },
    {
      id: 2,
      title: { en: 'Murgi Run', bn: 'মুরগি দৌড়' },
      description: { en: 'Help the chicken run and collect eggs!', bn: 'মুরগিকে দৌড়াতে সাহায্য করো এবং ডিম সংগ্রহ করো!' },
      icon: '🐔',
      difficulty: 'Medium',
      players: '1 Player',
      time: '3-7 min',
      rating: 4.6,
      plays: 12350,
      color: 'from-green-400 to-teal-500',
      category: 'Runner'
    },
    {
      id: 3,
      title: { en: 'Puzzle Match', bn: 'পাজল মিল' },
      description: { en: 'Match colorful shapes and solve puzzles!', bn: 'রঙিন আকৃতি মিলাও এবং পাজল সমাধান করো!' },
      icon: '🧩',
      difficulty: 'Hard',
      players: '1-2 Players',
      time: '5-10 min',
      rating: 4.9,
      plays: 18750,
      color: 'from-purple-400 to-blue-500',
      category: 'Puzzle'
    },
    {
      id: 4,
      title: { en: 'Memory Cards', bn: 'স্মৃতি কার্ড' },
      description: { en: 'Test your memory with fun cards!', bn: 'মজার কার্ড দিয়ে তোমার স্মৃতিশক্তি পরীক্ষা করো!' },
      icon: '🃏',
      difficulty: 'Easy',
      players: '1 Player',
      time: '2-4 min',
      rating: 4.5,
      plays: 9870,
      color: 'from-pink-400 to-red-500',
      category: 'Memory'
    },
    {
      id: 5,
      title: { en: 'Number Jump', bn: 'সংখ্যা লাফ' },
      description: { en: 'Jump on the right numbers and win!', bn: 'সঠিক সংখ্যার উপর লাফ দাও এবং জয় করো!' },
      icon: '🔢',
      difficulty: 'Medium',
      players: '1 Player',
      time: '3-6 min',
      rating: 4.7,
      plays: 11200,
      color: 'from-indigo-400 to-purple-500',
      category: 'Educational'
    },
    {
      id: 6,
      title: { en: 'Color Splash', bn: 'রঙের ছিটা' },
      description: { en: 'Paint the world with beautiful colors!', bn: 'সুন্দর রঙ দিয়ে পৃথিবী রাঙিয়ে দাও!' },
      icon: '🎨',
      difficulty: 'Easy',
      players: '1 Player',
      time: '1-3 min',
      rating: 4.4,
      plays: 8650,
      color: 'from-emerald-400 to-cyan-500',
      category: 'Creative'
    }
  ];

  const categories = [
    { name: 'All', icon: '🎮', count: games.length },
    { name: 'Action', icon: '⚡', count: games.filter(g => g.category === 'Action').length },
    { name: 'Puzzle', icon: '🧩', count: games.filter(g => g.category === 'Puzzle').length },
    { name: 'Educational', icon: '📚', count: games.filter(g => g.category === 'Educational').length }
  ];

  const leaderboard = [
    { name: 'রাহুল', score: 9850, avatar: '👦', game: 'Catch the Lathi' },
    { name: 'সারা', score: 8970, avatar: '👧', game: 'Murgi Run' },
    { name: 'আর্নব', score: 8450, avatar: '🧒', game: 'Puzzle Match' },
    { name: 'তুমি', score: 0, avatar: '😊', game: 'Start Playing!' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const playGame = (game) => {
    setSelectedGame(game);
    // Here you would implement the actual game logic
    console.log('Playing game:', game.title[language]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            🕹️ Mini Games
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার মিনি গেমস খেলো, স্কোর করো আর বন্ধুদের সাথে প্রতিযোগিতা করো!' 
              : 'Play fun mini games, score points and compete with friends!'
            }
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          {[
            { icon: '🎮', label: { en: 'Games Played', bn: 'গেমস খেলা হয়েছে' }, value: '50K+' },
            { icon: '👥', label: { en: 'Active Players', bn: 'সক্রিয় খেলোয়াড়' }, value: '2.5K' },
            { icon: '🏆', label: { en: 'High Scores', bn: 'উচ্চ স্কোর' }, value: '100K+' },
            { icon: '⭐', label: { en: 'Avg Rating', bn: 'গড় রেটিং' }, value: '4.7/5' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-lg font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label[language]}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <span className="text-xl">{category.icon}</span>
              <span className="font-medium text-gray-700">{category.name}</span>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${game.color}`}></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{game.icon}</div>
                  <div className="flex items-center space-x-1">
                    <Star className="text-yellow-400" size={16} />
                    <span className="text-sm font-medium text-gray-600">{game.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {game.title[language]}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {game.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                    {game.difficulty}
                  </span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                    {game.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{game.players}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{game.time}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play size={14} />
                    <span>{game.plays.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => playGame(game)}
                  className={`w-full bg-gradient-to-r ${game.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2`}
                >
                  <Gamepad2 size={18} />
                  <span>{language === 'bn' ? 'খেলো' : 'Play Now'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🏆 {language === 'bn' ? 'লিডারবোর্ড' : 'Leaderboard'}
              </h2>
              <p className="text-gray-600">
                {language === 'bn' ? 'সেরা খেলোয়াড়দের দেখো এবং প্রেরণা নাও!' : 'See the best players and get inspired!'}
              </p>
            </div>

            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all duration-200 ${
                    index < 3 
                      ? 'bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 hover:shadow-md' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏃'}
                    </div>
                    <div className="text-2xl">{player.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-800">{player.name}</div>
                      <div className="text-sm text-gray-600">{player.game}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-blue-600">
                      {player.score > 0 ? player.score.toLocaleString() : '--'}
                    </div>
                    <div className="text-sm text-gray-600">points</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                {language === 'bn' ? 'গেম খেলে র‍্যাঙ্কিং-এ যোগ দাও' : 'Play Games to Join Rankings'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Modal */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8 text-center">
              <div className="text-6xl mb-4">{selectedGame.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedGame.title[language]}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedGame.description[language]}
              </p>
              
              <div className="bg-gray-100 rounded-xl p-8 mb-6">
                <div className="text-4xl mb-4">🎮</div>
                <p className="text-gray-600 mb-4">
                  {language === 'bn' 
                    ? 'গেম লোড হচ্ছে... একটু অপেক্ষা করুন!'
                    : 'Game is loading... Please wait!'
                  }
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4 animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSelectedGame(null)}
                  className="bg-gray-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-all duration-200"
                >
                  {language === 'bn' ? 'বন্ধ করো' : 'Close'}
                </button>
                <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200">
                  {language === 'bn' ? 'পূর্ণ স্ক্রিনে খেলো' : 'Play Fullscreen'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniGames;
