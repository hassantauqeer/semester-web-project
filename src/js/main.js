(function () {
    $('#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('.mobile-overlay').toggleClass('open');
        $('.mobile-overlay li').toggleClass('animated slideInUp');
    });
}())