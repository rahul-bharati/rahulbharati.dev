import styles from "./index.module.scss";

import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function About() {
  let ref = useRef(null);

  const detailsAnimation = useAnimation();
  const lottieAnimation = useAnimation();

  const [viewRef, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  useEffect(() => {
    if (inView) {
      detailsAnimation.start("visible");
      lottieAnimation.start("visible");
    } else {
      detailsAnimation.start("hidden");
      lottieAnimation.start("hidden");
    }
  }, [lottieAnimation, detailsAnimation, inView]);

  const detailsVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChilden: 0.2,
        staggerChildren: 0.5,
        delay: 0.2,
      },
    },
    hidden: {
      y: -50,
      opacity: 0,
    },
  };

  const lottieVariant = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delayChilden: 0.5,
        staggerChildren: 0.5,
        delay: 0.4,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  const listItem = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div className={styles.hero} ref={viewRef}>
      <motion.div
        className={styles.lottie_container}
        initial="hidden"
        animate={lottieAnimation}
        variants={lottieVariant}
      >
        <dotlottie-player
          id="hero-lottie"
          ref={ref}
          src="/animations/developer-working.lottie"
          autoplay
          loop
          className={styles.lottie__player}
        />
      </motion.div>
      <motion.div className={styles.hero_details_container}>
        <motion.div
          className={styles.heading__container}
          initial="hidden"
          animate={detailsAnimation}
          variants={detailsVariant}
        >
          <motion.h2 className={styles.heading__about} variants={listItem}>
            <span className={styles.heading__name}>Specialist</span> in Web
          </motion.h2>
          <motion.span className={styles.about__text} variants={listItem}>
            I'm graduate from R.D. National College with Bachelor's degree in
            Computer Science. I enjoy created web application that allows to
            solve real world problems. I like to spend my past time reading or
            learning a new tech. I do also love watching animes and I'm learning
            to play a guitar for past few months.
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
