ScrollReveal().reveal('.reveal');
ScrollReveal().reveal('.reveal-2', { delay: 400 });
ScrollReveal().reveal('.reveal-3', { delay: 800 });

document.getElementById("navbar-btn").onclick = function(){toggleNav()};

function toggleNav() {
    var nav = document.getElementById("nav");
    var navStyle = window.getComputedStyle(nav);
    if (navStyle.display == 'none') {
        nav.style.display = "flex";
    }
    else if (navStyle.display === 'flex') {
        nav.style.display = 'none';
    }
}