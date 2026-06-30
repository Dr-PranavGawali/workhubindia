document.getElementById("applicationForm").addEventListener("submit", function(event){

event.preventDefault();

this.style.display = "none";

document.getElementById("successMessage").style.display = "block";

window.scrollTo({
top: 0,
behavior: "smooth"
});

});
const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

if(document.documentElement.scrollTop>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}

}

topBtn.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
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