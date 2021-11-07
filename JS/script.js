const search_bar = document.querySelector('#search_bar')
const search_ico = document.querySelector('.search_ico')
const bar_contain= document.querySelector('.container')
search_bar.addEventListener('focus',()=>{
    search_ico.style.opacity="0"
})
search_bar.addEventListener('focusout',()=>{
    search_ico.style.opacity="1"
})
// bar_contain.addEventListener("click",()=>{
//     search_ico.style.display="flex"
//     console.log("okay");
// })
console.log(search_ico);