import React, { useState, useEffect } from "react";
import styles from "../styles/UserInfoForm.module.css";
import FormButton from "./FormButton";
import ProgressBar from "./ProgressBar";
import {
  validateContact,
  validateEmail,
  validateName,
} from "../utils/validations";
import Footer from "./Footer";
import { LABELS } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const UserInfoForm: React.FC = () => {
  const navigate = useNavigate();
  const [gpName, setGpName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [errors, setErrors] = useState({
    gpName: "",
    email: "",
    contact: "",
  });


  useEffect(() => {
    const gpNameError = validateName(gpName);
    const emailError = validateEmail(email);
    const contactError = validateContact(contact);
    setErrors({
      gpName: gpNameError || "",
      email: emailError || "",
      contact: contactError || "",
    });
    setIsFormValid(!gpNameError && !emailError && !contactError);
  }, [gpName, email, contact]);

  const handleSubmit = (e: React.FormEvent) => {
    console.log("22222222222222", isFormValid);
    e.preventDefault();
    if (isFormValid) {
        console.log("111111111111111");
        navigate("/appointment-mode");
    }
  };

  return (
    <div className={styles.page}>
      <ProgressBar progress={30} />

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
                errors.contact ? styles.errorBorder : ""
              }`}
            >
              <label htmlFor="contact" className={styles.boxLabel}>
                {LABELS.contactLabel}
              </label>
              <input
                id="contact"
                type="number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className={styles.boxInput}
                placeholder="+353 78876 0233"
              />
            </div>
            {errors.contact && (
              <span className={styles.error}>{errors.contact}</span>
            )}
          </div>

          <div className={styles.buttonLayout}>
            <FormButton buttonLabel="Previous" buttonType="previous" />
            <FormButton
              buttonLabel="Continue"
              buttonType="continue"
              disabled={!isFormValid}
            />
          </div>

          <Footer />
        </form>
      </section>
    </div>
  );
};

export default UserInfoForm;
