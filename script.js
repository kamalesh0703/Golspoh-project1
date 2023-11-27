const list=document.querySelectorAll('.nav-link');

function linkAction(){
    list.forEach(n=>n.classList.remove('active'))
    this.classList.add('active')
}

list.forEach(n=>n.addEventListener('click',linkAction));

const menu=document.querySelector('.menu-btn');
const nav_list=document.querySelector('.nav-lists')

menu.addEventListener('click',()=>{
   if( nav_list.style.right === "0%"){
    nav_list.style.right="-75%";
   }
   else{
    nav_list.style.right="0%";
   }
})

const navlink=document.querySelectorAll('.nav-link');

function navaction(){
    if( nav_list.style.right === "0%"){
        nav_list.style.right="-75%";
    }
    else{
        nav_list.style.right="0%";
    }
}

navlink.forEach(n=>n.addEventListener('click',navaction))