import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = [
    { id: 'general', name: 'General', icon: '📰', color: 'bg-blue-500' },
    { id: 'business', name: 'Business', icon: '💼', color: 'bg-green-500' },
    { id: 'technology', name: 'Technology', icon: '💻', color: 'bg-purple-500' },
    { id: 'entertainment', name: 'Entertainment', icon: '🎬', color: 'bg-pink-500' },
    { id: 'health', name: 'Health', icon: '🏥', color: 'bg-red-500' },
    { id: 'science', name: 'Science', icon: '🔬', color: 'bg-yellow-500' },
    { id: 'sports', name: 'Sports', icon: '⚽', color: 'bg-orange-500' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-10 md:text-6xl font-bold mb-4 dark:text-white">
            Welcome to <span className="text-blue-600 dark:text-blue-400">NewsHub</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Stay informed with the latest news from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link
              key={category.id}
              to={`/news/${category.id}`}
              className={`${category.color} hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-white h-48`}
            >
              <span className="text-4xl mb-4">{category.icon}</span>
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">About NewsHub</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            NewsHub provides you with the latest news articles from trusted sources across various categories.
            Our platform aggregates news content from multiple sources to give you a comprehensive view of what's
            happening around the world.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Simply choose a category that interests you, and we'll show you the most relevant and recent articles.
            Stay informed, stay ahead!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;