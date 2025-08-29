let indicator=document.querySelector('.scroll-indicator .progress');
let scrollHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener('scroll', scroll);

function scroll(){
let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
let scrolled=scrollHeight>0 ? (scrollTop / scrollHeight) * 100 : 0;
indicator.style.width =`${scrolled}%`;
}


