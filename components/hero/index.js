import styles from "./index.module.scss";

import { useEffect, useRef } from "react";
import Socials from "../socials";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

function Hero() {
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
        staggerChildren: 0.1,
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
        delayChilden: 0.2,
        staggerChildren: 0.1,
        delay: 0.4,
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div className={styles.hero} ref={viewRef}>
      <motion.div
        className={styles.hero_details_container}
        initial="hidden"
        animate={detailsAnimation}
        variants={detailsVariant}
      >
        <div className={styles.heading__container}>
          <h1 className={styles.heading__name}>Rahul Bharati &#8212;</h1>
          <h2 className={styles.heading__about}>developer from</h2>
          <h2 className={styles.heading__about}>Mumbai, India</h2>
          <Socials />
        </div>
      </motion.div>
      <motion.div
        className={styles.lottie_container}
        initial="hidden"
        animate={lottieAnimation}
        variants={lottieVariant}
      >
        <dotlottie-player
          id="hero-lottie"
          ref={ref}
          src="/animations/developer-lottie.lottie"
          autoplay
          loop
          className={styles.lottie__player}
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
