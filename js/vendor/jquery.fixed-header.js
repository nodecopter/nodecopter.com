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
});
