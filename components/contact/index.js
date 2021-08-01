import styles from "./index.module.scss";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Socials from "../socials";

function Contact() {
  let ref = useRef(null);

  useEffect(() => {
    import("@dotlottie/player-component");
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.lottie_container}>
        <dotlottie-player
          id="hero-lottie"
          ref={ref}
          src="/animations/contact.lottie"
          autoplay
          loop
          className={styles.lottie__player}
        />
      </div>
      <div className={styles.hero_details_container}>
        <div className={styles.heading__container}>
          <h1 className={styles.heading__name}>Just say hi.</h1>
          <h2 className={styles.heading__about}>contact@rahulbharati.dev</h2>
          <h2 className={styles.heading__follow}>Follow me on</h2>
          <Socials section="contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
