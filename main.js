let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close-btn");

bars.addEventListener("click", function () {
    menu.classList.add("show-menu");
});

closeBtn.addEventListener("click", function () {
    menu.classList.remove("show-menu");
});

// caousel
let carouselInner = document.querySelector(".carousel_inner")
let dots = document.querySelectorAll(".dot")
let current = 0;

function changeSlide() {
    carouselInner.style.transform = `translateX(-${current * 100}%)`;

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });

    dots[current].classList.add("active");
}

dots.forEach(function (dot, index) {
    dot.addEventListener("click", function() {
        current = index;
        changeSlide()
    });
});

setInterval(function () {
    current++;

    if (current === dots.length) {
        current = 0
    }

    changeSlide();
}, 3000);