import Header from "../../components/Header/Header";
import styles from "./Leaderboard.module.css";

const MOCK_DATA = [
    { id: 1, name: "Alex", score: 120, },
    { id: 2, name: "Maria", score: 110,},
    { id: 3, name: "John", score: 95, },
    { id: 4, name: "Kate", score: 88, },
    { id: 5, name: "Leo", score: 76, },
];

export default function Leaderboard() {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1>Leaderboard</h1>
                    <p>Top players of Quizly</p>
                </div>

                <div className={`${styles.board} glass`}>
                    {MOCK_DATA.map((user, index) => (
                        <div key={user.id} className={styles.row}>
                            <span className={styles.rank}>#{index + 1}</span>
                            <span className={styles.name}>{user.name}</span>
                            <span className={styles.score}>{user.score} pts</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
