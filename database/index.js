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
