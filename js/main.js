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
    
    // change language
    document.querySelector("#langInput").addEventListener('change',()=>{
        window.location.href = window.location.pathname + '?asm-lang=' + document.querySelector("#langInput").value;
    })


    
//  // // // // // // // // // // // // // // // // // // // // // // 
let Area = document.querySelector(`#Area`).value
let PathRoom = document.querySelector(`#PathRoom`).value
let UnitKind = document.querySelector(`#UnitKind`).value
let level = document.querySelector(`#level`).value
let levelTwo = `الكلاسيك`


// المقايسات
let almuqayasat = document.querySelector(`#almuqayasat`).value = Area * 25

// >رسومات تنفذية 
let althaalith = document.querySelector(`#althaalith`).value = Area * 40


// tanfidh
let tanfidh = document.querySelector(`#tanfidh`).value = Area * 4000

// > فرش 
let firsh = document.querySelector(`#firsh`).value = Area * 2000





// ألتصميم الثلاثي الابعاد ليه اكتر من خطوه للحساب

// 1
let stepOne =  Area * 75

// 2
let stepTwo =  PathRoom * 2500

// 3

let x
if(UnitKind == 'وحدة سكنية'){
    x = 1
}else{
    x=1.15
}
let stepThree =  (stepOne + stepTwo ) * x

// 4

let y
if(level == 'متوسط'){
    y = 1
}else if (level == 'لوكس'){
    y=1.1
}else if (level == 'الترا لوكس'){
    y = 1.2
}
let stepFour =  stepThree * y


// 5

let z
if(levelTwo == 'المودرن'){
    z = 1
}else{
    z=1.2
}
let stepFive =  stepFour * z

// > 3d تصميم
let Design3 = document.querySelector(`#Design3`).value = stepFive