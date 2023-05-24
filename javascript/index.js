let nav = document.querySelector('.navbar');

//NAVBAR COLOR CHANGE ON SCROLL
window.addEventListener('scroll', () => {
    if(window.scrollY >= 10){
        nav.classList.add("navbar-scrolled")
    }
    else{
        nav.classList.remove("navbar-scrolled")
    }
})
