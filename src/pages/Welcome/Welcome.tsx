import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Welcome.module.css";

export default function Welcome() {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <div className={styles.page}>
                <div className={styles.hero}>
                    <div className={styles.card}>
                        <h1 className={styles.title}>Ready to test your knowledge?</h1>
                        <p className={styles.subtitle}>Our Quiz is a fun way to learn something new and test your knowledge in a variety of fields. Focus on this topic, answer questions, and discover interesting facts!</p>

                        <button
                            className={styles.start}
                            onClick={() => navigate("/categories")}
                        >
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
