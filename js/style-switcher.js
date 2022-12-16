// toogle style switcher
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');
const styleswitcher = document.querySelector('.style-switcher');
const scroll =  document.querySelector('.scrolltohome');
styleSwitcherToggle.addEventListener('click' , () =>{
    document.querySelector('.style-switcher').classList.toggle('open');
})

// hide style switcher on scroll
window.addEventListener('scroll' , () => {
    if(styleswitcher.classList.contains('open')){
        styleswitcher.classList.remove('open');
    }
    if(window.scrollY > 15){
       scroll.classList.remove('active');
    }else{
       scroll.classList.add('active');
    }
})

// theme color
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }else{
            style.setAttribute('disabled' , 'true');
        }
    })
};

// theme light and dark mode
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click' , () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
    document.querySelector('.nav').classList.toggle('change');
    document.querySelector('.aside').classList.toggle('skin-color');
})

window.addEventListener('load' , () => {
    if(document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})