"use client";

import styles from "@/sass/styles.module.scss";
import ModelPreview from "@/components/Previews/modelPreview";
import CardWrapper from "@/components/Wrappers/cardWrapper";

import { useModelContext } from "@/context/modelContext";
import { useFormContext } from "@/context/formContext";

import FormLetter from "@/components/Forms/formLetter";
import Result from "@/components/Results/result";

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <CardWrapper />
      <ModelPreview />
    </main>
  );
};

export default Home;
