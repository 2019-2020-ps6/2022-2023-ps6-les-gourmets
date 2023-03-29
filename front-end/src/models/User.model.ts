import { Quiz } from "./quiz.model"

export interface User {
    name: string,
    surname : string,
    aggressivness : number,
    answerDisplay: boolean,
    quizzes : Quiz[],
    id : number
} 