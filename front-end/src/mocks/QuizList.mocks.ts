import { Question } from "src/models/question.model";
import { Quiz } from "src/models/quiz.model";

export const QUESTION_ACTOR: Question = {
    id: 0,
    themes:["acteurs"],
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
  estFacile: false,
};

export const QUESTIONLIST_ACTOR: Question[] = [
  {
    id: 1,
    themes:["acteurs"],
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
      estFacile: false,
  },
  {
    id: 2,
    label: 'Jean Reno a joué dans...',
    themes:["acteurs"],
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
      estFacile: false,
  },
  {
    id:3,
    label: 'Jean Dujardin a joué dans...',
    themes: ["acteurs"],
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
        estFacile: false,

  },
  {
    id: 4,
    themes:["acteurs"],
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
      estFacile: false,
  },

  ];



  



  
  export const EZQUESTIONLIST_ACTOR: Question[] = [
    {
      id: 5,
      label: 'la capitale de la France est...',
      themes:["geographie"],
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
        estFacile: true,
    },
    {
      id: 6,
      label: 'Le mer est ',
      themes: ["couleur","géographie"],
      answers: [
          {
              type : 'text',
              value: 'rouge',
              isCorrect: false,
          },
          {
              type : 'text',
              value: 'jaune',
              isCorrect: false,
          },
          {
              type : 'text',
              value: 'verte',
              isCorrect: false,
          },
          {
              type : 'text',
              value: 'Bleue',
              isCorrect: true,
          }
        ],
        estFacile: true,
    }
  
    ];  

export const QUIZ_LIST: Quiz[] = [
  {
    id: 7,
    name: 'Les Acteurs',
    questions: JSON.parse(JSON.stringify(QUESTIONLIST_ACTOR)),
    easyQuestions: JSON.parse(JSON.stringify(EZQUESTIONLIST_ACTOR)),
  },

  {
    id: 8,
    name: 'Les technos WEB',
    questions: [],
    easyQuestions: [],
  }
];

