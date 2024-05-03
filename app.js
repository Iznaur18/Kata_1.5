const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    768: {
      toggle: false,
      loop: false,
      spaceBetween: "auto",
      slidesPerView: "auto",
      centeredSlides: false,
    },
  },
});

window.addEventListener("DOMContentLoaded", function () {
  let button = document.querySelector(".btn__show");
  let main = document.querySelector(".brand__items");
  let btnArrow = document.querySelector(".btn__arrow")
  btnArrow.style.transform = "rotate(0deg)"
  main.style.height = "170px";
  let switcher = false;

  button.addEventListener("click", function () {
    if (switcher) {
      button.textContent = "Показать все";
      main.style.height = "170px";
      btnArrow.style.transform = "rotate(0deg)";
    } else {
      button.textContent = "Скрыть";
      main.style.height = "auto";
      btnArrow.style.transform = "rotate(180deg)";
    }
    switcher = !switcher;
  });
});
