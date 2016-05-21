'use strict';

var mongoose = require('mongoose');
var lib = require('./library.js');
var fs = require('fs-extended');
var files = fs.readdirSync('./public/images/marble/');

require('dotenv').load();

mongoose.connect(process.env.MONGOURL);

var Entry = mongoose.model('Entry', {
	name: String,
	email: String,
	site: String,
	message: String,
	ts: Date
});

function render(res) {
	var marble = lib.getRandomFile(files);
	Entry.find().sort({ts: -1}).limit(25).exec(function(err, docs) {
		if (err) docs = [];
		res.render('guestbook', {
			entries: docs,
			marble: marble
		});
	});
}



module.exports = {
	Entry: Entry,
	render: render
};