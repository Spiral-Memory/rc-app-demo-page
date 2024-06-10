import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/header_logo.svg";
import githubLogo from "../../assets/github-mark.svg";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <img src={logo} className={styles.logo} alt="Rocket.Chat" />
      </div>

      <div className={styles.navLinkContainer}>
        <a
          className={styles.navLink}
          href="https://github.com/Spiral-Memory/News-Aggregation"
        >
          <span>
            View Source <img src={githubLogo} alt="github_logo" />
          </span>
        </a>
        <a className={styles.navLink} href="https://github.com/Spiral-Memory">
          About me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
