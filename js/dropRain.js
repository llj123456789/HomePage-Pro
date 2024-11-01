
function createRain() {
  const rainContainer = document.querySelector('.rain');
  for (let i = 0; i < 300; i++) {
      const rainDrop = document.createElement('div');
      rainDrop.classList.add('rain-drop');
      rainDrop.style.left = `${Math.random() * 100}vw`;
      rainDrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
      rainDrop.style.animationDelay = `${Math.random() * 2}s`;
      rainContainer.appendChild(rainDrop);
  }
}

createRain();

const imageContainer = document.getElementById('imageContainer');

imageContainer.addEventListener('mouseover', (event) => {
  createRippleEffect(event);
});

function createRippleEffect(event) {
  const ripple = document.createElement('div');
  ripple.classList.add('ripple');
  ripple.style.left = `${event.clientX - imageContainer.offsetLeft}px`;
  ripple.style.top = `${event.clientY - imageContainer.offsetTop}px`;
  imageContainer.appendChild(ripple);

  setTimeout(() => {
      ripple.remove();
  }, 1000);
}

document.addEventListener('mousemove', (event) => {
  const rainDrops = document.querySelectorAll('.rain-drop');
  rainDrops.forEach(drop => {
          drop.style.transform = `translateX(${Math.random() *( -800)}px)`;
      
  });
});