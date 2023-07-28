import { useRef, useState } from "react";
import styles from "@/sass/styles.module.scss";
import gsap from "gsap";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, name, placeholder, value, onChange }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isClicked, setIsClicked] = useState(false);

  const inputAnimation = () => {
    gsap.to(inputRef.current, {
      duration: 0.5,
      width: "60%",
      opacity: 1,
      ease: "power2.inOut",
    });
  };

  const inputAnimationStop = () => {
    gsap.to(inputRef.current, {
      duration: 0.5,
      width: "50%",
      opacity: 1,
      ease: "power2.inOut",
    });
  };

  const inputClickAnimation = () => {
    gsap.to(inputRef.current, {
      duration: 0.5,
      width: "70%", // Set the width to a value that makes the input wider
      ease: "power2.inOut",
    });
    setIsClicked(true);
  };

  const handleBlur = () => {
    // When the input loses focus, reset the width to its original value
    gsap.to(inputRef.current, {
      duration: 0.5,
      width: "70%", // Set the width back to the original value
      ease: "power2.inOut",
      onComplete: () => setIsClicked(false),
    });
  };

  return (
    <input
      ref={inputRef}
      className={`${styles.input} ${isClicked ? styles.clicked : ""}`}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onMouseEnter={inputAnimation}
      onMouseLeave={inputAnimationStop}
      onClick={inputClickAnimation}
      onBlur={handleBlur}
    />
  );
}

export default Input;
