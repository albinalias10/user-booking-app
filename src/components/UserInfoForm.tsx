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
  const [gpName, setGpName] = useState(userInfo.gpName || "");
  const [email, setEmail] = useState(userInfo.email || "");
  const [contactNumber, setContact] = useState(userInfo.contactNumber || "");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({
    gpName: "",
    email: "",
    contactNumber: "",
  });

useEffect(() => {
  setGpName(userInfo.gpName || "");
  setEmail(userInfo.email || "");
  setContact(userInfo.contactNumber || "");
}, [userInfo]);

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
        dispatch(setUserInfo({gpName, email, contactNumber}));
        navigate("/appointment-mode");
    }
  };
    const onPreviousButtonClick = () => {
          setGpName("");
    setEmail("");
    setContact("");
        dispatch(clearUserData());
    };
  return (
    <div className={styles.page}>
      <ProgressBar progress={30}  onClose={onPreviousButtonClick}/>

      <section className={styles.container}>
        <h2 className={styles.heading}>
          {LABELS.userFormHeading}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <div
              className={`${styles.boxWrapper} ${
                errors.gpName ? styles.errorBorder : ""
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
                placeholder="Enter GP Name"
              />
            </div>
            {errors.gpName && (
              <span className={styles.error}>{errors.gpName}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <div
              className={`${styles.boxWrapper} ${
                errors.email ? styles.errorBorder : ""
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
                placeholder="Enter Email"
              />
            </div>
            {errors.email && (
              <span className={styles.error}>{errors.email}</span>
            )}
          </div>

          <div className={styles.inputGroup}>
            <div
              className={`${styles.boxWrapper} ${
                errors.contactNumber ? styles.errorBorder : ""
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
                placeholder="+353 78876 0233"
              />
            </div>
            {errors.contactNumber && (
              <span className={styles.error}>{errors.contactNumber}</span>
            )}
          </div>

          <div className={styles.buttonLayout}>
            <FormButton buttonLabel="Previous" buttonType="previous" onClick={onPreviousButtonClick}/>
            <FormButton
              buttonLabel="Continue"
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
