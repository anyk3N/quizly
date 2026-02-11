import { NavLink, useNavigate } from "react-router-dom";
import { memo } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

interface NavItem {
    label: string;
    path: string;
}

const NAV_ITEMS: readonly NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Leaderboard", path: "/leaderboard" },
];

function Header() {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <NavLink to="/" className={styles.logo}>
                Quizly
            </NavLink>

            <nav className={styles.nav} aria-label="Main navigation">
                {NAV_ITEMS.map(item => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.active : ""}`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}

                <button
                    className={styles.signup}
                    onClick={() => navigate("/auth")}
                    aria-label="Open sign up page"
                >
                    Sign up
                </button>

                <ThemeToggle />
            </nav>
        </header>
    );
}

export default memo(Header);
