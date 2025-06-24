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
        },
        {
          question: { en: 'What kind of movies do you prefer?', bn: 'তুমি কোন ধরনের সিনেমা পছন্দ করো?' },
          options: [
            { text: { en: 'Documentaries', bn: 'ডকুমেন্টারি' }, value: 'vanilla' },
            { text: { en: 'Action/Thriller', bn: 'অ্যাকশন/থ্রিলার' }, value: 'chocolate' },
            { text: { en: 'Romance/Comedy', bn: 'রোম্যান্স/কমেডি' }, value: 'strawberry' },
            { text: { en: 'Sci-Fi/Fantasy', bn: 'সাই-ফাই/ফ্যান্টাসি' }, value: 'mint' }
          ]
        },
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
        },
        {
          question: { en: 'I have cities, but no houses; forests, but no trees; and water, but no fish. What am I?', bn: 'আমার শহর আছে, কিন্তু বাড়ি নেই; বন আছে, কিন্তু গাছ নেই; এবং জল আছে, কিন্তু মাছ নেই। আমি কে?' },
          options: [
            { text: { en: 'A book', bn: 'একটি বই' }, value: false },
            { text: { en: 'A map', bn: 'একটি মানচিত্র' }, value: true },
            { text: { en: 'A globe', bn: 'একটি গ্লোব' }, value: false },
            { text: { en: 'A picture', bn: 'একটি ছবি' }, value: false }
          ],
          hint: { en: 'You use me for navigation.', bn: 'তুমি আমাকে দিকনির্দেশের জন্য ব্যবহার করো।' }
        },
        {
          question: { en: 'What has to be broken before you can use it?', bn: 'ব্যবহার করার আগে কী ভাঙতে হয়?' },
          options: [
            { text: { en: 'A secret', bn: 'একটি গোপনীয়তা' }, value: false },
            { text: { en: 'An egg', bn: 'একটি ডিম' }, value: true },
            { text: { en: 'A promise', bn: 'একটি প্রতিশ্রুতি' }, value: false },
            { text: { en: 'A heart', bn: 'একটি হৃদয়' }, value: false }
          ],
          hint: { en: 'It\'s often found in breakfast.', bn: 'এটি প্রায়ই সকালের খাবারে পাওয়া যায়।' }
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
        },
        {
          question: { en: 'I am known as the "king of the jungle" but I mostly live in grasslands. What am I?', bn: 'আমি "জঙ্গলের রাজা" হিসাবে পরিচিত কিন্তু আমি বেশিরভাগ তৃণভূমিতে বাস করি। আমি কে?' },
          options: [
            { text: { en: 'Tiger', bn: 'বাঘ' }, value: false },
            { text: { en: 'Lion', bn: 'সিংহ' }, value: true },
            { text: { en: 'Bear', bn: 'ভাল্লুক' }, value: false },
            { text: { en: 'Wolf', bn: 'নেকড়ে' }, value: false }
          ],
          hint: { en: 'I have a majestic mane.', bn: 'আমার একটি রাজকীয় কেশর আছে।' }
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
        },
        {
          question: { en: 'A man stands on one side of a river, his dog on the other. The man calls his dog, who immediately crosses the river without getting wet. How is this possible?', bn: 'একজন লোক নদীর একপাশে দাঁড়িয়ে আছে, তার কুকুর অন্য পাশে। লোকটি তার কুকুরকে ডাকে, যে সঙ্গে সঙ্গে নদী পার হয়ে যায় ভেজা না হয়ে। এটা কিভাবে সম্ভব?' },
          options: [
            { text: { en: 'The river was frozen', bn: 'নদীটি জমে গিয়েছিল' }, value: false },
            { text: { en: 'The dog walked across a bridge', bn: 'কুকুরটি একটি সেতু পার হয়ে গিয়েছিল' }, value: false },
            { text: { en: 'The river was dry', bn: 'নদীটি শুকনো ছিল' }, value: true },
            { text: { en: 'The man called him using a boat', bn: 'লোকটি একটি নৌকা ব্যবহার করে তাকে ডেকেছিল' }, value: false }
          ],
          hint: { en: 'Sometimes the simplest explanation is the right one.', bn: 'কখনও কখনও সবচেয়ে সহজ ব্যাখ্যাটিই সঠিক হয়।' }
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
        },
        {
          question: { en: 'Identify this flag:', bn: 'এই পতাকাটি চিহ্নিত করো:' },
          image: '🇮🇳',
          options: [
            { text: { en: 'Pakistan', bn: 'পাকিস্তান' }, value: false },
            { text: { en: 'India', bn: 'ভারত' }, value: true },
            { text: { en: 'Bangladesh', bn: 'বাংলাদেশ' }, value: false },
            { text: { en: 'Sri Lanka', bn: 'শ্রীলঙ্কা' }, value: false }
          ],
          hint: { en: 'It has a Dharma Chakra in the center.', bn: 'এর কেন্দ্রে একটি ধর্ম চক্র আছে।' }
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
        },
        {
          question: { en: 'What has an eye, but cannot see?', bn: 'কার চোখ আছে, কিন্তু দেখতে পায় না?' },
          options: [
            { text: { en: 'A potato', bn: 'একটি আলু' }, value: false },
            { text: { en: 'A needle', bn: 'একটি সুঁচ' }, value: true },
            { text: { en: 'A storm', bn: 'একটি ঝড়' }, value: false },
            { text: { en: 'A hurricane', bn: 'একটি হারিকেন' }, value: false }
          ],
          hint: { en: 'It is used for sewing.', bn: 'এটি সেলাই করার জন্য ব্যবহৃত হয়।' }
        }
      ]
    },
    {
      id: 'history',
      title: { en: 'History Buff Challenge', bn: 'ইতিহাস অনুরাগী চ্যালেঞ্জ' },
      icon: '📜',
      color: 'from-amber-400 to-orange-600',
      type: 'quiz',
      timeLimit: 150,
      questions: [
        {
          question: { en: 'Who was the first President of the United States?', bn: 'মার্কিন যুক্তরাষ্ট্রের প্রথম রাষ্ট্রপতি কে ছিলেন?' },
          options: [
            { text: { en: 'Abraham Lincoln', bn: 'আব্রাহাম লিঙ্কন' }, value: false },
            { text: { en: 'George Washington', bn: 'জর্জ ওয়াশিংটন' }, value: true },
            { text: { en: 'Thomas Jefferson', bn: 'থমাস জেফারসন' }, value: false },
            { text: { en: 'John Adams', bn: 'জন অ্যাডামস' }, value: false }
          ],
          hint: { en: 'He is known as the "Father of His Country."', bn: 'তিনি "জাতির পিতা" হিসাবে পরিচিত।' }
        },
        {
          question: { en: 'In what year did World War II end?', bn: 'দ্বিতীয় বিশ্বযুদ্ধ কত সালে শেষ হয়েছিল?' },
          options: [
            { text: { en: '1939', bn: '১৯৩৯' }, value: false },
            { text: { en: '1941', bn: '১৯৪১' }, value: false },
            { text: { en: '1945', bn: '১৯৪৫' }, value: true },
            { text: { en: '1950', bn: '১৯৫০' }, value: false }
          ],
          hint: { en: 'It ended with the surrender of Japan.', bn: 'এটি জাপানের আত্মসমর্পণের সাথে শেষ হয়েছিল।' }
        },
        {
          question: { en: 'Which ancient civilization built the pyramids?', bn: 'কোন প্রাচীন সভ্যতা পিরামিড তৈরি করেছিল?' },
          options: [
            { text: { en: 'Roman', bn: 'রোমান' }, value: false },
            { text: { en: 'Greek', bn: 'গ্রীক' }, value: false },
            { text: { en: 'Egyptian', bn: 'মিশরীয়' }, value: true },
            { text: { en: 'Mesopotamian', bn: 'মেসোপটেমীয়' }, value: false }
          ],
          hint: { en: 'They worshipped pharaohs.', bn: 'তারা ফারাওদের পূজা করত।' }
        },
      ]
    },
    {
      id: 'geography',
      title: { en: 'Geography Explorer', bn: 'ভূগোল অন্বেষণকারী' },
      icon: '🌍',
      color: 'from-lime-400 to-green-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'What is the capital of France?', bn: 'ফ্রান্সের রাজধানী কী?' },
          options: [
            { text: { en: 'Rome', bn: 'রোম' }, value: false },
            { text: { en: 'Berlin', bn: 'বার্লিন' }, value: false },
            { text: { en: 'Paris', bn: 'প্যারিস' }, value: true },
            { text: { en: 'Madrid', bn: 'মাদ্রিদ' }, value: false }
          ],
          hint: { en: 'It\'s known for the Eiffel Tower.', bn: 'এটি আইফেল টাওয়ারের জন্য পরিচিত।' }
        },
        {
          question: { en: 'Which is the longest river in the world?', bn: 'বিশ্বের দীর্ঘতম নদী কোনটি?' },
          options: [
            { text: { en: 'Amazon River', bn: 'আমাজন নদী' }, value: false },
            { text: { en: 'Nile River', bn: 'নীল নদ' }, value: true },
            { text: { en: 'Yangtze River', bn: 'ইয়াংসি নদী' }, value: false },
            { text: { en: 'Mississippi River', bn: 'মিসিসিপি নদী' }, value: false }
          ],
          hint: { en: 'It flows through Egypt.', bn: 'এটি মিশরের মধ্য দিয়ে প্রবাহিত হয়।' }
        },
        {
          question: { en: 'Which desert is the largest hot desert in the world?', bn: 'বিশ্বের বৃহত্তম উষ্ণ মরুভূমি কোনটি?' },
          options: [
            { text: { en: 'Gobi Desert', bn: 'গোবি মরুভূমি' }, value: false },
            { text: { en: 'Arabian Desert', bn: 'আরব মরুভূমি' }, value: false },
            { text: { en: 'Sahara Desert', bn: 'সাহারার মরুভূমি' }, value: true },
            { text: { en: 'Kalahari Desert', bn: 'কালাহারি মরুভূমি' }, value: false }
          ],
          hint: { en: 'It covers much of North Africa.', bn: 'এটি উত্তর আফ্রিকার বেশিরভাগ অংশ জুড়ে রয়েছে।' }
        }
      ]
    },
    {
      id: 'science',
      title: { en: 'Science Whiz', bn: 'বিজ্ঞান জাদুকর' },
      icon: '🔬',
      color: 'from-purple-400 to-indigo-600',
      type: 'quiz',
      timeLimit: 120,
      questions: [
        {
          question: { en: 'What is the chemical symbol for water?', bn: 'পানির রাসায়নিক প্রতীক কী?' },
          options: [
            { text: { en: 'O2', bn: 'O2' }, value: false },
            { text: { en: 'CO2', bn: 'CO2' }, value: false },
            { text: { en: 'H2O', bn: 'H2O' }, value: true },
            { text: { en: 'NaCl', bn: 'NaCl' }, value: false }
          ],
          hint: { en: 'It\'s composed of hydrogen and oxygen.', bn: 'এটি হাইড্রোজেন এবং অক্সিজেন দ্বারা গঠিত।' }
        },
        {
          question: { en: 'What planet is known as the "Red Planet"?', bn: 'কোন গ্রহ "লাল গ্রহ" নামে পরিচিত?' },
          options: [
            { text: { en: 'Jupiter', bn: 'বৃহস্পতি' }, value: false },
            { text: { en: 'Mars', bn: 'মঙ্গল' }, value: true },
            { text: { en: 'Venus', bn: 'শুক্র' }, value: false },
            { text: { en: 'Saturn', bn: 'শনি' }, value: false }
          ],
          hint: { en: 'It\'s named after the Roman god of war.', bn: 'এটি যুদ্ধের রোমান দেবতার নামে নামকরণ করা হয়েছে।' }
        },
        {
          question: { en: 'What is the powerhouse of the cell?', bn: 'কোষের শক্তিঘর কী?' },
          options: [
            { text: { en: 'Nucleus', bn: 'নিউক্লিয়াস' }, value: false },
            { text: { en: 'Mitochondria', bn: 'মাইটোكون্ড্রিয়া' }, value: true },
            { text: { en: 'Ribosome', bn: 'রাইবোসোম' }, value: false },
            { text: { en: 'Cytoplasm', bn: 'সাইটোপ্লাজম' }, value: false }
          ],
          hint: { en: 'It generates most of the chemical energy needed to power a cell\'s biochemical reactions.', bn: 'এটি একটি কোষের জৈব-রাসায়নিক বিক্রিয়াগুলিকে শক্তি দেওয়ার জন্য প্রয়োজনীয় বেশিরভাগ রাসায়নিক শক্তি তৈরি করে।' }
        }
      ]
    },
    {
      id: 'movies',
      title: { en: 'Movie Buff Trivia', bn: 'সিনেমা অনুরাগী ট্রিভিয়া' },
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'Who directed the movie "Titanic"?', bn: 'কে "টাইটানিক" ছবিটি পরিচালনা করেছিলেন?' },
          options: [
            { text: { en: 'Steven Spielberg', bn: 'স্টিভেন স্পিলবার্গ' }, value: false },
            { text: { en: 'James Cameron', bn: 'জেমস ক্যামেরন' }, value: true },
            { text: { en: 'Christopher Nolan', bn: 'ক্রিস্টোফার নোলান' }, value: false },
            { text: { en: 'Quentin Tarantino', bn: 'কোয়ান্টিন টারান্টিনো' }, value: false }
          ],
          hint: { en: 'He also directed "Avatar."', bn: 'তিনি "অবতার"ও পরিচালনা করেছিলেন।' }
        },
        {
          question: { en: 'Which actor played the role of Iron Man?', bn: 'কোন অভিনেতা আয়রন ম্যান চরিত্রে অভিনয় করেছেন?' },
          options: [
            { text: { en: 'Chris Evans', bn: 'ক্রিস ইভান্স' }, value: false },
            { text: { en: 'Mark Ruffalo', bn: 'মার্ক রাফালো' }, value: false },
            { text: { en: 'Robert Downey Jr.', bn: 'রবার্ট ডাউনি জুনিয়র' }, value: true },
            { text: { en: 'Chris Hemsworth', bn: 'ক্রিস হেমসওয়ার্থ' }, value: false }
          ],
          hint: { en: 'He is often associated with Marvel movies.', bn: 'তিনি প্রায়শই মার্ভেল সিনেমার সাথে যুক্ত।' }
        },
      ]
    },
    {
      id: 'music',
      title: { en: 'Music Mania', bn: 'সঙ্গীত উন্মাদনা' },
      icon: '🎵',
      color: 'from-orange-400 to-red-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'Which band sang "Bohemian Rhapsody"?', bn: 'কোন ব্যান্ড "বোhemian র‍্যাপসোডি" গেয়েছিল?' },
          options: [
            { text: { en: 'The Beatles', bn: 'দ্য বিটলস' }, value: false },
            { text: { en: 'Queen', bn: 'কুইন' }, value: true },
            { text: { en: 'Led Zeppelin', bn: 'লেড জেপেলিন' }, value: false },
            { text: { en: 'The Rolling Stones', bn: 'দ্য রোলিং স্টোনস' }, value: false }
          ],
          hint: { en: 'Their lead singer was Freddie Mercury.', bn: 'তাদের প্রধান গায়ক ছিলেন ফ্রেডি মার্কারি।' }
        },
        {
          question: { en: 'Who is known as the "King of Pop"?', bn: 'কে "পপের রাজা" হিসাবে পরিচিত?' },
          options: [
            { text: { en: 'Elvis Presley', bn: 'এলভিস প্রিসলি' }, value: false },
            { text: { en: 'Michael Jackson', bn: 'মাইকেল জ্যাকসন' }, value: true },
            { text: { en: 'Prince', bn: 'প্রিন্স' }, value: false },
            { text: { en: 'Madonna', bn: 'ম্যাডোনা' }, value: false }
          ],
          hint: { en: 'He had famous dance moves like the "moonwalk."', bn: 'তার "মুনওয়াক" এর মতো বিখ্যাত নাচের চাল ছিল।' }
        },
      ]
    },
    {
      id: 'literature',
      title: { en: 'Literary Legends', bn: 'সাহিত্যিক কিংবদন্তি' },
      icon: '📚',
      color: 'from-fuchsia-400 to-pink-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'Who wrote "Romeo and Juliet"?', bn: 'কে "রোমিও অ্যান্ড জুলিয়েট" লিখেছেন?' },
          options: [
            { text: { en: 'Jane Austen', bn: 'জেন অস্টেন' }, value: false },
            { text: { en: 'William Shakespeare', bn: 'উইলিয়াম শেক্সপিয়ার' }, value: true },
            { text: { en: 'Charles Dickens', bn: 'চার্লস ডিকেন্স' }, value: false },
            { text: { en: 'Mark Twain', bn: 'মার্ক টোয়েন' }, value: false }
          ],
          hint: { en: 'He is widely regarded as the greatest writer in the English language.', bn: 'তিনি ইংরেজি ভাষার সর্বশ্রেষ্ঠ লেখক হিসাবে ব্যাপকভাবে বিবেচিত।' }
        },
        {
          question: { en: 'What is the name of the wizard in "The Lord of the Rings"?', bn: 'দ্য লর্ড অফ দ্য রিংসের জাদুকরের নাম কী?' },
          options: [
            { text: { en: 'Dumbledore', bn: 'ডাম্বলডোর' }, value: false },
            { text: { en: 'Gandalf', bn: 'গ্যান্ডালফ' }, value: true },
            { text: { en: 'Merlin', bn: 'মার্লিন' }, value: false },
            { text: { en: 'Voldemort', bn: 'ভোলডেমর্ট' }, value: false }
          ],
          hint: { en: 'He carries a staff and wears a pointy hat.', bn: 'তিনি একটি লাঠি বহন করেন এবং একটি সূঁচালো টুপি পরেন।' }
        }
      ]
    },
    {
      id: 'sports',
      title: { en: 'Sports Fanatic', bn: 'ক্রীড়া উন্মাদ' },
      icon: '⚽',
      color: 'from-cyan-400 to-blue-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'How many players are on a standard soccer team?', bn: 'একটি স্ট্যান্ডার্ড সকার দলে কতজন খেলোয়াড় থাকে?' },
          options: [
            { text: { en: '9', bn: '৯' }, value: false },
            { text: { en: '10', bn: '১০' }, value: false },
            { text: { en: '11', bn: '১১' }, value: true },
            { text: { en: '12', bn: '১২' }, value: false }
          ],
          hint: { en: 'Including the goalkeeper.', bn: 'গোলরক্ষক সহ।' }
        },
        {
          question: { en: 'Which country has won the most FIFA World Cups?', bn: 'কোন দেশ সবচেয়ে বেশি ফিফা বিশ্বকাপ জিতেছে?' },
          options: [
            { text: { en: 'Germany', bn: 'জার্মানি' }, value: false },
            { text: { en: 'Italy', bn: 'ইতালি' }, value: false },
            { text: { en: 'Brazil', bn: 'ব্রাজিল' }, value: true },
            { text: { en: 'Argentina', bn: 'আর্জেন্টিনা' }, value: false }
          ],
          hint: { en: 'They are famous for their yellow and green jerseys.', bn: 'তারা তাদের হলুদ এবং সবুজ জার্সির জন্য বিখ্যাত।' }
        }
      ]
    },
    {
      id: 'technology',
      title: { en: 'Tech Genius', bn: 'প্রযুক্তি প্রতিভাবান' },
      icon: '💻',
      color: 'from-gray-400 to-blue-gray-600',
      type: 'quiz',
      questions: [
        {
          question: { en: 'What does CPU stand for?', bn: 'CPU এর পূর্ণরূপ কী?' },
          options: [
            { text: { en: 'Central Processing Unit', bn: 'সেন্ট্রাল প্রসেসিং ইউনিট' }, value: true },
            { text: { en: 'Computer Personal Unit', bn: 'কম্পিউটার পার্সোনাল ইউনিট' }, value: false },
            { text: { en: 'Central Power Unit', bn: 'সেন্ট্রাল পাওয়ার ইউনিট' }, value: false },
            { text: { en: 'Control Program Utility', bn: 'কন্ট্রোল প্রোগ্রাম ইউটিলিটি' }, value: false }
          ],
          hint: { en: 'It\'s the "brain" of a computer.', bn: 'এটি একটি কম্পিউটারের "মস্তিষ্ক"।' }
        },
        {
          question: { en: 'Which company developed the iPhone?', bn: 'কোন কোম্পানি আইফোন তৈরি করেছে?' },
          options: [
            { text: { en: 'Samsung', bn: 'স্যামসাং' }, value: false },
            { text: { en: 'Microsoft', bn: 'মাইক্রোসফট' }, value: false },
            { text: { en: 'Google', bn: 'গুগল' }, value: false },
            { text: { en: 'Apple', bn: 'অ্যাপল' }, value: true }
          ],
          hint: { en: 'Their logo is a bitten fruit.', bn: 'তাদের লোগো একটি কামড়ানো ফল।' }
        },
      ]
    },
    {
      id: 'food',
      title: { en: 'Foodie Trivia', bn: 'ফুডি ট্রিভিয়া' },
      icon: '🍔',
      color: 'from-rose-400 to-red-500',
      type: 'quiz',
      questions: [
        {
          question: { en: 'Which fruit is known as the "king of fruits"?', bn: 'কোন ফলকে "ফলের রাজা" বলা হয়?' },
          options: [
            { text: { en: 'Apple', bn: 'আপেল' }, value: false },
            { text: { en: 'Banana', bn: 'কলা' }, value: false },
            { text: { en: 'Durian', bn: 'ডুরিয়ান' }, value: true },
            { text: { en: 'Mango', bn: 'আম' }, value: false }
          ],
          hint: { en: 'It\'s famous for its strong smell.', bn: 'এটি তার তীব্র গন্ধের জন্য বিখ্যাত।' }
        },
        {
          question: { en: 'From which bean is chocolate made?', bn: 'কোন শিম থেকে চকোলেট তৈরি হয়?' },
          options: [
            { text: { en: 'Coffee bean', bn: 'কফি শিম' }, value: false },
            { text: { en: 'Vanilla bean', bn: 'ভ্যানিলা শিম' }, value: false },
            { text: { en: 'Cocoa bean', bn: 'কোকো শিম' }, value: true },
            { text: { en: 'Soy bean', bn: 'সয়া শিম' }, value: false }
          ],
          hint: { en: 'It grows in pods on trees.', bn: 'এটি গাছে শুঁটিতে জন্মায়।' }
        },
      ]
    },
    {
      id: 'general-knowledge',
      title: { en: 'General Knowledge Challenge', bn: 'সাধারণ জ্ঞান চ্যালেঞ্জ' },
      icon: '💡',
      color: 'from-yellow-400 to-lime-500',
      type: 'quiz',
      timeLimit: 180,
      questions: [
        {
          question: { en: 'What is the largest ocean on Earth?', bn: 'পৃথিবীর বৃহত্তম মহাসাগর কোনটি?' },
          options: [
            { text: { en: 'Atlantic Ocean', bn: 'আটলান্টিক মহাসাগর' }, value: false },
            { text: { en: 'Indian Ocean', bn: 'ভারত মহাসাগর' }, value: false },
            { text: { en: 'Arctic Ocean', bn: 'আর্কটিক মহাসাগর' }, value: false },
            { text: { en: 'Pacific Ocean', bn: 'প্রশান্ত মহাসাগর' }, value: true }
          ],
          hint: { en: 'It covers about one-third of the surface of the Earth.', bn: 'এটি পৃথিবীর পৃষ্ঠের প্রায় এক-তৃতীয়াংশ জুড়ে রয়েছে।' }
        },
        {
          question: { en: 'Which gas do plants absorb from the atmosphere?', bn: 'উদ্ভিদ বায়ুমণ্ডল থেকে কোন গ্যাস শোষণ করে?' },
          options: [
            { text: { en: 'Oxygen', bn: 'অক্সিজেন' }, value: false },
            { text: { en: 'Nitrogen', bn: 'নাইট্রোজেন' }, value: false },
            { text: { en: 'Carbon Dioxide', bn: 'কার্বন ডাই অক্সাইড' }, value: true },
            { text: { en: 'Hydrogen', bn: 'হাইড্রোজেন' }, value: false }
          ],
          hint: { en: 'It\'s essential for photosynthesis.', bn: 'এটি সালোকসংশ্লেষণের জন্য অপরিহার্য।' }
        },
        {
          question: { en: 'What is the highest mountain in Africa?', bn: 'আফ্রিকার সর্বোচ্চ পর্বত কোনটি?' },
          options: [
            { text: { en: 'Mount Kenya', bn: 'মাউন্ট কেনিয়া' }, value: false },
            { text: { en: 'Mount Kilimanjaro', bn: 'মাউন্ট কিলিমাঞ্জারো' }, value: true },
            { text: { en: 'Mount Stanley', bn: 'মাউন্ট স্ট্যানলি' }, value: false },
            { text: { en: 'Mount Elgon', bn: 'মাউন্ট এলগন' }, value: false }
          ],
          hint: { en: 'It is a dormant volcano in Tanzania.', bn: 'এটি তানজানিয়ার একটি সুপ্ত আগ্নেয়গিরি।' }
        },
      ]
    },
    {
      id: 'art',
      title: { en: 'Art & Culture Quiz', bn: 'শিল্প ও সংস্কৃতি কুইজ' },
      icon: '🎨',
      color: 'from-emerald-400 to-teal-500',
      type: 'quiz',
      questions: [
        {
          question: { en: 'Who painted the Mona Lisa?', bn: 'মোনালিসা কে এঁকেছিলেন?' },
          options: [
            { text: { en: 'Vincent van Gogh', bn: 'ভিনসেন্ট ভ্যান গগ' }, value: false },
            { text: { en: 'Pablo Picasso', bn: 'পাবলো পিকাসো' }, value: false },
            { text: { en: 'Leonardo da Vinci', bn: 'লিওনার্দো দা ভিঞ্চি' }, value: true },
            { text: { en: 'Claude Monet', bn: 'ক্লদ মোনে' }, value: false }
          ],
          hint: { en: 'He was a true Renaissance man.', bn: 'তিনি একজন সত্যিকারের রেনেসাঁস মানুষ ছিলেন।' }
        },
        {
          question: { en: 'Which city is home to the Colosseum?', bn: 'কোন শহরে কলোসিয়াম অবস্থিত?' },
          options: [
            { text: { en: 'Athens', bn: 'অ্যাথেন্স' }, value: false },
            { text: { en: 'Rome', bn: 'রোম' }, value: true },
            { text: { en: 'Cairo', bn: 'কায়রো' }, value: false },
            { text: { en: 'Istanbul', bn: 'ইস্তাম্বুল' }, value: false }
          ],
          hint: { en: 'It\'s the capital of Italy.', bn: 'এটি ইতালির রাজধানী।' }
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
        description: { en: 'You are classic and timeless, appreciating simplicity and comfort. You bring a sense of calm and reliability to any situation.', bn: 'তুমি ক্লাসিক এবং কালজয়ী, সরলতা এবং আরামের প্রশংসা করো। তুমি যেকোনো পরিস্থিতিতে শান্তি এবং নির্ভরযোগ্যতা নিয়ে আসো।' }
      },
      chocolate: { 
        title: { en: 'Chocolate Ice Cream', bn: 'চকলেট আইসক্রিম' },
        description: { en: 'You are bold and adventurous, always ready for new experiences. Your presence is strong and leaves a lasting impression.', bn: 'তুমি সাহসী এবং দুঃসাহসী, সবসময় নতুন অভিজ্ঞতার জন্য প্রস্তুত। তোমার উপস্থিতি শক্তিশালী এবং একটি স্থায়ী ছাপ ফেলে।' }
      },
      strawberry: { 
        title: { en: 'Strawberry Ice Cream', bn: 'স্ট্রবেরি আইসক্রিম' },
        description: { en: 'You are sweet and creative, with a vibrant personality. You love to connect with others and bring joy wherever you go.', bn: 'তুমি মধুর এবং সৃজনশীল, একটি প্রাণবন্ত ব্যক্তিত্বের অধিকারী। তুমি অন্যদের সাথে সংযোগ স্থাপন করতে এবং যেখানে যাও আনন্দ আনতে ভালোবাসো।' }
      },
      mint: { 
        title: { en: 'Mint Ice Cream', bn: 'মিন্ট আইসক্রিম' },
        description: { en: 'You are refreshing and unique, with a sharp mind and cool demeanor. You often offer a fresh perspective and enjoy intellectual challenges.', bn: 'তুমি সতেজ এবং অনন্য, একটি তীক্ষ্ণ মন এবং শান্ত স্বভাবের অধিকারী। তুমি প্রায়শই একটি নতুন দৃষ্টিভঙ্গি প্রদান করো এবং বৌদ্ধিক চ্যালেঞ্জ উপভোগ করো।' }
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