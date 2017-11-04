const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} =  require('graphql');

var db=require('../../database/');

const data = require('../../data/data.json');
// console.log(data);
const User = new GraphQLObjectType({
    name: 'User',
    description: 'UserObject',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
    }
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        // First one, when query the data, would use the "user" symbol as {user(id:1){name}}
        user: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (parentValue, args) {
                // todo: here could call the database api to get the data from database
                // now we just use the hardcode data
                for(var i in data){
                    if(data[i]['id'] == args.id){
                        return data[i];
                    }
                }
                return null;
            }
        },
        // todo: could add the second one
        users:{
            type: new GraphQLList(User),
            resolve: function (parentValue, args){
                return data;
            }
        },
        // todo: could add the thrid one
        user2: {
            type: User,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: function (parentValue, args) {
                // todo: here could call the database api to get the data from database
                var myData=null;
                return new Promise(function (resolve, reject){
                    db.getUserData(resolve,reject,args.id,function(mydata){
                        myData = mydata;
                    });
                }).then(function(){return myData;});
            }
        },
    }
});

const Schema = new GraphQLSchema({
    query: RootQuery
});

module.exports = Schema;


