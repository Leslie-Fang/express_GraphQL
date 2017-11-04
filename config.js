// export NODE_ENV=* to set the environment var
if(process.env.NODE_ENV == 'production'){
	console.log("In the production env");

}else{
    console.log("In the develop env");
    var config = {
        port:4000
    };
}
module.exports = config;
