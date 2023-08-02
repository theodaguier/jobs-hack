import { useRef } from "react";
import styles from "@/sass/styles.module.scss";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEnterKey?: () => void;
}

function Input({
  type,
  name,
  placeholder,
  value,
  required,
  onChange,
  onEnterKey,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onEnterKey) {
      onEnterKey();
    }
  };

  return (
    <input
      ref={inputRef}
      className={styles.input}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export default Input;
