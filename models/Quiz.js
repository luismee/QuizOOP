import {questions} from "../data/questions.js";

export class Quiz {
    questionIndex = 0;
    score = 0;
    /**
     * 
     * @param {Question[]} questions 
     */
    constructor(questions) {
        this.questions = questions;
    }
    /**
     * 
     * @returns {Question} The question found.
     */
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    ended() {
        return this.questions.length === this.questionIndex
    }


    /**
     * 
     * @param {string} answer 
     */
    guess(answer) {
        if (this.getQuestionIndex().correctAns(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
}