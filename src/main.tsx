import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/globals.css"
import App from "./app/App.tsx";
import {ThemeProvider} from "./context/ThemeContext.tsx";

import lightBg from "./assets/bgs/light_bg.webp"
import darkBg from "./assets/bgs/dark_bg.webp"

const root = document.documentElement;

root.style.setProperty("--bg-light", `url(${lightBg})`);
root.style.setProperty("--bg-dark", `url(${darkBg})`);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider>
          <App/>
      </ThemeProvider>
  </StrictMode>,
)

