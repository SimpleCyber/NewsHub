import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Briefcase, Laptop, Film, Heart, FlaskRound as Flask, Trophy, ArrowRight, Globe } from 'lucide-react';

const HomePage = () => {
  const categories = [
    { id: 'general', name: 'General', Icon: Newspaper, color: 'bg-gradient-to-br from-blue-500 to-blue-600' },
    { id: 'business', name: 'Business', Icon: Briefcase, color: 'bg-gradient-to-br from-emerald-500 to-emerald-600' },
    { id: 'technology', name: 'Technology', Icon: Laptop, color: 'bg-gradient-to-br from-purple-500 to-purple-600' },
    { id: 'entertainment', name: 'Entertainment', Icon: Film, color: 'bg-gradient-to-br from-pink-500 to-pink-600' },
    { id: 'health', name: 'Health', Icon: Heart, color: 'bg-gradient-to-br from-red-500 to-red-600' },
    { id: 'science', name: 'Science', Icon: Flask, color: 'bg-gradient-to-br from-amber-500 to-amber-600' },
    { id: 'sports', name: 'Sports', Icon: Trophy, color: 'bg-gradient-to-br from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20 mt-10">
            <div className="flex items-center justify-center mb-6">
              <Globe className="w-12 h-12 text-blue-600 dark:text-blue-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Welcome to NewsHub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Your gateway to the world's stories, curated and delivered in real-time
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ">
            {categories.map(({ id, name, Icon, color }) => (
              <button
                key={id}
                className={`${color} group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-56`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
                  <Icon className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold mb-2">{name}</h2>
                  <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">View News</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* About Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-2xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                About NewsHub
              </h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                <p>
                  NewsHub brings you the world's most important stories, carefully curated from trusted sources 
                  across the globe. Our platform aggregates and organizes news content to give you a 
                  comprehensive view of current events.
                </p>
                <p>
                  Whether you're interested in breaking news, business insights, technological advancements, 
                  or entertainment updates, NewsHub keeps you informed with real-time coverage and in-depth 
                  analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;