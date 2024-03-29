
var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.configure(function() {
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
});

app.get('*');
