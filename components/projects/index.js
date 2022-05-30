import styles from "./index.module.scss";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

function Projects() {
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

  return (
    <motion.div className={styles.skills} ref={viewRef}>
      <h2 className={styles.section__heading}>Projects</h2>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariant}
      >
        <h3 className={styles.skill__heading}>
          <Link href="https://beatnbuddy.rahulbharati.dev/" passHref>
            <a target="_blank" className={styles.skill__heading}>
              Beatnbuddy, (Next.js, Solidity, Polygon)
            </a>
          </Link>
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>Web3 app that will allow artist to mint their music as NFT</li>
            <li>
              User will be able to listen to the music streamed directly from
              IPFS storage
            </li>
            <li>
              Built this app for Roadtoweb3 Hackathon and is deployed to Polygon
              Mumbai testnet
            </li>
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
          <Link href="https://webxstudio.in/" passHref>
            <a target="_blank" className={styles.skill__heading}>
              Webxstudio, (Vue.js, CSS, Javascript)
            </a>
          </Link>
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>
              Designed and Developed website to promote freelancing business
            </li>
          </ul>
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed2}
      >
        <h3 className={styles.skill__heading}>
          <Link href="https://smartcomputerinstitute.org/" passHref>
            <a target="_blank" className={styles.skill__heading}>
              Smart Computer Institute, (HTML, CSS, JavaScript)
            </a>
          </Link>
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>Built landing page to improve global reach</li>
            <li>Done SEO on website to improve listing and customer reach</li>
          </ul>
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed3}
      >
        <h3 className={styles.skill__heading}>
          <Link href="https://rdnational.ac.in/#!home.html" passHref>
            <a target="_blank" className={styles.skill__heading}>
              R.D. National College, (HTML, CSS, JavaScript, Bootstrap)
            </a>
          </Link>
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>Built this website to improve the UI for existing website</li>
            <li>
              Trained students during development phase to provide them hands-on
              experience in building websites
            </li>
          </ul>
        </span>
      </motion.div>
      <motion.div
        className={styles.skill_container}
        animate={detailsAnimation}
        initial="hidden"
        variants={detailsVariantDelayed4}
      >
        <h3 className={styles.skill__heading}>
          <Link href="https://github.com/rahul-bharati/instagram_bot" passHref>
            <a target="_blank" className={styles.skill__heading}>
              Instagram BOT, (Python)
            </a>
          </Link>
        </h3>
        <span className={styles.skill__text}>
          <ul>
            <li>
              Simple script to generate random quotes and upload image on
              instagram
            </li>
            <li>Built it as a side fun project</li>
          </ul>
        </span>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
