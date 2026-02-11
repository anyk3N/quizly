import { useParams, useNavigate } from "react-router-dom";
import { useQuiz } from "../../hooks/useQuiz";

import styles from "./Quiz.module.css";

import Header from "../../components/Header/Header";
import ProgressBar from "../../components/PrograssBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import Loader from "../../components/Loader/Loader";
import {decodeHtml} from "../../utils/decodeHtml.ts";

export default function Quiz() {
    const { categoryId } = useParams();
    const navigate = useNavigate();

    const {
        questions,
        currentIndex,
        selected,
        score,
        timeLeft,
        loading,
        select,
        isFinished
    } = useQuiz(categoryId);

    if (loading) return <Loader />;
    if (questions.length === 0) return <h2>No questions found</h2>;

    if (isFinished) {
        navigate("/result", {
            state: { score, total: questions.length, categoryId }
        });
        return null;
    }

    const question = questions[currentIndex];

    return (
        <>
            <Header />
            <div className={styles.page}>
                <div className={styles.card}>
                    <Timer timeLeft={timeLeft} totalTime={15} />

                    <h2 className={styles.question}>
                        {decodeHtml(question.question)}
                    </h2>

                    <ProgressBar
                        current={currentIndex + 1}
                        total={questions.length}
                    />

                    <div className={styles.answers}>
                        {question.answers.map(ans => {
                            const isCorrect =
                                selected && ans === question.correct_answer;
                            const isWrong =
                                selected && ans === selected &&
                                selected !== question.correct_answer;

                            return (
                                <button
                                    key={ans}
                                    className={`${styles.answer} ${
                                        isCorrect ? styles.correct : ""
                                    } ${isWrong ? styles.wrong : ""}`}
                                    onClick={() => !selected && select(ans)}
                                    dangerouslySetInnerHTML={{ __html: ans }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
