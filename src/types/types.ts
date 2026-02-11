export type Question = {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
};

export type QuizQuestion = {
    question: string;
    answers: string[]; // перемешанные варианты
    correct_answer: string;
};
