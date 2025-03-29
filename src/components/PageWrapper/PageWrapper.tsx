import { ReactNode } from "react";
import styles from "./PageWrapper.module.css";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default PageWrapper;
