var keystone = require('keystone');
var Types = keystone.Field.Types;

var Aboutus = new keystone.List('Aboutus');

Aboutus.add({
	heading: {type: String},
	content: {type: Types.Html, wysiwyg: true, height: 400},
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true }
});

Aboutus.schema.virtual('content.full').get(function () {
	return this.content || '';
});

Aboutus.track = true;
Aboutus.defaultColumns = 'state|20%, publishedDate|20%';
Aboutus.register();
