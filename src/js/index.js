//
let select = function () {

  let selectHeader = document.querySelectorAll('.lang__main, .selector__main');
  let selectItem = document.querySelectorAll('.lang__item, .selector__item');


  document.body.addEventListener('click', function(event) {
    let clickedElement = event.target;
    let closestSelector = clickedElement.closest('.lang, .form__selector');

    if (!closestSelector) {
      selectHeader.forEach(item => item.parentElement.classList.remove('is-active'));
    }
  });

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    let text = this.innerText;
    let select = this.closest('.lang, .form__selector');
    let currentText = select.querySelector('.lang__current, .selector__current');
    currentText.innerText = text;
    select.classList.remove('is-active');


    let input = select.querySelector('input[type="hidden"]');
    if (input) {
      input.value = text;
    }
  }
};

select();

//
window.addEventListener('DOMContentLoaded', function () {

  let video = document.querySelector('.video');

  let startVideoButton = document.querySelector('.start-video');


  video.addEventListener('click', function () {
    playVideo();
  });

  startVideoButton.addEventListener('click', function () {
    playVideo();
  });

  function playVideo() {
    if (video.classList.contains('ready')) {
      return;
    }

    video.classList.add('ready');
    startVideoButton.style.display = 'none';

    let src = video.dataset.src;

    video.insertAdjacentHTML('afterbegin', '<iframe src="' + src + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>');
  }
});

//

let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");
let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;
let bodyWrapper = document.querySelector(".body-wrapper");
let fadeBlock = document.querySelector(".fade-block");


window.addEventListener("scroll", function() {
  flyingMenu(window);
});

function flyingMenu(obj) {
  if (obj.pageYOffset > headerHeight) {
    if (!header.classList.contains("fixed")) {

      setTimeout(function() {
        header.classList.add("fixed");
        bodyWrapper.style.paddingTop = headerHeight + "px";
      }, 300);
    }
  } else {
    setTimeout(function() {
      header.classList.remove("fixed");
      bodyWrapper.style.paddingTop = 0;
    }, 300);
  }
}

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  navList.classList.toggle("active");
  fadeBlock.classList.toggle("active");
});

document.querySelectorAll(".nav__item").forEach(n =>
  n.addEventListener("click", () => {
    header.classList.remove("active");
    navList.classList.remove("active");
    fadeBlock.classList.toggle("active");
  })
);

//
let buttons = document.querySelectorAll(".rqmts__btn");

buttons.forEach(function(item){

  item.addEventListener("click", function() {

    this.classList.toggle("is-clicked");

    let content = document.querySelector(".rqmts__content");

    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
})
});
