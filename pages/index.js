import styles from "./index.module.scss";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Projects from "../components/projects";

function HomePage() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default HomePage;
