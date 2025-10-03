const button = document.querySelector('.start-btn');
const elementToRemove = document.querySelector('.container');
const div2 = document.querySelector('.div-2');
const questionContainer = document.querySelector('.question-container');

button.addEventListener('click', () => {
  elementToRemove.style.display = 'none';
  div2.style.display = 'flex';
  questionContainer.style.display = 'flex';
});