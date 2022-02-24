

let social=document.querySelector(".fir");
social.addEventListener("mouseenter",function(){
    gsap.from(".fir",{ rotation :360, duration:0.3})

})

let social1=document.querySelector(".sec");
social1.addEventListener("mouseenter",function(){
    gsap.from(".sec",{ rotation :360, duration:0.3})

})
let social2=document.querySelector(".third");
social2.addEventListener("mouseenter",function(){
    gsap.from(".third",{ rotation :360, duration:0.3})

})

let closebtn=document.querySelector(".mobile-navbar span");
closebtn.addEventListener("click",()=>{
    mobile.style.display="none";
    enableScroll();
})



// let homePage=document.querySelector(".home");
// homePage.scrollIntoView();

