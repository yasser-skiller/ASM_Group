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
