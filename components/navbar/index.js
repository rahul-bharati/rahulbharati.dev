import styles from "./index.module.scss";

import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const updateThemeMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const themeMode = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", themeMode);
  }, [darkMode]);

  useEffect(() => {
    const isLightModeEnabled =
      localStorage.getItem("theme") == "light" ? true : false;
    setDarkMode(isLightModeEnabled);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">
          <a className={styles.nav_link}>&#128075; Rahul B</a>
        </Link>
      </div>
      <div className={styles.link__container}>
        <ul className={styles.link__list}>
          <li className={styles.link__item}>
            <label id="switch" className={styles.switch}>
              <input
                type="checkbox"
                id="slider"
                className={styles.checkbox}
                onChange={updateThemeMode}
                checked={darkMode}
              />
              <span className={[styles.slider, styles.round].join(" ")}></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
