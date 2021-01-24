// Naviagtion Drawer
let btn = document.querySelector(".fa-bars");
let menu = document.querySelector(".nav-bar");
let closebtn = document.querySelector(".fa-chevron-circle-right");
let navclose = document.querySelector(".nav-list");
var body = document.querySelector("body");

btn.addEventListener("click", function () {
  body.style.overflow = "hidden";
  menu.classList.toggle("is-active");
});

closebtn.addEventListener("click", function () {
  body.style.overflow = "auto";

  menu.classList.remove("is-active");
});

navclose.addEventListener("click", function () {
  body.style.overflow = "auto";
  menu.classList.remove("is-active");
});

// Swiper Slider
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 4000,
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
  autoplay: {
    delay: 5000,
  },
  //   effect: "coverflow",
  //   coverflowEffect: {
  //     rotate: 10,
  //     slideShadows: false,
  //   },
});

// Scroll to Top

//Get the button:
mybutton = document.querySelector(".top-btn");

// When the user scrolls down 400px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
