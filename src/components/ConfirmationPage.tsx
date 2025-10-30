import React from "react";
import styles from "../styles/ConfirmationPage.module.css";
import { useNavigate } from "react-router-dom";
import TickIcon from "../assets/tick.svg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { LABELS } from "../constants/constants";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { clearUserData } from "../redux/action";

const ConfirmationPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    // return to home page and clear the redux store data
    const handleReturnHome = () => {
        dispatch(clearUserData());
        navigate("/");
    };

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <img src={TickIcon} alt="Success" className={styles.tickIcon} />

                <h2 className={styles.title}>{LABELS.confirmationTitle}</h2>

                <p className={styles.description}>
                    {LABELS.confirmationMessage}
                </p>
                <p className={styles.description}>
                    {LABELS.descriptionLabel}
                </p>

                <div className={styles.alertBox}>
                    <div className={styles.alertBoxHeader}>
                        <AiOutlineInfoCircle className={styles.alertBoxIcon} size={18} />
                        <span className={styles.alertBoxTitle}>{LABELS.importantNoteTitle}</span>
                    </div>
                    <p className={styles.alertBoxText}>
                        {LABELS.alertMessage}
                    </p>
                    <p className={styles.alertBoxText}>
                        {LABELS.alertMessage2}
                    </p>
                </div>

                <button onClick={handleReturnHome} className={styles.returnButton}>
                    {LABELS.returnToHome}
                </button>
            </div>
        </div>
    );
};

export default ConfirmationPage;
