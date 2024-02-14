document.addEventListener('DOMContentLoaded', (event) => {
    const yesButton = document.getElementById('yesButton');
    
    yesButton.addEventListener('click', function() {
        tsParticles.load("tsparticles", {
            particles: {
                number: {
                    value: 30,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                shape: {
                    type: "char",
                    options: {
                        char: {
                            value: ["💖"], // Using emoji as heart shape
                            font: "10px Verdana",
                            style: "",
                            weight: "400",
                            fill: true
                        }
                    }
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 40,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 10,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const valentineGif = document.getElementById('valentineGif');
    const newValentineGif = document.getElementById('newValentineGif');
    const specialMessage = document.querySelector('.card-content p');
    const yesAudio = document.getElementById('yesAudio');


    // Function to create and show a random image
    function showRandomImage() {
        const images = [
            'IMG_6506.png', 'IMG_6507.png', 'IMG_6508.png', 'IMG_6509.png', 'IMG_6510.png',
            'IMG_6511.png', 'IMG_6512.png', 'IMG_6513.png', 'IMG_6514.png', 'IMG_6515.png',
            'IMG_6516.png', 'IMG_6517.png', 'IMG_6518.png', 'IMG_6519.png', 'IMG_6520.png',
            'IMG_6521.png'
        ];
        const imgElement = document.createElement('img');
        imgElement.src = images[Math.floor(Math.random() * images.length)];
        imgElement.style.position = 'absolute';
        imgElement.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
        imgElement.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
        imgElement.style.height = '400px'; // Set the height of the image
        imgElement.style.transition = 'opacity 0.5s';
        imgElement.style.opacity = '1';
        imgElement.style.zIndex = '1000'; // High z-index to ensure it's above other elements
        document.body.appendChild(imgElement);
        
        // Remove the image after 3 seconds
        setTimeout(() => {
            imgElement.style.opacity = '0';
            setTimeout(() => document.body.removeChild(imgElement), 500);
        }, 3000);
    }




    yesButton.addEventListener('click', function() {
        // Play audio clip
        yesAudio.play();

        // Change the image
        valentineGif.style.display = 'none';
        newValentineGif.style.display = 'block';

        // Change paragraph text and make it smaller after 2 seconds
        setTimeout(() => {
            specialMessage.textContent = 'Roses are Red, Violets are Blue, every valentines there will always be someone who loves you ❤️';
            specialMessage.classList.add('small-text'); // Add class to make text smaller
        }, 500);

        // Show random images for 10 seconds
        for (let i = 0; i < 10; i++) {
            setTimeout(showRandomImage, i * 1000);
        }
        
    });

    noButton.addEventListener('mouseover', function() {
        // Randomly move the "No" button within the card
        const card = document.querySelector('.card');
        const maxX = card.clientWidth - this.offsetWidth;
        const maxY = card.clientHeight - this.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        this.style.position = 'absolute';
        this.style.left = `${randomX}px`;
        this.style.top = `${randomY}px`;
    });
});
