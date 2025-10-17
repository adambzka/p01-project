// script.js

// Wacht tot de pagina volledig is geladen
document.addEventListener("DOMContentLoaded", function() {
    const naamInput = document.getElementById("naam");
    const startBtn = document.getElementById("start-btn");

    // Eventlistener voor het invullen van de naam
    naamInput.addEventListener("input", function() {
        // Als de naam ingevuld is, enable de startknop
        if (naamInput.value.trim() !== "") {
            startBtn.disabled = false; // Maak de startknop actief
        } else {
            startBtn.disabled = true; // Zet de startknop weer uit als er geen naam is
        }
    });

    // Als de gebruiker op Start klikt, wordt de naam opgeslagen en gaat het naar de quiz
    startBtn.addEventListener("click", function() {
        const naam = naamInput.value.trim();
        if (naam !== "") {
            localStorage.setItem("gebruikerNaam", naam); // Bewaar de naam in de local storage
            window.location.href = "sebri.html"; // Verander naar de quiz pagina (maak deze pagina als je dat nog niet hebt)
        }
    });
});

// Variabelen voor de vragen en antwoorden
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Welk land is dit?",
        options: ["Frankrijk", "Spanje", "Italië", "Duitsland"],
        correctAnswer: 0, // Frankrijk
        flagImage: "images/FranceFlag.png" // Voeg hier je PNG-afbeelding toe
    },
    {
        question: "Welk land is dit?",
        options: ["Verenigd Koninkrijk", "Canada", "Australië", "Ierland"],
        correctAnswer: 2, // Australië
        flagImage: "images/AustraliaFlag.png" // Voeg hier je PNG-afbeelding toe
    },
    {
        question: "Welk land is dit?",
        options: ["Nederland", "België", "Luxemburg", "Duitsland"],
        correctAnswer: 0, // Nederland
        flagImage: "images/NetherlandsFlag.png" // Voeg hier je PNG-afbeelding toe
    },
    {
        question: "Welk land is dit?",
        options: ["Portugal", "Griekenland", "Brazilië", "Argentinië"],
        correctAnswer: 3, // Argentinië
        flagImage: "images/ArgentiniaFlag.png" // Voeg hier je PNG-afbeelding toe
    }
];

// Functie om de vraag en opties te tonen
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('.button-container button');
    const flagImageElement = document.getElementById('flag-image');

    // Haal de vraag en opties op voor de huidige vraag
    const currentQuestion = questions[currentQuestionIndex];
    
    // Stel de vraag in
    questionElement.textContent = currentQuestion.question;

    // Stel de opties in
    currentQuestion.options.forEach((option, index) => {
        buttons[index].textContent = option;
    });

    // Stel de vlag in
    flagImageElement.src = currentQuestion.flagImage;
}

// Functie om het antwoord te controleren
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];

    // Controleer of het geselecteerde antwoord juist is
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        alert('Correct!');
    } else {
        alert('Fout!');
    }

    // Update de score
    document.getElementById('score').textContent = 'Score: ' + score;

    // Volgende vraag of einde van de quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('De quiz is afgelopen! Je score is ' + score);
        resetQuiz();
    }
}

// Functie om de quiz te resetten
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = 'Score: ' + score;
    loadQuestion();
}

// Laad de eerste vraag
loadQuestion();
