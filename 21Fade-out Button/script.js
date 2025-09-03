let arrow=document.getElementById("btn");

window.addEventListener("scroll",()=>{
    let position = window.scrollY;
     console.log(position);
    if(position<=5){
        arrow.classList.add("fade-in");
        arrow.classList.remove("fade-out");
    }else{
        arrow.classList.add('fade-out')
        arrow.classList.remove('fade-in')
    }

});

  