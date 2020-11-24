/**
* Model : A link between two users
* @example :
* [LEFT] User A <------(link)------> User B [RIGHT]
* User B is in user A's contact list (But isn't necessarily in B's)
*/

const db = require('mongoose');

const LinkSchema = new db.Schema({

	_originId: {
		type: db.Types.ObjectId,
		required: true
	},

	_targetId: {
		type: db.Types.ObjectId,
		required: true
	}

});

const Link = db.model('Link', LinkSchema);

module.exports = { Link };