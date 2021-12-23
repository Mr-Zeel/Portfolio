'use strict';

let selectImage = document.querySelector('#myImage');
// console.log(selectImage);

selectImage.addEventListener("mouseover", function(){
	selectImage.src="My_Image.jpeg";
});
selectImage.addEventListener("mouseout", function(){
	selectImage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3BoPPRoBpzFLAjgZ1CgZss7wgK58wSqGfQ&usqp=CAU";
});



/* Nav Ham Burger */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Nav Ham Burger */