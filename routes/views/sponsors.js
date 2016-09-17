var keystone = require('keystone');
var Sponsor = keystone.list('Sponsor');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'sponsors';

	view.on('init', function (next) {

		var q = Sponsor.model.find({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.sponsors = result;
			next(err);
		});

	});

	// Render the view
	view.render('sponsors');
};
