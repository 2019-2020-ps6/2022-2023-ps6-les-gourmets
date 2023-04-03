import { User } from "src/models/User.model";
import { QUIZ_LIST } from "./QuizList.mocks";

export const USERS: User[] = [
    {
        name: 'Durier',
        surname: 'Henry',
        quizzes: [JSON.parse(JSON.stringify(QUIZ_LIST[0]))],
        aggressivness : 0.4,
        answerDisplay : false,
        music : ["calmAndPeaceful.mp3"],
        id:1
        
    },
    {
        name: 'Boucher',
        surname: 'Gerard',
        quizzes: JSON.parse(JSON.stringify(QUIZ_LIST)),
        aggressivness : 0.8,
        answerDisplay : true,
        music : ["calmAndPeaceful.mp3","garden.mp3"],
        id:2
    },

];



