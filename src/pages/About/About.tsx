import Header from "../../components/Header/Header.tsx";
import styles from "./About.module.css"

export default function About() {
    return (
        <div className={styles.page}>
            <Header />

            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1>About Quizly</h1>
                    <p>
                        Quizly is a modern quiz platform built to make learning fun,
                        fast and beautiful.
                    </p>
                </div>

                <div className={styles.cards}>
                    <div className={`${styles.card} glass`}>
                        <h3>Our Mission</h3>
                        <p>
                            Help people learn through playful challenges and instant
                            feedback.
                        </p>
                    </div>

                    <div className={`${styles.card} glass`}>
                        <h3>Why Quizly?</h3>
                        <p>
                            Clean UI, real-time feedback, timer pressure and beautiful
                            animations.
                        </p>
                    </div>

                    <div className={`${styles.card} glass`}>
                        <h3>Built With</h3>
                        <p>
                            React, TypeScript, Vite and Trivia API.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}
