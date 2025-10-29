import React from "react";
import styles from "../styles/ProgressBar.module.css";

interface ProgressBarProps {
  progress: number; // value 0–100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.bar}
        style={{ width: `${progress}%` }}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
};

export default ProgressBar;
