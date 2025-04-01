function scrollToElement(elementSelector,instance=0){
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance) { 
        elements[instance].scrollIntoView({behavior:'smooth'});

    }
}

const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")
const link4 = document.getElementById("link4")
const up = document.getElementById("up")

link1.addEventListener('click',() =>{
    scrollToElement(".contentme")
})

link2.addEventListener('click',() =>{
    scrollToElement(".content-feature")
})

link3.addEventListener('click',() =>{
    scrollToElement(".plan")
})

link4.addEventListener('click',() =>{
    scrollToElement(".container-comm")
})

up.addEventListener('click',() =>{
    scrollToElement(".home");
})


const nav_but = document.getElementById("nav-but")
const nav_back = document.getElementById("nav-back")
const nav = document.getElementById("navbar");

nav_back.style.display = "none"


nav_but.addEventListener('click',function(){
    
    nav.style.width = "170px";
    nav_but.style.display = "none"
    nav_back.style.display = "block"
})


nav_back.addEventListener("click",function(){
    nav.style.width = "0px"
    nav_but.style.display = "block"
    nav_back.style.display = "none"
})