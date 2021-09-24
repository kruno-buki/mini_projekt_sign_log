
//? administrator - show more

const show_hide=document.querySelector('#show_hide')
const show_hide_info=document.querySelector('.tbody')

show_hide.addEventListener('click',()=>{
    show_hide_info.classList.toggle('tbody')
})