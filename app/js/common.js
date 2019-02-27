// IIFE - Immediately Invoked Function Expression
(function($) {

    // The global jQuery object is passed as a parameter
    $(window.jQuery, window, document);

}(function($, window, document) {

    // The $ is now locally scoped

    // Listen for the jQuery ready event on the document

    $(function() {

        // The DOM is ready!
        new WOW().init();

        $('select').niceSelect();

        $('body').scrollspy({ target: '#menu' });

        $('.my-file').change(function() {
            if ($(this).val() != '') $(this).prev().text('Выбрано файлов: ' + $(this)[0].files.length);
            else $(this).prev().text('Выберите файлы');
        });

        $('.btn-up').click(function () {
                 $('body').animate({'scrollTop': 0}, 1000);
                 $('html').animate({'scrollTop': 0}, 1000);
        });

    });

    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 750) {
            $('.header-logo').addClass('scrolled');
        } else {
            $('.header-logo').removeClass('scrolled');
        }
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

}));

function toggleMenu() {
  let menu = document.getElementsByClassName("menu")[0];

  if (menu.className === "menu") {
    menu.className += " open";
  } else {
    menu.className = "menu";
  }
}









