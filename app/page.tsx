import styles from "./page.module.css";
import ImageSection from "./components/ImageSection";
import Section from "./components/Section";

export default function Home() {
  return (
    <main className={styles.main}>
      <ImageSection />
      <Section
        title="Build Better Backends"
        description="The only platform that gives AI the ability to autonomously build web services."
        imgToShow="#img-1"
        isTop
      />
      <Section
        title="Completely Visual"
        description="Never touch the command line, from provision to production."
        imgToShow="#img-1"
      />
      <Section
        title="Full Stack"
        description="Never manage infrastructure again. One click gets you: a database, APIs, deployments, hosting, etc."
        imgToShow="#img-2"
      />
      <Section
        title="Launch Faster"
        description="Logical can get systems to market in minutes instead of weeks."
        imgToShow="#img-3"
      />
    </main>
  );
}
