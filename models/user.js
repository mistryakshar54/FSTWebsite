var mongoose = require('mongoose');

//schema
var userSchema = new mongoose.Schema({
	"firstName":String,
	"userName":String,
	"password":String,
	"gender":String,
	"email":String,
	"dob":Date,
	"height":Number,
	"weight":Number,
	"profilepic":String,
	"zipcode":Number,
	"country":String,
  	"calorieintake":Number,
	"weightlost":Number,
	"isallergic":Boolean,
	//"allergy":[],
	"dailystepgoal":Number
})

module.exports = mongoose.model('user',userSchema);