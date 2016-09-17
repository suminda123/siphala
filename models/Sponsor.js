var keystone = require('keystone');
var Types = keystone.Field.Types;

var Sponsor = new keystone.List('Sponsor');

Sponsor.add({
	name: {type: String},
	content: {type: Types.Html, wysiwyg: true, height: 400},
	image: { type: Types.CloudinaryImage },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true }
});

Sponsor.schema.virtual('image.full').get(function () {
	return this.image || '/images/sponsor.jpg';
});

Sponsor.track = true;
Sponsor.defaultColumns = 'state|20%, publishedDate|20%';
Sponsor.register();
