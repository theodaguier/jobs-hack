import { useEffect, useState } from "react";
import Input from "@/components/Inputs/input";
import styles from "@/sass/styles.module.scss";
import { gsap } from "gsap";
import { BsArrowRight } from "react-icons/bs";
import { useFormContext } from "@/context/formContext";

import { useRouter } from "next/navigation";

import ProgressBar from "@/components/ProgressBar/progressBar";

const FormLetter: React.FC = () => {
  const {
    questions,
    nextQuestion,
    data,
    setData,
    isFormCompleted,
    setIsFormCompleted,
  } = useFormContext();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (isFormCompleted) {
      // router.push("/result");
      // setIsFormCompleted(true);
    }
  }, [isFormCompleted, router]);

  const isLastQuestion = () => {
    return currentQuestionIndex === questions.length - 1;
    setIsFormCompleted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const rowElements = document.querySelectorAll(`.${styles.row}`);
      const currentRow = rowElements[currentQuestionIndex];
      const nextRow = rowElements[currentQuestionIndex + 1];

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        },
      });

      tl.to(currentRow, { opacity: 0, duration: 0.5 })
        .set(currentRow, { display: "none" })
        .set(nextRow, { display: "block" })
        .from(nextRow, { opacity: 0, maxHeight: 0 })
        .to(nextRow, { opacity: 1, maxHeight: "unset", duration: 0.5 });
    } else {
      nextQuestion();
      setIsFormCompleted(true);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className={styles.formContainer}>
      <ProgressBar
        currentStep={currentQuestionIndex}
        totalSteps={questions.length}
      />
      <div className={styles.inputsWrapper}>
        {questions.map((question, index) => (
          <div
            key={index}
            className={styles.row}
            style={{
              opacity: index === currentQuestionIndex ? 1 : 0,
              maxHeight: index === currentQuestionIndex ? "unset" : 0,
              display: index === currentQuestionIndex ? "block" : "none",
            }}
          >
            <h2>{question.name}</h2>
            <div className={styles.inputContainer}>
              <Input
                type={question.type}
                name={question.name}
                placeholder={question.placeholder}
                value={data[question.name]}
                required={question.required}
                onChange={handleInputChange}
                onEnterKey={handleNextQuestion}
              />
              <BsArrowRight
                onClick={handleNextQuestion}
                style={{ width: "30px", height: "auto" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormLetter;
