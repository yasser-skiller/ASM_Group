let navItem = document.querySelectorAll('.main-header .navigation li a');
let navItem_arr = Array.from(navItem);

window.addEventListener('load',()=>{
    navItem_arr.forEach(ele => {
        console.log(ele)
        console.log(ele.parentElement)
        ele.classList.remove('current')
       if(window.location.href ===  ele.href){
        ele.parentElement.classList.add('current')
       }
    });
})
