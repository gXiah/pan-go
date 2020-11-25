// Resources
const express = require('express');

const { db }		= require('./database/mongoDb');
const { Profile } 	= require('./database/models/profile.model');
const { Link } 		= require('./database/models/link.model');

// Init
const app = express();


/* === Middlewares === */

// Midleware : Body parser
const bodyParser = require('body-parser');
	app.use(bodyParser.json());

// Midleware : CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





// Config

	/* Config -> Routes */

	// GET : Search Page
	app.get(
		['/','/search','/recherche'],
		(req, res) => {
			Profile
			.find({})
			.sort([['_id','descending']])
			.then((profiles) => {
				res.send(profiles);
			})
			.catch(() => { console.log("Error in '/'"); })
		}
	);

	app.get(
		['/search/:searchQuery','/recherche/:searchQuery'],
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

	// GET : My contacts
	app.get(
		['/my-contacts/:id','/mes-contacts/:id'],
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
		['/profile/:id','/mon-profil/:id'],
		(req, res) => {

			let id = new db.Types.ObjectId(req.params.id);

			Profile
			.findById(id)
			.then( (profile) => {
				res.send(profile);
			})
			.catch( (err) => {
				console.log("Fetch error", err);
			} )
		});


	// ^ GET ^
	// ---------------
	// v POST v

	// POST : Login
	app.post(
		['/login','/connexion'],
		(req, res) => {
			res.send("Adding a contact to the user list");
		});

	// POST : Signup
	app.post(
		['/register','/inscription'],
		(req, res) => {

			let newProfile = new Profile({
				name: req.body.name.toLowerCase(),
				age: req.body.age,
				family: req.body.family,
				race: req.body.race,
				food: req.body.food
			});

			newProfile
				.save()
				.then( (profiles) => {
					res.send(profiles);
					console.log("Profile created successfully",req.body);
				})
				.catch((err) => {
					console.log("Error in '/register'",err);
				});


		});


	/**
	* @todo : Auth check (Auth0 ? )
	*/
	// POST : Add new contact
	app.post(
		['/my-contacts/:id','/mes-contacts/:id'],
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

	/**
	* @todo : Auth check (Auth0 ? )
	*/
	// PATCH : Modify own profile
	app.patch(
		['/profile/:id','/mon-profil/:id'],
		(req, res) => {
			
			Profile
			.findOneAndUpdate(
				{ _id: db.Types.ObjectId(req.params.id) },
				{$set: req.body}
			)
			.then( (profile) => {
				res.sendStatus(200);
			})
			.catch( (err) => { console.log("Error while updating the profile", err); } )

		});


	// ^ PATCH ^
	// ---------------
	// v DELETE v

	// POST : Remove from contacts
	app.delete(
		['/my-contacts/:id','/mes-contacts/:id'],
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







	// 
	app.listen(
		8080,
		() => {
			console.log("Server ON. Listening on port 8080");
		});