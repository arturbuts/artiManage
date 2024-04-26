let hamburger = document.querySelector(".hamburger")
let navList = document.querySelector(".nav__list")
let header = document.querySelector(".header")


hamburger.addEventListener("click", () => {
  header.classList.toggle("active");
  navList.classList.toggle("active");
})

document.querySelectorAll(".nav__item").forEach (n =>
  n.addEventListener("click", () => {
    header.classList.remove("active");
    navList.classList.remove("active");
  })
)
