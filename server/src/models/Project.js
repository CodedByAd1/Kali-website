const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: String,
  techStack: [String],
  members: [String],
  links: Object,
  image: String,
});

module.exports = mongoose.model('Project', ProjectSchema);
