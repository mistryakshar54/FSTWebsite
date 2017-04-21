var mongoose = require('mongoose');

//schema
var customfoodschema = new mongoose.Schema({
	"food_key": String,
    "foodtype_key": String,
    "food_name": String,
    "calories": Number,
    "total_cal": Number

});

module.exports = mongoose.model('user_food_infos',customfoodschema);
