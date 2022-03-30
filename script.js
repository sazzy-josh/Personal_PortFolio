const menu = document.getElementById('bars')
const overlay = document.getElementById('menuoverlay')
const items = document.getElementsByTagName('li')
function toggleNav() {
    menu.classList.toggle('change')
    overlay.classList.toggle('slide-out')
    
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
