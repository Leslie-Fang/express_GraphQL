/**
 * Created by leslie on 2017/11/4.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/quant';


var findSingleUserData = function(db,queryArgs,callback){
    var cursor = db.collection('users').find({'id':queryArgs});
    cursor.forEach(function(doc){
        if(doc){
            callback(doc);
        }else{
            console.log("Find nothing!");
        }
    });
};

exports.getUserData = function(resolve,reject,queryArgs,callback){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        var data = null;
        findSingleUserData(db,queryArgs,function(vituralDoc){
            data = vituralDoc;
            db.close();
            callback(data);
            resolve("success");
        });
    });
};

exports.insertUserData = function(resolve,reject,doc){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        var data = null;
        // var doc = {"id":4,"name":"leslie"};
        db.collection('users').insert(doc).then(function(){
                console.log("success");
                resolve("success");
            }, function(){
                console.log("Failed");
                reject("Failed");
            }
        );
    });

};

exports.deleteUserData = function(resolve,reject,args){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        db.collection('users').deleteOne({"id":args}).then(function(){
                console.log("success");
                resolve("success");
            }, function(){
                console.log("Failed");
                reject("Failed");
            }
        );
    });
};

exports.updateUserData = function(resolve,reject,args){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        var newName = args.name;
        db.collection('users').updateOne({"id":args.id},{$set:{'name':newName}})
            .then(function(){
                console.log("success");
                resolve("success");
            }, function(){
                console.log("Failed");
                reject("Failed");
            }
        );
    });
};
