import styles from "./index.module.scss";

import { useEffect, useRef } from "react";

function About() {
  let ref = useRef(null);

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.lottie_container}>
        <dotlottie-player
          id="hero-lottie"
          ref={ref}
          src="/animations/developer-working.lottie"
          autoplay
          loop
          className={styles.lottie__player}
        />
      </div>
      <div className={styles.hero_details_container}>
        <div className={styles.heading__container}>
          <h2 className={styles.heading__about}>
            <span className={styles.heading__name}>Specialist</span> in Web
          </h2>
          <span className={styles.about__text}>
            I'm graduate from R.D. National College with Bachelor's degree in
            Computer Science. I enjoy created web application that allows to
            solve real world problems. I like to spend my past time reading or
            learning a new tech. I do also love watching animes and I'm learning
            to play a guitar for past few months.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
