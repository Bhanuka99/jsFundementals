//select element
//using ID
let titleElement = document.getElementById("title");
let link = document.getElementById("mylink")
//using class name
let paragraph = document.getElementsByClassName("para");
//using tag
//let paraBytag = document.getElementsByTagName("p");
//using css selections
//let paraByCss = document.querySelectorAll("p.para");
//display
console.log(titleElement);
console.log(paragraph);
//console.log(paraBytag);
//console.log(paraByCss);
//access html
console.log(titleElement.innerHTML);
//edit element
titleElement.innerHTML = "Changed";
link.href = "https:/youtube.com";
document.getElementById("btn").innerHTML = "click me";
document.getElementById("mylink").innerHTML = "Youtube";
document.getElementById("text").style.color = "red";
link.classList.add("textGreen");
titleElement.classList.remove("textGreen");