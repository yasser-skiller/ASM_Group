

// if(document.querySelector('.navigat')){
    let navItem = document.querySelectorAll('.main-header .navigation li a');
let navItem_arr = Array.from(navItem);

window.addEventListener('load',()=>{
    navItem_arr.forEach(ele => {
        ele.classList.remove('current')
       if(window.location.href ===  ele.href){
        ele.parentElement.classList.add('current')
       }
    });
})
// }

if(document.querySelector('.mySwiper')){
    var swiper = new Swiper("#id .mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });
}
