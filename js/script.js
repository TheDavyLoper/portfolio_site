const hamburger = document.getElementById('nav-toggle');

const navUl = document.getElementById('nav-ul');

const navLink = document.querySelectorAll('.nav__item');

const close = document.getElementById('close-toggle')

hamburger.addEventListener('click', ()=> {
  navUl.classList.toggle('show');
  hamburger.style.display = "none";
  close.style.display = "block"
})

close.addEventListener('click', ()=> {
  navUl.classList.toggle('show');
  close.style.display = "none";
  hamburger.style.display = "block";
})

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show')
  })
})
