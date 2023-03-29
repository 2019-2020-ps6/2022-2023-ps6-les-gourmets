import { User } from "src/models/User.model";
import { QUIZ_LIST } from "./QuizList.mocks";

export const USERS: User[] = [
    {
        name: 'Gabin',
        surname: 'Jean',
        quizzes: [QUIZ_LIST[0]],
        aggressivness : 0.8,
        answerDisplay : true,
        id:1
    },
    {
        name: 'Palmade',
        surname: 'Pierre',
        quizzes: QUIZ_LIST,
        aggressivness : 0.2,
        answerDisplay : false,
        id:2
    },

];



