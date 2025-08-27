$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;

    if (window_top > 400) {
        $('.backtotop').addClass('active');
        $('.header-stick').addClass('active');

    } else {
        $('.backtotop').removeClass('active');
        $('.header-stick').removeClass('active');

    }
});

var backtotop = document.querySelector(".backtotop")
backtotop.addEventListener("click", () => {
    window.scrollTo(0, 0);
})
