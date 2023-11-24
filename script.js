const list=document.querySelectorAll('.nav-link');

function linkAction(){
    list.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
}

list.forEach(n=>n.addEventListener('click',linkAction))