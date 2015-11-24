var mongoose = require('mongoose');
require('dotenv').load();

mongoose.connect(process.env.MONGOURL);

var Entry = mongoose.model('Entry', {
    name: String,
    email: String,
    site: String,
    message: String
});

// Entry.find().remove().exec();

module.exports = {
    Entry: Entry
}