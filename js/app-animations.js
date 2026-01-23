document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var month = today.getMonth() + 1; // 1=Jan, 12=Dec
    var day = today.getDate();

    // Date Logic
    // Christmas: Nov 1 to Dec 31
    var isChristmas = (month === 11) || (month === 12);

    // New Year: March 1 to April 30
    var isNewYear = (month === 3) || (month === 4);

    // DEMO OVERRIDE: Uncomment to force specific seasons for testing
    // isChristmas = true;
    isNewYear = true;

    if (isChristmas) {
        initChristmasAnimation();
    } else if (isNewYear) {
        initNewYearAnimation();
    } else {
        initDefaultParticles();
    }

    function initChristmasAnimation() {
        console.log("Initializing Christmas Animation");
        // ... (Same as before)
        if (!document.getElementById('snow')) {
            var snowCanvas = document.createElement('canvas');
            snowCanvas.id = 'snow';
            document.body.appendChild(snowCanvas);
        }
        var script = document.createElement('script');
        script.src = "js/white-particles.js";
        script.async = true;
        document.body.appendChild(script);
        addSanta();
        addChristmasDecorations();
    }

    function addSanta() {
        if (document.getElementById('santa-container')) return;
        var santaContainer = document.createElement('div');
        santaContainer.id = 'santa-container';
        santaContainer.style.position = 'fixed';
        santaContainer.style.zIndex = '9999';
        santaContainer.style.pointerEvents = 'none';
        var santaImg = document.createElement('img');
        santaImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Santa_Claus_reindeer_sleigh.svg';
        santaImg.style.width = '300px';
        santaImg.style.height = 'auto';
        santaImg.style.filter = 'brightness(0) invert(1)';
        santaImg.onerror = function () { this.style.display = 'none'; };
        santaContainer.appendChild(santaImg);
        document.body.appendChild(santaContainer);
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes santaFloat {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            }
            #santa-container {
                left: 110px; 
                bottom: 20px;
                animation: santaFloat 3s ease-in-out infinite;
            }
            #santa-container:hover {
                transform: scale(1.1);
                transition: transform 0.3s;
                animation: none;
            }
            @media (max-width: 768px) {
                #santa-container img { width: 100px !important; }
                #santa-container { bottom: 10px; left: 80px; }
            }
        `;
        document.head.appendChild(style);
    }

    function addChristmasDecorations() {
        if (document.getElementById('xmas-tree')) return;
        var tree = document.createElement('img');
        tree.src = 'https://img.icons8.com/color/96/christmas-tree.png';
        tree.id = 'xmas-tree';
        tree.style.position = 'fixed';
        tree.style.bottom = '20px';
        tree.style.left = '20px';
        tree.style.width = '80px';
        tree.style.zIndex = '9998';
        document.body.appendChild(tree);
        var greeting = document.createElement('div');
        greeting.innerHTML = '🎄 Merry Christmas 🎄';
        greeting.style.position = 'fixed';
        greeting.style.top = '80px';
        greeting.style.right = '20px';
        greeting.style.color = '#d32f2f';
        greeting.style.background = 'rgba(255,255,255,0.9)';
        greeting.style.padding = '8px 15px';
        greeting.style.borderRadius = '20px';
        greeting.style.fontFamily = 'cursive, sans-serif';
        greeting.style.fontWeight = 'bold';
        greeting.style.zIndex = '9998';
        greeting.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        document.body.appendChild(greeting);
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes treeSway {
                0% { transform: rotate(0deg); }
                25% { transform: rotate(2deg); }
                75% { transform: rotate(-2deg); }
                100% { transform: rotate(0deg); }
            }
            #xmas-tree {
                animation: treeSway 3s ease-in-out infinite;
                transform-origin: bottom center;
            }
            @media (max-width: 768px) {
                #xmas-tree { width: 60px; bottom: 10px; left: 10px; }
                div[style*="Merry Christmas"] { display: none; } 
            }
        `;
        document.head.appendChild(style);
    }

    function initNewYearAnimation() {
        console.log("Initializing New Year Animation (Tree + Koha + Butterfly)");
        addNewYearDecorations();
        addButterflyAnimation();
        initDefaultParticles();
    }

    function addNewYearDecorations() {
        console.log("Adding New Year Decorations (Tree Scene)");
        if (document.getElementById('new-year-deco')) return;

        var container = document.createElement('div');
        container.id = 'new-year-deco';

        // 1. Erabadu Tree (High Quality)
        var tree = document.createElement('img');
        tree.src = 'images/erabadu_tree.svg?v=4';
        tree.style.position = 'fixed';
        tree.style.bottom = '-20px';
        tree.style.left = '-20px';
        tree.style.width = '350px';
        tree.style.zIndex = '9998';
        tree.id = 'ny-tree';
        container.appendChild(tree);

        // 1.5 Small Plants beneath the tree (lush undergrowth)
        var plantPositions = [
            { bottom: '0px', left: '60px', width: '80px', rotate: '0deg' },
            { bottom: '-5px', left: '10px', width: '60px', rotate: '-10deg' },
            { bottom: '5px', left: '120px', width: '70px', rotate: '15deg' }
        ];

        plantPositions.forEach(function (pos, index) {
            var p = document.createElement('img');
            p.src = 'images/small_plant.svg?v=5';
            p.style.position = 'fixed';
            p.style.bottom = pos.bottom;
            p.style.left = pos.left;
            p.style.width = pos.width;
            p.style.zIndex = '9999';
            p.style.transform = 'rotate(' + pos.rotate + ')';
            p.className = 'extra-plant-base';
            container.appendChild(p);
        });

        // 2. Extra Detailed Flowers (Corner decorations)
        var flowerPositions = [
            { bottom: '-15px', left: '-10px', width: '100px', rotate: '0deg', zIndex: '10001' }, // Bottom Left Corner - Rooted
            { top: '20px', left: '20px', width: '85px', rotate: '160deg', zIndex: '9999' },      // Top Left - hanging
            { top: '20px', right: '20px', width: '90px', rotate: '200deg', zIndex: '9999' },     // Top Right - hanging
            { bottom: '20px', right: '20px', width: '100px', rotate: '0deg', zIndex: '9999' }   // Bottom Right - growing up
        ];

        flowerPositions.forEach(function (pos, index) {
            var f = document.createElement('img');
            f.src = 'images/erabadu.svg?v=6';
            f.style.position = 'fixed';
            if (pos.top) f.style.top = pos.top;
            if (pos.bottom) f.style.bottom = pos.bottom;
            if (pos.left) f.style.left = pos.left;
            if (pos.right) f.style.right = pos.right;
            f.style.width = pos.width;
            f.style.zIndex = pos.zIndex || '9999';
            f.style.transformOrigin = 'bottom left';
            f.style.transform = 'rotate(' + pos.rotate + ')';
            f.className = 'extra-flower-cluster';
            container.appendChild(f);
        });

        // 3. Koha (Asian Koel)
        var bird = document.createElement('img');
        bird.src = 'images/koha.svg?v=4';
        bird.style.position = 'fixed';
        // Positioned on the main branch
        bird.style.bottom = '160px';
        bird.style.left = '120px';
        bird.style.width = '80px';
        bird.style.zIndex = '10000'; // Make sure bird is on top of tree but maybe under some flowers
        bird.id = 'ny-bird';
        container.appendChild(bird);

        // 3. Greeting
        var greeting = document.createElement('div');
        greeting.innerHTML = '🌞 Suba Aluth Avuruddak Wewa 🌞';
        greeting.style.position = 'fixed';
        greeting.style.top = '80px';
        greeting.style.right = '20px';
        greeting.style.color = '#d32f2f';
        greeting.style.background = 'rgba(255,235,59,0.9)';
        greeting.style.padding = '8px 15px';
        greeting.style.borderRadius = '20px';
        greeting.style.fontFamily = 'cursive, sans-serif';
        greeting.style.fontWeight = 'bold';
        greeting.style.zIndex = '9998';
        greeting.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        container.appendChild(greeting);

        document.body.appendChild(container);

        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes treeSway {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(1deg); } 
                100% { transform: rotate(0deg); }
            }
            @keyframes birdIdling {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px) rotate(2deg); }
            }
            @keyframes flowerSwayLow {
                0%, 100% { transform: translate(0,0) rotate(0deg); }
                50% { transform: translate(2px, -2px) rotate(3deg); }
            }
            #ny-tree { animation: treeSway 6s ease-in-out infinite; transform-origin: bottom left; }
            #ny-bird { animation: birdIdling 4s ease-in-out infinite; }
            .extra-flower-cluster { animation: flowerSwayLow 5s ease-in-out infinite; }
            
            @media (max-width: 768px) {
                #ny-tree { width: 200px; bottom: -10px; left: -10px; }
                #ny-bird { width: 50px; bottom: 85px; left: 70px; }
                div[style*="Suba Aluth"] { display: none; }
            }
        `;
        document.head.appendChild(style);
    }

    function addButterflyAnimation() {
        // Butterfly fluttering around the tree
        var butterfly = document.createElement('img');
        butterfly.src = 'images/butterfly.svg';
        butterfly.style.width = '40px';
        butterfly.style.height = '40px';
        butterfly.style.position = 'fixed';
        butterfly.style.zIndex = '10000'; // Top most
        butterfly.style.bottom = '100px';
        butterfly.style.left = '50px';
        butterfly.id = 'ny-butterfly';

        document.body.appendChild(butterfly);

        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes butterflyPath {
                0% { transform: translate(0, 0) rotate(0deg); }
                25% { transform: translate(100px, -50px) rotate(20deg); }
                50% { transform: translate(200px, 0px) rotate(0deg); }
                75% { transform: translate(100px, 50px) rotate(-20deg); }
                100% { transform: translate(0, 0) rotate(0deg); }
            }
             @keyframes wingFlap {
                0% { opacity: 1; transform: scaleX(1); }
                50% { opacity: 0.8; transform: scaleX(0.2); } /* Faux flap */
                100% { opacity: 1; transform: scaleX(1); }
            }
            #ny-butterfly {
                animation: butterflyPath 10s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
    }


    function initDefaultParticles() {
        console.log("Initializing Default Particles");
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                "particles": {
                    "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
                    "color": { "value": "#888" },
                    "shape": {
                        "type": "circle",
                        "stroke": { "width": 0, "color": "#888" },
                        "polygon": { "nb_sides": 5 },
                        "image": { "src": "img/github.svg", "width": 100, "height": 100 }
                    },
                    "opacity": {
                        "value": 0.5, "random": false,
                        "anim": { "enable": false, "speed": 3, "opacity_min": 0.1, "sync": false }
                    },
                    "size": {
                        "value": 5, "random": true,
                        "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false }
                    },
                    "line_linked": {
                        "enable": true, "distance": 150, "color": "#888", "opacity": 0.4, "width": 1
                    },
                    "move": {
                        "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false,
                        "out_mode": "out", "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": { "enable": true, "mode": "repulse" },
                        "onclick": { "enable": true, "mode": "push" },
                        "resize": true
                    },
                    "modes": {
                        "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
                        "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
                        "repulse": { "distance": 200 },
                        "push": { "particles_nb": 4 },
                        "remove": { "particles_nb": 2 }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            });
        }
    }
});
