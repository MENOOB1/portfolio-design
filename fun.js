

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

gsap.to(".box",{x:-2000})
gsap.to(".tab",{x:3500})
var t1=gsap.timeline();
t1.from('.nav-bar',{duration:2,x:'-100%' ,ease:'elastic'})
t1.to('.get-cv-btn',{y:'100%', ease:'bounce'})
gsap.from(".social-links",{duration:2,y:-1000})
t1.from(".box",{ x:-2000})

t1.from(".tab",{ x:1000})