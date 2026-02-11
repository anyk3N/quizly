import styles from "./Auth.module.css"
import {NavLink} from "react-router-dom";

const Auth = () => {
    return (
        <>
            <NavLink to="/" className={styles.logo}>
                Quizly
            </NavLink>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Sign up</h1>
                    <p className={styles.subtitle}>Sign up to continue</p>
                    <form className={styles.form}>
                        <input className={styles.input} placeholder="Name..." name="name" id="name" type="text" required/>
                        <input className={styles.input} placeholder="Email Address..." name="email" id="email" type="email" required />
                        <input className={styles.input} placeholder="Password..." name="password" id="password" type="password" required />
                        <div className={styles.label}>
                            <div className={styles.remember}>
                                <input type="checkbox" name="rememberMe" value="rememberMe" />
                                <p>Remember me</p>
                            </div>
                            <a href="#" className={styles.forgotten}>Forgotten Password?</a>
                        </div>
                        <button className={styles.signup}>Sign up</button>
                    </form>
                </div>
            </div>
        </>


    );
};

export default Auth;