import { Question } from "src/models/question.model";
import { Quiz } from "src/models/quiz.model";

export const QUESTION_ACTOR: Question = {
    id: '1',
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            type: 'text',
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            type: 'text',
            value: 'La grande illusion',
            isCorrect: true,
        },
        {
            type: 'text',
            value: 'Le parrain',
            isCorrect: false,
        },
        {
            type: 'text',
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
            type: 'text',
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            type: 'text',
            value: 'La grande illusion',
            isCorrect: true,
        },    
        {
            type: 'text',
            value: 'Le parrain',
            isCorrect: false,
        },  
        { 
            type: 'text',
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
            type: 'text',
            value: 'Les tuches III',
            isCorrect: false,
        },
        {
            type: 'text',
            value: 'La grande illusion',
            isCorrect: false,
        },
        {
            type: 'text',
            value: 'Le parrain',
            isCorrect: false,
        },
        {
            type: 'text',
            value: 'Leon',
            isCorrect: true,
        }
      ],
    trueAnswer: 5,
    falseAnswer: 5,
  },
  {
    id: '3',
    label: 'Lequel de ces acteurs est Louis de Funès',
    answers: [
        {
            type: 'image',
            value: 'assets/Image/Charlie-Chaplin.jpg',
            isCorrect: false,
        },
        {
            type: 'image',
            value: 'assets/Image/defunès.jpg',
            isCorrect: true,
        },    
        {
            type: 'image',
            value: 'assets/Image/jean-Reno.jpg',
            isCorrect: false,
        },  
        { 
            type: 'image',
            value: 'assets/Image/Jean-Gabin.jpg',
            isCorrect: false,
        }
      ],
      trueAnswer: 4,
      falseAnswer: 2,
  },
  ];


export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Les Acteurs',
    questions: QUESTIONLIST_ACTOR,
    timerMoyen:45000,
    times:2
  },

  {
    id: '2',
    name: 'Les technos WEB',
    questions: [],
    timerMoyen:0,
    times:0
  }
];

