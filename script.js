const menu = document.getElementById('bars')

function toggleNav() {
    menu.classList.toggle('change')
    
}

menu.addEventListener('click', toggleNav)