const menuNav=document.querySelector('header nav .nav-menu ul ')
const openNav=document.querySelector('#open-nav')
const closeNav=document.querySelector('#close-nav')
let frst = false;
openNav.addEventListener("click",(e)=>{
  e.stopPropagation();
    menuNav.classList.toggle('closed');
    frst=true;
})
closeNav.addEventListener("click",()=>{
    openNav.click()
})
// swip
const swiper = new Swiper('.swiper', {

    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

        loop: true,
        slidesPerView: 1, // default
        spaceBetween: 10, // default
      
        breakpoints: {
          // when window width is >= 600px
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        },
      
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      
// view function
function view(img){
    document.getElementById("viewedImg").src=`${img.src}`;
    document.querySelector(".view-img").style.left="50%";
    document.querySelector("main").style.filter="blur(1.2rem)";
    document.querySelector("header").style.filter="blur(1.2rem)";
    document.querySelector("body").style.overflowY="hidden";
    document.querySelector("footer").style.filter="blur(1.2rem)";


}
function unview(){
    document.querySelector(".view-img").style.left="-700px";
    document.querySelector("main").style.filter="blur()";
    document.querySelector("header").style.filter="blur()";
    document.querySelector("body").style.overflowY="auto"
    document.getElementById("viewedImg").src=``;
    document.querySelector("footer").style.filter="blur()";

}
  
function clickNav(navlink){
  document.querySelector(".navClicked").classList.remove("navClicked");
navlink.classList.add("navClicked");

}


const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("navClicked");
    const anchor = link.querySelector("a");
    if (anchor && anchor.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("navClicked");
    }
  });
});

document.addEventListener("click",(el)=>{
  if(!menuNav.contains(el.target)  ){
    menuNav.classList.remove("closed")
  }
})