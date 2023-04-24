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
  estFacile: false,
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
      estFacile: false,
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
      estFacile: false,
  },
  {
    id:'3',
    label: 'Jean Dujardin a joué dans...',
    answers: [
        {
            type: 'text',
            value: 'Les tuches II',
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
            value: 'The Artist',
            isCorrect: true,
        }
        ],
        trueAnswer: 8,
        falseAnswer: 9,
        estFacile: false,

  },
  {
    id: '4',
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
      estFacile: false,
  },

  ];



  



  
  export const EZQUESTIONLIST_ACTOR: Question[] = [
    {
      id: '1',
      label: 'la capitale de la France est...',
      answers: [
          {
              type : 'text',
              value: 'Lyon',
              isCorrect: false,
          },
          {
              type : 'text',
              value: 'Paris',
              isCorrect: true,
          },    
          {
              type : 'text',
              value: 'Pégomas',
              isCorrect: false,
          },  
          { 
              type : 'text', 
              value: 'Marseille',
              isCorrect: false,
          }
        ],
        trueAnswer: 10,
        falseAnswer: 25,
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
        falseAnswer: 17,
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

