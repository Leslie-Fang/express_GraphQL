/**
 * Created by leslie on 2017/11/4.
 */
var express = require('express');
var app = express();
var conf = require('./config.js');
var routes = require('./routes');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Schema = require('./graphql/schema');
var graphqlHTTP = require('express-graphql');

//set the route of the views
app.set('views','./views');
//app.set('view engine', 'jade');
//use html instead of jade template
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/',routes);
//static files's routes
app.use(express.static('public'));

app.use('/GraphiQL', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(conf.port, function () {
    console.log('Example app listening on port '+conf.port+'!');
});
