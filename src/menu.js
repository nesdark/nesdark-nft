const Menu = {
  toggle: function () {
    const body = document.body
    body.classList.toggle("menu-open")
  },
}

const buttonMenuElement = document.querySelector("header .menu-btn")
const listElement = document.querySelector("header li a")

buttonMenuElement.addEventListener("click", () => {
  Menu.toggle()
})
