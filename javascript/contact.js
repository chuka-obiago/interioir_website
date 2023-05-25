let nav = document.querySelector('.navbar')

// NAVBAR FIXED ON SCROLL
window.addEventListener('scroll', () => {
    if(window.scrollY >= 1){
        nav.classList.add("fixed-top")
    }
    else{
        nav.classList.remove("fixed-top")
    }
})

const dropDown = document.querySelector(".content");
const dropDown1 = document.querySelector(".content2");
const dropDown2 = document.querySelector(".content3");

const icon1 = document.querySelector("#icon1");
const icon2 = document.querySelector("#icon2");

const icon3 = document.querySelector("#icon3");
const icon4 = document.querySelector("#icon4");

const icon5 = document.querySelector("#icon5");
const icon6 = document.querySelector("#icon6");

const icons = document.querySelector(".icons");
const icons1 = document.querySelector("#icons1");
const icons2 = document.querySelector("#icons2");


icon1.addEventListener('click', () => {
    icon1.style.display = 'none';
    icon2.style.display = 'block' ;
});

icon2.addEventListener('click', () => {
    icon2.style.display = 'none';
    icon1.style.display = 'block' ;
});

icons.addEventListener('click', () => {
    dropDown.classList.toggle("show");
});



icon3.addEventListener('click', () => {
    icon3.style.display = 'none';
    icon4.style.display = 'block' ;
});

icon4.addEventListener('click', () => {
    icon4.style.display = 'none';
    icon3.style.display = 'block' ;
});

icons1.addEventListener('click', () => {
    dropDown1.classList.toggle("show1");
});


icon5.addEventListener('click', () => {
    icon5.style.display = 'none';
    icon6.style.display = 'block' ;
});

icon6.addEventListener('click', () => {
    icon6.style.display = 'none';
    icon5.style.display = 'block' ;
});

icons2.addEventListener('click', () => {
    dropDown2.classList.toggle("show2");
});
