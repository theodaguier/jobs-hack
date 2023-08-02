"use client";

import { createContext, useState, useContext } from "react";

interface Question {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  required?: boolean;
}

interface FormContextValue {
  questions: Question[];
  currentQuestion: Question;
  data: any;
  setData: any;
  nextQuestion: () => void;
  isFormCompleted: boolean;
  setIsFormCompleted: any;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext<FormContextValue | null>(null);

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      type: "text",
      name: "Votre Nom et Prénom ? *",
      placeholder: "Entrez votre réponse ici...",
      value: "",
      required: true,
    },
    {
      id: 2,
      type: "text",
      name: "Quel est le nom de l'entreprise ? *",
      placeholder: "Entrez votre réponse ici...",
      value: "",
      required: true,
    },
    {
      id: 3,
      type: "text",
      name: "Quel est le nom du poste convoité ? *",
      placeholder: "Entrez votre réponse ici...",
      value: "",
      required: true,
    },
    {
      id: 4,
      type: "text",
      name: "Dans quel domaine se situe le poste ? *",
      placeholder: "Entrez votre réponse ici...",
      value: "",
      required: true,
    },
  ]);
  const [data, setData] = useState({} as any);
  console.log("data", data);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const getCurrentQuestion = () => {
    return questions[currentQuestionIndex];
  };

  const nextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setIsFormCompleted(true);
      return true;
    }
    return false;
  };

  const formContextValue = {
    questions,
    currentQuestion: getCurrentQuestion(),
    nextQuestion,
    data,
    setData,
    isFormCompleted,
    setIsFormCompleted,
  };

  return (
    <FormContext.Provider value={formContextValue}>
      {children}
    </FormContext.Provider>
  );
};

const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useFormContext must be used within a FormProvider. Make sure to wrap your component tree with FormProvider to access the context data."
    );
  }
  return context;
};

export { FormProvider, useFormContext };
