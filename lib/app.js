var express      = require('express');
var app          = module.exports                        = express();
var lessCompiler = require('./middleware/lessCompiler');

var publicDir = __dirname + '/../public';
app.use(lessCompiler(publicDir));
app.use(express.static(publicDir));
