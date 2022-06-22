const btn = document.querySelector('#hamburger')
const navbar = document.querySelector('#navbar')

btn.addEventListener('click', function toggle(){
  if (navbar.style.display == "none") {
    navbar.style.display = "block"
  }
  else {
    navbar.style.display = "none"
  }
})