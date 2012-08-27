var express      = require('express');
var app          = module.exports = express();
var lessCompiler = require('./middleware/lessCompiler');

var publicDir = __dirname + '/../public';
app.use(lessCompiler(publicDir));
app.use(express.static(publicDir));
app.use(function(err, req, res, next) {
  if (!(err instanceof Error)) {
    err = new Error(JSON.stringify(err));
  }

  console.log('error handler:', err.stack);

  res.writeHead(500);
  res.end(err.stack);
});
