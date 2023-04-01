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
      },
      {
          value: 'Le parrain',
          isCorrect: false,
      },
      {
          value: 'Le parrain',  
          isCorrect: false,
      }
  ],
  trueAnswer:0,
  falseAnswer:0,
};

export const QUESTIONLIST_ACTOR: Question[] = [
  {
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
        },    
        {
            value: 'Le parrain',
            isCorrect: false,
        },  
        { 
            value: 'Le parrain',
            isCorrect: false,
        }
      ],
      trueAnswer: 10,
      falseAnswer: 0,
  },
  {
    id: '2',
    label: 'Jean Reno a joué dans...',
    answers: [
        {
            value: 'Les tuches III',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: false,
        },
        {
            value: 'Le parrain',
            isCorrect: false,
        },
        {
            value: 'Leon',
            isCorrect: true,
        }
      ],
      trueAnswer: 5,
      falseAnswer: 5,
  }
  ];


export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Les Acteurs',
    questions: QUESTIONLIST_ACTOR,
  },

  {
    id: '2',
    name: 'Les technos WEB',
    questions: [],
  }
];

