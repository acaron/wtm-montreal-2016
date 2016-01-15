jQuery(document).ready(function($) {

    /**
     * Variables
     * @type {*|jQuery|HTMLElement}
     */
    var $htmlBody        = $('html, body'),
        $navigationItems = $('#navbar-menu').find('a:not(.lang)');

    /**
     * Parallax
     */
    jQuery.stellar({
        horizontalScrolling: false
    });

    /**
     * Smooth scroll to the section
     */
    $navigationItems.on('click', function(event) {
        event.preventDefault();

        var $navbarMenu = $('#navbar-menu');

        smoothScroll($(this.hash));

        $navbarMenu.collapse('hide');
    });

    /**
     * Smooth scroll to second section
     */
    $('.scroll-down, .scroll-up').on('click', function(event) {
        event.preventDefault();

        smoothScroll($(this.hash));
    });

    /**
     * Scroll page from current position to the target
     * @param target
     */
    function smoothScroll(target) {
        $htmlBody.animate({
            'scrollTop': target.offset().top
        }, {
            duration: 1000,
            easing: 'easeOutBack'
        });
    }

    $('[data-toggle="tooltip"]').tooltip()
});
