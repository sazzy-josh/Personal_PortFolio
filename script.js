const menu = document.getElementById('bars')
const overlay = document.getElementById('menuoverlay')
const items = document.getElementsByTagName('li')
function toggleNav() {
    menu.classList.toggle('change')
    if (overlay.classList.contains('slide-out')){
        overlay.classList.remove('slide-out')
        overlay.classList.add('slide-in')
    } else {
        overlay.classList.remove('slide-in')
        overlay.classList.add('slide-out')
    }
  
}

menu.addEventListener('click', toggleNav)

let list = Array.from(items)
list.forEach((item) => {
    let child = item.firstElementChild
    if(child.classList.contains('link')){
        child.addEventListener('click',toggleNav)
    }
  }
)

function checkWidth(){
    if(window.innerWidth < 630){
        overlay.classList.add('slide-out')
 }else{
     overlay.classList.remove('slide-out')
     
 }
}
 window.addEventListener('load',checkWidth)  
 window.addEventListener('resize', checkWidth)
