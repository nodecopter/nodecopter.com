/**
 * List `nodecopter` modules from npm
 *
 * Mostly copied from
 * @sindresorhus via https://github.com/gruntjs/gruntjs.com
 * Thanks!
 */

(function(win, $) {
  'use strict';

  // Required by jquery-ajax-localstorage-cache
  win.Modernizr = {};
  win.Modernizr['localstorage'] = function() {
    var mod = 'mod';
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch(e) {
        return false;
    }
  };

  $.ajaxSetup({
    type: 'GET',
    dataType: 'jsonp',
    // Caches everything in localStorage ftw!
    localCache: true,
    cacheTTL: 24 * 7
  });

  // create npm object
  var npm = Object.create(null);
  npm.limit = 1000;    // get 1000 at a time
  npm.startkey = null; // used for pagination
  npm.modules = [];    // list of matching modules found

  // search all of npm by name and description
  npm.search = function(search, inc, done) {
    var _this = this;
    done = done || function() {};

    // build url
    var url = 'http://isaacs.iriscouch.com/registry/_design/app/_view/browseAll?group_level=2';
    url += '&limit=' + (this.limit + 1);
    if (this.startkey) { url += '&startkey=[%22' + this.startkey + '%22]'; }
    $.ajax({
      url: url,
      cacheTTL: 24,
      success: function(data) {
        var last = data.rows.pop();

        // search and append matching modules
        var found = data.rows.map(function(row) {
          return (row.key[0].indexOf(search) !== -1 || row.key[1].indexOf(search) !== -1) ? row.key[0] : null;
        }).filter(function(row) {
          return (row);
        });
        _this.modules.concat(found);
        inc(null, found);

        // if weve got more, search the next block of modules
        if (data.rows.length >= _this.limit) {
          _this.startkey = last.key[0];
          _this.search(search, inc, done);
        } else {
          done(null, _this.modules);
        }
      }
    });
  };

  // get modules by module keyword
  npm.keyword = function(kw, done) {
    var _this = this;
    var url = 'http://isaacs.iriscouch.com/registry/_design/app/_view/byKeyword?startkey=[%22' +
      kw + '%22]&endkey=[%22' + kw + '%22,{}]&group_level=3&callback=?';
    $.ajax({
      url: url,
      cacheTTL: 24,
      success: function(data) {
        var found = data.rows.map(function(row) {
          return row.key[1];
        });
        _this.modules.concat(found);
        done(null, found);
      }
    });
  };

  // gets full data for each individual module
  npm.get = function(data, keyword, cb) {
    var moduleList = JSON.parse(localStorage.getItem('npm-' + keyword)) || [];
    var urls = $.map(data, function(moduleName) {
      var moduleExists = !!$.grep(moduleList, function(el) {
        return el.name === moduleName;
      }).length;
      if (!moduleExists) {
        return 'http://isaacs.iriscouch.com/registry/' + moduleName + '?callback=?';
      }
    });
    var ajaxQueue = urls.length;
    if (urls.length < 1) {
      return cb(null, moduleList);
    }
    $.each(urls, function(i, url) {
      $.ajax({
        url: url,
        success: function(data) {
          moduleList.push(data);
          if (--ajaxQueue === 0) { cb(null, moduleList); }
        }
      });
    });
  };

  $(function() {

    // which element to append modules to
    var ul = $('.modules-all');

    // appends module to the list
    function appendModules(modules) {
      $('.modules-loading').remove();
      modules.forEach(function(module) {
        if (!module.name) { return; }
        var url = 'https://npmjs.org/package/' + module.name;
        var desc = module.description ? ': ' + module.description : '';
        var a = $('<a/>')
          .attr({href: url, target: '_blank', id: module.name})
          .html(module.name)
          .after(desc)
        ;
        if (ul.find('#' + module.name).length < 1) {
          ul.append($('<li/>').append(a));
        }
      });
      // sort module list
      ul.find('li').sort(function(a, b) {
        return ($(b).text()) < ($(a).text());
      }).appendTo(ul);
    }

    // get all modules by keyword, name and description
    var find = 'nodecopter';
    npm.keyword(find, function(err, modules) {
      npm.get(modules, find, function(err, modules) {
        appendModules(modules);
      });
    });
    npm.search(find, function(err, modules) {
      npm.get(modules, find, function(err, modules) {
        appendModules(modules);
      });
    });

  });

}(window, jQuery));
