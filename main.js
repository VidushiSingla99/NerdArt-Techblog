let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener("click",function(){
    collapse.forEach(col=>col.classList.toggle("collapse-toggle"));
})

//masonry

new Masonry("#posts .grid",{
    itemSelector:'.grid-item',
    gutter:35
})


//swipe lib


new Swiper('.swiper-container',{
    direction:'horizontal',
    loop:true,
    slidePreView:5,

    autoplay:{
        delay:3000
    }
})
let navbar=document.getElementById("header")
let sticky=navbar.offsetTop;
function myFunction(){
    if(window.pageYOffset>=sticky){
        navbar.classList.add("sticky");

    }else{
        navbar.classList.remove("sticky");
    }
}