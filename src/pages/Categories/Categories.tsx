import { categories } from "../../api/categories";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import styles from "./Categories.module.css";
import Header from "../../components/Header/Header.tsx";

export default function Categories() {
    return (
        <div className={styles.page}>
            <Header />
            <div className={styles.wrapper}>
                <h1>Select a category</h1>

                <div className={styles.grid}>
                    {categories.map(c => (
                        <CategoryCard key={c.id} {...c} />
                    ))}
                </div>
            </div>
        </div>
    );
}
