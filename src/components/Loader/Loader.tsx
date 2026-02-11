import styles from "./Loader.module.css";

interface LoaderProps {
    text?: string;
}

export default function Loader({ text = "Loading..." }: LoaderProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.card}>
                <div className={styles.ring} />
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
}
