var express = require('express');
var router = express.Router();
var path = require('path');
var foodinfo = require('../models/foodinfo');


router.get("/:food_cat/:gt/:lt",function(req,res){

//route to get food on basis of recommendation
    foodinfo.find({food_category: req.params.food_cat, nf_calories : {$gt : parseInt(req.params.gt), $lt : parseInt(req.params.lt)} } ,"item_name nf_calories _id" , function(err,result){
        if(!err){
            console.log(result);
        }
        else
        {
           console.log(err);     
        }
        
    });

})


module.exports = router;