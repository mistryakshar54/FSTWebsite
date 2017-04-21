var express = require('express');
var router = express.Router();
var svm = require('node-svm');

var xor = [
    [[136,7.2,9.6,640,4.8,3.2,4.8,8,16,12], 2],
    [[57,13.16,0.86,6,0.67,7,1,59,0,1], 1],
    [[62,10.84,1.02,119,2.59,6,0,0,4,1], 1],
    [[129,27.9,0.28,365,2.66,2,0,0,7,1], 2],
    [[177,14.27,6.3,569,15.7,20,0,8,13,14], 3],
    [[276,30.33,11.74,537,12.33,8,7,0,10,21], 3],
    [[319,37.53,17.03,193,3.76,14,0,5,8,1],3]  
];

router.get("/" , function(req,res){
    // initialize a new predictor
var prediction = "abc";
        var clf = new svm.CSVC(
            {nu: 0.1,
            kernelType: svm.kernelTypes.RBF,
            gamma: 0.1,
            normalize: false,
            reduce: false,
            kFold: 1 // disable k-fold cross-validation
            });

        clf.train(xor)
                .then(function () {
                    console.log(clf.evaluate([[[45,5.24,2.06,229,3.01,12,23,65,3,4], 1]]));
                })
                .done(function () {
            // predict things
                prediction = clf.predictSync([45,5.24,2.06,229,3.01,12,23,65,3,4]);
                console.log(prediction);
                res.send("myprediction"+prediction+"heheh");

         
});



});


module.exports = router;
