$(function() {



    //E-mail Ajax Send
    //Documentation & Example: https://github.com/agragregra/uniMail
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });


    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// dropdown menu open
$(".main-menu_catalog").click(function (e) {
    e.preventDefault();
    $(".dropdown-wrap").slideToggle();
});

// mob menu open
$(".bars-mob").click(function (e) {
    e.preventDefault();
    $(".nav-wrap").slideToggle();
});

// sidebar dropdown
$(".sidebar-menu_item--dropdown").click(function (e) {
    e.preventDefault();
    $(this).find(".sidebar-menu-dropdown").slideToggle();
});

// sidebar mob
$(".bars-sidebar-js").click(function (e) {
    e.preventDefault();
    if (screen.width <= '992'){
        $(".wrap-ul-sidebar").slideToggle();
    }
});

//filter slider
$("#slider2").slider({
    min: 0,
    max: 10,
    values: [2, 5],
    range: true,
    stop: function (event, ui) {
        $("input#minSmol").val($("#slider2").slider("values", 0));
        $("input#maxSmol").val($("#slider2").slider("values", 1));
    },
    slide: function (event, ui) {
        $("input#minSmol").val($("#slider2").slider("values", 0));
        $("input#maxSmol").val($("#slider2").slider("values", 1));
    }
});
$("#slider").slider({
    min: 0,
    max: 1000,
    values: [50, 500],
    range: true,
    stop: function (event, ui) {
        $("input#minCost").val($("#slider").slider("values", 0));
        $("input#maxCost").val($("#slider").slider("values", 1));
    },
    slide: function (event, ui) {
        $("input#minCost").val($("#slider").slider("values", 0));
        $("input#maxCost").val($("#slider").slider("values", 1));
    }
});

//sliders

$('.main-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    dots: true
});

$('.slider-popular-item').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: false,
    nextArrow: '.right',
    prevArrow: '.left',
    dots: false,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
});



//mascedinput

$(function($){
    $("#phone").mask("999 999 9999",{placeholder:" "});
    $("#phonePopup").mask("999 999 9999",{placeholder:" "});
    $("#mainPhone").mask("999 999 9999",{placeholder:" "});
});


//popups

$('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name'
});








