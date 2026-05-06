let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close-btn");
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const close = document.querySelector(".close");
const modallogin = document.getElementById("modallogin");
const loginbtn = document.getElementById("loginbtn");
const loginclose = document.querySelector("loginclose");



btn.onclick = () => {
  modal.style.display = "block";
};

close.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};


loginbtn.onclick = () => {
  modallogin.style.display = "block";
};

loginclose.onclick = () => {
  modallogin.style.display = "none";
};

window.onclick = (e) => {
  if (e.target == modallogin) {
    modallogin.style.display = "none";
  }
};

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