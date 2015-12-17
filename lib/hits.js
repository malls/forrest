var mongoose = require('mongoose');
require('dotenv').load();

mongoose.connect(process.env.MONGOURL);

var Hit = mongoose.model('Hit', {
    ts: Date,
    ip: String
});

module.exports = {
    Hit: Hit
};