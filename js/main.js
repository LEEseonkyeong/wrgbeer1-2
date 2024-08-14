$(function () {
    $("a").click(function (event) {
        event.preventDefault();
    })

    $(".slide").slick({
        autoplay: true,
        dots: true,
        arrows: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: true
    }) //slick

    $(".menu .m_inner .m_best_slide .m_slide_01").slick({
        autoplay: false,
        // autoplaySpeed: 3000,
        dots: true,
        arrows: true
    }) //slick

    $(".menu .m_inner .m_new_slide .m_slide_02").slick({
        autoplay: false,
        // autoplaySpeed: 3000,
        dots: true,
        arrows: true
    }) //slick

    // $(".f_slide ul").slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     dots: false,
    //     arrows: false,
    //     slidesToShow: 8,
    //     slidesToScroll: 1
    // }) //slick

    $(".menu_toggle_btn").click(function () {
        $(this).toggleClass("on");
        $(".m_nav").slideToggle();
    })


}) // jQuery