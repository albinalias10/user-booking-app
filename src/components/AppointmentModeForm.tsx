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
  //state for selected mode as audio or video
  const [selectedMode, setSelectedMode] = useState<string>(appointmentdMode || "");

  // implement useeffect for getting the redux state when click on previous button and coming back and also for initial render
  useEffect(() => {
    setSelectedMode(appointmentdMode || "");
  }, [appointmentdMode]);

  const handleSelect = (mode: string) => {
    dispatch(setAppointmentMode(mode));
    setSelectedMode(mode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedMode) {
      dispatch(setAppointmentMode(selectedMode));
      navigate("/confirmation"); // navigate to confirmation page on continue
    }
  };
  const onPreviousButtonClick = () => { // navigate to user info form on previous button click
    navigate("/");
  }

  const onCloseButtonClick = () => {
    dispatch(setAppointmentMode("")); //if it is mobile design, clearing the appointment mode selected value on close button click
  };

  return (
    <div className={styles.page}>
      <ProgressBar progress={60} onClose={onCloseButtonClick} />
      <section className={styles.container}>
        <h2 className={styles.heading}>
          {LABELS.appointmentFormatLabel}
        </h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div
            className={`${styles.optionBox} ${selectedMode === LABELS.videoType ? styles.selected : ""
              }`}
            onClick={() => handleSelect(LABELS.videoType)}
            role="button"
            tabIndex={0}
          >
            <span>{LABELS.video}</span>
          </div>
          <div
            className={`${styles.optionBox} ${selectedMode === LABELS.audioType ? styles.selected : ""
              }`}
            onClick={() => handleSelect(LABELS.audioType)}
            role="button"
            tabIndex={0}
          >
            <span>{LABELS.audio}</span>
          </div>
          <div className={styles.buttonLayout}>
            <FormButton buttonLabel={LABELS.previousButtonLabel} buttonType="previous" onClick={onPreviousButtonClick} />
            <FormButton
              buttonLabel={LABELS.continueButtonLabel}
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
