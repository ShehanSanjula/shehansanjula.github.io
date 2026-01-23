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
    isChristmas = true;
    // isNewYear = true;

    if (isChristmas) {
        initChristmasAnimation();
    } else if (isNewYear) {
        initNewYearAnimation();
    } else {
        initDefaultParticles();
    }

    function initChristmasAnimation() {
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
    }

    function addSanta() {
        // Prevent duplicate Santa
        if (document.getElementById('santa-container')) return;

        var santaContainer = document.createElement('div');
        santaContainer.id = 'santa-container';
        santaContainer.style.position = 'fixed';
        santaContainer.style.top = '15%'; // Vertical position
        santaContainer.style.zIndex = '9999';
        santaContainer.style.pointerEvents = 'none'; // Ensure it doesn't block clicks

        var santaImg = document.createElement('img');
        // A popular clear silhouette of Santa and Reindeer
        santaImg.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/191814/sleigh.svg';
        santaImg.style.width = '300px';
        santaImg.style.height = 'auto';

        santaContainer.appendChild(santaImg);
        document.body.appendChild(santaContainer);

        // Inject CSS for animation
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes flySanta {
                0% { transform: translateX(100vw); }
                100% { transform: translateX(-120vw); }
            }
            #santa-container {
                right: 0;
                animation: flySanta 20s linear infinite;
            }
            @media (max-width: 768px) {
                #santa-container img { width: 150px !important; }
                #santa-container { top: 10%; }
            }
        `;
        document.head.appendChild(style);
    }

    function initNewYearAnimation() {
        console.log("Initializing New Year Animation");
        // Placeholder: For now fallback to default
        // TODO: Implement specific Sinhala & Hindu New Year animation
        initDefaultParticles();
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
