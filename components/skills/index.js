import styles from "./index.module.scss";

import Link from "next/link";
import Image from "next/image";

function Skills() {
  return (
    <div className={styles.skills}>
      <h2 className={styles.section__heading}>My Skills</h2>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Front-end Web</h3>
        <span className={styles.skill__text}>
          HTML5, CSS3, Bootstrap, Javascript, React
        </span>
      </div>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Back-end Web</h3>
        <span className={styles.skill__text}>Nodejs, Next.js</span>
      </div>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Databases</h3>
        <span className={styles.skill__text}>
          MySql, MongoDB and Postgresql
        </span>
      </div>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Version Control</h3>
        <span className={styles.skill__text}>Git, Bitbucket, Gitlab</span>
      </div>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Containerization</h3>
        <span className={styles.skill__text}>
          Docker, Kubernetes and Minikube(on linux)
        </span>
      </div>
      <div className={styles.skill_container}>
        <h3 className={styles.skill__heading}>Cloud Platforms</h3>
        <span className={styles.skill__text}>AWS, GCP, Heroku</span>
      </div>
    </div>
  );
}

export default Skills;
