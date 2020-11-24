/**
* Model : A user(Pangolin)'s profile
*/

const db = require('mongoose');

const ProfileSchema = new db.Schema({
	name: {
		type: String,
		minlength: 1,
		trime: true
	},
	age: Number,
	family: String,
	race: String,
	food: [String]

});

const Profile = db.model('Profile', ProfileSchema);

module.exports = {Profile};