import React from "react";
import styles from "../styles/ProgressBar.module.css";
import { useIsMobile } from "../hooks/useIsMobile";
import CloseIcon from "../assets/icon-close.svg";

interface ProgressBarProps {
    progress: number; // value 0–100 
    onClose?: () => void;
}

// Implementing progress bar component with optional close button for mobile view
const ProgressBar: React.FC<ProgressBarProps> = ({ progress, onClose }) => {
    const isMobile = useIsMobile();
    return (
        <div className={styles.wrapper}>
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

            {isMobile && (
                <button
                    className={styles.closeButton}
                    aria-label="Close"
                    onClick={onClose}
                >
                    <img
                        src={CloseIcon}
                        alt="Close"
                        className={styles.closeIcon}
                        draggable="false"
                    />
                </button>
            )}
        </div>
    );
};

export default ProgressBar;
