export interface Answer {
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    type?: string;
    images?: string[];
    label: string | undefined;
    answers: Answer[];
    trueAnswer: number;
    falseAnswer: number;
}