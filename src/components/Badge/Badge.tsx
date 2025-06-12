import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface Props {
  children: ReactNode;
  content: number;
}

export const Badge = ({ children, content }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <p>{content}</p>
      </div>
      {children}
    </div>
  );
};
