let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "Welk land is dit?",
        options: ["Frankrijk", "Spanje", "Italië", "Duitsland"],
        correctAnswer: 0 // Frankrijk
    },
    {
        question: "Welk land is dit?",
        options: ["Verenigd Koninkrijk", "Canada", "Australië", "Ierland"],
        correctAnswer: 2 // Australië
    },
    {
        question: "Welk land is dit?",
        options: ["Nederland", "België", "Luxemburg", "Duitsland"],
        correctAnswer: 0 // Nederland
    },
    {
        question: "Welk land is dit?",
        options: ["Portugal", "Griekenland", "Brazilië", "Argentinië"],
        correctAnswer: 3 // Argentinië
    }
]; 

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const buttons = document.querySelectorAll('.button-container button');

    // Haal de vraag en opties op voor de huidige vraag
    const currentQuestion = questions[currentQuestionIndex];
    
    // Stel de vraag in
    questionElement.textContent = currentQuestion.question;

    // Stel de opties in
    currentQuestion.options.forEach((option, index) => {
        buttons[index].textContent = option;
    });
}