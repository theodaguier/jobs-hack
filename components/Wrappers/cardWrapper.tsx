import React from "react";
import styles from "@/sass/styles.module.scss";
import ModelCard from "@/components/Cards/ModelCard";
import { useModelContext } from "@/context/modelContext";
import { useRouter } from "next/navigation";

export default function CardWrapper() {
  const { setModel } = useModelContext();
  const router = useRouter();

  const handleCardHover = (modelName: any) => {
    setModel(modelName);
  };

  const handleCardClick = (modelType: string) => {
    router.push(`/create-letter/${encodeURIComponent(modelType)}`);
  };

  return (
    <div className={styles.cardsContainer}>
      <ModelCard
        number="1"
        name="Etudiant"
        modelType="student"
        onMouseEnter={() => handleCardHover("Student")}
        onClick={() => handleCardClick("student")}
      />
      <ModelCard
        number="2"
        name="Professionel"
        modelType="pro"
        onMouseEnter={() => handleCardHover("Pro")}
        onClick={() => handleCardClick("pro")}
      />
      <ModelCard
        number="3"
        name="Mail"
        modelType="mail"
        onMouseEnter={() => handleCardHover("Mail")}
        onClick={() => handleCardClick("mail")}
      />
    </div>
  );
}
