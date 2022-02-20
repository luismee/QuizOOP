import {questions} from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import {UI} from "./models/UI.js"

const renderPage = (quiz, ui) => {
    if (quiz.ended()) {
      ui.showScores(quiz.score);
    } else {
      ui.showQuestion(quiz.getQuestionIndex().text);
      ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
      ui.showChoices(quiz.getQuestionIndex().option, (currentOption) => {
        quiz.guess(currentOption);
        renderPage(quiz, ui);
      });
    }
  };
  
  function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();
  
    renderPage(quiz, ui);
  }
  
main();