var express = require('express');
var router = express.Router();
var path = require('path');
var customfoodinfo = require('../models/loaduserfood');
var request = require('request');

router.get("/viewcustomfood", function(req,res){

	customfoodinfo.find({},function(err,result){
          if(!err)
          {
          	console.log("customfoodinfo");
          	console.log(result);
          	res.json(result);
          }
          else
          {
          	console.log("ERROR:"+err);
          	res.send(err);
          }
        })
	console.log("function exit");


})


router.get("/addcustomfood" , function(req,res){


		var foodItem = new customfoodinfo({
			"food_key": "57f79ba279e37cde48d5a436",
		    "foodtype_key": "breakfast",
		    "food_name": "French Fries",
		    "calories": 100,
		    "total_cal": 100
		});

		 foodItem.save(function(err,result){
                console.log("Came to sace");
                if(!err){
                    console.log("added");
                          }
                          else{
                              console.log(err);
                          }
            });

		 
})



module.exports = router;