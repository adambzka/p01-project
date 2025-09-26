document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const answer = document.getElementById('ronaldo-age').value;
    const feedback = document.getElementById('feedback');
    // Update Ronaldo's age if needed! As of September 2025, Ronaldo is 40.
    if (parseInt(answer, 10) === 40) {
      feedback.textContent = "Goed gedaan! Dat is het juiste antwoord.";
      feedback.style.color = "lightgreen";
    } else {
      feedback.textContent = "Helaas, dat is niet juist. Probeer het opnieuw!";
      feedback.style.color = "salmon";
    }
  });