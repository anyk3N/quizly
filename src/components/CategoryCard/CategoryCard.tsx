import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.css";

export interface CategoryCardProps {
    id: number;
    name: string;
    image: string;
}

function CategoryCard({ id, name, image }: CategoryCardProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/quiz/${id}`);
    };

    return (
        <button
            className={styles.card}
            style={{ backgroundImage: `url(${image})` }}
            onClick={handleClick}
            aria-label={`Open ${name} quiz`}
        >
            <div className={styles.overlay}>
                <h3 className={styles.title}>{name}</h3>
            </div>
        </button>
    );
}

export default memo(CategoryCard);
