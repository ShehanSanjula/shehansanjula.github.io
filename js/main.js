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

/* Christmas Season | Snow 🎄 */ 
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
/* end of Christmas Season | Snow 🎄 */

/* Christmas Season | Tree-Green 🎄 */ 
// # Default state
let settings = {
  background: '#111',
  rotationX: 30,
  treeShape: 't => t',
  'video length [s]': 10
}
let chains = [
  { bulbRadius: 2, bulbsCount: 100, endColor: "#FFC", glowOffset: 0, opacity: 1, startAngle: 0, startColor: "#FFC", turnsCount: 14},
  { bulbRadius: 50, bulbsCount: 20, endColor: "#0FF", glowOffset: 0, opacity: 0.3, startAngle: 120, startColor: "#FF0", turnsCount: 3},
  { bulbRadius: 12, bulbsCount: 50, endColor: "#FF0", glowOffset: 0, opacity: 0.68, startAngle: 240, startColor: "#0FF", turnsCount: -3}
];


// # Global vars
const pixelRatio = window.devicePixelRatio;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let gui = null;
let guiFirstFolder = null;
let guiLastFolder = null;
let rotationZ = 0;


// # Customisation via dat.GUI
function getRandomChain() {
  return {
    bulbsCount: Math.round(Math.random() * (100 - 10) + 10),
    bulbRadius: Math.round(Math.random() * (20 - 1) + 1),
    glowOffset: Math.random() < 0.5 ? 0 : Math.round(Math.random() * (20 - 10) + 10),
    turnsCount: Math.round(Math.random() * (10 - 3) + 3) * (Math.random() < 0.5 ? -1 : 1),
    startAngle: Math.round(Math.random() * 360),
    startColor: '#FF0',
    endColor: '#0FF',
    opacity: Math.round(Math.random() * (100 - 60) + 60) / 100
  };
}

const guiMethods = {
  'ADD CHAIN': () => {
    chains.push(getRandomChain());
    updateDatGui();
    guiLastFolder.open();
  },
  'REMOVE CHAIN': null,
  removeChain: () => {
    const index = guiMethods['REMOVE CHAIN'];
    if (!Number.isNaN(parseInt(index))) {
      chains.splice(index, 1);
      guiMethods['REMOVE CHAIN'] = null;
      updateDatGui();
    }
  },
  '📷 Save as image': () => {
    CGL.saveAs.PNG(canvas, 'my-christmas-tree');
  },
  '🎥 Save as video': () => {
    const recorder = CGL.saveAs.WEBM(canvas, 'my-christmas-tree');
    recorder.start();
    document.body.classList.add('recording');
    setTimeout(() => {
      recorder.stop();
      document.body.classList.remove('recording');
    }, settings['video length [s]'] * 1000);
  }
};

function updateDatGui() {
  if (gui) {
    gui.destroy();
  }
  gui = new dat.GUI();
  
  chains.forEach((chain, i) => {
    const guiChain = gui.addFolder('🎄 Chain ' + (i+1));
    guiChain.add(chains[i], 'bulbsCount', 10, 500, 1);
    guiChain.add(chains[i], 'bulbRadius', 1, 100, 1);
    guiChain.add(chains[i], 'glowOffset', 0, 100, 1);
    guiChain.add(chains[i], 'turnsCount', -50, 50, 1);
    guiChain.add(chains[i], 'startAngle', 0, 360, 1);
    guiChain.addColor(chains[i], 'startColor');
    guiChain.addColor(chains[i], 'endColor');
    guiChain.add(chains[i], 'opacity', 0, 1, .01);
    if (i === 0) {
      guiFirstFolder = guiChain;
    } else if (i === chains.length - 1) {
      guiLastFolder = guiChain;
    }
  });
  
  let folders = {...guiMethods.removePlaceholder};
  chains.forEach((chain, i) => folders[`Chain ${i+1}`] = i);
  const shapes = {
    linear: 't => t',
    easeInQuad: 't => t*t',
    easeOutQuad: 't => t*(2-t)',
    easeInOutQuad: 't => (t<.5 ? 2*t*t : -1+(4-2*t)*t)',
    easeInCubic: 't => t*t*t'
  };
  const guiOptions = gui.addFolder('⚙️ Options');
  guiOptions.addColor(settings, 'background');
  guiOptions.add(settings, 'rotationX', 0, 75, 1);
  guiOptions.add(settings, 'treeShape', shapes);
  guiOptions.add(guiMethods, 'ADD CHAIN');
  guiOptions.add(guiMethods, 'REMOVE CHAIN', folders).onChange(guiMethods.removeChain);
  guiOptions.open();

  const guiExport = gui.addFolder('💾 Export');
  guiExport.add(guiMethods, '📷 Save as image');
  guiExport.add(guiMethods, '🎥 Save as video');
  guiExport.add(settings, 'video length [s]', 1, 60, 1);

  return gui;
}
updateDatGui();
guiFirstFolder.open();


// # Rendering of the tree
function updateScene() {
  let {innerWidth: canvasWidth, innerHeight: canvasHeight} = window;
  window.tiltAngle = settings.rotationX / 180 * Math.PI;
  window.treeHeight = Math.min(canvasWidth, canvasHeight) * .8;
  window.baseRadius = treeHeight * .3;
  window.baseCenter = {x: canvasWidth/2, y: canvasHeight/2 + treeHeight/2 * Math.cos(tiltAngle) - baseRadius/2 * Math.sin(tiltAngle)};
  ctx.canvas.width  = canvasWidth * pixelRatio;
  ctx.canvas.height = canvasHeight * pixelRatio;
  ctx.scale(pixelRatio, pixelRatio);
  ctx.fillStyle = settings.background;
  ctx.rect(0, 0, canvasWidth, canvasHeight);
  ctx.fill();
  ctx.lineWidth = 1.1;  
}

function renderChain(props) {
  for (let i = 0; i < props.bulbsCount; i++) {
    let progress = i / (props.bulbsCount - 1);
    progress = Math.pow((progress), Math.sqrt(progress) + 1); // just an approximate amendment of the distances between lights
    const turnProgress = (progress * props.turnsCount) % 1;
    const easing = eval(settings.treeShape); // dat.GUI seems unable to handle functions as values
    const sectionRadius = baseRadius * (1 - easing(progress));
    const sectionAngle = ((turnProgress * 360 + props.startAngle + rotationZ) / 180 * Math.PI) % (Math.PI*2);
    const opacity = Math.min(1, Math.max(0, Math.cos(sectionAngle)) + .2);
    const X = baseCenter.x + (Math.sin(sectionAngle) * sectionRadius);
    const Y = baseCenter.y - progress * treeHeight * Math.sin((90 - settings.rotationX) / 180 * Math.PI)
      + sectionRadius * Math.sin(tiltAngle) * Math.cos(sectionAngle);
    const bulbRadius = props.bulbRadius * treeHeight/1000;
    const glowRadius = (props.bulbRadius + props.glowOffset) * treeHeight/1000;
    const currentColor = CGL.colorConvert.opacity(
      CGL.colorConvert.mixBlendColors(props.startColor, props.endColor, progress), opacity
    );
    
    // opacity
    ctx.globalAlpha = props.opacity;

    // glow circles
    if (props.glowOffset > 0) {
      const gradient = ctx.createRadialGradient(X, Y, bulbRadius, X, Y, glowRadius);
      gradient.addColorStop(0, CGL.colorConvert.opacity(CGL.colorConvert.mixBlendColors(currentColor, '#fff', .3), .5));
      gradient.addColorStop(.25, CGL.colorConvert.opacity(currentColor, .6));
      gradient.addColorStop(.5, CGL.colorConvert.opacity(currentColor, .3));
      gradient.addColorStop(.75, CGL.colorConvert.opacity(currentColor, .125));
      gradient.addColorStop(1, CGL.colorConvert.opacity(currentColor, 0));
      ctx.fillStyle = gradient;    
      ctx.beginPath();
      ctx.arc(X, Y, glowRadius, 0, 2 * Math.PI);
      ctx.fill();
    }

    // bulbs
    ctx.fillStyle = currentColor;
    ctx.beginPath();
    ctx.arc(X, Y, bulbRadius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function render() {
  updateScene();
  chains.forEach(chain => renderChain(chain));
}

function rotate() {
  rotationZ = (rotationZ - 1) % 360;
  render();
  
  window.requestAnimationFrame(rotate);
}
rotate();

window.addEventListener('resize', render);
window.addEventListener('orientationchange', render);

/* end of Christmas Season | Tree-Green 🎄 */

