"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./styles/Section.module.css";

const ImageSection: React.FC = () => {
  useEffect(() => {
    const setScrollVar = () => {
      const htmlElement = document.documentElement;
      const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;
      htmlElement.style.setProperty(
        "--scroll",
        `${Math.min(percentOfScreenHeightScrolled * 100, 100)}`
      );
    };

    setScrollVar();
    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);

    const observer = new IntersectionObserver((entries) => {
      for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          document.querySelectorAll("[data-img]").forEach((img) => {
            img.classList.remove(styles.show);
          });
          const img = document.querySelector(
            entry.target.getAttribute("data-img-to-show")!
          );
          img?.classList.add(styles.show);
          break;
        }
      }
    });

    document
      .querySelectorAll(`.${styles.imgTrigger}[data-img-to-show]`)
      .forEach((section) => {
        observer.observe(section);
      });

    return () => {
      window.removeEventListener("scroll", setScrollVar);
      window.removeEventListener("resize", setScrollVar);
    };
  }, []);

  return (
    <div className={styles.imgs}>
      <div
        className={`${styles.topSectionImg} ${styles.show}`}
        data-img
        id="img-1"
      >
        <Image
          src="/imgs/img-1.png"
          alt="Image 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.imgWrapper} data-img id="img-2">
        <Image
          src="/imgs/img-2.png"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.imgWrapper} data-img id="img-3">
        <Image
          src="/imgs/img-3.png"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageSection;
