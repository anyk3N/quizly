import { useEffect, useRef, useState } from "react";
import { fetchQuestions } from "../api/triviaApi";
import type { QuizQuestion } from "../types/types";

export function useQuiz(categoryId?: string) {
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selected, setSelected] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [loading, setLoading] = useState(true);

    const answeredRef = useRef(false);

    // fetch
    useEffect(() => {
        if (!categoryId) return;
        fetchQuestions(categoryId).then(qs => {
            setQuestions(qs);
            setLoading(false);
        });
    }, [categoryId]);

    // timer
    useEffect(() => {
        if (loading || currentIndex >= questions.length) return;

        answeredRef.current = false;
        setTimeLeft(15);

        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [currentIndex, loading, questions.length]);

    // auto next
    useEffect(() => {
        if (timeLeft <= 0 && !answeredRef.current) {
            answeredRef.current = true;
            next();
        }
    }, [timeLeft]);

    const select = (answer: string) => {
        if (answeredRef.current) return;

        answeredRef.current = true;
        setSelected(answer);

        if (answer === questions[currentIndex].correct_answer) {
            setScore(s => s + 1);
        }

        setTimeout(() => next(), 1000);
    };

    const next = () => {
        if (!answeredRef.current) return;
        setSelected(null);
        setCurrentIndex(i => i + 1);
    };

    return {
        questions,
        currentIndex,
        selected,
        score,
        timeLeft,
        loading,
        select,
        isFinished: currentIndex >= questions.length
    };
}
