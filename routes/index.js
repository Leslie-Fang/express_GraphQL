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

router.get('/user',function(req,res){
    res.render("main");
});

module.exports = router;