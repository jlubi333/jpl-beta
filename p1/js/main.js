$(document).ready(function() {
    "use strict";

    stick("#main-nav", true);

    $(".scroll").click(function(event) {
        event.preventDefault();
        var href = $(this).attr("href");
        scrollTo(href, 1000);
    });
});

function stick(sel, absolute) {
    var stickyTop = $(sel).offset().top - parseInt($(sel).css("marginTop"));
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();
        if (stickyTop < windowTop) {
            $(sel).addClass("sticky");
            $(sel).css({
                "position": "fixed",
                "top": "0px"
            });
        } else {
            $(sel).removeClass("sticky");
            if (absolute) {
                $(sel).css({
                    "position": "absolute",
                    "top": "auto"
                });
            } else {
                $(sel).css("position", "static");
            }
        }
    });
}

function scrollTo(sel, duration, callback) {
    var distance = Math.abs($(window).scrollTop() - $(sel).offset().top);
    if (distance == 0) {
        if (typeof callback != "undefined") {
            callback();
        }
        return;
    }
    $("html, body").animate({
        scrollTop: $(sel).offset().top
    }, duration, function() {
        if (typeof callback != "undefined") {
            callback();
        }
    });
}
