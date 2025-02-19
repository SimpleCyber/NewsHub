import React from 'react';

const NewsCard = ({ article }) => {
  const { title, description, url, urlToImage, source, publishedAt } = article;
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        {urlToImage ? (
          <img 
            src={urlToImage} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x200?text=No+Image';
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
            <span className="text-gray-400 dark:text-gray-500">No image available</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{source.name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(publishedAt)}</span>
        </div>
        
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100 line-clamp-2">{title}</h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{description || 'No description available'}</p>
        
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-300"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;