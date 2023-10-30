const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const itemsElem = document.querySelector(".items");
console.log(itemsElem);

let imagesString = "";
for (let i = 0; i < images.length; i++) {
  imagesString += `
    <div class="item">
        <img src="./img/${images[i]}" alt="">
    </div>`;
}

console.log(imagesString);

itemsElem.innerHTML = itemsElem.innerHTML + imagesString;

let currentIndex = 0;
const slideElems = document.querySelectorAll(".item");
slideElems[currentIndex].classList.add("active");

document.querySelector(".next").addEventListener("click", function () {
  slideElems[currentIndex].classList.remove("active");
  if (currentIndex < slideElems.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  slideElems[currentIndex].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", function () {
  slideElems[currentIndex].classList.remove("active");
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slideElems.length - 1;
  }
  slideElems[currentIndex].classList.add("active");
});
