document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.querySelector('.start-btn');
  const startScreen = document.getElementById('start-screen');
  const quizScreen = document.getElementById('quiz-screen');

  startBtn.addEventListener('click', function() {
    startScreen.style.display = 'none';
    quizScreen.style.display = 'block';
  });
});