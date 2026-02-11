import styles from "./ProgressBar.module.css";

interface Props {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: Props) {
    const percent = (current / total) * 100;

    return (
        <div className={styles.wrapper}>
            <div className={styles.track}>
                <div
                    className={styles.fill}
                    style={{ width: `${percent}%` }}
                />
            </div>

            <span className={styles.label}>
        {current} / {total}
      </span>
        </div>
    );
}
