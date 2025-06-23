import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shuffle, Heart, Share2, Copy, ChevronLeft, ChevronRight } from 'lucide-react';

const JokeZone = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState('kids');
  const [currentJoke, setCurrentJoke] = useState(0);
  const [likedJokes, setLikedJokes] = useState<Record<string, Set<number>>>({
    kids: new Set(),
    dad: new Set(),
    bangla: new Set(),
    ai: new Set(),
    professional: new Set(),
    dark: new Set(),
    animal: new Set(),
    school: new Set()
  });

  const jokeSections = [
    { id: 'kids', name: language === 'bn' ? 'বাচ্চাদের জোকস' : 'Kids Jokes', icon: '👶', color: 'bg-yellow-400' },
    { id: 'dad', name: language === 'bn' ? 'বাবাদের জোকস' : 'Dad Jokes', icon: '👨', color: 'bg-blue-400' },
    { id: 'bangla', name: language === 'bn' ? 'বাংলা হাসির গল্প' : 'Bangla Hasir Golpo', icon: '🇧🇩', color: 'bg-green-400' },
    { id: 'professional', name: language === 'bn' ? 'পেশাদার জোকস' : 'Professional Jokes', icon: '💼', color: 'bg-indigo-400' },
    { id: 'dark', name: language === 'bn' ? 'ডার্ক হিউমার' : 'Dark Humor', icon: '🌑', color: 'bg-gray-600' },
    { id: 'animal', name: language === 'bn' ? 'প্রাণীদের জোকস' : 'Animal Jokes', icon: '🐶', color: 'bg-orange-400' },
    { id: 'school', name: language === 'bn' ? 'স্কুল জোকস' : 'School Jokes', icon: '🏫', color: 'bg-purple-400' },
    { id: 'ai', name: language === 'bn' ? 'এআই জোক জেনারেটর' : 'AI Joke Generator', icon: '🤖', color: 'bg-pink-400' }
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
      },
      {
        en: "What do you call a fake noodle? An impasta!",
        bn: "নকল নুডলকে কী বলে? ইম্পাস্তা!"
      },
      {
        en: "How do you make a tissue dance? Put a little boogie in it!",
        bn: "টিস্যুকে কীভাবে নাচানো যায়? এর মধ্যে একটু বুগি দিন!"
      },
      {
        en: "Why did the scarecrow win an award? Because he was outstanding in his field!",
        bn: "স্কেয়ারক্রো কেন পুরস্কার পেল? কারণ সে তার ক্ষেত্রে অসাধারণ ছিল!"
      },
      {
        en: "What do you call cheese that isn't yours? Nacho cheese!",
        bn: "আপনার নয় এমন পনিরকে কী বলে? নাচো পনির!"
      },
      {
        en: "Why can't you explain puns to kleptomaniacs? They always take things literally.",
        bn: "ক্লেপ্টোম্যানিয়াকদের কেন পুন ব্যাখ্যা করা যায় না? তারা সবকিছু আক্ষরিক অর্থে নেয়।"
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
      },
      {
        en: "Did you hear about the claustrophobic astronaut? He just needed a little space.",
        bn: "ক্লস্ট্রোফোবিক নভোচারী সম্পর্কে শুনেছেন? সে শুধু একটু জায়গা চেয়েছিল।"
      },
      {
        en: "Why don't skeletons fight each other? They don't have the guts.",
        bn: "কঙ্কালরা কেন একে অপরের সাথে লড়াই করে না? তাদের সাহস নেই।"
      },
      {
        en: "What did the janitor say when he jumped out of the closet? Supplies!",
        bn: "কোষাধ্যক্ষ কি বলল যখন সে আলমারি থেকে লাফ দিল? সরঞ্জাম!"
      },
      {
        en: "Have you heard about the new restaurant called Karma? There's no menu: You get what you deserve.",
        bn: "আপনি কি কর্মা নামে নতুন রেস্তোরাঁটি সম্পর্কে শুনেছেন? এখানে কোন মেনু নেই: আপনি যা প্রাপ্য তাই পাবেন।"
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
      },
      {
        en: "এক লোকের খুব গর্ব ছিল যে সে কখনও মিথ্যা বলে না। একদিন সে বলল, 'আমি কখনও মিথ্যা বলি না।' সঙ্গে সঙ্গে তার নাক এক ইঞ্চি বড় হয়ে গেল!",
        bn: "এক লোকের খুব গর্ব ছিল যে সে কখনও মিথ্যা বলে না। একদিন সে বলল, 'আমি কখনও মিথ্যা বলি না।' সঙ্গে সঙ্গে তার নাক এক ইঞ্চি বড় হয়ে গেল!"
      },
      {
        en: "এক ছেলে বাবার কাছে এসে বলল, 'বাবা, আমাদের স্কুলে আজ একটা বড় সাপ এসেছিল!' বাবা বললেন, 'সত্যি?' ছেলে বলল, 'না, আজ ছিল সাপের দিন!'",
        bn: "এক ছেলে বাবার কাছে এসে বলল, 'বাবা, আমাদের স্কুলে আজ একটা বড় সাপ এসেছিল!' বাবা বললেন, 'সত্যি?' ছেলে বলল, 'না, আজ ছিল সাপের দিন!'"
      },
      {
        en: "এক লোক রেস্টুরেন্টে গিয়ে ওয়েটারকে জিজ্ঞেস করল, 'আপনাদের এখানে কী কী আছে?' ওয়েটার বলল, 'স্যার, সবই আছে।' লোকটি বলল, 'তাহলে একটা 'সবই' দিয়ে দিন!'",
        bn: "এক লোক রেস্টুরেন্টে গিয়ে ওয়েটারকে জিজ্ঞেস করল, 'আপনাদের এখানে কী কী আছে?' ওয়েটার বলল, 'স্যার, সবই আছে।' লোকটি বলল, 'তাহলে একটা 'সবই' দিয়ে দিন!'"
      },
      {
        en: "এক ছাত্র পরীক্ষায় লিখেছে: 'আমি জানি না'। শিক্ষক লিখেছেন: 'আমিও জানি না, তাই তো তোমাকে ফেল করলাম!'",
        bn: "এক ছাত্র পরীক্ষায় লিখেছে: 'আমি জানি না'। শিক্ষক লিখেছেন: 'আমিও জানি না, তাই তো তোমাকে ফেল করলাম!'"
      },
      {
        en: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি ভুলে যাই।' ডাক্তার বললেন, 'কখন থেকে?' লোকটি বলল, 'কি থেকে?'",
        bn: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি ভুলে যাই।' ডাক্তার বললেন, 'কখন থেকে?' লোকটি বলল, 'কি থেকে?'"
      },
      {
        en: "এক লোক ট্রেনে উঠে দেখল সিট খালি নেই। সে একজনের পাশে দাঁড়িয়ে বলল, 'এই সিটটা কি খালি?' লোকটি বলল, 'হ্যাঁ, বসুন।' প্রথম লোকটি বসে বলল, 'আমি তো ভাবছিলাম সিটে ভূত আছে!'",
        bn: "এক লোক ট্রেনে উঠে দেখল সিট খালি নেই। সে একজনের পাশে দাঁড়িয়ে বলল, 'এই সিটটা কি খালি?' লোকটি বলল, 'হ্যাঁ, বসুন।' প্রথম লোকটি বসে বলল, 'আমি তো ভাবছিলাম সিটে ভূত আছে!'"
      },
      {
        en: "এক লোকের বাড়িতে চোর ঢুকল। লোকটি চোরকে দেখে বলল, 'আমার বাড়িতে তো কিছুই নেই!' চোর বলল, 'তাহলে আমি কি করব?' লোকটি বলল, 'আমার সাথে বসে কাঁদব!'",
        bn: "এক লোকের বাড়িতে চোর ঢুকল। লোকটি চোরকে দেখে বলল, 'আমার বাড়িতে তো কিছুই নেই!' চোর বলল, 'তাহলে আমি কি করব?' লোকটি বলল, 'আমার সাথে বসে কাঁদব!'"
      },
      {
        en: "এক ছেলে বাবার কাছে এসে বলল, 'বাবা, আমি একটা গাড়ি চাই!' বাবা বললেন, 'দুই শর্তে। প্রথমত, পরীক্ষায় ভালো ফল করতে হবে। দ্বিতীয়ত, দাড়ি গজাতে হবে।' ছেলে বলল, 'কিন্তু বাবা, মেয়েদের তো দাড়ি গজায় না!'",
        bn: "এক ছেলে বাবার কাছে এসে বলল, 'বাবা, আমি একটা গাড়ি চাই!' বাবা বললেন, 'দুই শর্তে। প্রথমত, পরীক্ষায় ভালো ফল করতে হবে। দ্বিতীয়ত, দাড়ি গজাতে হবে।' ছেলে বলল, 'কিন্তু বাবা, মেয়েদের তো দাড়ি গজায় না!'"
      },
      {
        en: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমাকে ছেড়ে চলে যাবে যদি আমি মদ না ছাড়ি।' বন্ধু বলল, 'তাহলে তো ভালো খবর!' লোকটি বলল, 'না, সে আজ সকালে আমার সব মদ নিয়ে চলে গেছে!'",
        bn: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমাকে ছেড়ে চলে যাবে যদি আমি মদ না ছাড়ি।' বন্ধু বলল, 'তাহলে তো ভালো খবর!' লোকটি বলল, 'না, সে আজ সকালে আমার সব মদ নিয়ে চলে গেছে!'"
      },
      {
        en: "এক লোক বিয়ে করে নতুন বউ নিয়ে বাড়ি ফিরছে। পথে বউ জিজ্ঞেস করল, 'আপনি কি আমাকে সত্যিই ভালোবাসেন?' লোকটি বলল, 'আমি কি শপথ করে বলব?' বউ বলল, 'হ্যাঁ।' লোকটি বলল, 'তাহলে আল্লাহই সাক্ষী!' বউ বলল, 'আপনি তো হিন্দু!'",
        bn: "এক লোক বিয়ে করে নতুন বউ নিয়ে বাড়ি ফিরছে। পথে বউ জিজ্ঞেস করল, 'আপনি কি আমাকে সত্যিই ভালোবাসেন?' লোকটি বলল, 'আমি কি শপথ করে বলব?' বউ বলল, 'হ্যাঁ।' লোকটি বলল, 'তাহলে আল্লাহই সাক্ষী!' বউ বলল, 'আপনি তো হিন্দু!'"
      },
      {
        en: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি যখন কথা বলি, তখন কেউ শুনতে পায় না।' ডাক্তার বললেন, 'পরের!'",
        bn: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি যখন কথা বলি, তখন কেউ শুনতে পায় না।' ডাক্তার বললেন, 'পরের!'"
      },
      {
        en: "এক লোকের খুব ঘুম পাচ্ছিল। সে বিছানায় শুয়ে বলল, 'হে আল্লাহ, আমাকে ঘুম পাড়িয়ে দিন।' সঙ্গে সঙ্গে তার স্ত্রী এসে বলল, 'উঠো, রাতের খাবার খাবে!'",
        bn: "এক লোকের খুব ঘুম পাচ্ছিল। সে বিছানায় শুয়ে বলল, 'হে আল্লাহ, আমাকে ঘুম পাড়িয়ে দিন।' সঙ্গে সঙ্গে তার স্ত্রী এসে বলল, 'উঠো, রাতের খাবার খাবে!'"
      },
      {
        en: "একজন লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমার জন্য আকাশ থেকে তারা খুলে আনবে।' বন্ধু বলল, 'সে কি জ্যোতিষী?' লোকটি বলল, 'না, সে আমার সব সঞ্চয় নিয়ে পালিয়েছে!'",
        bn: "একজন লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমার জন্য আকাশ থেকে তারা খুলে আনবে।' বন্ধু বলল, 'সে কি জ্যোতিষী?' লোকটি বলল, 'না, সে আমার সব সঞ্চয় নিয়ে পালিয়েছে!'"
      },
      {
        en: "এক ছেলে স্কুল থেকে ফিরে বাবাকে বলল, 'বাবা, আজ আমাদের স্কুলে একটা ভূত এসেছিল!' বাবা বললেন, 'সত্যি?' ছেলে বলল, 'না, আজ ছিল ভূতের দিন!'",
        bn: "এক ছেলে স্কুল থেকে ফিরে বাবাকে বলল, 'বাবা, আজ আমাদের স্কুলে একটা ভূত এসেছিল!' বাবা বললেন, 'সত্যি?' ছেলে বলল, 'না, আজ ছিল ভূতের দিন!'"
      },
      {
        en: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে যদি সুন্দরী হত, তাহলে সে আমাকে ছেড়ে চলে যেত।' বন্ধু বলল, 'তাহলে তুমি নিরাপদ!' লোকটি বলল, 'না, সে কালকে প্লাস্টিক সার্জারি করতে যাচ্ছে!'",
        bn: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে যদি সুন্দরী হত, তাহলে সে আমাকে ছেড়ে চলে যেত।' বন্ধু বলল, 'তাহলে তুমি নিরাপদ!' লোকটি বলল, 'না, সে কালকে প্লাস্টিক সার্জারি করতে যাচ্ছে!'"
      },
      {
        en: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি মনে করি আমি একটা মুরগি।' ডাক্তার বললেন, 'কখন থেকে?' লোকটি বলল, 'আমি ডিম ফুটে বের হওয়ার পর থেকে!'",
        bn: "এক লোক ডাক্তারের কাছে গিয়ে বলল, 'ডাক্তার সাহেব, আমি মনে করি আমি একটা মুরগি।' ডাক্তার বললেন, 'কখন থেকে?' লোকটি বলল, 'আমি ডিম ফুটে বের হওয়ার পর থেকে!'"
      },
      {
        en: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমাকে ছেড়ে চলে যাবে যদি আমি সিগারেট না ছাড়ি।' বন্ধু বলল, 'তাহলে তো ভালো খবর!' লোকটি বলল, 'না, সে কালকে আমার সব সিগারেট নিয়ে চলে গেছে!'",
        bn: "এক লোক তার বন্ধুকে বলল, 'আমার স্ত্রী আমাকে বলেছে সে আমাকে ছেড়ে চলে যাবে যদি আমি সিগারেট না ছাড়ি।' বন্ধু বলল, 'তাহলে তো ভালো খবর!' লোকটি বলল, 'না, সে কালকে আমার সব সিগারেট নিয়ে চলে গেছে!'"
      }
    ],
    professional: [
      {
        en: "Why do programmers prefer dark mode? Because light attracts bugs!",
        bn: "প্রোগ্রামাররা কেন ডার্ক মোড পছন্দ করে? কারণ আলো পোকা আকর্ষণ করে!"
      },
      {
        en: "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
        bn: "একটি SQL কুয়েরি একটি বারে গেল, দুইটি টেবিলের কাছে গিয়ে জিজ্ঞেস করল, 'আমি কি আপনাদের সাথে যোগ দিতে পারি?'"
      },
      {
        en: "Why do Java developers wear glasses? Because they can't C#!",
        bn: "জাভা ডেভেলপাররা কেন চশমা পরে? কারণ তারা C# দেখতে পায় না!"
      },
      {
        en: "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
        bn: "জাভাস্ক্রিপ্ট ডেভেলপার কেন দুঃখিত ছিল? কারণ সে জানত না কিভাবে তার অনুভূতিগুলো 'null' করতে হয়।"
      },
      {
        en: "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25!",
        bn: "প্রোগ্রামাররা কেন হ্যালোইন এবং ক্রিসমাস মিশিয়ে ফেলে? কারণ অক্টোবর ৩১ == ডিসেম্বর ২৫!"
      },
      {
        en: "A programmer's wife asks: 'Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer returns with 12 loaves of bread.",
        bn: "একজন প্রোগ্রামারের স্ত্রী জিজ্ঞেস করল: 'তুমি কি দোকানে গিয়ে এক পাউরুটি আনবে? আর যদি ডিম থাকে, তাহলে এক ডজন আনবে।' প্রোগ্রামার ১২ পাউরুটি নিয়ে ফিরে এল।"
      }
    ],
    dark: [
      {
        en: "I bought some shoes from a drug dealer. I don't know what he laced them with, but I've been tripping all day.",
        bn: "আমি এক ড্রাগ ডিলার থেকে জুতা কিনেছি। আমি জানি না সে এতে কি মিশিয়েছে, কিন্তু আমি সারাদিন ট্রিপ করছি।"
      },
      {
        en: "My wife told me to stop impersonating a flamingo. I had to put my foot down.",
        bn: "আমার স্ত্রী আমাকে ফ্লেমিঙ্গো সাজা বন্ধ করতে বলল। আমাকে পা নামাতে হয়েছিল।"
      },
      {
        en: "I was addicted to the hokey pokey, but I turned myself around.",
        bn: "আমি হোকি পোকিতে আসক্ত ছিলাম, কিন্তু আমি নিজেকে ঘুরিয়ে নিয়েছি।"
      },
      {
        en: "I was wondering why the frisbee was getting bigger, then it hit me.",
        bn: "আমি ভাবছিলাম ফ্রিসবি কেন বড় হচ্ছে, তারপর এটি আমাকে আঘাত করল।"
      }
    ],
    animal: [
      {
        en: "What do you call a fish with no eyes? Fsh!",
        bn: "চোখহীন মাছকে কী বলে? ফ্শ!"
      },
      {
        en: "Why don't elephants use computers? They're afraid of the mouse!",
        bn: "হাতিরা কেন কম্পিউটার ব্যবহার করে না? তারা মাউসকে ভয় পায়!"
      },
      {
        en: "What do you get when you cross a snowman and a dog? Frostbite!",
        bn: "স্নোম্যান এবং কুকুরের ক্রস করলে কী পাওয়া যায়? ফ্রস্টবাইট!"
      },
      {
        en: "Why did the cow jump over the moon? Because the farmer had cold hands!",
        bn: "গরু কেন চাঁদের উপর দিয়ে লাফাল? কারণ কৃষকের হাত ঠান্ডা ছিল!"
      }
    ],
    school: [
      {
        en: "Why did the student eat his homework? Because the teacher said it was a piece of cake!",
        bn: "ছাত্র কেন তার হোমওয়ার্ক খেয়ে ফেলল? কারণ শিক্ষক বলেছিলেন এটি একটি পিস অফ কেক!"
      },
      {
        en: "Teacher: If I gave you 2 cats and another 2 cats and another 2, how many would you have? Student: Seven. Teacher: No, listen carefully... Student: But I already have one cat at home!",
        bn: "শিক্ষক: যদি আমি তোমাকে ২টি বিড়াল এবং আরও ২টি বিড়াল এবং আরও ২টি দিই, তাহলে তোমার কতটি হবে? ছাত্র: সাতটি। শিক্ষক: না, মনোযোগ দিয়ে শোন... ছাত্র: কিন্তু আমার বাড়িতে ইতিমধ্যেই একটি বিড়াল আছে!"
      },
      {
        en: "Why was the math book sad? It had too many problems.",
        bn: "গণিতের বই কেন দুঃখিত ছিল? এতে অনেক সমস্যা ছিল।"
      },
      {
        en: "Teacher: Why are you late? Student: There was a man who lost a hundred dollar bill. Teacher: That's nice. Were you helping him look for it? Student: No. I was standing on it.",
        bn: "শিক্ষক: তুমি কেন দেরি করলে? ছাত্র: একজন লোক একশ ডলার হারিয়েছিল। শিক্ষক: এটা ভালো। তুমি কি তাকে খুঁজতে সাহায্য করছিলে? ছাত্র: না। আমি তার উপর দাঁড়িয়ে ছিলাম।"
      }
    ],
    ai: [
      {
        en: "Why did the AI go to therapy? It had too many deep learning issues!",
        bn: "এআই কেন থেরাপিতে গেল? এর অনেক গভীর শেখার সমস্যা ছিল!"
      },
      {
        en: "Why was the AI bad at relationships? It kept trying to optimize love!",
        bn: "এআই কেন সম্পর্কে খারাপ ছিল? এটি ভালোবাসাকে অপ্টিমাইজ করার চেষ্টা করছিল!"
      },
      {
        en: "What do you call an AI that tells jokes? A stand-up algorithm!",
        bn: "যে এআই জোকস বলে তাকে কী বলে? স্ট্যান্ড-আপ অ্যালগরিদম!"
      },
      {
        en: "Why did the AI break up with the robot? There was no physical attraction!",
        bn: "এআই কেন রোবটের সাথে সম্পর্ক ছিন্ন করল? কোন শারীরিক আকর্ষণ ছিল না!"
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
    alert(language === 'bn' ? 'জোক কপি করা হয়েছে!' : 'Joke copied!');
  };

  const shareJoke = () => {
    const joke = jokes[activeSection as keyof typeof jokes][currentJoke];
    if (navigator.share) {
      navigator.share({
        title: language === 'bn' ? 'মজার জোক!' : 'Funny Joke!',
        text: joke[language],
        url: window.location.href
      }).catch(err => {
        console.log('Error sharing:', err);
      });
    } else {
      copyJoke();
      alert(language === 'bn' ? 'জোক কপি করা হয়েছে, এখন শেয়ার করুন!' : 'Joke copied, now share it!');
    }
  };

  const toggleLike = () => {
    const newLikedJokes = { ...likedJokes };
    const sectionLikes = new Set(newLikedJokes[activeSection as keyof typeof jokes]);
    
    if (sectionLikes.has(currentJoke)) {
      sectionLikes.delete(currentJoke);
    } else {
      sectionLikes.add(currentJoke);
    }
    
    newLikedJokes[activeSection as keyof typeof jokes] = sectionLikes;
    setLikedJokes(newLikedJokes);
  };

  const nextJoke = () => {
    const sectionJokes = jokes[activeSection as keyof typeof jokes];
    setCurrentJoke((prev) => (prev + 1) % sectionJokes.length);
  };

  const prevJoke = () => {
    const sectionJokes = jokes[activeSection as keyof typeof jokes];
    setCurrentJoke((prev) => (prev - 1 + sectionJokes.length) % sectionJokes.length);
  };

  const isLiked = likedJokes[activeSection as keyof typeof jokes].has(currentJoke);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
            {language === 'bn' ? '😂 জোক জোন' : '😂 Joke Zone'}
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
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 relative">
            <div className="text-center">
              <div className="text-6xl mb-6">😄</div>
              <div className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 min-h-32">
                {jokes[activeSection as keyof typeof jokes][currentJoke][language]}
              </div>
              
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  onClick={prevJoke}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronLeft size={24} />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  onClick={nextJoke}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={generateRandomJoke}
                  className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Shuffle size={20} />
                  <span>{language === 'bn' ? 'নতুন জোক' : 'New Joke'}</span>
                </button>
                
                <button
                  onClick={copyJoke}
                  className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Copy size={20} />
                  <span>{language === 'bn' ? 'কপি' : 'Copy'}</span>
                </button>
                
                <button
                  onClick={toggleLike}
                  className={`flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 ${
                    isLiked ? 'ring-2 ring-pink-300' : ''
                  }`}
                >
                  <Heart size={20} fill={isLiked ? 'white' : 'none'} />
                  <span>{language === 'bn' ? 'লাইক' : 'Like'}</span>
                </button>
                
                <button
                  onClick={shareJoke}
                  className="flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Share2 size={20} />
                  <span>{language === 'bn' ? 'শেয়ার' : 'Share'}</span>
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
                  <span className="text-xs text-gray-500">
                    {language === 'bn' ? 'জোক #' : 'Joke #'}{index + 1}
                  </span>
                  <div className="flex space-x-1">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const newLikedJokes = { ...likedJokes };
                        const sectionLikes = new Set(newLikedJokes[activeSection as keyof typeof jokes]);
                        
                        if (sectionLikes.has(index)) {
                          sectionLikes.delete(index);
                        } else {
                          sectionLikes.add(index);
                        }
                        
                        newLikedJokes[activeSection as keyof typeof jokes] = sectionLikes;
                        setLikedJokes(newLikedJokes);
                      }}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Heart 
                        size={16} 
                        fill={likedJokes[activeSection as keyof typeof jokes].has(index) ? 'currentColor' : 'none'}
                      />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(joke[language]);
                        alert(language === 'bn' ? 'জোক কপি করা হয়েছে!' : 'Joke copied!');
                      }}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <Copy size={16} />
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