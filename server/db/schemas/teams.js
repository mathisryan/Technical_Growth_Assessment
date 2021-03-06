const mongoose = require('mongoose');
const db = require('../index.js');

mongoose.Promise = global.Promise;

const teamSchema = new mongoose.Schema({
    id: Number,
    team_name: String,
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;