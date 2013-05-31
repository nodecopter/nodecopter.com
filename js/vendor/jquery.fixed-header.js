$(function() {
  var $win = $(window);
  var $wrap = $('.header-links-wrap');
  var height = parseInt($wrap.css('top'), 10);
  $win.on('scroll', function() {
    var scrollTop = $win.scrollTop();
    if (scrollTop > height) {
      $wrap.css({
        position: 'fixed',
        top: '0px'
      });
    } else {
      $wrap.css({
        position: 'absolute',
        top: height + 'px'
      });
    }
  });

  // fix onpage anchors
  $('a').click(function(e) {
    if ($(this).attr('href').indexOf('#') !== -1) {
      e.preventDefault();

      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top - 70
      }, 200);

      var href = window.location.href;
      var pos = href.indexOf('#');
      if (pos === -1) {
        window.location.href += $(this).attr('href');
      } else {
        window.location.href = href.substr(0, pos) + $(this).attr('href');
      }
    }
  });

  // scroll to the proper anchor if the browser location contains a hashbang
  var href = window.location.href;
  var pos  = href.indexOf('#');
  if (pos !== -1) {
    var name = href.substr(pos + 1);
    var $target = $('#' + name);
    if ($target.length > 0) {
      $('html, body').animate({
          scrollTop: $target.offset().top - 100
      }, 200);
    }
  }
});
