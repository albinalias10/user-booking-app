import React from "react";
import styles from "../styles/Button.module.css";
import { LABELS } from "../constants/constants";

interface FormButtonProps {
  buttonLabel: string;
  onClick?: () => void;
  buttonType?: "continue" | "previous" | "backToHome";
  disabled?: boolean;
}
// Implementing resuable form button component
const FormButton: React.FC<FormButtonProps> = ({
  buttonLabel,
  onClick,
  buttonType,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${buttonType === LABELS.continue ? styles.button_continue : styles.button_previous
        }`}
      onClick={onClick}
      type={buttonType === LABELS.continue ? "submit" : "button"}
      disabled={disabled}
    >
      {buttonLabel}
    </button>
  );
};

export default FormButton;
