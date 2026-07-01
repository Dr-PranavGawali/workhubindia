document.getElementById("applicationForm").addEventListener("submit", function(event){

event.preventDefault();

this.style.display = "none";

const form = document.getElementById("applicationForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

this.style.display="none";

document.getElementById("successMessage").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    const visible = 100;

    if (top < window.innerHeight - visible) {
      item.classList.add("active");
    }
  });
});
window.addEventListener("load",function(){

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{
loader.style.display="none";
},800);

}

});