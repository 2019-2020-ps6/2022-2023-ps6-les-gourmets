import { User } from "src/models/User.model";
import { QUIZ_LIST } from "./QuizList.mocks";

export const USERS: User[] = [
    {
        name: 'Gabin',
        surname: 'Jean',
        quizzes: [JSON.parse(JSON.stringify(QUIZ_LIST[0]))],
        aggressivness : 0.8,
        answerDisplay : true,
        music : ["calmAndPeaceful.mp3"],
        id:1,
        passivity : 0.2
    },
    {
        name: 'Palmade',
        surname: 'Pierre',
        quizzes: JSON.parse(JSON.stringify(QUIZ_LIST)),
        aggressivness : 0.2,
        answerDisplay : false,
        music : ["calmAndPeaceful.mp3","garden.mp3"],
        id:2,
        passivity : 0.8
    },

];



