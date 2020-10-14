import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import SEO from "./SEO.js";
import Logo from "../images/logo.png";
import styles from "./Layout.module.css";

export default function Layout({ children, selectedNavLink }) {
  const handleCopyMyEmailClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "lkaiguang@gmail.com";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    setMyEmailTooltipText("Copied");
  };

  const handleMyEmailMouseLeave = () => {
    setMyEmailTooltipText("Click to copy");
  };

  const [myEmailTooltipText, setMyEmailTooltipText] = useState("Click to copy");

  return (
    <div className={styles.container}>
      <SEO title="Kai Homepage" />

      <header>
        <div className={styles.headerContainer}>
          <div className={styles.headerContent}>
            <Link to="/">
              <img src={Logo} alt="Logo of Kai" />
            </Link>
          </div>
        </div>

        <nav>
          <div className={styles.navContainer}>
            <div className={styles.navContent}>
              <Link
                to="/"
                className={selectedNavLink === "Home" ? styles.selected : null}
              >
                Home
              </Link>
              <Link
                to="/Projects"
                className={
                  selectedNavLink === "Projects" ? styles.selected : null
                }
              >
                Projects
              </Link>
              <Link
                to="/Blog"
                className={selectedNavLink === "Blog" ? styles.selected : null}
              >
                Blog
              </Link>
              <Link
                to="/Contact"
                className={
                  selectedNavLink === "Contact" ? styles.selected : null
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className={styles.mainContainer}>
          <div className={styles.mainContent}>{children}</div>
        </div>
      </main>

      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div>Kaiguang Li</div>
            <div>
              <span
                className={styles.myEmail}
                onClick={handleCopyMyEmailClick}
                onKeyPress={handleCopyMyEmailClick}
                onMouseLeave={handleMyEmailMouseLeave}
                role="button"
                tabIndex="0"
              >
                lkaiguang@gmail.com
                <span className={styles.myEmailTooltipText}>
                  {myEmailTooltipText}
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  selectedNavLink: PropTypes.string.isRequired,
};
