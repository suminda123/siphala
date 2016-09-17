var keystone = require('keystone');
var async = require('async');
var Home = keystone.list('Home');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load the first home record
	view.on('init', function (next) {

		var q = Home.model.findOne({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.home = result;
			next(err);
		});

	});

	// Render the view
	view.render('index');
};
