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

// let Kind = document.querySelectorAll(".Kind input")
// let KindTwo = document.querySelectorAll(".Kind .radio-option")



// Kind.forEach(ele => {

//     ele.addEventListener("click", ()=>{
        
//            setTimeout(() => {
//             if(ele.checked === true){
//                 console.log("ele",ele ,ele.checked)
//                 ele.parentElement.classList.add("active")
//             }
//            }, 500);
           
        
        
//     })
// });


