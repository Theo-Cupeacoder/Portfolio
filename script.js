const navbar = document.getElementById('navbar-site')

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.remove("bg-transparent", "navbar-dark")
    navbar.classList.add("bg-light", "navbar-light")
  } else {
    navbar.classList.remove("bg-light", "navbar-light")
    navbar.classList.add("bg-transparent", "navbar-dark")
  }
}