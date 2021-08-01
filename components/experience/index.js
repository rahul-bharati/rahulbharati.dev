import styles from "./index.module.scss";

import Link from "next/link";
import Image from "next/image";

function Experience() {
  return (
    <div className={styles.skills}>
      <h2 className={styles.section__heading}>Experience</h2>
      <div className={styles.skill_container}>
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
      </div>
      <div className={styles.skill_container}>
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
      </div>
    </div>
  );
}

export default Experience;
