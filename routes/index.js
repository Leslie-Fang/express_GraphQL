/**
 * Created by leslie on 2017/11/4.
 */
var express = require('express');
var router = express.Router();
// var user = require('./user.js');

router.get('/',function(req,res){
    // res.render("main");
    res.send("Test");
});

// router.use('/user',user);

module.exports = router;