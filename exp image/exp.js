const questions = [
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Rusland", "Frankrijk", "Duitsland", "China"],
        juist: 1,
        img: "images/FranceFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Amerika", "Zwitserland", "Australië", "Engeland"],
        juist: 2,
        img: "images/AustraliaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Nederland", "België", "Luxemburg", "Frankrijk"],
        juist: 0,
        img: "images/NetherlandsFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["China", "Japan", "Zuid-Korea", "Vietnam"],
        juist: 1,
        img: "images/JapanFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Spanje", "Portugal", "Italië", "Griekenland"],
        juist: 0,
        img: "images/SpainFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Mexico", "Brazilië", "Colombia", "Argentinië"],
        juist: 0,
        img: "images/MexicoFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Verenigd Koninkrijk", "Ierland", "Schotland", "Canada"],
        juist: 0,
        img: "images/UKFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Turkije", "Egypte", "Marokko", "Tunesië"],
        juist: 0,
        img: "images/TurkeyFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Noorwegen", "Zweden", "Finland", "Denemarken"],
        juist: 1,
        img: "images/SwedenFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["India", "Pakistan", "Bangladesh", "Nepal"],
        juist: 0,
        img: "images/IndiaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Canada", "Amerika", "Australië", "Nieuw-Zeeland"],
        juist: 0,
        img: "images/CanadaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Zuid-Afrika", "Nigeria", "Egypte", "Ghana"],
        juist: 0,
        img: "images/SouthAfricaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Duitsland", "Oostenrijk", "Zwitserland", "Polen"],
        juist: 0,
        img: "images/GermanyFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Polen", "Tsjechië", "Hongarije", "Slowakije"],
        juist: 0,
        img: "images/PolandFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Italië", "Spanje", "Vaticaanstad", "Portugal"],
        juist: 0,
        img: "images/ItalyFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Brazilië", "Mexico", "Peru", "Colombia"],
        juist: 0,
        img: "images/BrazilFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Zwitserland", "Denemarken", "Noorwegen", "Finland"],
        juist: 0,
        img: "images/SwitzerlandFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Griekenland", "Cyprus", "Albanië", "Turkije"],
        juist: 0,
        img: "images/GreeceFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Rusland", "Oekraïne", "Wit-Rusland", "Kazachstan"],
        juist: 0,
        img: "images/RussiaFlag.png"
    },
    {
        vraag: "Welke vlag is dit?",
        antwoorden: ["Amerika", "Canada", "Australië", "Engeland"],
        juist: 0,
        img: "images/USAFlag.png"
    }
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
const vraagNummerEl = document.getElementById("vraagnummer");

// ENTER = Volgende vraag
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && volgendeBtn.style.display !== "none") {
        volgendeBtn.click();
    }
});

function toonVraag() {
    // Vraagnummer tonen
    vraagNummerEl.textContent = `Vraag ${huidigeVraag + 1} van ${questions.length}`;
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
    Array.from(antwoordenEl.children).forEach((btn, i) => {
        btn.disabled = true;
        btn.classList.remove("selected", "fout");
    });
    const juistAntwoord = questions[huidigeVraag].juist;
    if (idx === juistAntwoord) {
        button.classList.add("selected");
        score += 5;
        feedbackEl.textContent = "Goed gedaan! +5 punten";
        feedbackEl.style.color = "#219a52";
    } else {
        button.classList.add("fout");
        score -= 5;
        let goedAntwoord = questions[huidigeVraag].antwoorden[juistAntwoord];
        feedbackEl.textContent = `Fout. Het juiste antwoord is: ${goedAntwoord}`;
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
    vraagNummerEl.textContent = "";
    vraagEl.textContent = "Quiz afgelopen!";
    imgBox.innerHTML = "";
    antwoordenEl.innerHTML = "";
    volgendeBtn.style.display = "none";
    feedbackEl.textContent = "";
    finalEl.textContent = `Jouw eindscore is: ${score} van ${questions.length * 5} punten.`;
}

toonVraag();