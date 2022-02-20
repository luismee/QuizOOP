import {Question} from '../models/Question.js';
import {data} from './data.js';

export const questions = data.map(question => new Question(question.question, question.options, question.answer));
