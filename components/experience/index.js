import styles from "./index.module.scss";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

function Experience() {
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
      x: 1000,
      opacity: 0,
    },
  };

  const detailsVariantDelayed = {
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
      x: 1000,
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
        delay: 0.6,
      },
    },
    hidden: {
      x: 1000,
      opacity: 0,
    },
  };

  return (
    <motion.div className={styles.skills} ref={viewRef}>
      <h2 className={styles.section__heading}>Experience</h2>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariant}
      >
        <h3 className={styles.skill__heading}>
          Web Developer - Rapidera Technologies (February 202022 - Present)
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>
              Collaborate with other developers to write efficient,
              well-designed code
            </li>
            <li>
              Participate in code review and scrum meetups to keep up with
              changes and tasks
            </li>
            <li>Work as a third-party developer for HDFC life</li>
          </ul>
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed}
      >
        <h3 className={styles.skill__heading}>
          Web Developer - Paper Boat Apps (October 2019 - February 2022)
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>
              Collaborate with designers and other developers to launch web
              applications
            </li>
            <li>
              Write efficient, well-designed code and maintain software
              documentation
            </li>
            <li>
              Built Kiddopia website to provide a subscription to the user
            </li>
            <li>
              Worked on serverless applications using Google cloud functions
            </li>
          </ul>
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed1}
      >
        <h3 className={styles.skill__heading}>
          Web Developer - Appic Mobile (July 2019 - October 2019)
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>Developed website components using modern frameworks</li>
            <li>Participated in code reviews with development teams</li>
            <li>
              Worked on multiple fintech websites backend including mintoak and
              finwego
            </li>
          </ul>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
