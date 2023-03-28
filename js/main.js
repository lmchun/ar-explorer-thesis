const navLink = document.querySelector("#navLink");
const ulNav = document.createElement("ul");
navLink.appendChild(ulNav);
ulNav.classList.add("topnav");
ulNav.id = "top";
const liNav = document.createElement("li");
const liNav2 = document.createElement("li");
const liNav3 = document.createElement("li");
const liNav4 = document.createElement("li");
const liNav5 = document.createElement("li");
const aNav = document.createElement("a");
const aNav2 = document.createElement("a");
const aNav3 = document.createElement("a");
const aNav4 = document.createElement("a");
const aNav5 = document.createElement("a");
ulNav.appendChild(liNav);
ulNav.appendChild(liNav2);
ulNav.appendChild(liNav3);
ulNav.appendChild(liNav4);
ulNav.appendChild(liNav5);
liNav.appendChild(aNav);
liNav2.appendChild(aNav2);
liNav3.appendChild(aNav3);
liNav4.appendChild(aNav4);
liNav5.appendChild(aNav5);
liNav3.classList.add("right");
liNav4.classList.add("right");
liNav5.classList.add("right");
// const navhrefs = ['index.html','scanner.html','database.html','qr.html']
aNav.innerHTML = `<img src="assets/qr-icon.png" class="icon" alt="QR code icon"> AR Discovery Hub`
aNav.classList.add("iconVert");
aNav.href="index.html";
//aNav2.innerHTML = `<p class="titlenav">AR Discovery Hub</p>`
//aNav2.href="index.html"

aNav5.innerText = "AR Finder"
aNav5.href="database.html"
aNav4.innerText = "AR Link Generator"
aNav4.href="qr.html"

aNav3.innerText = "QR Scanner"
aNav3.href="scanner.html"

/////////////////////////////////////
function readMore() {
  var dots = document.getElementById("dots");
  var fullText = document.getElementById("fullText");
  var toggleMore= document.getElementById("more");
  // var detailBtn = document.getElementById("details");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    toggleMore.innerHTML = "More"; 
    fullText.style.display = "none";
  } else {
    dots.style.display = "none";
    // dots.remove();
    // toggleMore.innerHTML = "Less"; 
    toggleMore.innerHTML = ""; 
    fullText.style.display = "inline";
  }
}










/////////////////customization////////////////////////////////
//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
//  let colorWell;
//  const defaultColor = "#0000ff";
 
//  window.addEventListener("load", startup, false);

//  function startup() {
//   colorWell = document.querySelector("#colorWell");
//   colorWell.value = defaultColor;
//   colorWell.addEventListener("input", updateFirst, false);
//   // colorWell.addEventListener("change", updateAll, false);
//   colorWell.select();
// }

// function updateFirst(event) {
//   const p = document.querySelector("p");
//   if (p) {
//     p.style.color = event.target.value;
//   }
// }





//border radius to image 
// function (){

// }

// function changeColor(color) {
//   qrDiv.style.color = color;
// }

/////upload image code////// 
//read this https://medium.com/@mignunez/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
// const input = document.querySelector("input")
// const output = document.querySelector("output")
// let imagesArray = []


/////////////////////collapse////////////////////////////////

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

///////////////////////////////////////////////////////////

