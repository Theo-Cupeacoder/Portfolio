const navbar = document.getElementById('navbar-site')
const scrollTop = document.getElementById('scroll-top-button')

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    navbar.classList.remove("bg-transparent", "navbar-dark")
    navbar.classList.add("bg-light", "navbar-light")
    scrollTop.classList.add("show")
  } else {
    navbar.classList.remove("bg-light", "navbar-light")
    navbar.classList.add("bg-transparent", "navbar-dark")
    scrollTop.classList.remove("show")
  }
}

var r = document.querySelector('body')

function changeColor(color){
  r.style.setProperty('--color-accent', color)
}

function changeColorFromPicker(){
  let input = document.getElementById('input-accent')
  changeColor(input.value)
}

function showPanelColor(){
  let panel = document.getElementById('colors-setter')
  if (panel.style.left == '0px'){
    panel.style.left = '-100px'
  } else {
    panel.style.left = '0px'
  }
}

