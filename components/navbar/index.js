import styles from "./index.module.scss";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

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

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, inView]);

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChilden: 0.2, staggerChildren: 0.1 },
    },
    hidden: {
      y: -10,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className={styles.navbar}
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={variants}
    >
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
    </motion.div>
  );
}

export default Navbar;
