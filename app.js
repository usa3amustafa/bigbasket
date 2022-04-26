const menuBtn = document.querySelector('.hamburger')

const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', function () {
  navLinks.classList.toggle('show-links')
})
