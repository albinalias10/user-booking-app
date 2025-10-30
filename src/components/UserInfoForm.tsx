import React, { useState, useEffect } from "react";
import styles from "../styles/UserInfoForm.module.css";
import FormButton from "./FormButton";
import ProgressBar from "./ProgressBar";
import {
    validateContact,
    validateEmail,
    validateName,
} from "../utils/validations";
import { LABELS } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import type { UserInfoData } from "../redux/actionType";
import { clearUserData, setUserInfo } from "../redux/action";

const UserInfoForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const userInfo: UserInfoData = useSelector(
        (state: RootState) => state.userInfo
    );
    //initialize states for form fields and validation
    const [gpName, setGpName] = useState(userInfo.gpName || "");
    const [email, setEmail] = useState(userInfo.email || "");
    const [contactNumber, setContact] = useState(userInfo.contactNumber || "");
    const [isFormValid, setIsFormValid] = useState(false);
    // state for form errors for showing the error messages
    const [errors, setErrors] = useState({
        gpName: "",
        email: "",
        contactNumber: "",
    });

    //implementing useeffect for getting data from store when navigate to next page and coming back and also for initial render
    useEffect(() => {
        setGpName(userInfo.gpName || "");
        setEmail(userInfo.email || "");
        setContact(userInfo.contactNumber || "");
    }, [userInfo]);

    // validating the form fields on change of input fields, checking at the time of each input value changes time
    useEffect(() => {
        const gpNameError = validateName(gpName);
        const emailError = validateEmail(email);
        const contactError = validateContact(contactNumber);
        setErrors({
            gpName: gpNameError || "",
            email: emailError || "",
            contactNumber: contactError || "",
        });
        setIsFormValid(!gpNameError && !emailError && !contactError);
    }, [gpName, email, contactNumber]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isFormValid) {
            dispatch(setUserInfo({ gpName, email, contactNumber })); // dispatching the user info data to redux store
            navigate("/appointment-mode");
        }
    };
    const onPreviousButtonClick = () => {
        //just give a functionality to previous button that clear the data typed in the form fields and clear the redux store data
        setGpName("");
        setEmail("");
        setContact("");
        dispatch(clearUserData());
    };
    return (
        <div className={styles.page}>
            <ProgressBar progress={30} onClose={onPreviousButtonClick} />

            <section className={styles.container}>
                <h2 className={styles.heading}>
                    {LABELS.userFormHeading}
                </h2>

                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.inputGroup}>
                        <div
                            className={`${styles.boxWrapper} ${errors.gpName ? styles.errorBorder : ""
                                }`}
                        >
                            <label htmlFor="gpName" className={styles.boxLabel}>
                                {LABELS.gpNameLabel}
                            </label>
                            <input
                                id="gpName"
                                type="text"
                                value={gpName}
                                onChange={(e) => setGpName(e.target.value)}
                                className={styles.boxInput}
                                placeholder={LABELS.gpNamePlaceholder}
                            />
                        </div>
                        {errors.gpName && (
                            <span className={styles.error}>{errors.gpName}</span>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <div
                            className={`${styles.boxWrapper} ${errors.email ? styles.errorBorder : ""
                                }`}
                        >
                            <label htmlFor="email" className={styles.boxLabel}>
                                {LABELS.emailLabel}
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.boxInput}
                                placeholder={LABELS.emailPlaceholder}
                            />
                        </div>
                        {errors.email && (
                            <span className={styles.error}>{errors.email}</span>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <div
                            className={`${styles.boxWrapper} ${errors.contactNumber ? styles.errorBorder : ""
                                }`}
                        >
                            <label htmlFor="contactNumber" className={styles.boxLabel}>
                                {LABELS.contactLabel}
                            </label>
                            <input
                                id="contactNumber"
                                type="number"
                                value={contactNumber}
                                onChange={(e) => setContact(e.target.value)}
                                className={styles.boxInput}
                                placeholder={LABELS.contactPlaceholder}
                            />
                        </div>
                        {errors.contactNumber && (
                            <span className={styles.error}>{errors.contactNumber}</span>
                        )}
                    </div>

                    <div className={styles.buttonLayout}>
                        <FormButton buttonLabel={LABELS.previousButtonLabel} buttonType="previous" onClick={onPreviousButtonClick} />
                        <FormButton
                            buttonLabel={LABELS.continueButtonLabel}
                            buttonType="continue"
                            disabled={!isFormValid}
                        />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UserInfoForm;
