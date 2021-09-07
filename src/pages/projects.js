import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import * as styles from './Projects.module.css'

export default function Projects() {
  return (
    <Layout selectedNavLink="projects">
      <SEO title="Projects" description="Discover what projects Kai has worked on." />
      <div className={styles.projectContainer}>
        <a
          href="https://apps.apple.com/ca/app/clean-restaurant/id1551890360"
          target="_blank"
          rel="noreferrer"
          className={styles.projectName}
        >
          Clean Restaurant (iOS App)
        </a>
        <p>
          <a href="https://apps.apple.com/ca/app/clean-restaurant/id1551890360" target="_blank" rel="noreferrer">
            try it from the iOS App Store
          </a>
        </p>
        <p>
          <strong>{`Keep a record of your business's cleaning history.`}</strong>
        </p>
        <span>Technology used:</span>
        <ul>
          <li>React Native, Expo</li>
          <li>SQLite</li>
        </ul>
      </div>

      <div className={styles.projectContainer}>
        <a href="https://yiyiyili.com/" target="_blank" rel="noreferrer" className={styles.projectName}>
          Yi Embroidery
        </a>
        <p>
          <a href="https://yiyiyili.com/" target="_blank" rel="noreferrer">
            yiyiyili.com
          </a>
        </p>
        <p>
          <strong>Online store for some awesome embroidery arts by Yi Li.</strong>
        </p>
        <span>Technology used:</span>
        <ul>
          <li>Gatsby</li>
          <li>AWS S3 and CloudFront</li>
          <li>
            AWS Serverless Application Model (Lambda <em>Node.js</em>, DynamoDB, API Gateway)
          </li>
          <li>Stripe</li>
          <li>
            <a href="https://github.com/Kaiguang/yiyiyili.com-gatsby" target="_blank" rel="noreferrer">
              GitHub: Kaiguang / yiyiyili.com-gatsby
            </a>
          </li>
          <li>
            <a href="https://github.com/Kaiguang/yiyiyili.com-serverless" target="_blank" rel="noreferrer">
              GitHub: Kaiguang / yiyiyili.com-serverless
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.projectContainer}>
        <a href="https://housework.likaiguang.com/" target="_blank" rel="noreferrer" className={styles.projectName}>
          Share Housework
        </a>
        <p>
          <a href="https://housework.likaiguang.com/" target="_blank" rel="noreferrer">
            housework.likaiguang.com
          </a>
        </p>
        <p>
          <strong>
            {`A web app to track the housework performed by my `}
            <s>
              <span className={styles.strikeThrough}>roommate</span>
            </s>
            {` wife and me. If she does a house chore, she gets paid by me. If I do
            some housework, I don't need to pay her, which encourages me to do
            more.`}
          </strong>
        </p>
        <span>Technology used:</span>
        <ul>
          <li>React</li>
          <li>Recoil</li>
          <li>Material-UI</li>
          <li>AWS Amplify</li>
          <li>
            AWS Serverless Application Model (Lambda <em>Node.js</em>, DynamoDB, API Gateway)
          </li>
          <li>AWS Cognito, IAM, and more...</li>
          <li>
            <a href="https://github.com/Kaiguang/share-housework-web" target="_blank" rel="noreferrer">
              GitHub: Kaiguang / share-housework-web
            </a>
          </li>
          <li>
            <a href="https://github.com/Kaiguang/share-housework-aws" target="_blank" rel="noreferrer">
              GitHub: Kaiguang / share-housework-aws
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.projectContainer}>
        <a href="https://renyu.li/" target="_blank" rel="noreferrer" className={styles.projectName}>
          余事
        </a>
        <p>
          <a href="https://renyu.li/" target="_blank" rel="noreferrer">
            renyu.li
          </a>
        </p>
        <p>
          <strong>A Chinese poem website, poems are written by Renyu Li.</strong>
        </p>
        <span>Technology used:</span>
        <ul>
          <li>Gatsby</li>
          <li>AWS S3</li>
          <li>AWS CloudFront</li>
          <li>AWS Route 53</li>
          <li>
            <a href="https://github.com/Kaiguang/renyu-li" target="_blank" rel="noreferrer">
              GitHub: Kaiguang / renyu-li
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
