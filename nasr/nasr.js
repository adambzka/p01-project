
const button = document.querySelector('.container');

const elementToRemove = document.querySelector('.start-btn');

button.addEventListener('click', () => {
  
  elementToRemove.remove();
});