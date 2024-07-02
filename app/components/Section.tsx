import React from "react";
import styles from "./styles/Section.module.css";

interface SectionProps {
  title: string;
  description: string;
  imgToShow: string;
  isTop?: boolean;
}

const Section: React.FC<SectionProps> = ({
  title,
  description,
  imgToShow,
  isTop = false,
}) => {
  return (
    <section
      className={`${styles.fullScreenSection} ${
        isTop ? styles.topSection : ""
      }`}
    >
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {isTop && <div className={styles.right}></div>}
      {!isTop && <div data-img-to-show={imgToShow}></div>}
    </section>
  );
};

export default Section;
