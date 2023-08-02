"use client";

import { NextPage } from "next";
import styles from "@/sass/styles.module.scss";
import { useFormContext } from "@/context/formContext";
import FormLetter from "@/components/Forms/formLetter";
import Result from "@/components/Results/result";

interface Props {
  params: {
    form: string;
  };
}

const Form: NextPage<Props> = ({ params }) => {
  const { isFormCompleted } = useFormContext();
  return (
    <main className={styles.main}>
      {isFormCompleted ? <Result /> : <FormLetter />}
    </main>
  );
};

export default Form;
