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

// download app
function redirectToDownloadApp(url) {
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

//Tooltip Hover
document.addEventListener('DOMContentLoaded', function() {
    const imageContainers = document.querySelectorAll('.image-container');
    const tooltipCaption = document.getElementById('tooltip-caption');
    const tooltipTitle = tooltipCaption.querySelector('.tooltip-title');
    const tooltipSubtitle = tooltipCaption.querySelector('.tooltip-subtitle');
    let currentMouseEvent;

    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function(e) {
            const title = e.currentTarget.querySelector('.hover-image').getAttribute('data-title');
            const subtitle = e.currentTarget.querySelector('.hover-image').getAttribute('data-subtitle');
            tooltipTitle.textContent = title;
            tooltipSubtitle.textContent = subtitle;
            tooltipCaption.classList.add('active');
            setTimeout(() => {
                tooltipCaption.style.animation = 'clipFromLeft 0.6s forwards';
            });
            updateTooltipPosition(e);
            currentMouseEvent = e;
        });

        container.addEventListener('mouseleave', function() {
            tooltipCaption.classList.remove('active');
            tooltipCaption.style.animation = '';
        });

        container.addEventListener('mousemove', function(e) {
            updateTooltipPosition(e);
            currentMouseEvent = e;
        });
    });

    window.addEventListener('scroll', function() {
        if (currentMouseEvent) {
            updateTooltipPosition(currentMouseEvent);
        }
    });

    let lastMouseEvent;

    document.addEventListener('mousemove', function(e) {
        lastMouseEvent = e;
        updateTooltipPosition(e);
    });

    window.addEventListener('scroll', function() {
        if (lastMouseEvent) {
            updateTooltipPosition(lastMouseEvent);
        }
    });

    function updateTooltipPosition(e) {
        const offsetX = -5; // Jarak dari cursor pada sumbu X
        const offsetY = -35; // Jarak dari cursor pada sumbu Y
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;
        tooltipCaption.style.top = (e.clientY + scrollY + offsetY) + 'px';
        tooltipCaption.style.left = (e.clientX + scrollX + offsetX) + 'px';
    }
});

// Dropdown Menu
document.addEventListener('DOMContentLoaded', function() {
    const settingDropdowns = document.querySelectorAll('.setting-button');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');

    settingDropdowns.forEach((settingDropdown, index) => {
        settingDropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click event from propagating to the window
            dropdownMenus[index].classList.toggle('show');
            settingDropdown.classList.toggle('spinning');
        });
    });

    // Close dropdown if user clicks outside the dropdown area
    window.addEventListener('click', function(event) {
        settingDropdowns.forEach((settingDropdown, index) => {
            if (!event.target.matches('.setting-button')) {
                if (dropdownMenus[index].classList.contains('show')) {
                    dropdownMenus[index].classList.remove('show');
                    settingDropdown.classList.remove('spinning');
                }
            }
        });
    });
});


// Toggle Language for Navbar 1
document.getElementById('language-toggle').addEventListener('change', function() {
    const isChecked = this.checked;
    document.getElementById('language-toggle2').checked = isChecked;
    if (isChecked) {
        changeLanguage('id');
        localStorage.setItem('language', 'id');
    } else {
        changeLanguage('en');
        localStorage.setItem('language', 'en');
    }
});

// Toggle Language for Navbar 2
document.getElementById('language-toggle2').addEventListener('change', function() {
    const isChecked = this.checked;
    document.getElementById('language-toggle').checked = isChecked;
    if (isChecked) {
        changeLanguage('id');
        localStorage.setItem('language', 'id');
    } else {
        changeLanguage('en');
        localStorage.setItem('language', 'en');
    }
});

// Default language
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        changeLanguage(savedLang);
        document.getElementById('language-toggle').checked = savedLang === 'id';
        document.getElementById('language-toggle2').checked = savedLang === 'id';
    } else {
        changeLanguage('en'); // atau 'id' jika Anda ingin bahasa defaultnya Bahasa Indonesia
    }
});

// Function for change language
function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(el => {
        const key = el.getAttribute("data-translate");
        el.innerHTML = translations[lang][key]; // Menggunakan innerHTML untuk menangani tag <br>
    });

    // Menangani elemen gambar dengan atribut data-translate-title dan data-translate-subtitle
    const hoverImages = document.querySelectorAll(".hover-image");
    hoverImages.forEach(img => {
        const titleKey = img.getAttribute("data-translate-title");
        const subtitleKey = img.getAttribute("data-translate-subtitle");
        img.setAttribute("data-title", translations[lang][titleKey]);
        img.setAttribute("data-subtitle", translations[lang][subtitleKey]);
    });
}


// Dark Mode
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleSwitch1 = document.querySelector('#navbar1 .switch input[type="checkbox"]');
    const toggleSwitch2 = document.querySelector('#navbar2 .switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        toggleSwitch1.checked = true;
        toggleSwitch2.checked = true;
        loadDarkModeStyles();
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            loadDarkModeStyles();
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
            unloadDarkModeStyles();
        }
        // Sinkronkan status toggle switch
        toggleSwitch1.checked = e.target.checked;
        toggleSwitch2.checked = e.target.checked;
    }

    function loadDarkModeStyles() {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'css/styles-dark.css';
        link.id = 'dark-mode-style';
        document.head.appendChild(link);
    }

    function unloadDarkModeStyles() {
        const link = document.getElementById('dark-mode-style');
        if (link) {
            link.remove();
        }
    }

    toggleSwitch1.addEventListener('change', switchTheme, false);
    toggleSwitch2.addEventListener('change', switchTheme, false);
});