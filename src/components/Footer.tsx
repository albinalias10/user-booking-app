import React from "react";
import styles from "../styles/Footer.module.css";
import SpectrumLogo from "../assets/spectrum-logo.svg";
import { LABELS } from "../constants/constants";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.footer_text}>
                {LABELS.footerLabel}
                <img
                    src={SpectrumLogo}
                    alt={LABELS.logoAltText}
                    className={styles.logo}
                    loading="lazy"
                />
            </p>
        </footer>
    );
};

export default Footer;
