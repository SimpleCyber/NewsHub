import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category = 'general' } = useParams();
  
  useEffect(() => {
    fetchNews(category);
  }, [category]);
  
  const fetchNews = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(`https://newshub-jjj5.onrender.com/api/news?category=${category}`);
      const data = await response.json();
      setNews(data.articles || []);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 mt-20 text-center text-gray-800 dark:text-white">
      Top {category.charAt(0).toUpperCase() + category.slice(1)} News
      </h1>
      
      {loading ? (
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.length > 0 ? (
            news.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600 dark:text-gray-300">No news articles found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsPage;