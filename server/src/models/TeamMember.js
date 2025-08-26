const mongoose = require('mongoose');

const TeamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  details: String,
  description: String,
  avatar: String,
});

module.exports = mongoose.model('TeamMember', TeamMemberSchema);
