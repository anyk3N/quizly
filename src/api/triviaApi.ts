import type {Question, QuizQuestion} from "../types/types.ts";

export async function fetchQuestions(categoryId: string | number, amount = 12): Promise<QuizQuestion[]> {
    const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${categoryId}&type=multiple`);
    const data = await res.json();

    return data.results.map((q: Question) => {
        const answers = [...q.incorrect_answers, q.correct_answer];
        // перемешиваем ответы
        for (let i = answers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [answers[i], answers[j]] = [answers[j], answers[i]];
        }

        return {
            question: q.question,
            correct_answer: q.correct_answer,
            answers,
        };
    });
}
