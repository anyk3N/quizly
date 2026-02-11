import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Result.module.css";

interface ResultState {
    score: number;
    total: number;
    categoryId: number;
}

export default function Result() {
    const navigate = useNavigate();
    const { state } = useLocation() as { state: ResultState };

    const percent = Math.round((state.score / state.total) * 100);

    const message =
        percent === 100
            ? "Perfect score!"
            : percent >= 70
                ? "Great job!"
                : percent >= 40
                    ? "Nice try! Keep practicing"
                    : "Don't give up! You'll get better";

    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.card}>
                <h1>{message}</h1>

                <div className={styles.score}>
                    <span className={styles.correct}>{state.score}</span>
                    <span className={styles.divider}>/</span>
                    <span>{state.total}</span>
                </div>

                <p className={styles.percent}>{percent}% correct answers</p>

                <div className={styles.actions}>
                    <button
                        className={styles.primary}
                        onClick={() =>
                            navigate(`/quiz/${state.categoryId}`, { replace: true })
                        }
                    >
                        Retry
                    </button>

                    <button
                        className={styles.secondary}
                        onClick={() => navigate("/categories")}
                    >
                        Back to categories
                    </button>
                </div>
            </div>
        </div>
    );
}
