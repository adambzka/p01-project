const vragen = [
    {
      question: "In welk jaar eindigde de Tweede Wereldoorlog?",
      answers: [
        { text: "1933", correct: false },
        { text: "1965", correct: false },
        { text: "1944", correct: false },
        { text: "1945", correct: true }
      ]
    },
    {
      question: "Welk land viel Duitsland als eerste binnen?",
      answers: [
        { text: "Frankrijk", correct: false },
        { text: "Polen", correct: true },
        { text: "Nederland", correct: false },
        { text: "Noorwegen", correct: false }
      ]
    },
    {
      question: "Wat is de hoofdstad van Italië?",
      answers: [
        { text: "Rome", correct: true },
        { text: "Milaan", correct: false },
        { text: "Venetië", correct: false },
        { text: "Napels", correct: false }
      ]
    }
  ];
  
  const vraagElement = document.getElementById("question");
  const antwoordKnoppen = document.getElementById("answers");
  const volgendeKnop = document.getElementById("next");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // --- Start de quiz ---
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    volgendeKnop.innerHTML = "Volgende vraag";
    showQuestion();
  }
  
  // --- Laat een vraag zien ---
  function showQuestion() {
    resetState();
    let currentQuestion = vragen[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    vraagElement.innerHTML = questionNo + ". " + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      antwoordKnoppen.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }
  
  // --- Reset de antwoorden ---
  function resetState() {
    volgendeKnop.style.display = "none";
    while (antwoordKnoppen.firstChild) {
      antwoordKnoppen.removeChild(antwoordKnoppen.firstChild);
    }
  }
  
  // --- Klik op een antwoord ---
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score += 1; // ✅ goed = +1
    } else {
      selectedBtn.classList.add("incorrect");
      if (score > 0) score -= 1;
    }
  
    // Markeer correcte antwoord
    Array.from(antwoordKnoppen.children).forEach(button => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });
  
    volgendeKnop.style.display = "block";
  }
  
  // --- Toon eindscore ---
  function showScore() {
    resetState();
    
    // Minimum score kan negatief zijn — laten we dat tonen
    vraagElement.innerHTML = `Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;
  
    volgendeKnop.innerHTML = "Speel opnieuw";
    volgendeKnop.style.display = "block";
  }
  
  // --- Ga naar volgende vraag ---
  function handleVolgendeKnop() {
    currentQuestionIndex++;
    if (currentQuestionIndex < vragen.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  // --- Volgende-knop event ---
  volgendeKnop.addEventListener("click", () => {
    if (currentQuestionIndex < vragen.length) {
      handleVolgendeKnop();
    } else {
      startQuiz();
    }
  });
  
  startQuiz();
  
  const button = document.querySelector('.start-button');
  const elementToRemove = document.querySelector('.start');
  const container = document.querySelector('.container');
  
  button.addEventListener('click', () => {
    elementToRemove.style.display = 'none';
    container.style.display = 'flex'; 
    startQuiz();
  });