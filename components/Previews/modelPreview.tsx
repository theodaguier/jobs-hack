import ModelLetter from "@/components/Models/ModelLetter";
import styles from "@/sass/styles.module.scss";

import { useModelContext } from "@/context/modelContext";
import { student, pro } from "@/utils/letters";

function ModelPreview() {
  const { model } = useModelContext();

  const modelLetter = () => {
    if (model === "Student") {
      return student;
    } else if (model === "Pro") {
      return pro;
    }
  };

  return (
    <div className={styles.preview}>
      <ModelLetter modelLetter={modelLetter()} />
    </div>
  );
}

export default ModelPreview;
