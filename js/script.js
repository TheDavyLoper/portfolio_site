const hamburger = document.getElementById('nav-toggle');

const navUl = document.getElementById('nav-ul');

const navLink = document.querySelectorAll('.nav__item');

hamburger.addEventListener('click', ()=> {
  navUl.classList.toggle('show');
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show')
  })
})
