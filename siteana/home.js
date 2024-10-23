// fa_custom_setup_kit('https://kit.fontawesome.com/yourkitcode.js');

// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');

// if(bar){
//     bar.addEventListener("click", () => {
//         nav.style.right=0;
//     })
// }


function show(){
    document.getElementById('navbar').classList.add('active');
}

function remove(){
    document.getElementById('navbar').classList.remove('active');
}


let currentIndex = 0;

function showSlide(index) {
  const carouselImages = document.querySelector('.carousel-images');
  const totalSlides = document.querySelectorAll('.carousel img').length;
  
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }
  
  const offset = -currentIndex * 100;
  carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}