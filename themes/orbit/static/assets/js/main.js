jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({width: itemWidth}, 800);
        });
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#to_top').fadeIn("slow");
        } else {
            $('#to_top').fadeOut("slow");
        }
    });
    $('#to_top').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});