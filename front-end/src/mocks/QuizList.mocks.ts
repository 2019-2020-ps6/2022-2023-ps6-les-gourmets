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
  estFacile: false,
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
      estFacile: false,
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
      estFacile: false,
  },
  {
    id:'3',
    label: 'Jean Dujardin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
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
            value: 'The Artist',
            isCorrect: true,
        }
        ],
        trueAnswer: 0,
        falseAnswer: 0,
        estFacile: false,

  }

  ];



  



  
  export const EZQUESTIONLIST_ACTOR: Question[] = [
    {
      id: '1',
      label: 'la capitale de la France est...',
      answers: [
          {
              value: 'Lyon',
              isCorrect: false,
          },
          {
              value: 'Paris',
              isCorrect: true,
          },    
          {
              value: 'Pégomas',
              isCorrect: false,
          },  
          { 
              value: 'Marseille',
              isCorrect: false,
          }
        ],
        trueAnswer: 10,
        falseAnswer: 0,
        estFacile: false,
    },
    {
      id: '2',
      label: 'Le mer est ',
      answers: [
          {
              value: 'rouge',
              isCorrect: false,
          },
          {
              value: 'jaune',
              isCorrect: false,
          },
          {
              value: 'verte',
              isCorrect: false,
          },
          {
              value: 'Bleue',
              isCorrect: true,
          }
        ],
        trueAnswer: 5,
        falseAnswer: 5,
        estFacile: false,
    }
  
    ];  

export const QUIZ_LIST: Quiz[] = [
  {
    id: '1',
    name: 'Les Acteurs',
    questions: QUESTIONLIST_ACTOR,
    easyQuestions: EZQUESTIONLIST_ACTOR,
    timerMoyen:45000,
    times:2
  },

  {
    id: '2',
    name: 'Les technos WEB',
    questions: [],
    easyQuestions: [],
    timerMoyen:0,
    times:0
  }
];

