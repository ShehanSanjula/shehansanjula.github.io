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
        // ... (Same as before)
        console.log("Initializing Christmas Animation (Snow + Santa)");

        // Create canvas for snow if it doesn't exist
        if (!document.getElementById('snow')) {
            var snowCanvas = document.createElement('canvas');
            snowCanvas.id = 'snow';
            // Styles are handled by white-particles.js, but ensures it's in body
            document.body.appendChild(snowCanvas);
        }

        // Load white-particles.js
        var script = document.createElement('script');
        script.src = "js/white-particles.js";
        script.async = true;
        document.body.appendChild(script);

        // Add Santa & Reindeer
        addSanta();

        // Add Tree and Decorations
        addChristmasDecorations();
    }

    function addSanta() {
        console.log("Adding Santa Animation");
        // Prevent duplicate Santa
        if (document.getElementById('santa-container')) return;

        var santaContainer = document.createElement('div');
        santaContainer.id = 'santa-container';
        santaContainer.style.position = 'fixed';
        santaContainer.style.zIndex = '9999';
        santaContainer.style.pointerEvents = 'none'; // Ensure it doesn't block clicks

        var santaImg = document.createElement('img');
        // Wikimedia Direct SVG (Silhouette)
        santaImg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Santa_Claus_reindeer_sleigh.svg';
        santaImg.style.width = '300px';
        santaImg.style.height = 'auto';
        santaImg.style.filter = 'brightness(0) invert(1)'; // Make it white for dark backgrounds

        santaImg.onerror = function () {
            this.style.display = 'none';
        };

        santaContainer.appendChild(santaImg);
        document.body.appendChild(santaContainer);

        // Inject CSS for animation
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes santaFloat {
                0% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
                100% { transform: translateY(0); }
            }
            #santa-container {
                left: 110px; /* Next to the tree (which is left: 20px + width 80px + margin) */
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
        console.log("Adding Christmas Decorations (Tree + Greeting)");
        if (document.getElementById('xmas-tree')) return;

        // 1. Christmas Tree (Bottom Left)
        var tree = document.createElement('img');
        tree.src = 'https://img.icons8.com/color/96/christmas-tree.png';
        tree.id = 'xmas-tree';
        tree.style.position = 'fixed';
        tree.style.bottom = '20px';
        tree.style.left = '20px';
        tree.style.width = '80px';
        tree.style.zIndex = '9998';
        tree.style.cursor = 'pointer';
        tree.title = 'Merry Christmas!';

        document.body.appendChild(tree);

        // 2. Festive Greeting (Top Right)
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
        greeting.style.fontSize = '14px';

        document.body.appendChild(greeting);

        // 3. CSS for Tree Sway
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
            #xmas-tree:hover {
                transform: scale(1.1);
                transition: transform 0.3s;
                animation: none;
            }
            @media (max-width: 768px) {
                #xmas-tree { width: 60px; bottom: 10px; left: 10px; }
                div[style*="Merry Christmas"] { display: none; } 
            }
        `;
        document.head.appendChild(style);
    }

    function initNewYearAnimation() {
        console.log("Initializing New Year Animation (Tree + Koha + Falling Flowers)");
        addNewYearDecorations();
        addFallingPetals();
        initDefaultParticles();
    }

    function addNewYearDecorations() {
        console.log("Adding New Year Decorations (Tree Scene)");
        if (document.getElementById('new-year-deco')) return;

        var container = document.createElement('div');
        container.id = 'new-year-deco';

        // 1. Erabadu Tree (SVG)
        var tree = document.createElement('img');
        tree.src = 'images/erabadu_tree.svg';
        tree.style.position = 'fixed';
        tree.style.bottom = '-20px'; // Slightly submerged to look grounded
        tree.style.left = '-20px';
        tree.style.width = '350px'; // Grand size
        tree.style.zIndex = '9998';
        tree.id = 'ny-tree';
        tree.title = 'Erabadu Tree';
        container.appendChild(tree);

        // 2. Koha (Asian Koel) - Perched on tree
        var bird = document.createElement('img');
        bird.src = 'images/koha.svg';
        bird.style.position = 'fixed';
        // Carefully positioned to sit on the main branch of erabadu_tree.svg
        // Branch is approx at 150,250 in 400x400 viewbox -> ~37% from left, ~62% from top.
        // With 350px width -> left ~130px.
        bird.style.bottom = '160px';
        bird.style.left = '120px';
        bird.style.width = '80px';
        bird.style.zIndex = '9999';
        bird.id = 'ny-bird';
        bird.title = 'Koha';
        container.appendChild(bird);

        // 3. Greeting
        var greeting = document.createElement('div');
        greeting.innerHTML = '🌞 Suba Aluth Avuruddak Wewa 🌞';
        greeting.style.position = 'fixed';
        greeting.style.top = '80px';
        greeting.style.right = '20px';
        greeting.style.color = '#d32f2f'; // Red
        greeting.style.background = 'rgba(255,235,59,0.9)'; // Bright Yellow
        greeting.style.padding = '8px 15px';
        greeting.style.borderRadius = '20px';
        greeting.style.fontFamily = 'cursive, sans-serif';
        greeting.style.fontWeight = 'bold';
        greeting.style.zIndex = '9998';
        greeting.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        container.appendChild(greeting);

        document.body.appendChild(container);

        // CSS Animations
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes treeSway {
                0% { transform: rotate(0deg); }
                50% { transform: rotate(1deg); } /* Gentle sway */
                100% { transform: rotate(0deg); }
            }
            @keyframes birdIdling {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-2px) rotate(2deg); }
            }
            #ny-tree { animation: treeSway 6s ease-in-out infinite; transform-origin: bottom left; }
            #ny-bird { animation: birdIdling 4s ease-in-out infinite; }
            @media (max-width: 768px) {
                #ny-tree { width: 200px; bottom: -10px; left: -10px; }
                #ny-bird { width: 50px; bottom: 85px; left: 70px; } /* Adjusted for smaller tree */
                div[style*="Suba Aluth"] { display: none; }
            }
        `;
        document.head.appendChild(style);
    }

    function addFallingPetals() {
        // Create a few falling petals for atmosphere
        var count = 6;
        for (var i = 0; i < count; i++) {
            var petal = document.createElement('div');
            // Small red petal shape using CSS
            petal.style.width = '10px';
            petal.style.height = '10px';
            petal.style.background = '#FF5252';
            petal.style.borderRadius = '50% 0';
            petal.style.position = 'fixed';
            petal.style.top = '-20px';
            petal.style.zIndex = '9997';
            petal.style.opacity = '0.8';
            petal.style.left = Math.random() * 100 + '%'; // Random X

            // Random animation duration
            var duration = 5 + Math.random() * 5;
            var delay = Math.random() * 5;

            petal.style.animation = `fall ${duration}s linear ${delay}s infinite`;
            document.body.appendChild(petal);
        }

        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                0 % { top: -20px; transform: rotate(0deg) translateX(0); opacity: 1; }
                100 % { top: 100vh; transform: rotate(360deg) translateX(50px); opacity: 0; }
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
