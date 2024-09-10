//slider
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedTime = `${String(hours).padStart(1, '0')}:${String(minutes).padStart(1, '0')}:${String(seconds).padStart(1, '0')}`;

    document.getElementById('clock').innerText = formattedTime+"   pm";
}

setInterval(updateClock, 1000);
updateClock();

//clock
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
  updateSlider();
}

function updateSlider() {
  const slideWidth = document.querySelector('.slide').clientWidth;
  document.querySelector('.slides').style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}
setInterval(nextSlide,2000);