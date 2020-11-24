// Database management

const db = require('mongoose');

//Changing to global JS promise
db.Promise = global.Promise;


//Connecting to database
db.connect('mongodb+srv://root:qzrtyqzrty1198@cluster0.pkdab.mongodb.net/main?authSource=admin&replicaSet=atlas-hfb4at-shard-0&w=majority&readPreference=primary&appname=MongoDB Compass&retryWrites=true&ssl=true', { useNewUrlParser: true }).then(
	() => {
		console.log([
			"Database Management",
			"MangodDB :: Connection Status : Successful"
		])
	}
).catch(
	(err) => {
		console.log([
			"Database Management",
			"MangodDB :: Connection Status : Failed",
			{"Error message": err}
		]);
	}
);

db.set('useCreateIndex', true);
db.set('useFindAndModify', false);

module.exports = {
	db
};