const menuLinks = document.querySelectorAll('.navigation__links[data-goto]');

if(menuLinks.length > 0){
    menuLinks.forEach((menuLink)=>{
        menuLink.addEventListener('click', menuLinkClicked);
    })
}

function menuLinkClicked(e){
    const menuLink = e.target;
    if(nav.classList.contains('active')){
        nav.classList.remove('active');
        document.body.classList.remove('_lock');
    }
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
        window.scrollTo({
            top: gotoBlockValue,
            behavior: 'smooth'
        })
        e.preventDefault();
    }
}


const menuBurger = document.querySelector('.menu__burger');
const nav = document.querySelector('.navigation');

menuBurger.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    document.body.classList.toggle('_lock');
})