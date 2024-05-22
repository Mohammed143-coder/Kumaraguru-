
let showLink = document.getElementById("showLink");
let Div = document.getElementById("invisible");

showLink.addEventListener("click", (event)=> {
  event.preventDefault();
  
  Div.classList.toggle("d-none");
  
});


//   DOMContentLoaded
let showQ = document.getElementById("showQ");
let myDiv = document.getElementById("invisibleQ");

showQ.addEventListener("click", (event)=> {
  event.preventDefault();
  
  myDiv.classList.toggle("d-none");
  Div.classList.toggle("d-none");
  
 
});


