"use client";
import { useState } from "react";
import styles from "@/sass/styles.module.scss";

const TextArea = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.containerTextArea}>
      <textarea
        className={styles.textArea}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextArea;
