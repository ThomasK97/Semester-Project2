import menu from "./menu.js";

menu();
const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 export default function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if(nav.classList.contains("open")){
      nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else{
      nav.removeAttribute("style");
   }
}
  


