import styles from "./Timer.module.css";
import {useMemo} from "react";

interface TimerProps {
    timeLeft: number;
    totalTime: number;
}

export default function Timer({ timeLeft, totalTime }: TimerProps) {
    const circumference = 2 * Math.PI * 22;

    const progress = useMemo(() => {
        return Math.max(0, Math.min(100, (timeLeft / totalTime) * 100));
    }, [timeLeft, totalTime]);

    const offset = useMemo(() => {
        return circumference - (progress / 100) * circumference;
    }, [progress, circumference]);

    return (
        <div className={styles.timer}>
            <svg className={styles.svg} width="52" height="52">
                <circle
                    className={styles.bg}
                    cx="26"
                    cy="26"
                    r="22"
                />
                <circle
                    className={styles.progress}
                    cx="26"
                    cy="26"
                    r="22"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                    }}
                />
            </svg>

            <span
                className={`${styles.time} ${
                    timeLeft <= 5 ? styles.danger : ""
                }`}
            >
        {timeLeft}
      </span>
        </div>
    );
}
