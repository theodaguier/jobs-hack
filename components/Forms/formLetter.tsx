"use client";
import { useState } from "react";
import Input from "@/components/Inputs/input";
import styles from "@/sass/styles.module.scss";

function FormLetter() {
  const [inputs, setInputs] = useState([
    {
      type: "text",
      name: "Nom de l'entreprise",
      placeholder: "Nom de l'entreprise",
      value: "",
    },
    {
      type: "text",
      name: "poste",
      placeholder: "Poste recherché",
      value: "",
    },
  ]);

  return (
    <div className={styles.formContainer}>
      <h2>Saisir les informations</h2>
      <div className={styles.inputsWrapper}>
        {inputs.map((input, index) => (
          <div key={index} className={styles.row}>
            <h3>{input.placeholder} :</h3>
            <Input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => {
                const newInputs = [...inputs];
                newInputs[index].value = e.target.value;
                setInputs(newInputs);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FormLetter;
