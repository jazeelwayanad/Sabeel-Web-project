$(document).ready(function(){
    var a = 0;
    $(window).scroll(function() {
      var oTop = $('.counters').offset().top - window.innerHeight;

      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function() {
          var $this = $(this);
          jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-to-value') }, {
            duration: 2000,
            easing: 'swing',
            step: function () {
              $this.text(Math.ceil(this.Counter));
            }
          });
        });
        a = 1;
      }
    });
  });