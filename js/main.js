const showMenu = (toggleId,navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    
    if (toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
    
}
showMenu('nav_toggle', 'nav_menu')

      let galleryThumbs = new Swiper(".gallery-thumbs", {
        spaceBetween: 0,
        slidesPerView: 0,
      });
      let galleryTop = new Swiper(".gallery-top", {
        effect: 'fade',
        loop: true,

        thumbs: {
        swiper: galleryThumbs
        }
      });

const controlImg = document.querySelectorAll('.controls-img');

function activateAnimation (){
    gsap.from('.location-subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.location-title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.location-description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.location-button', {opacity: 0, duration: .5, delay: .5, y: -20})
}      

controlImg.forEach(e => e.addEventListener('click', activateAnimation))