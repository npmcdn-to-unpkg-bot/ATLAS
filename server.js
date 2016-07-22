var express = require('express'),
config = require('./server/configure'),
app = express();
 
//app.set('port', process.env.PORT || 8080);
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP);

app = config(app);

var server = app.listen(app.get('port'), function(){
    
    console.log("Server up: https://atlas-wonyk.c9users.io:"+ app.get('port'));
});


//Execute Program here. (Execute after mongo started if applicable)
//Reference website http://hwachongib.wix.com/atlas
//Hope you understands
//To start MongoDB pls use command: mongod --bind_ip=$IP --nojournal
//Well you can go Collaborate Tab at right and the chat records should be recorded unless deleted. Check frequently :)

//Geat website for Bootstrap functions coded in Pure AngularJS : https://angular-ui.github.io/bootstrap/
//Just click create a build. 

//About homepage fixed. Angular have this weird '#' that sticks webpage on. So a href = "/#about" will work.
