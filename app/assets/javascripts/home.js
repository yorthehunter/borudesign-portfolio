jQuery(document).ready(function() {
    // initialize carousel

    $(".carousel")
    .each(function(){
        i = $(this).attr('id');
        ir = $(this).parent().find(".right");
        il = $(this).parent().find(".left");
        $(this)
        .simplecarousel({
            next: ir,
            prev: il,
            slidespeed: 350,
            auto: false,
            width: 400,
            height: 300,
            pagination: true
        });
    });

/*
    $("#carousel").simplecarousel({
        next: $('.next'),
        prev: $('.prev'),
        slidespeed: 350,
        auto: false,
        width: 400,
        height: 300,
        pagination: false
    });
    $("#project-1").simplecarousel({
        next: $('#project-1-right'),
        prev: $('#project-1-left'),
        slidespeed: 350,
        auto: false,
        width: 475,
        height: 300,
        pagination: true
    });
    $("#project-2").simplecarousel({
        next: $('#project-2-right'),
        prev: $('#project-2-left'),
        slidespeed: 350,
        auto: false,
        width: 475,
        height: 300,
        pagination: false
    });
    $("#project-3").simplecarousel({
        next: $('#project-3-right'),
        prev: $('#project-3-left'),
        slidespeed: 350,
        auto: false,
        width: 475,
        height: 300,
        pagination: false
    });
    $("#project-4").simplecarousel({
        next: $('#project-4-right'),
        prev: $('#project-4-left'),
        slidespeed: 350,
        auto: false,
        width: 475,
        height: 300,
        pagination: false
    });
*/
});
