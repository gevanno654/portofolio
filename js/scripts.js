const svg = document.getElementById("preloaderSvg");
const tl = gsap.timeline({
    onComplete: () => {
        document.body.classList.add('loaded');
    }
});
const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

tl.to(".preloader-heading .load-text", {
    delay: 2,
    y: -100,
    opacity: 0,
    duration: 1, // Increased duration for a longer animation
});
tl.to(svg, {
    duration: 0.5,
    attr: { d: curve },
    ease: "power2.easeIn",
}).to(svg, {
    duration: 0.5,
    attr: { d: flat },
    ease: "power2.easeOut",
});
tl.to(".preloader", {
    y: -1500,
});
tl.to(".preloader", {
    zIndex: -1,
    display: "none",
});

// Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

//Carousel
$(document).ready(function() {
    // Smooth scrolling
    $('a[data-scroll]').on('click', function(event) {
        event.preventDefault();
        var targetID = $(this).attr('href').substring(1);
        var targetElement = document.getElementById(targetID);
        $('html, body').animate({
            scrollTop: $(targetElement).offset().top
        }, 800);
    });

    // Smooth scroll ke bagian atas saat tautan navbar-brand diklik
    $('a.navbar-brand-navbar2').click(function() {
        $('html, body').animate({
            scrollTop: $('#top').offset().top
        }, 800);
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
    
        // Periksa apakah halaman berada di bagian tertentu (misalnya, #about)
        if (scrollDistance >= $('#about').offset().top) {
            // Tampilkan navbar kedua dan sembunyikan navbar pertama
            $('#navbar2').show();
            $('#navbar1').hide();
        } else {
            // Sembunyikan navbar kedua dan tampilkan navbar pertama
            $('#navbar2').hide();
            $('#navbar1').show();
        }
    });

    var owl = $('.owl-carousel-pro');
    owl.owlCarousel({
        items: 2,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });

    $('.play').on('click', function() {
        owl.trigger('play.owl.autoplay', [1000])
    });

    $('.stop').on('click', function() {
        owl.trigger('stop.owl.autoplay')
    });

    var owl = $('.owl-carousel-modal-pro');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function(){
        owl.trigger('play.owl.autoplay', [1000]);
    });
    $('.stop').on('click', function(){
        owl.trigger('stop.owl.autoplay');
    });

});

//download button
function redirectToProject(url) {
    window.location.href = url;
}

//nav-link hover
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        if (!link.classList.contains('active-link')) {
            link.classList.remove('inactive-link');
            link.classList.add('active-link');
        }
    });
  
    link.addEventListener('mouseleave', () => {
        if (link.classList.contains('active-link')) {
            link.classList.remove('active-link');
            link.classList.add('inactive-link');
        }
    });
});

//Animasi content
document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add('animate__animated', animationClass);
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

//Animasi untuk elemen project dalam tampilan mobile 
document.addEventListener("DOMContentLoaded", function() {
    const cardProjects = document.querySelectorAll('.card-projects');

    // Check if the screen width is less than or equal to 600px (typical smartphone width)
    if (window.innerWidth <= 992) {
        cardProjects.forEach(element => {
            element.dataset.animation = 'animate__fadeInUp';
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add('animate__animated', animationClass);
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    cardProjects.forEach(element => {
        observer.observe(element);
    });
});

//Animasi untuk elemen exp&edu dalam tampilan mobile
document.addEventListener("DOMContentLoaded", function() {
    const cardExps = document.querySelectorAll('.card-exp');

    // Check if the screen width is less than or equal to 600px (typical smartphone width)
    if (window.innerWidth <= 600) {
        cardExps.forEach(element => {
            element.dataset.animation = 'animate__fadeInUp';
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add('animate__animated', animationClass);
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, {
        threshold: 0.1 // Adjust this value to control when the animation triggers
    });

    cardExps.forEach(element => {
        observer.observe(element);
    });
});

// Tombol Expand Navbar Custom
document.addEventListener("DOMContentLoaded", function() {
    const customToggler = document.getElementById('custom-toggler');
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarNav = document.getElementById('navbarNav');

    customToggler.addEventListener('click', function() {
        if (navbarNav.classList.contains('show')) {
            navbarNav.classList.remove('show');
        } else {
            navbarNav.classList.add('show');
        }
    });
});