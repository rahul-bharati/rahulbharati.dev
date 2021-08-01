import styles from "./index.module.scss";

import Link from "next/link";
import Image from "next/image";

function Socials({ section }) {
  return (
    <ul
      className={
        section == "contact"
          ? styles.socials__container_contact
          : styles.socials__container
      }
    >
      <li className={styles.socials}>
        <Link href="https://www.instagram.com/____heathcliff__/">
          <a className={styles.socials_link}>
            <Image
              src="/images/icons/instagram.svg"
              alt="instagram"
              width="50"
              height="50"
              className={styles.social_image}
            />
          </a>
        </Link>
      </li>

      <li className={styles.socials}>
        <Link href="https://linkedin.com/in/rahul-bharati">
          <a className={styles.socials_link}>
            <Image
              src="/images/icons/linkedin.svg"
              alt="instagram"
              width="50"
              height="50"
              className={styles.social_image}
            />
          </a>
        </Link>
      </li>

      <li className={styles.socials}>
        <Link href="https://blog.rahulbharati.dev/">
          <a className={styles.socials_link}>
            <Image
              src="/images/icons/medium.svg"
              alt="instagram"
              width="50"
              height="50"
              className={styles.social_image}
            />
          </a>
        </Link>
      </li>
    </ul>
  );
}

export default Socials;
