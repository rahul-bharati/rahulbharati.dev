import styles from "./index.module.scss";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Skills() {
  const detailsAnimation = useAnimation();

  const [viewRef, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      detailsAnimation.start("visible");
    } else {
      detailsAnimation.start("hidden");
    }
  }, [detailsAnimation, inView]);

  const detailsVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 0.2,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed1 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 0.4,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed2 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 0.6,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed3 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 0.8,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed4 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 1,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed5 = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.5,
        delay: 1.2,
      },
    },
    hidden: {
      x: -1000,
      opacity: 0,
    },
  };

  return (
    <motion.div className={styles.skills} ref={viewRef}>
      <h2 className={styles.section__heading}>My Skills</h2>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariant}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Front-end Web</h3>
        <span className={styles.skill__text}>
          HTML5, CSS3, Bootstrap, Javascript, React
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariantDelayed1}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Back-end Web</h3>
        <span className={styles.skill__text}>Nodejs, Next.js</span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariantDelayed2}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Databases</h3>
        <span className={styles.skill__text}>
          MySql, MongoDB and Postgresql
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariantDelayed3}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Version Control</h3>
        <span className={styles.skill__text}>Git, Bitbucket, Gitlab</span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariantDelayed4}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Containerization</h3>
        <span className={styles.skill__text}>
          Docker, Kubernetes and Minikube(on linux)
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        variants={detailsVariantDelayed5}
        animate={detailsAnimation}
        initial="hidden"
      >
        <h3 className={styles.skill__heading}>Cloud Platforms</h3>
        <span className={styles.skill__text}>AWS, GCP, Heroku</span>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
