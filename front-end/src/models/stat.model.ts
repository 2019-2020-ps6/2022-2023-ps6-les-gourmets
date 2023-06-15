import { Quiz } from './quiz.model';
import { User } from './User.model';

export interface Stat {
    id: number,
    user: User,
    quiz: Quiz,
    bonnesReponses: number[],
    mauvaisesReponses: number[],
    timerMoyen: number,
    times: number,
    nbQuit: number
    
}