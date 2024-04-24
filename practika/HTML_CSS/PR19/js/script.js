const burger = document.querySelector(".icon-menu")
const listMenu = document.querySelectorAll(".menu__item")

burger.addEventListener("click", () => {
  burger.classList.toggle("active")
})

listMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    listMenu.forEach((elem) => {
      elem.classList.remove("active")
    })
    e.target.parentElement.classList.toggle("active")
  })
})
