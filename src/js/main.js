$(document).ready(function(){

    // smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        // adding 'active' class
        $('a').each(function () {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 1200, 'swing');
    });

    // on scroll events
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        // sticky nav
        if (scroll >= 200) {
            $(".header").addClass("sticky-nav");
            $(".hamburger").addClass("is-sticky");
        } else {
            $(".header").removeClass("sticky-nav");
            $(".hamburger").removeClass("is-sticky");
        }


        // adding underline 
        $('.menu-list li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            if ((refElement.position().top - 80 <= scroll) && (refElement.position().top + refElement.height() > scroll)) {
                $('.menu-list li').removeClass("active");
                currLink.parent().addClass("active");
            }
            else{
                currLink.parent().removeClass("active");
            }
        });

    });

    //responsive menu
    $(".hamburger").on('click', function(event) {
        $(".hamburger").toggleClass("is-active");
        $(".header").toggleClass("responsive-nav");

        if($(".header").hasClass( "responsive-nav" )) {            
            $(".header .menu-list .menu-link").on('click', function(event) {
                $(".header").removeClass("responsive-nav");
            });  
        } 
    });

    // logotypes slider
    if ($(window).width() <= 650) {
        $('.companies-list').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 386,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }],
        });
    }

    // animations
    {
        var first_secion = new TimelineMax()
        .from(".header nav", 0.5, {opacity: 0, y: -40}, 0)
        .from("#intro .brand-wrapper .brand-title", 0.5, {opacity: 0, y: 40}, "-=0.3")
        .from("#intro .brand-wrapper .brand-desc", 0.5, {opacity: 0, y: 40}, "-=0.3")
        .from("#intro .btn-container", 0.5, {opacity: 0, y:40}, "-=0.3")
        .from("#intro .btn-container .btn--blue-warning", 0.5, {opacity: 0, y:40}, 0.5)
        .from("#intro .btn-container .btn--bordered", 0.5, {opacity: 0, y:40}, 0.5)
        .staggerFrom("#intro .mockup-animation .triangle", 0.5, {opacity: 0}, 0.20, "-=0.5")  
        .from("#s2 .companies-title", 0.5, {opacity: 0, y:20}, "-=0.4")
        .staggerFrom("#s2 .companies-list .single-company", 0.3, {opacity: 0, y:40}, 0.15, "-=0.3");

        first_secion.play();  



        var homepage_controler = new ScrollMagic.Controller({});


        // about secion animations
        var about_section = new TimelineMax()
        .from("#about .subtitle", 0.5, {opacity: 0, y: 40}, 0)
        .from("#about .title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .from("#about .iambot-bg", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .from("#about .notebook", 0.5, {opacity: 0, y: 80}, "-=0.2")

        new ScrollMagic.Scene({ triggerElement: "#about", triggerHook: 0.7})
            .setTween(about_section)
            .addTo(homepage_controler);


        // benefits secion animations
        var benefits_section = new TimelineMax()
        .from("#s3 .first-subtitle", 0.5, {opacity: 0, y: 40}, 0.3)
        .from("#s3 .first-title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .staggerFrom("#s3 .single-benefit", 0.3, {opacity: 0, y:40}, 0.20, "-=0.3");

        new ScrollMagic.Scene({ triggerElement: "#s3", triggerHook: 0.7})
            .setTween(benefits_section)
            .addTo(homepage_controler);

        var benefits_bottom_section = new TimelineMax()
        .from("#s3 .second-subtitle", 0.5, {opacity: 0, y: 40}, 0.3)
        .from("#s3 .second-title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .staggerFrom("#s3 .award-list .single-award", 0.3, {opacity: 0, y:40}, 0.20, "-=0.3");

        new ScrollMagic.Scene({ triggerElement: "#s3 .benefits-list", triggerHook: 0.5})
            .setTween(benefits_bottom_section)
            .addTo(homepage_controler);


        // team secion animations
        var team_section = new TimelineMax()
        .from("#team .subtitle", 0.5, {opacity: 0, y: 40}, 0.3)
        .from("#team .title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .staggerFrom("#team .team-list .person", 0.3, {opacity: 0, y:40}, 0.20, "-=0.3")
        .staggerFrom("#team .team-list .person .person-name", 0.2, {opacity: 0, y:40}, 0.10, "-=0.3")
        .staggerFrom("#team .team-list .person .person-title", 0.2, {opacity: 0, y:40}, 0.10, "-=0.3")

        new ScrollMagic.Scene({ triggerElement: "#team", triggerHook: 0.7})
            .setTween(team_section)
            .addTo(homepage_controler);


        // media secion animations
        var media_section = new TimelineMax()
        .from("#media .subtitle", 0.5, {opacity: 0, y: 40}, 0.3)
        .from("#media .title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .from("#media .listing .list-title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .staggerFrom("#media .listing li", 0.3, {opacity: 0, y:40}, 0.20, "-=0.3")
        .from("#media .btn--listing", 0.5, {opacity: 0, y: 40}, "-=0.2");

        new ScrollMagic.Scene({ triggerElement: "#media", triggerHook: 0.7})
            .setTween(media_section)
            .addTo(homepage_controler);


        // contact secion animations
        var contact_section = new TimelineMax()
        .from("#contact .subtitle", 0.5, {opacity: 0, y: 40}, 0.3)
        .from("#contact .title", 0.5, {opacity: 0, y: 40}, "-=0.2")
        .staggerFrom("#contact .contact-row label", 0.3, {opacity: 0, y:40}, 0.20, "-=0.3")
        .staggerFrom("#contact .contact-row input", 0.4, {width: 0}, 0.25, "-=0.3")
        .staggerFrom("#contact .contact-submit", 0.4, {opacity: 0, y:40}, 0.25, "-=0.3");

        new ScrollMagic.Scene({ triggerElement: "#contact", triggerHook: 0.7})
            .setTween(contact_section)
            .addTo(homepage_controler);


        // footer secion animations
        var footer_section = new TimelineMax()
        .staggerFrom("#footer .footer-list .list-title", 0.5, {opacity: 0, y:40}, 0.30, 0)
        .staggerFrom("#footer .footer-list li", 0.3, {opacity:0, y:40}, 0.20, 0);

        new ScrollMagic.Scene({ triggerElement: "#footer", triggerHook: 0.7})
            .setTween(footer_section)
            .addTo(homepage_controler);
    }

    // contact form
    $("#contact-form .contact-submit").on('click', function(event) {
        $("#contact-form").submit();
    });

    $("#contact-form").validate({

        rules: {
            firstname: "required",
            email: {
                required: true,
                email: true
            },
            phoneNumber: {
                required: true,
                minlength: 8, 
                maxlength: 15
            }
        },

        messages: {
            firstname: "Please enter your firstname",
            phoneNumber: "Please enter your Phone number",
            email: "Please enter a valid email address"
        },

        submitHandler: function(form) {
            $("#contact-form").html("Thanks for filling out our form! This form is only a demo version. We don't collect your personal data.");
        }
    });


}); 
