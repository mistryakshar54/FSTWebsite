//Dependancies
var express = require('express');
 var session = require('express-session');
var router = express.Router();
 router.use(session({secret: 'ssshhhhh'}));
  var sess;
//models
var user = require('../models/user')
//router

router.post('/add',function(req,res){

	console.log("reached to add functionality!!");
	console.log("l;amsc;lasc: "+req.body.fname);


	var user_info = new user({
			"firstName":req.body.fname,
			"userName":req.body.uname,
			"password":req.body.pass,
			"gender":req.body.gender,
			"email":req.body.email,
			"dob":req.body.dob,
			"height":req.body.height,
			"weight":req.body.weight,
			"profilepic":req.body.pic,
			"zipcode":req.body.code,
			"country":req.body.country,
			"calorieintake":req.body.cal,
			"weightlost":req.body.loss,
			"isallergic":req.body.isalg,
			"dailystepgoal":req.body.goalstep
	})
	user_info.save(function(err,result){
		console.log("Came to sace");
		if(!err){
			console.log("added");
			}
			else{
				console.log(err);
			}
	})
});





router.post('/update',function(req,res){

console.log("The request  in update tagid: "+req.body.fname+" "+req.body.email);

user.findOneAndUpdate({ _id: '57eecefc257a430951f6009e' }, { firstName: req.body.name,email : req.body.email }, function(err, restaurant) {
  if (err) throw err;

  res.send(user);
  console.log(user);
});


console.log("The requested value has been updated!!");
});



//validate uname and password for admin panel at a login time
router.post('/validate',function(req,res){
console.log("The request  in validate tagid: "+req.body.email+" "+req.body.password);
user.findOne({ "email": req.body.email,"password":req.body.password}, function(err, result) {
        if (err) {
            console.log('Signup error');
        }
     /*   if (user.length!=0) {
          if(user[0].userName){
            	console.log('Username already exists, username: ' + req.body.email);*/
        else if(result)
        	{
        	       //	res.send("1");
        	        sess=req.body.email;
        	       	res.redirect('../../searchfood.html');
             }
        else
        {
        	console.log('invalid id and passs');
        	        	res.send("0");
        }

 });
});


// validte app user email
router.post('/appvalidate',function(req,res){
console.log("The request  in  tagid: "+req.body.email);

user.findOne({ "email":req.body.email }, function(err, result) {

		if(err)
		{
			res.send(err);
		}
        else if(result)
        {
        	console.log("The user already exists");
        	res.send("0");
        }
        else
        {
        	console.log("No such user!");
					res.send("1");
			    }

 });
});



router.get('/delete/:restID',function(req,res){
console.log("Deleted record successfully"+req.params.restID);


  user.findByIdAndRemove(req.params.restID,function(err){
      if(err) throw err;
      else
      console.log("Deleted record successfully");
  });

});

module.exports = router;
