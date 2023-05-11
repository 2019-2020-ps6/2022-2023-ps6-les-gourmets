import { Question } from './question.model';

export interface Quiz {
    id: number;
    name: string;
    questions: Question[];
    easyQuestions: Question[];
    timerMoyen: number;
    times: number;
}
