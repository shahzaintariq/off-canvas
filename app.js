const navTiggerEl = document.querySelector('.hamburger');
const navEl = document.querySelector('nav');
const contentEl = document.querySelector('.content')
const hamburgerBarsEl = document.getElementsByTagName('span');

function toggleNav() {
    navTiggerEl.addEventListener('click', () => {
        navEl.classList.toggle('open');
        contentEl.classList.toggle('shift');
        animateNav()
    })
}

function animateNav() {
    for(let item of hamburgerBarsEl){
       item.classList.toggle("change")
    }
}

toggleNav()
