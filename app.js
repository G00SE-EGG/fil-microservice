var express = require("express");
var app = express();

//set up handdlebars view engine 
var handlebars = require("express3-handlebars")
.create({defaultLayout:"main"});//creates view engine 
app.engine('handlebars', handlebars.engine);//set express to use it by default
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static, + '/public');

/*This route is the main page, where the files are selected*/
app.get('/', function(req, res){
    /*var html = '<h1>Welcome to the site</h1>';
    html += '<p>Please use upload tool below to upload a file</p>';
    html += '<input type=file />';
    html += '<input type=submit value=Upload />';*/
   res.render('home'); 
});


/*Below is middleware for 404 and 500 errors*/

app.use(function(req, res){
    res.status(404);
   res.render('404');
});

app.use(function(req, res){
   res.status(500);
   res.render('500');
});

app.listen(app.get('port'), function(err){
    if(err)console.error(err);
    
    console.log('server listening on port ' + app.get('port'));
});