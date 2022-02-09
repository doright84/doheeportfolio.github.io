$(document).ready(function () {
    AOS.init({
        once: true,
    });

    $('html, body').addClass('modal-active')
    // 안내창 닫기
    $('.modal-next').click(function () {
        $('html, body').addClass('modal-active')
        $('.modal-cont-1').fadeOut();
        $('.modal-cont-2').fadeIn();
        setTimeout(function () {
          $('.modal-cont-talk2').fadeIn();
        },500);
        setTimeout(function () {
            $('.modal-cont-bg3').fadeIn();
          },1500);
          setTimeout(function () {
            $('.modal-close').fadeIn();
          },2000);
    });
   



    $('.modal-close').click(function () {
        $('.modal').fadeOut();
        $('html, body').removeClass('modal-active')

    });

    //----------fix menu button-------

    // 버튼 누를 때 메뉴보이기
    $('.fix-menu-bt').click(function () {
        $(".fix-wrap").stop().fadeToggle(500)
        // 버튼 달라지게하기
        $(this).toggleClass('fix-menu-bt-on');
        $('.fix-bg').stop().fadeToggle(500);
        $('.fix-gnb-menu').toggleClass('fix-gnb-menu-active');

        // $('html, body').toggleClass('modal-active')
        // fix_menu_active =!fix_menu_a;
    });
    // 메뉴 누를떄 메뉴 없애기
    $('.fix-gnb-menu li a').click(function () {
        $(".fix-wrap").stop().fadeToggle(500)
        $('.fix-bg').stop().fadeOut(500);
        $('.fix-gnb-menu').removeClass('fix-gnb-menu-active');
        $('.fix-menu-bt').removeClass('fix-menu-bt-on');
    });

    $('.fix-bg').click(function () {
        $(".fix-wrap").stop().fadeToggle(500)
        $(this).stop().fadeOut(500);
        $('.fix-gnb-menu').removeClass('fix-gnb-menu-active');
        $('.fix-menu-bt').removeClass('fix-menu-bt-on');
    });
    // // 버튼 누를때
    // $('.fix-menu-bt').click(function () {
    //     $('.fix-gnb').toggleClass('fix-gnb-active');
    //     fix_menu_active =!fix_menu_a;
    // });



    // ----------Head------------
    let sw_visual = new Swiper('.head-sw-cont', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 500,
        touchRatio: 0
    });
    let head_sw_img = $('.head-swiper-img');
    head_sw_img.mouseenter(function () {
        sw_visual.autoplay.stop();
    });
    head_sw_img.mouseleave(function () {
        sw_visual.autoplay.start();
    });





    // -------------profile--------------
    $('.profile-bt').click(function () {
        $(this).toggleClass('profile-bt-on');
        $('.viewmore').slideToggle();

    })
    $('.view-right-list').hover(function () {
        $(this).find('.v-right-index-txt').toggleClass('v-index-on')
    });


    //------------- Skill----------

    function skill_bar(id, per) {
        let bar = new ProgressBar.Line(id, {
            strokeWidth: 4,
            easing: "easeInOut",
            duration: 1400,
            color: "#ffcc00",
            trailWidth: 4,
            trailColor: "#",
        })
        bar.animate(per)
    }

    skill_bar("#html", 0.8);
    skill_bar("#photo", 0.9);
    skill_bar("#css", 0.8);
    skill_bar("#illu", 0.95);
    skill_bar("#jquery", 0.6);
    skill_bar("#sketch_af", 0.55);

    // -----------Publishing-------------
    let publ_cont = new Swiper(".publ-container", {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.publ-next',
            prevEl: '.publ-prev',
        }
    })
    publ_cont.on('transitionEnd', function () {
        $(".publ-cont-w-left .publ-cont-item").hide().eq(publ_cont.realIndex).show()

    });


    // ---------------Life--------------
    let sw_life = new Swiper('.life-sw-container', {
        loop: true,
        loopSlides: 3,
        speed: 800,
        touchRatio: 0,
        navigation: {
            nextEl: ".life-next",
            prevEl: ".life-prev",
        },
    });
    let life_sw_left = $('.life-left');
    life_sw_left.mouseenter(function () {
        sw_life.autoplay.stop();
    });
    life_sw_left.mouseleave(function () {
        sw_life.autoplay.start();
    });




    $('.life-sw-1').show();
    $('.life-sw-2').hide();
    $('.life-sw-3').hide();
    $('.life-right>li').eq(0).click(function () {
        $('.life-sw-1').show();
        $('.life-sw-2').hide();
        $('.life-sw-3').hide();
    });

    $('.life-right>li').eq(1).click(function () {
        $('.life-sw-1').hide();
        $('.life-sw-2').show();
        $('.life-sw-3').hide();
    });
    $('.life-right>li').eq(2).click(function () {
        $('.life-sw-1').hide();
        $('.life-sw-2').hide();
        $('.life-sw-3').show();
    });
    // life-right hover
    $('.life-r-li').hover(function () {
        $(this).find('.life-r-try').stop().slideToggle(200);
    });





    // -------------Contact------------
    let content_img = 1;

    $("#cont-img1").show();
    /*img1을 클릭했을 때 img2를 보여줌*/
    $(".cont-img").click(function () {
        content_img++;
        if (content_img > 3) content_img = 1;
        $(this).hide()
        $("#cont-img" + content_img).show()
    });

    $('.contact-notice li').mouseenter(function () {
        $(this).find('.cont-f-txt').addClass('cont-f-txt-on');
    });
    $('.contact-notice li').mouseleave(function () {
        $(this).find('.cont-f-txt').removeClass('cont-f-txt-on');
    });






});