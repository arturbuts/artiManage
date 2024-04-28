let hamburger = document.querySelector(".hamburger");
let navList = document.querySelector(".nav__list");
let header = document.querySelector(".header");
let headerHeight = header.offsetHeight;
let bodyWrapper = document.querySelector(".body-wrapper"); // Get the element with class .body-wrapper


window.addEventListener("scroll", function() {
  flyingMenu(window);
});

function flyingMenu(obj) {
  if (obj.pageYOffset > headerHeight) {
    if (!header.classList.contains("fixed")) {
      // Add a small delay before adding the fixed class
      setTimeout(function() {
        header.classList.add("fixed");
        bodyWrapper.style.paddingTop = headerHeight + "px"; // Adjust padding on .body-wrapper
      }, 300); // Adjust the delay (in milliseconds) for desired transition speed
    }
  } else {
    setTimeout(function() {
      header.classList.remove("fixed");
      bodyWrapper.style.paddingTop = 0; // Reset padding on .body-wrapper
    }, 300); // Adjust the delay (in milliseconds) for desired transition speed
  }
}

hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  navList.classList.toggle("active");
});

document.querySelectorAll(".nav__item").forEach(n =>
  n.addEventListener("click", () => {
    header.classList.remove("active");
    navList.classList.remove("active");
  })
);
