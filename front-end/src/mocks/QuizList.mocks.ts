import { Question } from "src/models/question.model";
import { Quiz } from "src/models/quiz.model";

export const QUESTION_ACTOR: Question = {
  id: '1',
  label: 'Jean Gabin a joué dans...',
  answers: [
      {
          value: 'Les tuches II',
          isCorrect: false,
      },
      {
          value: 'La grande illusion',
          isCorrect: true,
      }
  ]
};


export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Les Acteurs',
    questions: [],
  },

  {
    id: '2',
    name: 'Les technos WEB',
    questions: [],
  }
];

