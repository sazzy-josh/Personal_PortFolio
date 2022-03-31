const menu = document.getElementById('bars')
const overlay = document.getElementById('menuoverlay')
const items = document.getElementsByTagName('li')
let container = document.getElementById('container')


window.addEventListener('load',checkWidth)
window.addEventListener('resize', checkWidth)
function toggleNav(e) {
    e.preventDefault()
    menu.classList.toggle('change')
    if (overlay.classList.contains('slide-out')){
        overlay.classList.remove('slide-out')
        overlay.classList.add('slide-in')
        container.style.opacity = "0.1"
    } else {
        overlay.classList.remove('slide-in')
        overlay.classList.add('slide-out')
        container.style.opacity = "1"
    }
  
}

menu.addEventListener('click', toggleNav)

let list = Array.from(items)
list.forEach((item) => {
    let child = item.firstElementChild
    if(child.classList.contains('link')){
        child.addEventListener('click', toggleNav)
    }
  }
)

function checkWidth(e){
   e.preventDefault()
    if(window.innerWidth < 670){
        overlay.classList.add('slide-out')
 }else{
     overlay.classList.remove('slide-out')
     
 }
}
  
 
