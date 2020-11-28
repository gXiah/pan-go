/**
* Model : A user(Pangolin)'s profile
*/

const db = require('mongoose');
const lodash = require('lodash');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


// This is for V1.0, the showcase version.
// A more secure secret key could be generated
const jwt_hash_secret = "verynotsecurekey";



const ProfileSchema = new db.Schema({

	email: {
		type:String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	sessions: [{
		token: {
			type: String,
			required: true
		},
		eat: {
			type: Number,
			required: true
		}
	}],


	name: {
		type: String,
		minlength: 1,
		trime: true,
		required:true
	},
	age: Number,
	family: String,
	race: String,
	food: [String]

});


// Methods

ProfileSchema.methods.toJSON = function(){
	const profile = this;
	const profileObject = profile.toObject();

	return lodash.omit(profileObject, ['password', 'sessions']);
}

ProfileSchema.methods.genAuthToken = function(){
	const profile = this;

	return new Promise( (resolve, reject) => {
		jwt.sign(
			{_id: profile._id.toHexString()},
			jwt_hash_secret,
			{expiresIn: "1h"},
			(err, token) => {
				if(!err){
					resolve(token);
				}else{
					reject();
				}
			}
		);
	});
}

ProfileSchema.methods.genRefreshToken = function(){
	
	return new Promise( (resolve, reject) => {
		crypto.randomBytes(64, (err, buffer) => {
			if(!err){
				let refreshToken = buffer.toString('hex');

				return resolve(refreshToken);
			}
		});
	});

}

ProfileSchema.methods.newSession = function(){
	let profile = this;

	return profile.genRefreshToken().then( (refreshToken) => {
		return saveSession(profile, refreshToken);
	}).then((refreshToken) => {
		return refreshToken;
	}).catch((err) => {
		return Promise.reject('Session Error : Could not save session to database - ' + err);
	})
}

ProfileSchema.statics.getJWTSecret = function(){
	return jwt_hash_secret;
}

ProfileSchema.statics.findByIdAndToken = function(_id, token){
	const profile = this;

	return profile.findOne({
		_id,
		'sessions.token': token
	});
}

ProfileSchema.statics.findById = function(_id){
	const profile = this;

	return profile.findOne({_id});
}

// In this showcase version, we will not be hashing the passwords 
ProfileSchema.statics.findByEmailAndPwd = function(email, password){
	let profile = this;

	return profile.findOne({'email': email}).then((user) => {
		if(!user){
			return Promise.reject();
		}

		return new Promise((resolve, reject) => {
			if(password === user.password){
				resolve(user);
			}else{
				reject();
			}
		})
	})
}

ProfileSchema.statics.isRefreshTokenExpired = (eat) => {
	let currentTime = Date.now() / 1000;

	// if(eat > currentTime){
	// 	return false;
	// }else{
	// 	return true;
	// }

	return false;
}

let saveSession = (profile, refreshToken) => {
	return new Promise( (resolve, reject) => {
		let eat = (Date.now() / 1000) + (30 * 24 * 3600);// Expires AT

		profile.sessions.push({ 'token': refreshToken, 'eat': eat });

		profile.save().then(() => {
			return resolve(refreshToken);
		}).catch((err) => {
			reject(err);
		})
	});
}

const Profile = db.model('Profile', ProfileSchema);

module.exports = {Profile};