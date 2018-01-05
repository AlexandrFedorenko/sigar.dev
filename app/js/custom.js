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
    $(".sidebar-menu-dropdown").slideToggle();
});



