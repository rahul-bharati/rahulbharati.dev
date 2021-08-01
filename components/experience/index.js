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
          Web Developer - Paper Boat Apps (October 2019 - Present)
        </h3>
        <span className={styles.skill__text}>
          Paper Boat Apps is an tech-ed based game(kiddopia) development
          company. Here, I'm responsible for development and maintaining
          kiddopia website and also creation of internal analytics dashboard for
          marketing purposes. I've being using cloud functions for serverless
          computing and node/express stack for websites.
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed}
      >
        <h3 className={styles.skill__heading}>
          Web Developer - Appic Mobile (July 2019 - October 2019)
        </h3>
        <span className={styles.skill__text}>
          Appic mobile is brand for Ibinder Digital private Limited which is a
          service company that provides services like designing and development
          for web/mobile applications using laravel framework for Fintech
          startups. Here, I was responsible for development for apis and
          websites for same. I have worked on mintoak, papervideo and finwego.
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
