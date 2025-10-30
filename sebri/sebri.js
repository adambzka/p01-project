// Vragen, antwoorden en afbeelding-url's
const questions = [
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Russia", "France", "Duitsland", "China"],
        juist: 1,
        img: "images/FranceFlag.png"
    },
    {
        vraag: "Welke vlag is dit??",
        antwoorden: ["America", "Zwitserland", "Australia", "Engeland"],
        juist: 2,
        img: "images/AustraliaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Nederland", "belgie", "luxemburg", "frankrrijk"],
        juist: 0,
        img: "images/NetherlandsFlag.png"
    },

];

let huidigeVraag = 0;
let score = 0;

const vraagEl = document.getElementById("question");
const antwoordenEl = document.getElementById("answers");
const volgendeBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const feedbackEl = document.getElementById("feedback");
const finalEl = document.getElementById("final");
const imgBox = document.getElementById("imgbox");

function toonVraag() {
    // Afbeelding boven vraag
    imgBox.innerHTML = "";
    const imgUrl = questions[huidigeVraag].img;
    if (imgUrl) {
        const img = document.createElement("img");
        img.src = imgUrl;
        img.alt = "Vraag afbeelding";
        imgBox.appendChild(img);
    }
    vraagEl.textContent = questions[huidigeVraag].vraag;
    antwoordenEl.innerHTML = "";
    feedbackEl.textContent = "";
    volgendeBtn.style.display = "none";
    finalEl.textContent = "";

    questions[huidigeVraag].antwoorden.forEach((antwoord, idx) => {
        const btn = document.createElement("button");
        btn.textContent = antwoord;
        btn.onclick = () => selecteerAntwoord(idx, btn);
        antwoordenEl.appendChild(btn);
    });
}

function selecteerAntwoord(idx, button) {
    // Disable alle knoppen
    Array.from(antwoordenEl.children).forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("selected");
    });
    button.classList.add("selected");

    const juistAntwoord = questions[huidigeVraag].juist;
    if (idx === juistAntwoord) {
        score += 5;
        feedbackEl.textContent = "Goed gedaan! +5 punten";
        feedbackEl.style.color = "#219a52";
    } else {
        feedbackEl.textContent = "Helaas, dat is fout.";
        feedbackEl.style.color = "#b94a48";
    }
    scoreEl.textContent = `Score: ${score}`;
    volgendeBtn.style.display = "inline-block";
    if (huidigeVraag === questions.length - 1) {
        volgendeBtn.textContent = "Resultaat";
    } else {
        volgendeBtn.textContent = "Volgende";
    }
}

volgendeBtn.onclick = () => {
    huidigeVraag++;
    if (huidigeVraag < questions.length) {
        toonVraag();
    } else {
        toonResultaat();
    }
};

function toonResultaat() {
    vraagEl.textContent = "Quiz afgelopen!";
    imgBox.innerHTML = "";
    antwoordenEl.innerHTML = "";
    volgendeBtn.style.display = "none";
    feedbackEl.textContent = "";
    finalEl.textContent = `Jouw eindscore is: ${score} van ${questions.length * 5} punten.`;
}

toonVraag();