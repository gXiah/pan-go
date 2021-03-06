/**
* Main APIs file (entry point)
*/

// Resources
const express = require('express');

const { db }		= require('./database/mongoDb');
const { Profile } 	= require('./database/models/profile.model');
const { Link } 		= require('./database/models/link.model');
const jwt			= require('jsonwebtoken');

// Init
const app = express();


/* === Middlewares === */

// Middleware : Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Middleware : CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, _id, x-access-token, x-refresh-token");
  res.header("Access-Control-Expose-Headers", "x-access-token, x-refresh-token");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PATCH");
  next();
});

// Middleware : Log
let log = function(req, res, next){
	
	console.log(req.method, req.originalUrl);
	next();

};


// Middleware : Checks if an auth token is still valid (authentic)
let checkJWTValidity = (req, res, next) => {

	let token = req.header('x-access-token');

	jwt.verify(token, Profile.getJWTSecret(), (err, decoded) => {

		if(err){
			res.sendStatus(401);
			// console.log("Unauthorized acces to ", req.method, req.originalUrl);
		}else{
			req.profileId = decoded._id;
			next();
		}
	});
};

// Middleware : Auth check
// Checks if the logged in user can access the requested data
let authCheck = function(req, res, next){

	let refreshToken = req.header('x-refresh-token');
	let profileId = req.header('_id');

	Profile.findByIdAndToken(profileId, refreshToken).then((profile) => {

		if(!profile){
			return Promise.reject({'Session Error ':' Could not identify session'});
		}

		req.profileId = profileId;
		req.refreshToken = refreshToken;
		req.profile = profile;

		let sessionChecked = false;

		profile.sessions.forEach((session) => {
			
			if(session.token === refreshToken){
				if(Profile.isRefreshTokenExpired(session.eat) === false){
					sessionChecked = true;
				}
			}

		});

		if(sessionChecked){
			next();
		}else{
			return Promise.reject({'Session Error':'Invalid session'})
		}

	}).catch((err) => {
		console.log("CheckAuth failed : Could not find profile (Id x Token)", err);
		res.status(401);
	});
};


/* === Config === */
	
	// =================
	// Config : Routes  
	// =================

	// GET : Search Page
	app.get(
		['/','/search','/recherche'],
		checkJWTValidity,
		(req, res) => {
			Profile
			.find({})
			.sort([['_id','descending']])
			.then((profiles) => {
				res.send(profiles);
			})
			.catch(() => {
				console.log("Error in '/'");
			})
		}
	);


	// GET : search by query (Searchbar)
	app.get(
		['/search/:searchQuery','/recherche/:searchQuery'],
		checkJWTValidity,
		(req, res) => {

			Profile
			.find({ "name" : {'$regex': req.params.searchQuery.toLowerCase()} })
			.sort([['_id','descending']])
			.then( (profiles) => {
				res.send(profiles)
			})
			.catch( (err) => {} )

		}
	);

	// GET : search by id
	// For this showcase version, there is no need to be authentified for this request
	app.get(
		['/search/id/:id','/recherche/id/:id'],
		(req, res) => {

			Profile
			.find({"_id": req.params.id})
			.then((profile) => {

				if(!profile){
					res.sendStatus(404);
				}else{
					res.send(profile);
				}

			})
			.catch( (err) => {})

		}
	)

	// GET : My contacts
	// Has not been enabled for this version (refer to the debrief report send by email)
	app.get(
		['/my-contacts/:id','/mes-contacts/:id'],
		checkJWTValidity,
		(req, res) => {
			
			userId  = db.Types.ObjectId(req.params.id);

			Link
			.find({_originId: userId})
			.then( (links) => {

				res.send(links);

			}).catch( (err) => { console.log(err); } );

		});

	// GET : My profile
	app.get(
		['my-profile/:id','/me/:id','/mon-profil/:id'],
		checkJWTValidity,
		(req, res) => {

			let id = new db.Types.ObjectId(req.params.id);

			Profile
			.findById(id)
			.then( (profile) => {

				if(!profile){
					res.status(404);
				}

				res.send(profile);
			})
			.catch( (err) => {
				console.log("Fetch error", err);
				res.sendStatus(400);
			} )
		});

	// GET : Authenticate user
	// Checks if user can access requested data (moddleware 'authCheck') ...
	// ... and then return an access token that the user can put in his / her ...
	// ... requests headers
	app.get(
		['/token', '/jeton'],
		authCheck,
		(req, res) => {

			req.profile.genAuthToken().then((token) => {
				res.header('x-access-token', token).send({token});
			}).catch((err) => {
				res.sendStatus(400);
			});

		}
	);


	// GET : /login
	// Creates /login route (for tests purpose)
	app.get(
		['/login', '/connexion'],
		(req, res) => {
			res.sendStatus(200);
		}
	)

	// ^ GET ^
	// ---------------
	// v POST v

	// POST : Login
	// The login form sends a request to this route
	app.post(
		['/login','/connexion'],
		(req, res) => {

			Profile
			.findByEmailAndPwd(req.body.email, req.body.password)
			.then( (profile) => {

				return profile.newSession().then((refreshToken) => {

					return profile.genAuthToken().then( (token) => {
						return {token, refreshToken}
					});

				}).then((tokens) => {

					res
					.header('x-refresh-token', tokens.refreshToken)
					.header('x-access-token', tokens.token)
					.send(profile);

					console.log("Login successful", req.body.email);

				})
				.catch((err) => {

					console.log("Error in '/login'", err);
					res.sendStatus(400);
					
				});

			})
			.catch( (err) => { console.log("Fatal login error"); } )

		});

	// POST : Signup
	app.post(
		['/register','/inscription'],
		(req, res) => {

			//Check if profile exists
			Profile
			.find({email: req.body.email})
			.then( (profile) => {

				if(!profile.length){ // If user doesn't already exist
					
					let newProfile = new Profile({
						email: req.body.email.toLowerCase(),
						password: req.body.password,
						name: req.body.name.toLowerCase(),
						age: req.body.age,
						family: req.body.family,
						race: req.body.race,
						food: req.body.food
					});

					newProfile
						.save()
						.then( () => {
							return newProfile.newSession();
						})
						.then( (refreshToken) => {
							return newProfile.genAuthToken().then((token) => {
								return {token, refreshToken};
							});
						})
						.then((tokens) => {
							res
							.header('x-refresh-token', tokens.refreshToken)
							.header('x-access-token', tokens.token)
							.send(newProfile)

							console.log("Profile created successfully", req.body);
						})
						.catch((err) => {
							console.log("Error in '/register'", err);
							res.sendStatus(400);
						});

				}else{ // If user existst
					console.log("Error while attempting to create user","User exists");
				}

			})
			.catch( (err) => { console.log(err); } )


		});


	/**
	* @todo : Auth check (Auth0 ? )
	*/
	// POST : Add new contact
	app.post(
		['/my-contacts/:id','/mes-contacts/:id'],
		checkJWTValidity,
		(req, res) => {
			
			originId = db.Types.ObjectId(req.body.originId);
			targetId = db.Types.ObjectId(req.params.id);

			let newLink = new Link({
				_originId: originId,
				_targetId: targetId
			});

			newLink
			.save()
			.then( (link) => {
				res.send(link)
				console.log("Contact added successfully", link);
			})
			.catch( (err) => { console.log("Error while attempting to add contact", err); } )
	});

	// ^ POST ^
	// ---------------
	// v PATCH v

	
	// PATCH : Modify own profile
	app.patch(
		['/update-profile','/modifier-mon-profil'],
		checkJWTValidity,
		(req, res) => {
			
			Profile
			.findOneAndUpdate(
				{ _id: db.Types.ObjectId(req.body.id) },
				{
					email: req.body.email,
					name: req.body.name,
					age: req.body.age,
					family: req.body.family,
					race: req.body.race,
					food: req.body.food
				}
			)
			.then( (profile) => {
				res.sendStatus(200);
				console.log("Profile updated successfully");
			})
			.catch( (err) => { console.log("Error while updating the profile", err); } )

		});


	// ^ PATCH ^
	// ---------------
	// v DELETE v

	// POST : Remove from contacts
	app.delete(
		['/my-contacts/:id','/mes-contacts/:id'],
		checkJWTValidity,
		(req, res) => {
			
			linkId = db.Types.ObjectId(req.params.id);

			Link
			.findOneAndRemove({_id : linkId})
			.then(
				(link) => {
					res.send(link);
				}
			)
			.catch( (err) => { console.log(err) } )

		});







// Firing up the server
app.listen(
	8080,
	() => {
		console.log("");
		console.log("=================================");
		console.log("Server ON. Listening on port 8080");
		console.log("=================================");
	});