/**
 * Created by leslie on 2017/11/5.
 */
var db=require('./database/');

var myData=null;
var arg=1;
function test(){
    return new Promise(function (resolve, reject){
                db.getUserData(resolve,reject,arg,function(mydata){
                    myData = mydata;
                });
            }).then(function(){return myData;}, function(){return null;});
};

var b =test();