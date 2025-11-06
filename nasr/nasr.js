const vragen = [
  {
    question: "Welke club won de UEFA Champions League in 2019?",
    answers: [
      { text: "Liverpool", correct: true },
      { text: "Tottenham Hotspur", correct: false },
      { text: "Barcelona", correct: false },
      { text: "Real Madrid", correct: false }
    ]
  },
  {
    question: "Wie scoorde het winnende doelpunt in de Champions League-finale van 2012 voor Chelsea?",
    answers: [
      { text: "Frank Lampard", correct: false },
      { text: "Didier Drogba", correct: true },
      { text: "Fernando Torres", correct: false },
      { text: "Juan Mata", correct: false }
    ]
  },
  {
    question: "Welke club werd in 2023 kampioen van de Engelse Premier League?",
    answers: [
      { text: "Liverpool", correct: false },
      { text: "Manchester City", correct: true },
      { text: "Chelsea", correct: false },
      { text: "Arsenal", correct: false }
    ]
  },
  {
    question: "Welke Nederlandse club bereikte de halve finale van de Champions League in 2019?",
    answers: [
      { text: "PSV", correct: false },
      { text: "Ajax", correct: true },
      { text: "Feyenoord", correct: false },
      { text: "AZ", correct: false }
    ]
  },
  {
    question: "Wie was de topscorer van het EK 2021?",
    answers: [
      { text: "Cristiano Ronaldo", correct: true },
      { text: "Romelu Lukaku", correct: false },
      { text: "Harry Kane", correct: false },
      { text: "Patrik Schick", correct: false }
    ]
  },
  {
    question: "Welke club won de Champions League drie keer op rij van 2016 t/m 2018?",
    answers: [
      { text: "FC Barcelona", correct: false },
      { text: "Real Madrid", correct: true },
      { text: "Bayern München", correct: false },
      { text: "Juventus", correct: false }
    ]
  },
  {
    question: "Wie was coach van Manchester City tijdens hun treble in 2023?",
    answers: [
      { text: "Pep Guardiola", correct: true },
      { text: "Jurgen Klopp", correct: false },
      { text: "Thomas Tuchel", correct: false },
      { text: "Carlo Ancelotti", correct: false }
    ]
  },
  {
    question: "Welke Franse club bereikte de Champions League-finale in 2020?",
    answers: [
      { text: "Lyon", correct: false },
      { text: "Marseille", correct: false },
      { text: "Paris Saint-Germain", correct: true },
      { text: "Monaco", correct: false }
    ]
  },
  {
    question: "Wie maakte de meeste doelpunten voor FC Barcelona tussen 2010 en 2020?",
    answers: [
      { text: "Neymar", correct: false },
      { text: "Luis Suárez", correct: false },
      { text: "Lionel Messi", correct: true },
      { text: "Pedro", correct: false }
    ]
  },
  {
    question: "Welke club won de Europa League in 2022?",
    answers: [
      { text: "Eintracht Frankfurt", correct: true },
      { text: "Rangers FC", correct: false },
      { text: "Sevilla", correct: false },
      { text: "Manchester United", correct: false }
    ]
  },
  {
    question: "Wie was aanvoerder van Real Madrid tijdens hun Champions League-zege in 2018?",
    answers: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Sergio Ramos", correct: true },
      { text: "Luka Modric", correct: false },
      { text: "Karim Benzema", correct: false }
    ]
  },
  {
    question: "Welke Italiaanse club bereikte de Champions League-finale in 2023?",
    answers: [
      { text: "Juventus", correct: false },
      { text: "AC Milan", correct: false },
      { text: "Internazionale", correct: true },
      { text: "AS Roma", correct: false }
    ]
  },
  {
    question: "Welke Portugese club verkocht João Félix in 2019 voor meer dan 100 miljoen euro?",
    answers: [
      { text: "FC Porto", correct: false },
      { text: "Sporting CP", correct: false },
      { text: "Benfica", correct: true },
      { text: "Braga", correct: false }
    ]
  },
  {
    question: "Wie won de Ballon d'Or in 2022?",
    answers: [
      { text: "Lionel Messi", correct: false },
      { text: "Karim Benzema", correct: true },
      { text: "Kylian Mbappé", correct: false },
      { text: "Robert Lewandowski", correct: false }
    ]
  },
  {
    question: "Welke club speelde in 2022/23 voor het eerst in de groepsfase van de Champions League?",
    answers: [
      { text: "Union Berlin", correct: false },
      { text: "Sheriff Tiraspol", correct: true },
      { text: "RB Leipzig", correct: false },
      { text: "Atalanta", correct: false }
    ]
  },
  {
    question: "Wie was de trainer van Ajax in het seizoen 2018/19?",
    answers: [
      { text: "Peter Bosz", correct: false },
      { text: "Erik ten Hag", correct: true },
      { text: "Frank de Boer", correct: false },
      { text: "Alfred Schreuder", correct: false }
    ]
  },
  {
    question: "Welke Engelse club bereikte de finale van de Europa League in 2021?",
    answers: [
      { text: "Arsenal", correct: false },
      { text: "Chelsea", correct: false },
      { text: "Manchester United", correct: true },
      { text: "West Ham United", correct: false }
    ]
  },
  {
    question: "Wie maakte de winnende goal in de Champions League-finale van 2020 voor Bayern München?",
    answers: [
      { text: "Thomas Müller", correct: false },
      { text: "Robert Lewandowski", correct: false },
      { text: "Kingsley Coman", correct: true },
      { text: "Joshua Kimmich", correct: false }
    ]
  },
  {
    question: "Welke Spaanse club won La Liga in seizoen 2022/23?",
    answers: [
      { text: "Atletico Madrid", correct: false },
      { text: "Real Madrid", correct: false },
      { text: "FC Barcelona", correct: true },
      { text: "Sevilla", correct: false }
    ]
  },
  {
    question: "Wie werd in 2021 Europees clubtopscorer (gouden schoen)?",
    answers: [
      { text: "Cristiano Ronaldo", correct: false },
      { text: "Lionel Messi", correct: false },
      { text: "Robert Lewandowski", correct: true },
      { text: "Erling Haaland", correct: false }
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
const scoreh3 = document.querySelector("#score-h3");
scoreh3.textContent = `Score: ${score}`;

/*verwijst naar clikevent*/
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  const scoreh3 = document.querySelector("#score-h3");

  if (isCorrect) {
    selectedBtn.classList.add(
      "correct"
    ); /*doet punten erbij*/
    score += 1;
  } else {
    selectedBtn.classList.add("incorrect");
    if (score > 0) score -= 1;
  }

  scoreh3.textContent = `Score: ${score}`;
  Array.from(antwoordKnoppen.children).forEach((button) => {
    /*verwijst naar de buttons*/
    if (button.dataset.correct === "true") {
      /*als correct voeg klasse correct en disable click*/
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  volgendeKnop.style.display = "block";
}

// --- Toon eindscore ---
function showScore() {
  resetState();

  // Minimum score kan negatief zijn 
  vraagElement.innerHTML = `Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;

  if (score < 10) {
    vraagElement.innerHTML = `Je bent gezakt. Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;
  } else {
    vraagElement.innerHTML = `Je bent geslaagd. Je hebt ${score} punt${score === 1 ? '' : 'en'} gehaald uit ${vragen.length} vragen.`;
  }
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

document.addEventListener('DOMContentLoaded', function() {
  const naamDisplay = document.querySelector('.naam');
  const naamInput = document.querySelector('.name-input');
  naamInput.addEventListener('input', function() {
    naamDisplay.textContent = naamInput.value;
  });
});





startQuiz();

const button = document.querySelector('.start-button');
const elementToRemove = document.querySelector('.start');
const container = document.querySelector('.container');
const naam = document.querySelector(".name-input");

button.addEventListener('click', () => {
  const name = naam.value.trim();
  if (name === "") return;
  elementToRemove.style.display = 'none';
  container.style.display = 'flex';
  startQuiz();
});