let tSideOpener = document.querySelector(".track-btn span");
 let tSideClose = document.querySelector(".track-side-close span");
 let tSide = document.querySelector(".track-side");
 let body = document.querySelector("body");


tSideOpener.addEventListener("click", function(){
	tSide.style.right = "20px";
},true)

tSideClose.addEventListener("click", function(){
	tSide.style.right = "-100%";
},true)

body.addEventListener("click", function(){
	tSide.style.right = "-100%";

},true)

tSide.addEventListener("click", function(){
	tSide.style.right = "20px";

},true)