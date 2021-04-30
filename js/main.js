(function($){'use strict'; var zmanApp={/* --------------------------------------------- 00. Preloader --------------------------------------------- */ preloader: function(){var isMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false; var preloader=$('#preloader'); if (!isMobile){setTimeout(function(){preloader.addClass('preloaded');}, 800); setTimeout(function(){preloader.remove();}, 2000);}else{preloader.remove();}}, 
    /*------------------------------------------- 01. Sticky Header ---------------------------------------------- */ stickyHeader: function(){if ($('#sticky_header').length){var stickyMenu=$('.site_navigation').clone().appendTo('#sticky_header'); $(window).on('scroll', function(){var w=$(window).width(); if (w > 991){if ($(this).scrollTop() > 350){$('#sticky_header').slideDown(500);}else{$('#sticky_header').slideUp(500);}}});}$(".dots_effect > ").on('hover', function(){$("span.dot_effect").toggleClass("dot_hover");});}, 
    /*------------------------------------------- 02. Section Scroll --------------------------------------------- */ sectionScroll: function(){var $s_scroll=$('#section_scroller_button'); $(window).on('scroll', function (){if ($(this).scrollTop() > $(this).height() - 700){$s_scroll .addClass('btn-show') .removeClass('btn-hide');}else{$s_scroll .addClass('btn-hide') .removeClass('btn-show');}}); $(".section_scroll").sectionScroller({scrollerButton: "#section_scroller_button", scrollType: "swing", scrollDuration: 600});},
    /*------------------------------------------- 03. Section Smoot Scroll --------------------------------------- */
    smootScroll: function(){$.scrollIt({upKey: 38, downKey: 40, easing: 'swing',scrollTime: 700, activeClass: 'active',  onPageChange: null,  topOffset: -63 });}, 
    /*------------------------------------------- 04. Parallax Background ---------------------------------------- */ bg_parallax: function (){$('.welcome_area > .page_cover').parallax("50%", -0.5);}, 
    /* ------------------------------------------ 05. Animated Progress ------------------------------------------ */ animated_progress: function (){$('.progress_bar > span' ).each(function (){var $this=$(this); var width=$(this).data('percent'); $this.css({'transition': 'width 3s'}); setTimeout(function (){$this.appear(function (){$this.css('width', width + '%');});}, 500);});}, 
    /* ------------------------------------------ 06. Testimonail ------------------------------------------------ */ testimonial: function (){$('.testimonial_carousel').owlCarousel({center: false, items: 1, autoplay: true, singleItem: true, smartSpeed:500, loop: true, margin: 0, nav: false, dots: true});}, 
    /* ------------------------------------------ 07. Fan Fact Counter --------------------------------------------*/ fan_fact: function (){$('.counter').counterUp({delay: 10, time: 1000}); $(".map_btn").on("click", function (){if($("#gmap").hasClass("active")){$("#gmap").animate({"height": "300px"}).removeClass("active");}else{$("#gmap").animate({"height": "50px"}).addClass("active");}});}, 
    /* ------------------------------------------ 08. Masonry ---------------------------------------------------- */ grid_masonry: function (){if ($('#masonry').length > 0){var container=$('#masonry'); container.imagesLoaded(function (){container.masonry({itemSelector: '.grid'});});}}, 
    /* ------------------------------------------ 09. IsoTop Postfolio --------------------------------------------*/ portfolio_isotop: function (){var $modelisotop=$('.portfolio_items_list'); $modelisotop.isotope({filter: '*', animationOptions:{duration: 1000, easing: 'linear', queue: false}}); $('.recent_work_nav > li a').on("click", function (){$('.recent_work_nav > li a').removeClass('active'); $(this).addClass('active'); var selector=$(this).attr('data-filter'); $modelisotop.isotope({filter: selector, animationOptions:{duration: 1000, easing: 'linear', queue: false}}); return false;});}, 
    /* ------------------------------------------ 10. Magnific Popup --------------------------------------------- */ magnific_popup: function (){$('.work_item').magnificPopup({type: 'image', removalDelay: 300, mainClass: 'mfp-with-zoom', gallery:{enabled: true}, zoom:{enabled: true, duration: 300, easing: 'ease-in', opener: function (openerElement){return openerElement.is('img') ? openerElement : openerElement.find('img');}}});}, /* --------------------------------------------- 11. Google Map --------------------------------------------- */ google_map: function (){if ($('#gmap').length){var map; map=new GMaps({el: '#gmap', lat: 43.04446, lng: -76.130791, scrollwheel: false, zoom: 10, zoomControl: true, panControl: false, streetViewControl: false, mapTypeControl: false, overviewMapControl: false, clickable: false}); var image='images/map-icon.png'; map.addMarker({lat: 43.04446, lng: -76.130791, icon: image, animation: google.maps.Animation.DROP, verticalAlign: 'bottom', horizontalAlign: 'center'});}}, 
    /* ------------------------------------------- function initializ ---------------------------------------------*/ initializ: function(){
    zmanApp.preloader();
    zmanApp.stickyHeader(); zmanApp.sectionScroll(); zmanApp.smootScroll(); zmanApp.bg_parallax(); zmanApp.animated_progress(); zmanApp.testimonial(); zmanApp.fan_fact(); zmanApp.grid_masonry(); zmanApp.portfolio_isotop(); zmanApp.magnific_popup(); zmanApp.google_map();}}; 
/* --------------------------------------------- Document ready function --------------------------------------------- */ $(function(){zmanApp.initializ();});})(jQuery);

 <script>
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});
</script>

/* Christmas Season 🎄 */ 
(function(){
    var canvas = document.getElementById("snow");
    var ctx = canvas.getContext("2d");
    var flakeArray = [];

    canvas.style.pointerEvents = "none";
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = 1;
    canvas.style.userSelect = "none";

    function canvasResize(){
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
    }
    canvasResize();

    window.onresize = function() {
        canvasResize();
    };

    var MyMath = Math;

    setInterval(function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        var random = MyMath.random();
        var distance = .05 + .95 * random;

        flake = {};
        flake.x = 1.5 * canvas.width * MyMath.random() - .5 * canvas.width;
        flake.y = -9;
        flake.velX = 2 * distance * (MyMath.random() / 2 + .5);
        flake.velY = (4 + 2 * MyMath.random()) * distance;
        flake.radius = MyMath.pow(5 * random, 2) / 5;
        flake.update = function() {
            var t = this;
            t.x += t.velX;
            t.y += t.velY;
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.radius, 0, 2 * MyMath.PI, !1);
            ctx.fillStyle = "#FFF";
            ctx.fill()
        };

        flakeArray.push(flake);

        for (b = 0; b < flakeArray.length; b++) {
            flakeArray[b].y > canvas.height ? flakeArray.splice(b, 1) : flakeArray[b].update()
        }
    }, 16);
})();
/* end of Christmas Season 🎄 */
