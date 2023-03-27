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
  ]
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
      ]    
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
      ]
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

