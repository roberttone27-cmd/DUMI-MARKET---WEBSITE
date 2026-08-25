const header=document.getElementById("header");
const toggle=document.querySelector(".menu-toggle");
const menu=document.querySelector(".menu");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>20));
toggle.addEventListener("click",()=>menu.classList.toggle("open"));
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>menu.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
