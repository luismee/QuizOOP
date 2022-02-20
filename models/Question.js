export class Question{ // Class-Question
    /**
     * To the developer
     * @param {string} text This is the question.
     * @param {string[]} options  This are the options.
     * @param {string} answer The answers
     */
    constructor(text, option, answer){
        this.text = text;
        this.option = option;
        this.answer = answer;
    }
    /**
     * 
     * @param {string} option 
     * @returns It returns a bool
     */
    correctAns(option) {
        return option === this.answer;
    }

}


