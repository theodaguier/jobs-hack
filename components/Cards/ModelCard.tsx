import { useEffect, useRef } from "react";

import styles from "@/sass/styles.module.scss";
import gsap from "gsap";

interface Props {
  number: string;
  modelType: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  name: string;
}

export default function ModelCard({
  number,
  modelType,
  onMouseEnter,
  onClick,
  name,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      gsap.from(card, {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: "power3.out",
      });

      gsap.to(card, {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      className={styles.card}
      ref={cardRef}
      onMouseEnter={() => {
        gsap.to(cardRef.current, {
          duration: 0.5,
          scale: 1.05,
          ease: "power3.out",
          backgroundColor: "#fff",
        });
      }}
      onMouseLeave={() => {
        gsap.to(cardRef.current, {
          duration: 0.5,
          scale: 1,
          ease: "power3.out",
          backgroundColor: "#fff7e8",
        });
      }}
    >
      <div
        className={styles.wrapper}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
      >
        <h1 className={styles.cardTitle}>{number}.</h1>
        <h4 className={styles.cardSubTitle}>Modèle {name}</h4>
      </div>
    </div>
  );
}
