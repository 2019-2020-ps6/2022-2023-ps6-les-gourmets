import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    questions: Question[];
    easyQuestions: Question[];
    timerMoyen: number;
    times: number;
}
