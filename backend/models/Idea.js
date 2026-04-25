const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  details: {
    type: String,
    required: [true, 'Details are required']
  },
  rolesNeeded: {
    type: String, // e.g., "Frontend Developer, Designer"
    required: [true, 'Roles needed is required']
  },
  stage: {
    type: String, // e.g., "Idea phase", "MVP", "Scaling"
    required: [true, 'Stage is required']
  },
  keywords: {
    type: [String],
    default: []
  },
  authorName: {
    type: String,
    default: 'Anonymous'
  },
  contactLinks: {
    instagram: { type: String, default: '' },
    whatsapp: { type: String, default: '' },
    email: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    twitter: { type: String, default: '' }
  }
}, { timestamps: true });

module.exports = mongoose.model('Idea', ideaSchema);
