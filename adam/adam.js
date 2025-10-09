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
    question: "Welk land bouwde de Chinese Muur?",
    answers: [
      { text: "China", correct: true },
      { text: "Engeland", correct: false },
      { text: "Nederland", correct: false },
      { text: "Amerika", correct: false }
    ]
  },

  {
    question: "Wat is de naam van het schip dat zonk op zijn eerste reis in 1912?",
    answers: [
      { text: "de grote schip", correct: false },
      { text: "ijsboot", correct: false },
      { text: "Titanic", correct: true },
      { text: "kleinschip", correct: false }
    ]
  },

  {
    question: "Welk land viel Nederland binnen in mei 1940?",
    answers: [
      { text: "Duitsland", correct: true },
      { text: "Polen", correct: false },
      { text: "Slowakije", correct: false },
      { text: "Rusland", correct: false }
    ]
  },

  {
    question: "Wie schilderde de Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false },
      { text: "Rembrandt", correct: false }
    ]
  },
  {
    question: "In welk land begon de Industriële Revolutie?",
    answers: [
      { text: "Frankrijk", correct: false },
      { text: "Verenigde Staten", correct: false },
      { text: "Duitsland", correct: false },
      { text: "Engeland", correct: true }
    ]
  },
  {
    question: "Wat was de hoofdstad van het Romeinse Rijk?",
    answers: [
      { text: "China", correct: false },
      { text: "Rome", correct: true },
      { text: "Parijs", correct: false },
      { text: "Constantinopel", correct: false }
    ]
  },

  {
    question: "Wie was de bekende farao met een gouden masker die als kind stierf?",
    answers: [
      { text: "Ramses 2", correct: false },
      { text: "Cleopatra", correct: false },
      { text: "Toetanchamon", correct: true },
      { text: "Akhenaten", correct: false }
    ]
  },

  {
    question: "Wat was de naam van de muur die Berlijn verdeelde tijdens de Koude Oorlog?",
    answers: [
      { text: "Muur van Europa", correct: false },
      { text: "IJzeren Gordijn", correct: false },
      { text: "Berlijnse Muur", correct: true },
      { text: "Oostblokmuur", correct: false }
    ]
  },

  {
    question: "Welke oude beschaving bouwde piramides in Egypte?",
    answers: [
      { text: "Romeinen", correct: false },
      { text: "Grieken", correct: false },
      { text: "Perzen", correct: false },
      { text: "Oude Egyptenaren", correct: true }
    ]
  },
  {
    question: "In welk jaar werd Nederland bevrijd in de Tweede Wereldoorlog?",
    answers: [
      { text: "1944", correct: false },
      { text: "1945", correct: true },
      { text: "1946", correct: false },
      { text: "1950", correct: false }
    ]
  },
  {
    question: "Wie was koningin van Engeland tijdens de Tweede Wereldoorlog?",
    answers: [
      { text: "Elizabeth II", correct: false },
      { text: "Victoria", correct: false },
      { text: "Elizabeth I", correct: false },
      { text: "Koningin Elizabeth", correct: true }
    ]
  },

  {
    question: "Welk gebouw werd verwoest tijdens de aanslagen op 11 september 2001 in New York?",
    answers: [
      { text: "Empire State Building", correct: false },
      { text: "Vrijheidsbeeld", correct: false },
      { text: "Twin Towers (WTC)", correct: true },
      { text: "Pentagon", correct: false }
    ]
  },

  {
    question: "Wie was de leider van nazi-Duitsland tijdens de Tweede Wereldoorlog?",
    answers: [
      { text: "Adolf Hitler", correct: true },
      { text: "Joseph Stalin", correct: false },
      { text: "Winston Churchill", correct: false },
      { text: "Benito Mussolini", correct: false }
    ]
  },

  {
    question: "Hoe heette de periode waarin miljoenen mensen naar fabrieken trokken om te werken?",
    answers: [
      { text: "De IJzertijd", correct: false },
      { text: "De Verlichting", correct: false },
      { text: "De Industriële Revolutie", correct: true },
      { text: "De Middeleeuwen", correct: false }
    ]
  },
  {
    question: "Wat is de naam van het oude volk dat in Griekenland leefde en bekend stond om filosofie en democratie?",
    answers: [
      { text: "Romeinen", correct: false },
      { text: "Spartanen", correct: false },
      { text: "Egyptenaren", correct: false },
      { text: "Oude Grieken", correct: true }
    ]
  },
  {
    question: "Wie was de eerste mens op de maan?",
    answers: [
      { text: "Yuri Gagarin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "Michael Collins", correct: false }
    ]
  },

  {
    question: "Wat was de bijnaam van Willem van Oranje?",
    answers: [
      { text: "De Verlosser", correct: false },
      { text: "De Zwijger", correct: true },
      { text: "De Leider", correct: false },
      { text: "De Ridder", correct: false }
    ]
  },

  {
    question: "Wat betekende de term 'Koude Oorlog'?",
    answers: [
      { text: "Een oorlog in koude landen", correct: false },
      { text: "Een oorlog tussen Eskimo’s", correct: false },
      { text: "Een conflict zonder directe gevechten tussen VS en Sovjet-Unie", correct: true },
      { text: "Een strijd om de Noordpool", correct: false }
    ]
  },
];

const vraagElement = document.getElementById("question");
const antwoordKnoppen = document.getElementById("answers");
const volgendeKnop = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  volgendeKnop.innerHTML = "Volgende vraag";
  showQuestion();
}


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


function resetState() {
  volgendeKnop.style.display = "none";
  while (antwoordKnoppen.firstChild) {
    antwoordKnoppen.removeChild(antwoordKnoppen.firstChild);
  }
}


function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score += 1; 
  } else {
    selectedBtn.classList.add("incorrect");
    if (score > 0) score -= 1;
  }


  Array.from(antwoordKnoppen.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  volgendeKnop.style.display = "block";
}


function showScore() {
  resetState();
  
if (score < 10) {
  vraagElement.innerHTML = `Je bent gezakt. Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;
} else {
  vraagElement.innerHTML = `Je bent geslaagd. Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;
}
 
  volgendeKnop.innerHTML = "Speel opnieuw";
  volgendeKnop.style.display = "block";
}


function handleVolgendeKnop() {
  currentQuestionIndex++;
  if (currentQuestionIndex < vragen.length) {
    showQuestion();
  } else {
    showScore();
  }
}


volgendeKnop.addEventListener("click", () => {
  if (currentQuestionIndex < vragen.length) {
    handleVolgendeKnop();
  } else {
    startQuiz();
  }
});

startQuiz();
