$(function () {
    var header = $(".navbar");

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 4800) {
            header.addClass("scrolled");
            header.addClass("tab-black");

        } else {
            header.removeClass("scrolled");
            header.removeClass("tab-black");

        }
    });

});