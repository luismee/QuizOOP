export class UI {
    constructor() {}

    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }

    showChoices(options, callback) {
        const optionsContainer = document.getElementById("options");
        optionsContainer.innerHTML = "";

        for (let i = 0; i < options.length; i++) {
            const button = document.createElement("button");
            button.innerText = options[i];
            button.className = "button";
            optionsContainer.append(button);
            button.addEventListener('click', () => callback(options[i]));
        }
    }

    showScores(score) {
        const gameOverHTML = `
          <h1>Result</h1>
          <h2 id="score">Your scores: ${score}</h2>
          `;
        // <h2 id="score">Your scores: ${quiz.score}</h2>

        const element = document.getElementById("quiz");
        element.innerHTML = gameOverHTML;
    }

    showProgress(currentIndex, total) {
        var element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }

}