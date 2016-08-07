var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
var moment = require('moment');
var methodOverwrite = require("method-override");
var errorHandler = require("errorhandler");

module.exports = function(app){
    
//require('../app/models/db.js'); 
//var routes= require("../app/routes/index");

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('some-secret-value-here'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../app_client')));

//app.use("/api", routes);

app.use(function(req, res){
    res.sendFile(path.join(__dirname, "../app_client", "index.html"));
});

if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

app.use(function(res,req, next){
    var err = new Error("404 Not Found. Sorry for the inconvenience caused. 030");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next){
    if (err.name == "UnauthorisedError"){
        res.status = 401;
        res.json({"message" : err.name + ": " + err.message});
    }
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

return app;
};