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


// var blacklist = 'decadron|dexamethasone|donepezil|zoloft|albendazole|neurontin|glucophage|amoxil|ventolin|doxycycline|aricept|anastrozole|doxycycline|levothyroxine|motilium|cyproheptadine|periactin|buyesidrix|lasix|synthroid|effexor|methotrexate|vermox|mebendazole|phenergan|seroquel|flovent|hydrochlorothiazide|SeoOptimizedRankings|gngcreative|propecia|helixdigital|laughmom|jasonclarke|iorarua|exams|research\ paper|catraffictickets|pdf|SEORankingLinks|glucotrol|fluconazole|kemadrin|procyclidine|mobic|nolvadex|clomid|canadapharmacy|lioresal|cataflam|captopril|capoten|azithromycin|dysreflexia|zithromax|betahistine|retin|strattera|zyprexa';
// var blacklist = 'decadron|dexamethasone|tegretol|metoclopramide|enalapril|noroxin|robaxin|femara|detrol';
// var blacklist = 'buyingcheapnowdiscount|prozac|cipro|buycouponnowdiscount|cozaar|bestbuynoworder|lexapro|caverta|abilify|metformin|xr|rogaine|motrin|ciprofloxacin';
// var blacklist = 'accutane|kamagra|buycheapnow|lopressor|imipramine|pamoate|cephalexin|500mg|alendronate';
// var blacklist = 'metronidazole|coupononlinenowbuy|erythromycin|ointment|micardis|atorvastatin|simvastatin|methocarbamol|nexium|venlafaxine|buycouponpurchasenow|biaxin';
// var blacklist = 'norvasc|bactrim|couponordernowbuy|diflucan|cheapbuypurchasenow|medroxyprogesterone|provera|domperidone|meridia|buysevenrx5|elocon|buyninerx2|clindamycin|dalacin|zyban';
// var blacklist = 'smallplanetgroup|propranolol|couponnowcostbuy|buyingcheappurchasenow|lamisil|imitrex|bestbuyonlinenow|carvedilol|albuterol|ibuprofen|acetaminophen|flagyl|adapalene|quetiapine|nizoral|amanjayamall';
// var blacklist = 'avapro|cheapestbuynowdiscount|couponbuynowcost|cheapestbuynow|leezasurfaces|cheapbuynowonline|lisinopril|celexa|cheapestbuyingnowreview|dilantin|betamethasone|valerate|academicpresseurope|omeprazole|buyingcheapnowprice|furosemide|pristiq';
// var blacklist = 'levofloxacin';
// var blacklist = 'cymbalta|buyingcheapnoworder|toprol|thesis|janisclaxton|onerxbuy33|onerxbuy12|zofran|odt|ondansetron|onerxbuy|compazine|onerxbuy|cipla|silagra|tazzle|cheapbuyingmgreview|aspartic';
// var blacklist = 'maxalt|coupon|discount|glycomet';
// var blacklist = 'tablets|mirtazapine|flonase|nasal|bimatoprost|aceite|baclofen|crestor|naprosyn|atsichsbrisbane|\.au|mirtazapine';
// var blacklist = 'clomiphene|citrate';
// var blacklist = 'fluoxetine|comunikafood|orlistat|americanpiezo|fibromyalgia|elavil|cipralex|medicamento|bardahl|amlodipine|besylate|antibiotic';
// var blacklist = 'amitriptyline|servicioswebmarketing|skillsactive|tetracycline|servicioswebmarketing|spironolactone';
// var blacklist = 'macrobid|yourselfseries|cytotec|spooool|oxcarbazepine|carbamazepine|amitriptyline|servicioswebmarketing|tetracycline|spironolactone';
// var blacklist = 'antabuse|paypal|onlinemed|selegiline|amantadine|renova|alesse|\.pw|ketoconazole|lamictal|\.pptx|tamoxifen|differin|permethrin|buspirone|sinequan|albergoamicizia'
// var blacklist = 'tizanidine|buyzanaflex|zyvox|markbrucecompany|sanalotobus|menevit|buyaltace|ramipril|adalat';
// var blacklist = 'lotrel|depakote';
// var blacklist = 'itraconazole|levodopa|carbidopa|buysinemet|madeiraplastica|xatral|10mg|carbidopa';
// var blacklist = 'vigora|prescription|ponstel|acarbose|reglan|\.top';
// var blacklist = 'levonorgestrel';
// var blacklist = '\.nl|tribuplex|\.bid|frumil|\.hr|tadacip|femimax';
// var blacklist = 'malehealthprotect|nugenix|malepillsreviewmgmd|enzyte|extenze';

// Entry.find({site: 'http://'}, function(err, docs) {
// 	console.log(docs)
// }).remove().exec();



function render(res) {
	var marble = lib.getRandomFile(files);
	Entry.find().sort({ts: -1}).limit(100).exec(function(err, docs) {
		if (err) docs = [];
		console.log(docs);
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