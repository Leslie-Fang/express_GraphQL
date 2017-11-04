/**
 * Created by leslie on 2017/11/4.
 */
var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/quant';

exports.getUserData = function(resolve,reject,queryArgs,callback){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        resolve("success");
        data = db.collection('users').findOne({'id':queryArgs});
        db.close();
        callback(data);
    });
};
