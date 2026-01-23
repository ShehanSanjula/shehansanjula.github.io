document.addEventListener("DOMContentLoaded", function () {
    var today = new Date();
    var month = today.getMonth() + 1; // 1=Jan, 12=Dec
    var day = today.getDate();

    // Date Logic
    // Christmas: Nov 1 to Dec 31
    var isChristmas = (month === 11) || (month === 12);

    // New Year: March 1 to April 30
    var isNewYear = (month === 3) || (month === 4);

    // Vesak/Poson: May 1 to June 30
    var isVesak = (month === 5) || (month === 6);

    // DEMO OVERRIDE: Uncomment to force specific seasons for testing
    // isChristmas = true;
    // isNewYear = true;
    isVesak = true;

    if (isChristmas) {
        initChristmasAnimation();
    } else if (isNewYear) {
        initNewYearAnimation();
    } else if (isVesak) {
        initVesakAnimation();
    } else {
        initDefaultParticles();
    }

    function initChristmasAnimation() {
        console.log("Initializing Christmas Animation");
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
        tree.src = 'images/erabadu_tree.svg?v=5';
        tree.style.position = 'fixed';
        tree.style.bottom = '-20px';
        tree.style.left = '-20px';
        tree.style.width = '350px';
        tree.style.zIndex = '9998';
        tree.id = 'ny-tree';
        container.appendChild(tree);

        // 1.5 Small Plants beneath the tree (lush undergrowth)
        var plantPositions = [
            { bottom: '0px', left: '80px', width: '70px', rotate: '5deg' },
            { bottom: '5px', left: '160px', width: '60px', rotate: '15deg' }
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

        // 2. Extra Detailed Flower (Rooted in Bottom-Left Corner)
        var flower = document.createElement('img');
        flower.src = 'images/erabadu.svg?v=7';
        flower.style.position = 'fixed';
        flower.style.bottom = '-20px';
        flower.style.left = '-15px';
        flower.style.width = '110px';
        flower.style.zIndex = '10001';
        flower.style.transformOrigin = 'bottom left';
        flower.className = 'extra-flower-cluster';
        container.appendChild(flower);

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

    function initVesakAnimation() {
        console.log("Initializing Vesak Animation (Lanterns + Bulbs)");
        addVesakDecorations();
        initDefaultParticles();
    }

    function addVesakDecorations() {
        if (document.getElementById('vesak-deco')) return;

        var container = document.createElement('div');
        container.id = 'vesak-deco';

        // 1. Vesak Light String (Top Wire) - STRETCHED TO FULL WIDTH
        var lightString = document.createElement('img');
        lightString.src = 'images/vesak_lights.svg';
        lightString.style.position = 'fixed';
        lightString.style.top = '-5px';
        lightString.style.left = '0';
        lightString.style.width = '100%';
        lightString.style.height = '60px'; // Set a fixed height to prevent vertical stretching
        lightString.style.zIndex = '9996';
        lightString.style.pointerEvents = 'none';
        container.appendChild(lightString);

        // 2. Vesak Lanterns (Lowered to clear header, and adding dynamic hanging wires)
        var lanternConfigs = [
            // Top Left (Octagonal)
            { type: 'oct', top: '240px', left: '40px', width: '150px', dur: '6s' },
            // Top Right (Bucket Style - Pink)
            { type: 'bucket', top: '220px', right: '50px', width: '130px', dur: '7s' },
            // Middle Left (Bucket)
            { type: 'bucket', top: '340px', left: '200px', width: '100px', dur: '5s' }
        ];

        lanternConfigs.forEach(function (conf, index) {
            // Hanging Wire (Div)
            var wire = document.createElement('div');
            wire.className = 'vesak-hanging-wire';
            wire.style.left = conf.left || 'auto';
            wire.style.right = conf.right || 'auto';
            wire.style.top = '0';
            wire.style.height = conf.top;
            // Adjust left/right for center of lantern
            if (conf.left) {
                var offset = parseInt(conf.width) / 2;
                wire.style.left = (parseInt(conf.left) + offset) + 'px';
            }
            if (conf.right) {
                var offset = parseInt(conf.width) / 2;
                wire.style.right = (parseInt(conf.right) + offset) + 'px';
            }
            container.appendChild(wire);

            // The Lantern
            var l = document.createElement('img');
            l.src = conf.type === 'oct' ? 'images/vesak_lantern.svg' : 'images/vesak_lantern_bucket.svg';
            l.style.position = 'fixed';
            l.style.top = conf.top;
            if (conf.right) l.style.right = conf.right;
            if (conf.left) l.style.left = conf.left;
            l.style.width = conf.width;
            l.style.zIndex = '9999';
            l.className = 'vesak-lantern-swing';
            l.style.animationDuration = conf.dur;
            container.appendChild(l);
        });

        // 3. Bottom Left Scene (Lotus Pond & Oil Lamp) - SCALED UP
        var scene = document.createElement('img');
        scene.src = 'images/vesak_scene.svg';
        scene.style.position = 'fixed';
        scene.style.bottom = '-40px';
        scene.style.left = '-40px';
        scene.style.width = '420px'; // Increased size significantly
        scene.style.zIndex = '9998';
        scene.id = 'vesak-scene-bottom';
        container.appendChild(scene);

        // 4. Greeting (Repositioned to clear lanterns)
        var greeting = document.createElement('div');
        greeting.innerHTML = '☸️ Pinwantha Vesak Mangalyayak Wewa ☸️';
        greeting.style.position = 'fixed';
        greeting.style.top = '140px';
        greeting.style.right = '40px';
        greeting.style.color = '#FFF59D';
        greeting.style.background = 'rgba(80, 20, 20, 0.95)';
        greeting.style.padding = '10px 20px';
        greeting.style.borderRadius = '30px';
        greeting.style.fontFamily = 'cursive, sans-serif';
        greeting.style.fontWeight = 'bold';
        greeting.style.zIndex = '9997';
        greeting.style.boxShadow = '0 0 20px rgba(255, 235, 59, 0.4)';
        container.appendChild(greeting);

        document.body.appendChild(container);

        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes lanternSwing {
                0%, 100% { transform: rotate(-2deg) translateX(-3px); }
                50% { transform: rotate(2deg) translateX(3px); }
            }
            .vesak-lantern-swing {
                animation: lanternSwing ease-in-out infinite;
                transform-origin: top center;
            }
            .vesak-hanging-wire {
                position: fixed;
                width: 1px;
                background: #666;
                z-index: 9998;
                opacity: 0.6;
            }
            @media (max-width: 768px) {
                .vesak-lantern-swing:nth-of-type(3) { display: none; }
                .vesak-hanging-wire:nth-of-type(3) { display: none; }
                div[style*="Pinwantha"] { font-size: 14px; top: 80px; right: 10px; }
                #vesak-scene-bottom { width: 250px; bottom: -20px; left: -20px; }
                .vesak-lantern-swing { width: 100px !important; }
            }
        `;
        document.head.appendChild(style);
    }

    function addButterflyAnimation() {
        // Butterfly container for the flight path
        var container = document.createElement('div');
        container.id = 'ny-butterfly';
        container.style.position = 'fixed';
        container.style.bottom = '100px';
        container.style.left = '50px';
        container.style.zIndex = '10000';
        container.style.width = '40px';
        container.style.height = '40px';
        container.style.pointerEvents = 'none';

        // Inner element for the wing-flap
        var butterfly = document.createElement('img');
        butterfly.src = 'images/butterfly.svg';
        butterfly.style.width = '100%';
        butterfly.style.height = '100%';
        butterfly.id = 'ny-butterfly-inner';

        container.appendChild(butterfly);
        document.body.appendChild(container);

        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes butterflyPath {
                0% { transform: translate(0, 0) rotate(10deg); }
                15% { transform: translate(40px, -60px) rotate(-20deg); }
                30% { transform: translate(120px, -20px) rotate(30deg); }
                45% { transform: translate(180px, -80px) rotate(-10deg); }
                60% { transform: translate(220px, 20px) rotate(40deg); }
                75% { transform: translate(140px, 70px) rotate(-20deg); }
                90% { transform: translate(60px, 30px) rotate(10deg); }
                100% { transform: translate(0, 0) rotate(10deg); }
            }
            @keyframes wingFlap {
                0%, 100% { transform: scaleX(1); }
                50% { transform: scaleX(0.3); }
            }
            #ny-butterfly {
                animation: butterflyPath 12s ease-in-out infinite;
                transform-style: preserve-3d;
                display: inline-block;
            }
            #ny-butterfly-inner {
                animation: wingFlap 0.15s ease-in-out infinite;
                display: block;
                width: 100%;
                height: 100%;
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
