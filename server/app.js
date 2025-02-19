const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// News API endpoint
app.get('/api/news', async (req, res) => {
  try {
    const { category = 'general', country = 'us', pageSize = 50 } = req.query;
    
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country,
        category,
        pageSize,
        apiKey: process.env.NEWS_API_KEY
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

// Default Route (Root and Undefined Routes)
app.all('*', (req, res) => {
  res.json({
    message: "News Hub API",
    author: "Satyam Yadav",
    github: "https://github.com/SimpleCyber/NewsHub.git",
    project: "Week 7",
    routes: {
      "/api/news": {
        description: "Fetches top news articles",
        queryParams: {
          category: "News category (default: general)",
          country: "Country code (default: us)",
          pageSize: "Number of articles (default: 50)"
        }
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
