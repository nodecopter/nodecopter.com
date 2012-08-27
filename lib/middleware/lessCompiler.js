var fs   = require('fs');
var less = require('less');

module.exports = function lessCompiler(dir) {
  var cache = {};

  return function(req, res, next) {
    var url = req.url;

    // Only consider compiling requests for *.css
    if (!/\.css/.test(url)) {
      return next();
    }

    var cssPath  = dir + url;
    var lessPath = cssPath.replace(/\.css$/, '.less');

    fs.stat(lessPath, function(err, lessStat) {
      // If no less file exists for this request, ignore it
      if (err) {
        return next();
      }

      fs.stat(cssPath, function(err, cssStat) {
        // No need to re-compile is css file is current
        if (!err && lessStat.mtime <= cssStat.mtime) {
          next();
          return;
        }

        // Read the less file to convert it to css
        fs.readFile(lessPath, 'utf-8', function(err, lessText) {
          if (err) {
            next(err);
            return;
          }

          less.render(lessText, function(err, css) {
            if (err) {
              next(err);
              return;
            }

            fs.writeFile(cssPath, css, next);
          });
        });
      });
    });
  };
};
