import React, { useState } from "react";
import Layout from "../components/Layout.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const [myNameTooltipText, setMyNameTooltipText] = useState("Click to copy");

  const handleCopyMyNameClick = () => {
    const textArea = document.createElement("textarea");
    textArea.value = "Kaiguang Li";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();
    setMyNameTooltipText("Copied");
  };

  const handleMyNameMouseLeave = () => {
    setMyNameTooltipText("Click to copy");
  };

  const [myEmailTooltipText, setMyEmailTooltipText] = useState("Click to copy");

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

  return (
    <Layout selectedNavLink="Contact">
      <div className={styles.contactContainer}>
        <code>{`---`}</code>
        <code>
          Name:{" "}
          <span
            className={styles.hoverAndTooltip}
            onClick={handleCopyMyNameClick}
            onKeyPress={handleCopyMyNameClick}
            onMouseLeave={handleMyNameMouseLeave}
            role="button"
            tabIndex="0"
          >
            Kaiguang Li
            <span className={styles.hoverAndTooltipTooltipText}>
              {myNameTooltipText}
            </span>
          </span>
        </code>
        <code>
          Email:{" "}
          <span
            className={styles.hoverAndTooltip}
            onClick={handleCopyMyEmailClick}
            onKeyPress={handleCopyMyEmailClick}
            onMouseLeave={handleMyEmailMouseLeave}
            role="button"
            tabIndex="0"
          >
            lkaiguang@gmail.com
            <span className={styles.hoverAndTooltipTooltipText}>
              {myEmailTooltipText}
            </span>
          </span>
        </code>
        <code>
          GitHub:{" "}
          <a
            href="https://github.com/Kaiguang"
            target="_blank"
            rel="noreferrer"
          >
            Kaiguang
          </a>
        </code>
        <code>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/kaiguang-li/"
            target="_blank"
            rel="noreferrer"
          >
            kaiguang-li
          </a>
        </code>
        <code>
          Twitter:{" "}
          <a
            href="https://twitter.com/KaiguangLi"
            target="_blank"
            rel="noreferrer"
          >
            @KaiguangLi
          </a>
        </code>
        <code>{`---`}</code>
        <div className={styles.yawd}>
          <p>kai.yawd</p>
          <p>Yet Another Web Developer</p>
        </div>
      </div>
    </Layout>
  );
}
