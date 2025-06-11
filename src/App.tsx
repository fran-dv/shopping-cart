import type { ReactNode } from "react";
import styles from "./App.module.css";
import { Navbar } from "@/components";

interface Props {
  children: ReactNode;
}

function App({ children }: Props) {
  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default App;
