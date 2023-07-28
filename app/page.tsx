import styles from "@/sass/styles.module.scss";

import TextArea from "@/components/TextArea";
import FormLetter from "@/components/Forms/formLetter";

export default function Home() {
  return (
    <main className={styles.main}>
      <FormLetter />
      <TextArea />
    </main>
  );
}
