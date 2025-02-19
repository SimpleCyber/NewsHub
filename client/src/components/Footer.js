import React from 'react';
import {  Home, BookOpen, Briefcase, Cpu, Film, Heart, FlaskConical, Volleyball } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const Footer = ({ darkMode }) => {
    const navigate = useNavigate();
  
    // News categories with their icons
    const categories = [
        { name: 'General', icon: <Home size={18} />, path: '/news/general' },
        { name: 'Business', icon: <Briefcase size={18} />, path: '/news/business' },
        { name: 'Technology', icon: <Cpu size={18} />, path: '/news/technology' },
        { name: 'Entertainment', icon: <Film size={18} />, path: '/news/entertainment' },
        { name: 'Health', icon: <Heart size={18} />, path: '/news/health' },
        { name: 'Science', icon: <FlaskConical size={18} />, path: '/news/science' },
        { name: 'Sports', icon: <Volleyball size={18} />, path: '/news/sports' },
      ];

  return (
    <footer className={`mt-auto py-8 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                <span className="font-bold text-xl">NewsHub</span>
              </div>
              <p className="text-sm mb-4">
                Delivering reliable news and timely updates across various categories to keep you informed.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button key={category.name}  onClick={() => navigate(category.path)} className="text-sm flex items-center space-x-1 hover:underline">
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Subscribe</h4>
              <p className="text-sm mb-3">Get the latest news directly to your inbox</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className={`flex-1 px-3 py-2 text-sm rounded-l-md focus:outline-none ${
                    darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                  } border`}
                />
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
         
        </div>
      </footer>
  );
};

export default Footer;