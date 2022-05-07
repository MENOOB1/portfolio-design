let projectbtn=document.querySelector(".project");
let projectSec=document.querySelector(".project-area")
projectbtn.addEventListener("click",function (){
    projectSec.scrollIntoView({behavior: "smooth"});
})

let expbtn=document.querySelector(".exp");
let expsec=document.querySelector(".tech");

expbtn.addEventListener("click",()=>{
    expsec.scrollIntoView({behavior:"smooth"});
})

let about=document.querySelector(".about");
let aboutsec=document.querySelector(".footer");
about.addEventListener("click",()=>{
    aboutsec.scrollIntoView({behavior:"smooth"});
})
let btn=document.querySelector(".fix-message")
window.addEventListener("scroll",()=>{
  btn.style.display="block";
})


$(window).on('scroll', function() {
    var scrollTop = $(this).scrollTop();

    $('.banner-page').each(function() {
        var topDistance = $(this).offset().top;

        if ( (topDistance+100) > scrollTop ) {
            // alert( $(this).text() + ' was scrolled to the top' );
            // console.log("top");
            btn.style.display="none";
        }
    });
});

let icons=document.querySelectorAll('.small-icons');
function change()
{
    // let color=getRandomColor();
    for(let i=0;i<icons.length;i++)
    icons[i].style.backgroundColor=getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  change();


// pop up js
let project_popup=document.querySelectorAll(".actual-project");
let projectTitle=document.querySelectorAll(".title");
let projectImg=document.querySelectorAll(".pro");
let projectDesc=document.querySelectorAll(".desc");
let projectgithub=document.querySelectorAll(".githublink");
let projectliveLink=document.querySelectorAll(".livelink");

let popuptitle=document.querySelector("#projectModalLabel");
let popUp_Image=document.querySelector("#popImage");
let popDesc=document.querySelector(".pop-desc");
let popGithub=document.querySelector(".pop-github");
let popLive=document.querySelector(".pop-live");

for(let i=0;i<project_popup.length;i++)
{
    project_popup[i].addEventListener("click",()=>{
        let text=projectTitle[i].textContent;
        let img=projectImg[i].src;
        let desc=projectDesc[i].textContent;
        let liveLink=projectliveLink[i].textContent;
        let githublink=projectgithub[i].textContent;
        // Assign Value
        popuptitle.textContent=text;
        popUp_Image.src=img;
        popDesc.textContent=desc;
        popLive.href=liveLink;
        popGithub.href=githublink;


    })
}


// experience
let work_desc=document.querySelector("#description");
let filled=document.querySelector("#fill_descrption");
filled.innerHTML=work_desc.innerHTML;
