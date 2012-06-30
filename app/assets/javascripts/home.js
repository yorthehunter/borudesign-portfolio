jQuery(document).ready(function() {
    // initialize carousel
    $("#carousel").simplecarousel({
        next: $('.next'),
        prev: $('.prev'),
        slidespeed: 700,
        auto: 5000,
        width: 480,
        height: 280
    });
});
