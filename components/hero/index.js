import styles from "./index.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Socials from "../socials";

function Hero() {
  let ref = useRef(null);

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_details_container}>
        <div className={styles.heading__container}>
          <h1 className={styles.heading__name}>Rahul Bharati &#8212;</h1>
          <h2 className={styles.heading__about}>developer from</h2>
          <h2 className={styles.heading__about}>Mumbai, India</h2>
          <Socials />
        </div>
      </div>
      <div className={styles.lottie_container}>
        <dotlottie-player
          id="hero-lottie"
          ref={ref}
          src="/animations/developer-lottie.lottie"
          autoplay
          loop
          className={styles.lottie__player}
        />
      </div>
    </div>
  );
}

export default Hero;
