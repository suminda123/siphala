var keystone = require('keystone');
var Aboutus = keystone.list('Aboutus');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'aboutus';

	view.on('init', function (next) {

		var q = Aboutus.model.findOne({
			state: 'published'
		});

		q.exec(function (err, result) {
			locals.aboutus = result;
			next(err);
		});

	});

	// Render the view
	view.render('aboutus');
};
