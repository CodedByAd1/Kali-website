const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: String,
  excerpt: String,
  author: String,
  date: String,
  readTime: String,
  category: String,
  tags: [String],
  image: String,
  content: String,
});

module.exports = mongoose.model('Blog', BlogSchema);
