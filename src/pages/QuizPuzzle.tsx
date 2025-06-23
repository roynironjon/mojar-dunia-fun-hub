import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Clock, Trophy, Star, CheckCircle, XCircle, Award, HelpCircle, Lightbulb } from 'lucide-react';

const QuizPuzzle = () => {
  const { language } = useLanguage();
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimed, setIsTimed] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // Timer effect
  useEffect(() => {
    let interval;
    if (isTimed && activeQuiz && !showResult) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimed, activeQuiz, showResult]);

  const quizzes = [
    {
      id: 'personality',
      title: { en: 'Which Ice Cream Are You?', bn: 'তুমি কোন আইসক্রিম?' },
      icon: '🍦',
      color: 'from-pink-400 to-purple-500',
      type: 'personality',
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
      type: 'quiz',
      timeLimit: 120, // seconds
      questions: [
        {
          question: { en: 'What comes next in this sequence: 2, 4, 8, 16, ?', bn: 'এই ক্রমে পরবর্তী সংখ্যা কী: ২, ৪, ৮, ১৬, ?' },
          options: [
            { text: { en: '24', bn: '২৪' }, value: false },
            { text: { en: '32', bn: '৩২' }, value: true },
            { text: { en: '30', bn: '৩০' }, value: false },
            { text: { en: '20', bn: '২০' }, value: false }
          ],
          hint: { en: 'Each number is multiplied by 2', bn: 'প্রতিটি সংখ্যা ২ দ্বারা গুণিত হয়' }
        },
        {
          question: { en: 'If all roses are flowers, and some flowers are red, which is true?', bn: 'যদি সব গোলাপ ফুল হয়, এবং কিছু ফুল লাল হয়, তাহলে কোনটি সত্য?' },
          options: [
            { text: { en: 'All roses are red', bn: 'সব গোলাপ লাল' }, value: false },
            { text: { en: 'Some roses might be red', bn: 'কিছু গোলাপ লাল হতে পারে' }, value: true },
            { text: { en: 'No roses are red', bn: 'কোন গোলাপ লাল নয়' }, value: false },
            { text: { en: 'All flowers are roses', bn: 'সব ফুল গোলাপ' }, value: false }
          ],
          hint: { en: 'Think about Venn diagrams', bn: 'ভেন ডায়াগ্রাম সম্পর্কে চিন্তা করুন' }
        }
      ]
    },
    {
      id: 'animals',
      title: { en: 'Guess the Animal', bn: 'প্রাণী চিনি' },
      icon: '🐾',
      color: 'from-green-400 to-yellow-500',
      type: 'quiz',
      questions: [
        {
          question: { en: 'I have stripes and live in Africa. What am I?', bn: 'আমার ডোরাকাটা দাগ আছে এবং আমি আফ্রিকায় থাকি। আমি কে?' },
          options: [
            { text: { en: 'Lion', bn: 'সিংহ' }, value: false },
            { text: { en: 'Zebra', bn: 'জেব্রা' }, value: true },
            { text: { en: 'Tiger', bn: 'বাঘ' }, value: false },
            { text: { en: 'Elephant', bn: 'হাতি' }, value: false }
          ],
          hint: { en: 'Think about black and white striped animals', bn: 'কালো এবং সাদা ডোরাকাটা প্রাণী সম্পর্কে চিন্তা করুন' }
        },
        {
          question: { en: 'I can fly and I love bananas. What am I?', bn: 'আমি উড়তে পারি এবং কলা পছন্দ করি। আমি কে?' },
          options: [
            { text: { en: 'Monkey', bn: 'বানর' }, value: false },
            { text: { en: 'Bird', bn: 'পাখি' }, value: false },
            { text: { en: 'Bat', bn: 'বাদুড়' }, value: true },
            { text: { en: 'Bee', bn: 'মৌমাছি' }, value: false }
          ],
          hint: { en: 'It\'s not a bird but can fly', bn: 'এটি পাখি নয় কিন্তু উড়তে পারে' }
        }
      ]
    },
    {
      id: 'math',
      title: { en: 'Math Riddles', bn: 'গাণিতিক ধাঁধা' },
      icon: '➗',
      color: 'from-red-400 to-orange-500',
      type: 'quiz',
      timeLimit: 90,
      questions: [
        {
          question: { en: 'If 1=3, 2=3, 3=5, 4=4, 5=4, then 6=?', bn: 'যদি ১=৩, ২=৩, ৩=৫, ৪=৪, ৫=৪, তাহলে ৬=?' },
          options: [
            { text: { en: '3', bn: '৩' }, value: true },
            { text: { en: '5', bn: '৫' }, value: false },
            { text: { en: '6', bn: '৬' }, value: false },
            { text: { en: '4', bn: '৪' }, value: false }
          ],
          hint: { en: 'Count the letters in the English word for each number', bn: 'প্রতিটি সংখ্যার ইংরেজি শব্দের অক্ষর গণনা করুন' }
        },
        {
          question: { en: 'What is the next number in: 1, 11, 21, 1211, 111221, ...?', bn: 'পরবর্তী সংখ্যাটি কী: ১, ১১, ২১, ১২১১, ১১১২২১, ...?' },
          options: [
            { text: { en: '312211', bn: '৩১২২১১' }, value: true },
            { text: { en: '122111', bn: '১২২১১১' }, value: false },
            { text: { en: '111222', bn: '১১১২২২' }, value: false },
            { text: { en: '221111', bn: '২২১১১১' }, value: false }
          ],
          hint: { en: 'This is the "look-and-say" sequence', bn: 'এটি "লুক-এন্ড-সে" ক্রম' }
        }
      ]
    },
    {
      id: 'flags',
      title: { en: 'Flag Identification', bn: 'পতাকা চিনুন' },
      icon: '🏳️',
      color: 'from-indigo-400 to-violet-500',
      type: 'image-quiz',
      questions: [
        {
          question: { en: 'Which country does this flag belong to?', bn: 'এই পতাকাটি কোন দেশের?' },
          image: '🇨🇦',
          options: [
            { text: { en: 'Canada', bn: 'কানাডা' }, value: true },
            { text: { en: 'USA', bn: 'মার্কিন যুক্তরাষ্ট্র' }, value: false },
            { text: { en: 'UK', bn: 'যুক্তরাজ্য' }, value: false },
            { text: { en: 'Australia', bn: 'অস্ট্রেলিয়া' }, value: false }
          ],
          hint: { en: 'This country has a maple leaf on its flag', bn: 'এই দেশের পতাকায় ম্যাপেল পাতার ছবি আছে' }
        },
        {
          question: { en: 'Which country does this flag belong to?', bn: 'এই পতাকাটি কোন দেশের?' },
          image: '🇯🇵',
          options: [
            { text: { en: 'China', bn: 'চীন' }, value: false },
            { text: { en: 'Japan', bn: 'জাপান' }, value: true },
            { text: { en: 'South Korea', bn: 'দক্ষিণ কোরিয়া' }, value: false },
            { text: { en: 'Vietnam', bn: 'ভিয়েতনাম' }, value: false }
          ],
          hint: { en: 'The flag has a red circle on white background', bn: 'পতাকায় সাদা পটভূমিতে একটি লাল বৃত্ত আছে' }
        }
      ]
    },
    {
      id: 'wordplay',
      title: { en: 'Word Puzzles', bn: 'শব্দের ধাঁধা' },
      icon: '🔤',
      color: 'from-teal-400 to-emerald-500',
      type: 'quiz',
      questions: [
        {
          question: { en: 'What word becomes shorter when you add two letters to it?', bn: 'কোন শব্দে দুটি অক্ষর যোগ করলে তা ছোট হয়ে যায়?' },
          options: [
            { text: { en: 'Long', bn: 'লং' }, value: false },
            { text: { en: 'Short', bn: 'শর্ট' }, value: true },
            { text: { en: 'Tall', bn: 'টল' }, value: false },
            { text: { en: 'Small', bn: 'স্মল' }, value: false }
          ],
          hint: { en: 'Think about the word "short"', bn: '"শর্ট" শব্দটি সম্পর্কে চিন্তা করুন' }
        },
        {
          question: { en: 'I am taken from a mine, and shut up in a wooden case. What am I?', bn: 'আমাকে খনি থেকে নেওয়া হয়, এবং কাঠের বাক্সে বন্ধ করা হয়। আমি কী?' },
          options: [
            { text: { en: 'Gold', bn: 'সোনা' }, value: false },
            { text: { en: 'Coal', bn: 'কয়লা' }, value: false },
            { text: { en: 'Pencil lead', bn: 'পেন্সিলের সীসা' }, value: true },
            { text: { en: 'Diamond', bn: 'হীরা' }, value: false }
          ],
          hint: { en: 'You use it for writing', bn: 'আপনি এটি লিখতে ব্যবহার করেন' }
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
    setTimer(0);
    setIsTimed(quiz.timeLimit ? true : false);
    setHintUsed(false);
    setShowHint(false);
  };

  const answerQuestion = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // Check if answer is correct for quiz types
    if (activeQuiz.type === 'quiz' || activeQuiz.type === 'image-quiz') {
      if (answer === true) {
        setScore(prev => prev + 1);
      }
    }

    if (currentQuestion < activeQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowHint(false);
    } else {
      setShowResult(true);
    }
  };

  const useHint = () => {
    setShowHint(true);
    setHintUsed(true);
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
    setTimer(0);
    setIsTimed(false);
    setHintUsed(false);
    setShowHint(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (showResult) {
    const isPersonality = activeQuiz.type === 'personality';
    const personalityResult = isPersonality ? getPersonalityResult() : null;
    const perfectScore = score === activeQuiz?.questions?.length;
    const goodScore = score > activeQuiz?.questions?.length / 2;

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
                    {perfectScore ? '🏆' : goodScore ? '⭐' : '📝'}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    {language === 'bn' ? 'তোমার স্কোর:' : 'Your Score:'}
                  </h3>
                  <p className="text-3xl font-bold text-gray-800 mb-4">
                    {score}/{activeQuiz.questions.length}
                  </p>
                  {isTimed && (
                    <p className="text-lg text-gray-600 mb-2">
                      {language === 'bn' ? 'সময়:' : 'Time:'} {formatTime(timer)}
                    </p>
                  )}
                  {hintUsed && (
                    <p className="text-sm text-gray-500 mb-4">
                      {language === 'bn' ? 'তুমি একটি ইঙ্গিত ব্যবহার করেছ' : 'You used a hint'}
                    </p>
                  )}
                  <p className="text-lg text-gray-600 mb-6">
                    {perfectScore 
                      ? (language === 'bn' ? 'অসাধারণ! তুমি সব সঠিক উত্তর দিয়েছ!' : 'Perfect! You got all answers correct!')
                      : goodScore 
                      ? (language === 'bn' ? 'ভালো কাজ! তুমি বেশিরভাগ প্রশ্নের সঠিক উত্তর দিয়েছ।' : 'Great job! You got most answers right.')
                      : (language === 'bn' ? 'আরও অনুশীলন করো! তুমি আরও ভালো করতে পারবে।' : 'Keep practicing! You can do better.')
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
    const timeLeft = activeQuiz.timeLimit ? activeQuiz.timeLimit - timer : 0;
    const timePercentage = activeQuiz.timeLimit ? (timeLeft / activeQuiz.timeLimit) * 100 : 0;

    // Check if time's up
    if (isTimed && timeLeft <= 0) {
      setShowResult(true);
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Header with timer and progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  {language === 'bn' ? 'অগ্রগতি' : 'Progress'} {currentQuestion + 1}/{activeQuiz.questions.length}
                </span>
                {isTimed && (
                  <span className="text-sm font-medium text-gray-600">
                    <Clock size={16} className="inline mr-1" />
                    {formatTime(timeLeft)}
                  </span>
                )}
              </div>
              
              {/* Progress bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {/* Time bar (for timed quizzes) */}
              {isTimed && (
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-red-500 to-orange-500 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${timePercentage}%` }}
                  ></div>
                </div>
              )}
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">
                  {activeQuiz.type === 'image-quiz' ? question.image : activeQuiz.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {question.question[language]}
                </h2>
              </div>

              <div className="space-y-4 mb-6">
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

              {/* Hint section */}
              {question.hint && (
                <div className="text-center">
                  {!hintUsed ? (
                    <button 
                      onClick={useHint}
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center justify-center space-x-1"
                    >
                      <HelpCircle size={16} />
                      <span>{language === 'bn' ? 'ইঙ্গিত পান' : 'Get a hint'}</span>
                    </button>
                  ) : showHint ? (
                    <div className="bg-yellow-50 p-3 rounded-lg text-sm text-yellow-800 flex items-center justify-center space-x-2">
                      <Lightbulb size={16} />
                      <span>{question.hint[language]}</span>
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500">
                      {language === 'bn' ? 'ইঙ্গিত ব্যবহৃত হয়েছে' : 'Hint used'}
                    </div>
                  )}
                </div>
              )}
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
            {language === 'bn' ? '🧠 কুইজ ও পাজল জোন' : '🧠 Quiz & Puzzle Zone'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'মজার কুইজ, পাজল আর ব্রেইন গেমস - তোমার মস্তিষ্ক যাচাই করো!' 
              : 'Fun quizzes, puzzles and brain games - test your knowledge!'
            }
          </p>
        </div>

        {/* Quiz Categories */}
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
                      <span>
                        {quiz.timeLimit 
                          ? `${Math.floor(quiz.timeLimit / 60)} ${language === 'bn' ? 'মিনিট' : 'min'}`
                          : language === 'bn' ? 'সময়সীমা নেই' : 'No time limit'
                        }
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} />
                      <span>{quiz.questions.length} {language === 'bn' ? 'প্রশ্ন' : 'questions'}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                      {quiz.type === 'personality' 
                        ? (language === 'bn' ? 'ব্যক্তিত্ব পরীক্ষা' : 'Personality Test')
                        : quiz.type === 'image-quiz'
                        ? (language === 'bn' ? 'ছবির কুইজ' : 'Image Quiz')
                        : (language === 'bn' ? 'জ্ঞান পরীক্ষা' : 'Knowledge Quiz')
                      }
                    </span>
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

        {/* Stats Section */}
        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-3xl text-blue-500 mb-2">
              <Trophy size={32} className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'bn' ? '১০০০+ খেলোয়াড়' : '1000+ Players'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn' ? 'আমাদের সম্প্রদায়ে যোগ দিন' : 'Join our community'}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-3xl text-purple-500 mb-2">
              <Award size={32} className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'bn' ? '৫০+ কুইজ' : '50+ Quizzes'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn' ? 'বিভিন্ন বিষয়ে কুইজ' : 'Quizzes on various topics'}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <div className="text-3xl text-green-500 mb-2">
              <Lightbulb size={32} className="inline" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {language === 'bn' ? 'ইঙ্গিত সহায়তা' : 'Hint Support'}
            </h3>
            <p className="text-gray-600">
              {language === 'bn' ? 'কঠিন প্রশ্নের জন্য ইঙ্গিত পান' : 'Get hints for difficult questions'}
            </p>
          </div>
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
                { name: language === 'bn' ? 'রাফি' : 'Rafi', score: 98, avatar: '👦' },
                { name: language === 'bn' ? 'সারা' : 'Sarah', score: 95, avatar: '👧' },
                { name: language === 'bn' ? 'আর্নব' : 'Arnob', score: 92, avatar: '🧒' },
                { name: language === 'bn' ? 'তুমি' : 'You', score: 0, avatar: '😊' }
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
                      <div className="text-sm text-gray-600">
                        {language === 'bn' ? 'কুইজ মাস্টার' : 'Quiz Master'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{player.score}</div>
                    <div className="text-sm text-gray-600">
                      {language === 'bn' ? 'পয়েন্ট' : 'points'}
                    </div>
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