
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Mail, MessageSquare, Star, Heart, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { language } = useLanguage();
  const [activeForm, setActiveForm] = useState('meme');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: 5,
    category: 'meme'
  });

  const forms = [
    { id: 'meme', label: { en: 'Submit Meme/Joke', bn: 'মিম/জোক জমা দাও' }, icon: '😂' },
    { id: 'game', label: { en: 'Suggest Game', bn: 'গেমের পরামর্শ' }, icon: '🎮' },
    { id: 'feedback', label: { en: 'Feedback', bn: 'মতামত' }, icon: '💬' },
    { id: 'contact', label: { en: 'General Contact', bn: 'সাধারণ যোগাযোগ' }, icon: '📞' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, category: activeForm });
    // Here you would send the data to your backend
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      rating: 5,
      category: activeForm
    });
    
    alert(language === 'bn' ? 'তোমার বার্তা পাঠানো হয়েছে! ধন্যবাদ!' : 'Your message has been sent! Thank you!');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: { en: 'Email Us', bn: 'ইমেইল করো' },
      content: 'hello@mojardunia.com',
      description: { en: 'Send us your thoughts', bn: 'তোমার মতামত পাঠাও' }
    },
    {
      icon: Phone,
      title: { en: 'Call Us', bn: 'ফোন করো' },
      content: '+880-123-456-7890',
      description: { en: 'Mon-Fri 9AM-6PM', bn: 'সোম-শুক্র ৯টা-৬টা' }
    },
    {
      icon: MapPin,
      title: { en: 'Visit Us', bn: 'আমাদের দেখতে এসো' },
      content: 'Dhaka, Bangladesh',
      description: { en: 'Come say hello!', bn: 'এসে হ্যালো বলো!' }
    },
    {
      icon: Clock,
      title: { en: 'Response Time', bn: 'উত্তরের সময়' },
      content: '24-48 hours',
      description: { en: 'We reply quickly', bn: 'আমরা দ্রুত উত্তর দিই' }
    }
  ];

  const teamMembers = [
    {
      name: 'রাহুল আহমেদ',
      role: { en: 'Fun Content Creator', bn: 'মজার কন্টেন্ট ক্রিয়েটর' },
      avatar: '👨‍💻',
      specialty: { en: 'Jokes & Memes', bn: 'জোকস ও মিম' }
    },
    {
      name: 'সারা খান',
      role: { en: 'Game Designer', bn: 'গেম ডিজাইনার' },
      avatar: '👩‍🎨',
      specialty: { en: 'Mini Games', bn: 'মিনি গেমস' }
    },
    {
      name: 'আর্নব রায়',
      role: { en: 'AI Developer', bn: 'এআই ডেভেলপার' },
      avatar: '🤖',
      specialty: { en: 'AI Tools', bn: 'এআই টুলস' }
    }
  ];

  const renderForm = () => {
    const getFormContent = () => {
      switch (activeForm) {
        case 'meme':
          return {
            title: { en: 'Submit Your Meme or Joke', bn: 'তোমার মিম বা জোক জমা দাও' },
            description: { en: 'Share your funny content with our community!', bn: 'আমাদের কমিউনিটির সাথে তোমার মজার কন্টেন্ট শেয়ার করো!' },
            fields: ['name', 'email', 'subject', 'message']
          };
        case 'game':
          return {
            title: { en: 'Suggest a New Game', bn: 'নতুন গেমের পরামর্শ দাও' },
            description: { en: 'Have an idea for a fun game? Let us know!', bn: 'মজার গেমের আইডিয়া আছে? আমাদের জানাও!' },
            fields: ['name', 'email', 'subject', 'message']
          };
        case 'feedback':
          return {
            title: { en: 'Share Your Feedback', bn: 'তোমার মতামত শেয়ার করো' },
            description: { en: 'Help us improve Mojar Dunia!', bn: 'মজার দুনিয়া উন্নত করতে সাহায্য করো!' },
            fields: ['name', 'email', 'subject', 'message', 'rating']
          };
        case 'contact':
          return {
            title: { en: 'Get in Touch', bn: 'যোগাযোগ করো' },
            description: { en: 'We\'d love to hear from you!', bn: 'আমরা তোমার কাছ থেকে শুনতে চাই!' },
            fields: ['name', 'email', 'subject', 'message']
          };
        default:
          return { title: { en: '', bn: '' }, description: { en: '', bn: '' }, fields: [] };
      }
    };

    const formContent = getFormContent();

    return (
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{forms.find(f => f.id === activeForm)?.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {formContent.title[language]}
          </h3>
          <p className="text-gray-600">
            {formContent.description[language]}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {formContent.fields.includes('name') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'তোমার নাম' : 'Your Name'}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={language === 'bn' ? 'তোমার নাম লেখো...' : 'Enter your name...'}
              />
            </div>
          )}

          {formContent.fields.includes('email') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'ইমেইল ঠিকানা' : 'Email Address'}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={language === 'bn' ? 'তোমার ইমেইল লেখো...' : 'Enter your email...'}
              />
            </div>
          )}

          {formContent.fields.includes('subject') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'বিষয়' : 'Subject'}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={language === 'bn' ? 'বিষয় লেখো...' : 'Enter subject...'}
              />
            </div>
          )}

          {formContent.fields.includes('rating') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'রেটিং দাও' : 'Rate Your Experience'}
              </label>
              <div className="flex items-center space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                    className={`text-2xl transition-colors duration-200 ${
                      star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    <Star fill="currentColor" />
                  </button>
                ))}
                <span className="ml-2 text-gray-600">
                  {formData.rating}/5 {language === 'bn' ? 'তারা' : 'stars'}
                </span>
              </div>
            </div>
          )}

          {formContent.fields.includes('message') && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'bn' ? 'তোমার বার্তা' : 'Your Message'}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                placeholder={language === 'bn' ? 'তোমার বার্তা বিস্তারিত লেখো...' : 'Write your message in detail...'}
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <Send size={18} />
            <span>{language === 'bn' ? 'পাঠাও' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            📬 Contact & Submit
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'তোমার মতামত, পরামর্শ বা মজার কন্টেন্ট পাঠাও - আমরা শুনতে চাই!' 
              : 'Send us your feedback, suggestions or fun content - we want to hear from you!'
            }
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 text-white rounded-full mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {info.title[language]}
                </h3>
                <p className="text-gray-600 font-medium mb-1">{info.content}</p>
                <p className="text-gray-500 text-sm">{info.description[language]}</p>
              </div>
            );
          })}
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Form Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {forms.map((form) => (
              <button
                key={form.id}
                onClick={() => setActiveForm(form.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                  activeForm === form.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <span className="text-xl">{form.icon}</span>
                <span>{form.label[language]}</span>
              </button>
            ))}
          </div>

          {/* Form */}
          {renderForm()}
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              👥 {language === 'bn' ? 'আমাদের টিম' : 'Meet Our Team'}
            </h2>
            <p className="text-gray-600">
              {language === 'bn' 
                ? 'যারা মজার দুনিয়া তৈরি করে তাদের সাথে পরিচয় হও!'
                : 'Meet the people who create the fun world for you!'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role[language]}</p>
                <p className="text-gray-600 text-sm">{member.specialty[language]}</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 transition-colors duration-200">
                    <Mail size={18} />
                  </button>
                  <button className="text-pink-500 hover:text-pink-600 transition-colors duration-200">
                    <MessageSquare size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ❓ {language === 'bn' ? 'সাধারণ প্রশ্ন' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-gray-600">
                {language === 'bn' 
                  ? 'তোমার মনে যে প্রশ্ন আছে তার উত্তর এখানে পেতে পারো!'
                  : 'Find answers to common questions you might have!'
                }
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: { en: 'How can I submit my meme or joke?', bn: 'আমি কীভাবে আমার মিম বা জোক জমা দিতে পারি?' },
                  a: { en: 'Use the "Submit Meme/Joke" form above and share your funny content with us!', bn: 'উপরের "মিম/জোক জমা দাও" ফর্ম ব্যবহার করো এবং তোমার মজার কন্টেন্ট আমাদের সাথে শেয়ার করো!' }
                },
                {
                  q: { en: 'Are all games free to play?', bn: 'সব গেম কি বিনামূল্যে খেলা যায়?' },
                  a: { en: 'Yes! All our mini games are completely free and always will be.', bn: 'হ্যাঁ! আমাদের সব মিনি গেম সম্পূর্ণ বিনামূল্যে এবং সবসময় থাকবে।' }
                },
                {
                  q: { en: 'How often do you add new content?', bn: 'তুমি কত ঘন ঘন নতুন কন্টেন্ট যোগ করো?' },
                  a: { en: 'We add new jokes, games, and features every week based on your suggestions!', bn: 'আমরা তোমাদের পরামর্শের ভিত্তিতে প্রতি সপ্তাহে নতুন জোকস, গেম এবং ফিচার যোগ করি!' }
                }
              ].map((faq, index) => (
                <div key={index} className="border-l-4 border-purple-500 pl-6">
                  <h4 className="font-bold text-gray-800 mb-2">{faq.q[language]}</h4>
                  <p className="text-gray-600">{faq.a[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
