const menuBtn = document.querySelector('.menu');
const menuIconWrapper = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const menuContacts = document.querySelector('.menu__contacts');
const overlay = document.querySelector('.overlay');


const menuOpen = () => {
  menuBtn.addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    menuContacts.classList.toggle('is-open');
    overlay.classList.toggle('overlay-active');
    document.body.classList.toggle('is-open');
  })
}

const menuClose = () => {
  overlay.addEventListener('click', (event) => {
    const target = event.target;

    if (target === overlay) {
      menuIcon.classList.remove('menu-icon-active');
      menuContacts.classList.remove('is-open');
      overlay.classList.remove('overlay-active');
      document.body.classList.remove('is-open');
    }
  })
}

menuOpen();
menuClose();

const slide = document.querySelectorAll ('.slide');

const clearActiveClasses = () => {
    slide.forEach((slide) => {
        slide.classList.remove('active');
    })
}


    slide.forEach(slide => {
    
        slide.addEventListener('click', () => {
        clearActiveClasses(slide);
        slide.classList.add('active');
    });
})

