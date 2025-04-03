document.addEventListener("DOMContentLoaded", function () {
    const mobBtn = document.getElementById("mob-btn");
    const navMob = document.getElementById("nav-mob");

    mobBtn.addEventListener("click", function () {
        navMob.classList.toggle("hidden"); // Menüyü aç/kapat
    });
});



function scrollToElementById(elementId) {
    const element = document.getElementById(elementId);
    if (element) { 
        element.scrollIntoView({ behavior: 'smooth' });
    }
}


const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");
const link5 = document.getElementById("link5");
const link6 = document.getElementById("link6");


link1.addEventListener('click', () => {
    scrollToElementById("about"); 
});

link2.addEventListener('click', () => {
    scrollToElementById("features"); 
});

link3.addEventListener('click', () => {
    scrollToElementById("communication"); 
});




link4.addEventListener('click', () => {
    scrollToElementById("about"); 
});

link5.addEventListener('click', () => {
    scrollToElementById("features"); 
});


link6.addEventListener('click', () => {
    scrollToElementById("communication"); 
});