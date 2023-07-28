"use client";
import { useRef } from "react";
import gsap from "gsap";
import styles from "@/sass/styles.module.scss";

function Header() {
  const circleRef = useRef<HTMLDivElement>(null);

  const circleHoverAnimation = () => {
    gsap.to(circleRef.current, {
      duration: 0.5,
      scale: 1.5,
      opacity: 1,
      ease: "power2.inOut",
    });
  };
  const circleRestoreAnimation = () => {
    gsap.to(circleRef.current, {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <header className={styles.header}>
      <h1>Lettre de motivation</h1>
      {/* <nav>
        <div>
          <h2>connexion</h2>
        </div>
        <div>
          <h2>info</h2>
          <h2>about</h2>
        </div>
      </nav> */}
      <div
        className={styles.circle}
        ref={circleRef}
        onMouseEnter={circleHoverAnimation}
        onMouseLeave={circleRestoreAnimation}
      ></div>
    </header>
  );
}

export default Header;
