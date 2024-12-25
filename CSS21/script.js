let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const updateCarousel = () => {
  const angle = 360 / items.length;
  carousel.style.transform = `rotateY(${currentIndex * -angle}deg)`;
};

const moveToPrev = () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
};

const moveToNext = () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
};

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);

// Initial setup
updateCarousel();
