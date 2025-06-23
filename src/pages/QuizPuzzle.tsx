
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, Trophy, Star, CheckCircle, XCircle } from 'lucide-react';

const QuizPuzzle = () => {
  const { language } = useLanguage();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const quizzes = [
    {
      id: 'personality',
      title: { en: 'Which Ice Cream Are You?', bn: 'তুমি কোন আইসক্রিম?' },
      icon: '🍦',
      color: 'from-pink-400 to-purple-500',
      questions: [
        {
          question: { en: 'What\'s your ideal weekend?', bn: 'তোমার আদর্শ সপ্তাহান্ত কী?' },
          options: [
            { text: { en: 'Reading a book', bn: 'বই পড়া' }, value: 'vanilla' },
            { text: { en: 'Adventure sports', bn: 'অ্যাডভেঞ্চার স্পোর্টস' }, value: 'chocolate' },
            { text: { en: 'Art & crafts', bn: 'শিল্প ও কারুশিল্প' }, value: 'strawberry' },
            { text: { en: 'Cooking', bn: 'রান্না করা' }, value: 'mint' }
          ]
        },
        {
          question: { en: 'Pick a color:', bn: 'একটি রং বেছে নিন:' },
          options: [
            { text: { en: 'White', bn: 'সাদা' }, value: 'vanilla' },
            { text: { en: 'Brown', bn: 'বাদামী' }, value: 'chocolate' },
            { text: { en: 'Pink', bn: 'গোলাপী' }, value: 'strawberry' },
            { text: { en: 'Green', bn: 'সবুজ' }, value: 'mint' }
          ]
        }
      ]
    },
    {
      id: 'logic',
      title: { en: 'Logic Puzzle Challenge', bn: 'লজিক পাজল চ্যালেঞ্জ' },
      icon: '🧩',
      color: 'from-blue-400 to-cyan-500',
      questions: [
        {
          question: { en: 'What comes next in this sequence: 2, 4, 8, 16, ?', bn: 'এই ক্রমে পরবর্তী সংখ্যা কী: ২, ৪, ৮, ১৬, ?' },
          options: [
            { text: { en: '24', bn: '২৪' }, value: false },
            { text: { en: '32', bn: '৩২' }, value: true },
            { text: { en: '30', bn: '৩০' }, value: false },
            { text: { en: '20', bn: '২০' }, value: false }
          ]
        },
        {
          question: { en: 'If all roses are flowers, and some flowers are red, which is true?', bn: 'যদি সব গোলাপ ফুল হয়, এবং কিছু ফুল লাল হয়, তাহলে কোনটি সত্য?' },
          options: [
            { text: { en: 'All roses are red', bn: 'সব গোলাপ লাল' }, value: false },
            { text: { en: 'Some roses might be red', bn: 'কিছু গোলাপ লাল হতে পারে' }, value: true },
            { text: { en: 'No roses are red', bn: 'কোন গোলাপ লাল নয়' }, value: false },
            { text: { en: 'All flowers are roses', bn: 'সব ফুল গোলাপ' }, value: false }
          ]
        }
      ]
    },
    {
      id: 'animals',
      title: { en: 'Guess the Animal', bn: 'প্রাণী চিনি' },
      icon: '🐾',
      color: 'from-green-400 to-yellow-500',
      questions: [
        {
          question: { en: 'I have stripes and live in Africa. What am I?', bn: 'আমার ডোরাকাটা দাগ আছে এবং আমি আফ্রিকায় থাকি। আমি কে?' },
          options: [
            { text: { en: 'Lion', bn: 'সিংহ' }, value: false },
            { text: { en: 'Zebra', bn: 'জেব্রা' }, value: true },
            { text: { en: 'Tiger', bn: 'বাঘ' }, value: false },
            { text: { en: 'Elephant', bn: 'হাতি' }, value: false }
          ]
        },
        {
          question: { en: 'I can fly and I love bananas. What am I?', bn: 'আমি উড়তে পারি এবং কলা পছন্দ করি। আমি কে?' },
          options: [
            { text: { en: 'Monkey', bn: 'বানর' }, value: false },
            { text: { en: 'Bird', bn: 'পাখি' }, value: false },
            { text: { en: 'Bat', bn: 'বাদুড়' }, value: true },
            { text: { en: 'Bee', bn: 'মৌমাছি' }, value: false }
          ]
        }
      ]
    }
  ];

  const startQuiz = (quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  const answerQuestion = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < activeQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate score for logic quiz
      if (activeQuiz.id === 'logic' || activeQuiz.id === 'animals') {
        const correctAnswers = newAnswers.filter(answer => answer === true).length;
        setScore(correctAnswers);
      }
      setShowResult(true);
    }
  };

  const getPersonalityResult = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});
    
    const result = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    const results = {
      vanilla: { 
        title: { en: 'Vanilla Ice Cream', bn: 'ভ্যানিলা আইসক্রিম' },
        description: { en: 'You are classic and timeless!', bn: 'তুমি ক্লাসিক এবং কালজয়ী!' }
      },
      chocolate: { 
        title: { en: 'Chocolate Ice Cream', bn: 'চকলেট আইসক্রিম' },
        description: { en: 'You are bold and adventurous!', bn: 'তুমি সাহসী এবং দুঃসাহসী!' }
      },
      strawberry: { 
        title: { en: 'Strawberry Ice Cream', bn: 'স্ট্রবেরি আইসক্রিম' },
        description: { en: 'You are sweet and creative!', bn: 'তুমি মধুর এবং সৃজনশীল!' }
      },
      mint: { 
        title: { en: 'Mint Ice Cream', bn: 'মিন্ট আইসক্রিম' },
        description: { en: 'You are refreshing and unique!', bn: 'তুমি সতেজ এবং অনন্য!' }
      }
    };
    
    return results[result];
  };

  const resetQuiz = () => {
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setScore(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const isPersonality = activeQuiz.id === 'personality';
    const personalityResult = isPersonality ? getPersonalityResult() : null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {language === 'bn' ? 'ফলাফল!' : 'Quiz Complete!'}
              </h2>
              
              {isPersonality ? (
                <div>
                  <div className="text-4xl mb-4">🍦</div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    {personalityResult.title[language]}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {personalityResult.description[language]}
                  </p>
                </div>
              ) : (
                <div>
                  <div className="text-4xl mb-4">
                    {score === activeQuiz.questions.length ? '🏆' : score > 0 ? '⭐' : '📝'}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {language === 'bn' ? 'তোমার স্কোর:' : 'Your Score:'}
                  </h3>
                  <p className="text-3xl font-bold text-gray-800 mb-4">
                    {score}/{activeQuiz.questions.length}
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    {score === activeQuiz.questions.length 
                      ? (language === 'bn' ? 'অসাধারণ! তুমি সব সঠিক উত্তর দিয়েছ!' : 'Perfect! You got all answers correct!')
                      : score > 0 
                      ? (language === 'bn' ? 'ভালো চেষ্টা! আরও ভালো করতে পারবে।' : 'Good try! You can do better next time.')
                      : (language === 'bn' ? 'আরও অনুশীলন করো!' : 'Keep practicing!')
                    }
                  </p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => startQuiz(activeQuiz)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  {language === 'bn' ? 'আবার চেষ্টা করো' : 'Try Again'}
                </button>
                <button
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200"
                >
                  {language === 'bn' ? 'অন্য কুইজ' : 'Other Quizzes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeQuiz) {
    const question = activeQuiz.questions[currentQuestion];
    const progress = ((currentQuestion + 1) / activeQuiz.questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {language === 'bn' ? 'অগ্রগতি' : 'Progress'}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {currentQuestion + 1}/{activeQuiz.questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{activeQuiz.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {question.question[language]}
                </h2>
              </div>

              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => answerQuestion(option.value)}
                    className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {option.text[language]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            🧠 Quiz & Puzzle Zone
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার কুইজ, পাজল আর ব্রেইন গেমস - তোমার মস্তিষ্ক যাচাই করো!' 
              : 'Fun quizzes, puzzles and brain games - test your knowledge!'
            }
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${quiz.color}`}></div>
              <div className="p-8">
                <div className="text-center">
                  <div className="text-5xl mb-4">{quiz.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {quiz.title[language]}
                  </h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>5 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span>{quiz.questions.length} questions</span>
                    </div>
                  </div>
                  <button
                    onClick={() => startQuiz(quiz)}
                    className={`w-full bg-gradient-to-r ${quiz.color} text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    {language === 'bn' ? 'শুরু করো' : 'Start Quiz'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                🏆 {language === 'bn' ? 'লিডারবোর্ড' : 'Leaderboard'}
              </h2>
              <p className="text-gray-600">
                {language === 'bn' ? 'টপ পারফরমারদের দেখো!' : 'See the top performers!'}
              </p>
            </div>

            <div className="space-y-4">
              {[
                { name: 'রাফি', score: 98, avatar: '👦' },
                { name: 'সারা', score: 95, avatar: '👧' },
                { name: 'আর্নব', score: 92, avatar: '🧒' },
                { name: 'তুমি', score: 0, avatar: '😊' }
              ].map((player, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-xl ${
                    index < 3 ? 'bg-gradient-to-r from-yellow-100 to-orange-100' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏃'}
                    </div>
                    <div className="text-2xl">{player.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-800">{player.name}</div>
                      <div className="text-sm text-gray-600">Quiz Master</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{player.score}</div>
                    <div className="text-sm text-gray-600">points</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPuzzle;
