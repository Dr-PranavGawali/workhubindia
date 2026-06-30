document.getElementById("applicationForm").addEventListener("submit", function(event){

event.preventDefault();

this.style.display = "none";

document.getElementById("successMessage").style.display = "block";

window.scrollTo({
top: 0,
behavior: "smooth"
});

});