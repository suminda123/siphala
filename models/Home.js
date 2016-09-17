var keystone = require('keystone');
var Types = keystone.Field.Types;

var Home = new keystone.List('Home');

Home.add({
	section1: {
		h5: {type: String},
		content: {type: Types.Html, wysiwyg: true, height: 400}
	},
	section2: {
		h5: {type: String},
		content: {type: Types.Html, wysiwyg: true, height: 400}
	},
	section3: {
		h5: {type: String},
		content: {type: Types.Html, wysiwyg: true, height: 400}
	},
	section4: {
		h5: {type: String},
		content: {type: Types.Html, wysiwyg: true, height: 400}
	},
	section5: {
		h5: {type: String},
		content: {type: Types.Html, wysiwyg: true, height: 400}
	},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true }
});

Home.track = true;
Home.defaultColumns = 'state|20%, publishedDate|20%';
Home.register();
