import { createBrowserRouter } from "react-router-dom";
import Categories from "../pages/Categories/Categories.tsx";
import Quiz from "../pages/Quiz/Quiz.tsx";
import Result from "../pages/Result/Result.tsx";
import Welcome from "../pages/Welcome/Welcome.tsx";
import Auth from "../pages/Auth/Auth.tsx";
import About from "../pages/About/About.tsx";
import Leaderboard from "../pages/Leaderboard/Leaderboard.tsx";

export const router = createBrowserRouter([
    { path: "/", Component: Welcome },
    { path: "/categories", Component: Categories },
    { path: "/quiz/:categoryId", Component: Quiz },
    { path: "/result", Component: Result },
    { path: "/auth", Component: Auth },
    { path: "/about", Component: About },
    { path: "/leaderboard", Component: Leaderboard},
]);