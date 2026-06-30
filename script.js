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
const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click",function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerHTML="☀️";
}else{
themeBtn.innerHTML="🌙";
}

});