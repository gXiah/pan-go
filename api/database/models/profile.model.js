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
	food: [String] // For this version, only a string is stored

});


// Methods


// Note : JWT = JSON Web Token

/**
* Return a JSON formatted array that represents a user
* The password and sessions array are omitted for security reasons
*/
ProfileSchema.methods.toJSON = function(){
	const profile = this;
	const profileObject = profile.toObject();

	return lodash.omit(profileObject, ['password', 'sessions']);
}


/**
* Generates an authentication JWT
*/
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


/**
* Generates a 'Refresh' token for the JWT authentication
*/
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


/**
* Stores a new loggin session (A token + Its expiry date)
*/
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


/**
* Getter
*/
ProfileSchema.statics.getJWTSecret = function(){
	return jwt_hash_secret;
}



/**
* Returns a profile
* Looks for it using its ID and one of its sessions tokens
*/
ProfileSchema.statics.findByIdAndToken = function(_id, token){
	const profile = this;

	return profile.findOne({
		_id,
		'sessions.token': token
	});
}


/**
* Returns a profile
* Looks for it by using its ID alone
*/
ProfileSchema.statics.findById = function(_id){
	const profile = this;

	return profile.findOne({_id});
}


/**
* Returns a profile
* Finds it by using its email and password
*/
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


/**
* Checks if a refresh token has expired
*/
// In this version, tokens are set never to expire, hence the "return false;"
ProfileSchema.statics.isRefreshTokenExpired = (eat) => {
	let currentTime = Date.now() / 1000;

	// if(eat > currentTime){
	// 	return false;
	// }else{
	// 	return true;
	// }

	return false;
}


/**
* Creates and saves a loggin session (see newSession() for more details)
*/
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