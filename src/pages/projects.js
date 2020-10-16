import React from "react";
import Layout from "../components/Layout.js";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Layout selectedNavLink="projects">
      <div className={styles.projectContainer}>
        <a
          href="https://housework.likaiguang.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.projectName}
        >
          Share Housework
        </a>
        <p>
          A web app to track the housework performed by my{" "}
          <s>
            <span className={styles.strikeThrough}>roommate</span>
          </s>{" "}
          wife and me. If she does a house chore, she gets paid by me. If I do
          some housework, I don't need to pay her, which encourages me to do
          more.
        </p>
        <span>Technology used:</span>
        <ul>
          <li>React</li>
          <li>Recoil</li>
          <li>Material-UI</li>
          <li>AWS Amplify</li>
          <li>
            AWS Serverless Application Model (Lambda <em>Node.js</em>, DynamoDB,
            API Gateway)
          </li>
          <li>AWS Cognito, IAM, and more...</li>
          <li>
            <a
              href="https://github.com/Kaiguang/share-housework-web"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Kaiguang / share-housework-web
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Kaiguang/share-housework-aws"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Kaiguang / share-housework-aws
            </a>
          </li>
        </ul>
      </div>

      {/* <hr /> */}

      <div className={styles.projectContainer}>
        <a
          href="https://renyu.li/"
          target="_blank"
          rel="noreferrer"
          className={styles.projectName}
        >
          余事
        </a>
        <p>A Chinese poem website, poems are written by Renyu Li.</p>
        <span>Technology used:</span>
        <ul>
          <li>Gatsby</li>
          <li>AWS S3</li>
          <li>AWS CloudFront</li>
          <li>AWS Route 53</li>
          <li>
            <a
              href="https://github.com/Kaiguang/renyu-li"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: Kaiguang / renyu-li
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
