const hamburger = document.getElementById('nav-toggle');

const navUl = document.getElementById('nav-ul');

const navLink = document.querySelectorAll('.nav__item');

const close = document.getElementById('close-toggle')



const toggle = () => {
  if (!navUl.classList.contains('show')) {
    navUl.classList.add('show');
      navUl.style.height = 'auto';

      let height = navUl.clientHeight + "px";

      navUl.style.height = '0px';

      setTimeout(function () {
        navUl.style.height = height;
      }, 0);
      hamburger.style.display = "none";
      close.style.display = "block";
  } else {
    navUl.style.height = '0px';
    navUl.addEventListener('transitionend', function () {
      navUl.classList.remove('show');
      }, {
          once: true
      });
      close.style.display = "none";
      hamburger.style.display = "block";
  }
}
    
hamburger.addEventListener('click', toggle);
close.addEventListener('click', toggle);

navLink.forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('show')
    close.style.display = "none";
    hamburger.style.display = "block";
  })
  
})
