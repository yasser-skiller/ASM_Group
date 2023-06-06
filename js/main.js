

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

let Num = 3
if(window.innerWidth > 767){
    Num = 3
}else{
    Num = 2
}

if(document.querySelector('.mySwiper')){
    var swiper = new Swiper("#id .mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: Num,
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

// language
window.addEventListener('load', ()=>{
    if(localStorage.getItem('lang') == null){
        localStorage.setItem('lang', 'ar')
    }
})

document.querySelector("#langInput").addEventListener('change',()=>{
    localStorage.setItem('lang', `${document.querySelector("#langInput").value}` )

})