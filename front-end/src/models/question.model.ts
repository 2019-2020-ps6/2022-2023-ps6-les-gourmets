export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string | undefined;
    answers: Answer[];
    trueAnswer: number;
    falseAnswer: number;
    estFacile: boolean;
}