var express = require("express");
var app = express();

app.set('port', process.env.PORT || 3000);

/*This route is the main page, where the files are selected*/
app.get('/', function(req, res){
   res.send('<h1>Welcome</h1>'); 
});


/*Below is middleware for 404 and 500 errors*/

app.use(function(req, res){
   res.status(404);
   res.send('<h1>404 - Not Found </h1>');
});

app.use(function(req, res){
   res.status(500);
   res.send('<h1>500 - Server Error </h1>');
});

app.listen(app.get('port'), function(err){
    if(err)console.error(err);
    
    console.log('server listening on port ' + app.get('port'));
});