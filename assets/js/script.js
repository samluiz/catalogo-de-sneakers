function classToggle() {
  const navs = document.querySelectorAll('.navbar')

  navs.forEach(nav => nav.classList.toggle('NavbarToggle'))
}

document.querySelector('hamburger').addEventListener('click', classToggle)