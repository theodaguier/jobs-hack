import styles from "@/sass/styles.module.scss";

interface Props {
  modelLetter: any;
}

export default function ModelLetter({ modelLetter }: Props) {
  return <p className={styles.paragraphModel}>{modelLetter}</p>;
}
