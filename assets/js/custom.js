function scrolltop_arrow () {
    /* ---- Page Scrollup JS Start ---- */
    //When distance from top = 250px fade button in/out
    let scrollup = $('#scrollup');
    let whatsapp = $('#whatsapp');
    let headertag = $('header');
    let mainfix = $('.main');
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250) {
            //scrollup.fadeIn(300);
            whatsapp.fadeIn(300);
        } else {
            //scrollup.fadeOut(300);
            whatsapp.fadeOut(300);
        }

        /* header-fixed JS Start */
        /*
        if ($(this).scrollTop() > 100){
            headertag.addClass("header-fixed");
        }
        else{
            headertag.removeClass("header-fixed");
        }
        */

        /* main-fixed JS Start */
        /*
        if ($(this).scrollTop() > 0){
            mainfix.addClass("main-fixed");
        }
        else{
            mainfix.removeClass("main-fixed");
        }
        */
        /* ---- Page Scrollup JS End ---- */
    });

    //On click scroll to top of page t = 1000ms
    scrollup.on("click", function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
}

jQuery(document).ready(function() {

    /*
    var btn = $('#scroll_top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
    */

    scrolltop_arrow();

    $('.owl-logo').owlCarousel({
        stagePadding: 50,
        margin:10,
        loop:true,
        autoplay: false,
        autoplayTimeout:1500,
        autoplayHoverPause:false,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        responsive:{
            0:{
                items:1
            },
            480: {
                items:2
            },
            767:{
                items:3
            },
            991:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
});

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        450,
        'linear'
    )
});

var project = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    /*
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
     */
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize and add the map
function initGMap() {
    // The location of Uluru
    var creative7 = {lat: 5.429421, lng: 100.312405};
    // The map, centered at Uluru
    var gmap = new google.maps.Map(
        document.getElementById('gmap'), {zoom: 17, center: creative7});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: creative7, map: gmap});
}

// Fancybox Gallery Trigger
$('.owl-logo .item').click(function (){
    var gallery = $(this).find('a').data('gallery');
    $('#'+gallery).click();
});
$('.gal-trigger').click(function (e){
    e.preventDefault();
    var gallery = $(this).data('gallery');
    $('#'+gallery).click();
});
