console.log(document.title);

document.getElementById("infocardBulbasaur").style.backgroundColor = "red";

let currentLocation = window.location;

console.log(currentLocation)

console.log(document.domain)

const images = document.querySelectorAll("img")

console.log(images);

for (let i = 0; i < images.length; i++) {
   images[i].src="./giphy.gif"
}