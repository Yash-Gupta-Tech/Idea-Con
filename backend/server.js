const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Idea = require('./models/Idea');
const Contact = require('./models/Contact');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Idea-connect';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
// 1. GET /api/ideas - Fetch all ideas
app.get('/api/ideas', async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });
    res.status(200).json(ideas);
  } catch (error) {
    console.error('Error fetching ideas:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// 2. POST /api/ideas - Create a new idea
app.post('/api/ideas', async (req, res) => {
  try {
    const { title, details, rolesNeeded, stage, keywords, authorName, contactLinks } = req.body;
    
    // Basic validation
    if (!title || !details || !rolesNeeded || !stage) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newIdea = new Idea({
      title,
      details,
      rolesNeeded,
      stage,
      keywords,
      authorName: authorName || 'Anonymous',
      contactLinks
    });

    const savedIdea = await newIdea.save();
    res.status(201).json(savedIdea);
  } catch (error) {
    console.error('Error creating idea:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// 3. POST /api/contact - Submit a contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const newContact = new Contact({ name, email, subject, message });
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
