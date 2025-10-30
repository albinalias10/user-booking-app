import React, { useEffect, useState } from "react";
import styles from "../styles/AppointmentForm.module.css";
import ProgressBar from "./ProgressBar";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { setAppointmentMode } from "../redux/action";
import { LABELS } from "../constants/constants";

export const AppointmentModeForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
    const appointmentdMode: string = useSelector(
    (state: RootState) => state.appointmentMode
  );
  const [selectedMode, setSelectedMode] = useState<string>(appointmentdMode || "");

  useEffect(() => {
    setSelectedMode(appointmentdMode || "");
}, [appointmentdMode]);

  const handleSelect = (mode: string) => {
    console.log("Selected mode:", mode);
    dispatch(setAppointmentMode(mode));
    setSelectedMode(mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMode) {
      dispatch(setAppointmentMode(selectedMode));
      navigate("/confirmation");
    }
  };
  const onPreviousButtonClick = () => {
       navigate("/");
  }

  const onCloseButtonClick = () => {
    dispatch(setAppointmentMode(""));
  };

  return (
    <div className={styles.page}>
      <ProgressBar progress={60} onClose={onCloseButtonClick}/>

      <section className={styles.container}>
        <h2 className={styles.heading}>
          {LABELS.appointmentFormatLabel}
        </h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Video Option */}
          <div
            className={`${styles.optionBox} ${
              selectedMode === "video" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("video")}
            role="button"
            tabIndex={0}
          >
            <span>{LABELS.video}</span>
          </div>

          {/* Audio Option */}
          <div
            className={`${styles.optionBox} ${
              selectedMode === "audio" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("audio")}
            role="button"
            tabIndex={0}
          >
            <span>{LABELS.audio}</span>
          </div>

          {/* Buttons */}
          <div className={styles.buttonLayout}>
            <FormButton buttonLabel="Previous" buttonType="previous" onClick={onPreviousButtonClick}/>
            <FormButton
              buttonLabel="Continue"
              buttonType="continue"
              disabled={!selectedMode}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AppointmentModeForm;
