import React from "react";
import styles from "../styles/Header.module.css";
import { FiMenu, FiSearch, FiBell, FiCalendar } from "react-icons/fi";
import { LABELS } from "../constants/constants";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            {/* Left Section */}
            <div className={styles.header__left}>
                <button className={styles.header__menu}>
                    <FiMenu />
                </button>

                <div className={styles.header__search}>
                    <FiSearch className={styles.search__icon} />
                    <input type="text" placeholder={LABELS.search} />
                </div>
            </div>

            {/* Center Navigation */}
            <nav className={styles.header__nav}>
                <a>{LABELS.home}</a>
                <a>{LABELS.services}</a>
            </nav>

            {/* Right Section */}
            <div className={styles.header__right}>
                <button className={styles.icon_btn}>
                    <FiCalendar />
                </button>
                <button className={styles.icon_btn}>
                    <FiBell />
                </button>

                <div className={styles.dark__mode__toggle}>
                    <span>{LABELS.darkMode}</span>
                    <label className={styles.switch}>
                        <input type={styles.checkbox} />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>
        </header>
    );
};

export default Header;
