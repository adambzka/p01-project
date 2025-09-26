document.getElementById("startForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("username").value.trim();

    if (name) {
      // Opslaan in localStorage
      localStorage.setItem("quizUserName", name);

      // Redirect naar quizpagina (pas aan naar de juiste quiz)
      window.location.href = "quiz-frontpsgehtml.html";
    } else {
      alert("Vul alsjeblieft je naam in.");
    }
  });