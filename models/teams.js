const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
  teams: Array,
  lastUpdated: Number
});

module.exports = mongoose.model('Teams', teamsSchema);
